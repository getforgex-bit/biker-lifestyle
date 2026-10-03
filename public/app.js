/* BIKER LIFESTYLE // comportamiento: Quick Dispatch Drawer, carrito, filtros, checkout WhatsApp */
/* Los productos agregados desde Scan-bar llegan por scanbar.js y se insertan como tarjetas antes de leer el catalogo. */
(window.ScanbarWeb ? window.ScanbarWeb.iniciar : (arrancar) => arrancar([]))((extras) => {
  "use strict";

  /* ===== Configuracion ===== */
  const CONFIG = Object.assign({
    // PENDIENTE: numero oficial de WhatsApp, solo digitos con lada de pais (ej. "5219671234567").
    whatsappNumber: "NUMERO_OFICIAL",
    // Costo de envio nacional en MXN. null = "a cotizar" (no se suma al total).
    shippingMXN: null,
    storageKey: "bl-cart-v2",
    maxQty: 99,
  }, window.BL_CONFIG); // opcional: define window.BL_CONFIG antes de cargar app.js para sobrescribir

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const fmt = (n) => n.toLocaleString("en-US");
  const pad2 = (n) => String(n).padStart(2, "0");
  const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ===== Productos de Scan-bar: tarjetas con el mismo marcado que las del HTML =====
     Categoria en Scan-bar: gorras, cascos o accesorios. En gorras, atributo "linea" (deportiva, casual, biker)
     para los filtros. Las variantes son las tallas (S, M, L, XL): el SKU de cada talla es SKU-TALLA. */
  const urlSegura = window.ScanbarWeb ? window.ScanbarWeb.urlSegura : () => "";
  const grids = { gorras: "#gorras .product-grid", cascos: ".product-grid--helmets", accesorios: "#accesorios .product-grid" };
  extras.forEach((x) => {
    const grid = grids[x.category] && $(grids[x.category]);
    if (!grid || $(`[data-add][data-sku="${CSS.escape(x.sku)}"]`)) { console.warn(`Scan-bar: ${x.sku} se omite (categoria: gorras, cascos o accesorios)`); return; }
    const sized = x.variants.some((v) => v.label);
    const price = Math.round(x.priceCents) / 100;
    const name = esc(x.name), sku = esc(x.sku);
    const line = ["deportiva", "casual", "biker"].includes(x.attrs && x.attrs.linea) ? ` data-line="${x.attrs.linea}"` : "";
    // Sin foto propia se usa la de otra tarjeta de la misma seccion (mantiene la reticula y la CSP).
    const img = urlSegura(x.imageUrl) || ($(".card-media img", grid) || { getAttribute: () => "" }).getAttribute("src");
    const sizes = sized ? `<fieldset class="size"><legend class="label">Talla</legend><div class="size-opts">${x.variants.map((v) =>
      `<label class="size-opt"><input type="radio" name="size-${sku}" value="${esc(v.label || "")}"${v.inStock ? "" : " disabled"}><span>${esc(v.label || "")}</span></label>`).join("")}</div><p class="size-error" hidden>Elige tu talla para agregar.</p></fieldset>` : "";
    grid.insertAdjacentHTML("beforeend", `<article class="card"${line}>
      <div class="card-bar"><span>${sku}</span><span>CHIAPAS MEX-190</span></div>
      <div class="card-media">${img ? `<img src="${esc(img)}" alt="${name}" width="600" height="600" loading="lazy">` : ""}<span class="price-badge">$${fmt(price)} <small>MXN</small></span></div>
      <div class="card-body"><h3 class="display">${name}</h3>${x.description ? `<p>${esc(x.description)}</p>` : ""}</div>
      <div class="card-foot">${sizes}<button class="btn btn--red btn--block mech add-btn" type="button" data-add data-sku="${sku}" data-name="${name}" data-price="${price}"${sized ? ' data-sized="true"' : ""}>Agregar<span class="sr-only"> ${name} al carrito</span></button></div>
    </article>`);
  });

  /* ===== Catalogo (se lee del DOM: una sola fuente de verdad) ===== */
  const catalog = new Map();
  $$("[data-add]").forEach((btn) => {
    const { sku, name, price, sized } = btn.dataset;
    catalog.set(sku, { sku, name, price: Number(price), sized: sized === "true" });
  });

  /* ===== Estado del carrito: clave "sku" o "sku|talla" ===== */
  const cart = new Map(); // key -> qty
  const keyOf = (sku, size) => (size ? `${sku}|${size}` : sku);
  const parseKey = (key) => { const [sku, size] = key.split("|"); return { sku, size: size || "" }; };
  let removed = null; // { key, qty } para deshacer

  const load = () => {
    try {
      JSON.parse(localStorage.getItem(CONFIG.storageKey) || "[]").forEach(([key, qty]) => {
        const { sku, size } = parseKey(String(key));
        const p = catalog.get(sku);
        if (p && Number.isInteger(qty) && qty > 0 && (p.sized ? size : !size)) cart.set(key, Math.min(qty, CONFIG.maxQty));
      });
    } catch (_) { /* almacenamiento no disponible: el carrito vive en memoria */ }
  };
  const save = () => {
    try { localStorage.setItem(CONFIG.storageKey, JSON.stringify(Array.from(cart))); } catch (_) {}
  };

  const count = () => Array.from(cart.values()).reduce((a, b) => a + b, 0);
  const subtotal = () => Array.from(cart).reduce((sum, [key, qty]) => sum + catalog.get(parseKey(key).sku).price * qty, 0);
  const lineName = (key) => { const { sku, size } = parseKey(key); const p = catalog.get(sku); return size ? `${p.name} (talla ${size})` : p.name; };

  /* ===== Elementos ===== */
  const app = $("#app");
  const drawer = $("#drawer");
  const scrim = $("#scrim");
  const title = $("#drawer-title");
  const panelNav = $("#panel-nav");
  const panelCart = $("#panel-cart");
  const foot = $("#cart-foot");
  const linesEl = $("#cart-lines");
  const emptyEl = $("#cart-empty");
  const undoEl = $("#undo");
  const live = $("#live");
  const badge = $("#cart-count");
  const openCartBtns = $$("[data-open-cart]");
  const menuBtns = $$("[data-open-menu]");
  const closeBtn = $("#drawer-close");
  const checkout = $("#checkout");
  const checkoutLabel = $("#checkout-label");
  const checkoutIcon = $("#checkout-icon");
  const waWarn = $("#wa-warn");
  const waNote = $("#wa-note");
  const footWa = $("#footer-wa");
  const dest = $("#dest");

  const announce = (msg) => {
    live.textContent = "";
    // se vacia primero para que el lector de pantalla anuncie mensajes repetidos
    window.setTimeout(() => { live.textContent = msg; }, 30);
  };

  /* ===== Mensaje y checkout ===== */
  const message = () => {
    const parts = Array.from(cart).map(([key, qty]) => {
      const { sku, size } = parseKey(key);
      const p = catalog.get(sku);
      return `${qty}x ${p.name}${size ? `, Talla ${size}` : ""} [${fmt(p.price * qty)} MXN]`;
    });
    const where = dest.value.trim() || "por confirmar";
    return `BIKER LIFESTYLE 2025 // Solicitud de Pedido: ${parts.join(" + ")}. Destino: ${where}.`;
  };

  const waReady = () => /^\d{10,15}$/.test(CONFIG.whatsappNumber);

  let copyBusy = false;
  const copyOrder = async () => {
    const text = message();
    let ok = false;
    try { await navigator.clipboard.writeText(text); ok = true; } catch (_) {
      const ta = document.createElement("textarea");
      ta.value = text; ta.setAttribute("readonly", ""); ta.className = "sr-only";
      document.body.appendChild(ta); ta.select();
      try { ok = document.execCommand("copy"); } catch (_) {}
      ta.remove();
    }
    announce(ok ? "Pedido copiado al portapapeles." : "No se pudo copiar. Escribe tu pedido manualmente.");
    if (ok) {
      copyBusy = true;
      checkoutLabel.textContent = "Pedido copiado";
      window.setTimeout(() => { copyBusy = false; checkoutLabel.textContent = "Copiar pedido"; }, 1600);
    }
  };

  /* ===== Render ===== */
  const render = () => {
    const n = count();
    badge.textContent = String(n);
    badge.hidden = n === 0;
    openCartBtns.forEach((b) => b.setAttribute("aria-label", `Abrir carrito, ${n} ${n === 1 ? "artículo" : "artículos"}`));

    const empty = cart.size === 0;
    emptyEl.hidden = !empty || !!removed;
    foot.hidden = empty || panelCart.hidden;

    undoEl.hidden = !removed;
    if (removed) $("#undo-text").textContent = `${lineName(removed.key)} quitado.`;

    linesEl.innerHTML = Array.from(cart).map(([key, qty]) => {
      const { sku, size } = parseKey(key);
      const p = catalog.get(sku);
      const nm = esc(lineName(key));
      const k = esc(key);
      return `<li class="cart-line">
        <div class="cart-line-top">
          <div><h3 class="display">${esc(p.name)}</h3><span class="label sku">${esc(sku)}${size ? ` // TALLA ${esc(size)}` : ""}</span></div>
          <span class="cart-line-price">${fmt(p.price * qty)} MXN</span>
        </div>
        <div class="cart-line-ctrl">
          <div class="qty" role="group" aria-label="Cantidad de ${nm}">
            <button type="button" data-act="dec" data-key="${k}" aria-label="Reducir cantidad de ${nm}" ${qty === 1 ? 'aria-disabled="true"' : ""}><i class="ph-bold ph-minus" aria-hidden="true"></i></button>
            <output aria-label="Cantidad">${pad2(qty)}</output>
            <button type="button" data-act="inc" data-key="${k}" aria-label="Aumentar cantidad de ${nm}" ${qty >= CONFIG.maxQty ? 'aria-disabled="true"' : ""}><i class="ph-bold ph-plus" aria-hidden="true"></i></button>
          </div>
          <button type="button" class="link-btn" data-act="rm" data-key="${k}" aria-label="Quitar ${nm} del carrito">Quitar</button>
        </div>
      </li>`;
    }).join("");

    const sub = subtotal();
    const ship = CONFIG.shippingMXN;
    $("#t-sub").textContent = `${fmt(sub)} MXN`;
    $("#t-ship").textContent = ship == null ? "A COTIZAR" : ship === 0 ? "GRATIS" : `${fmt(ship)} MXN`;
    $("#t-total").textContent = `${fmt(sub + (ship || 0))} MXN`;
    $("#dock-total").textContent = n ? `${n} // ${fmt(sub)} MXN` : "Vacío";

    const ready = waReady();
    if (!empty) {
      checkout.setAttribute("href", ready ? `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message())}` : "#");
      if (ready) checkout.setAttribute("target", "_blank"); else checkout.removeAttribute("target");
    }
    checkoutIcon.className = ready ? "ph-bold ph-whatsapp-logo" : "ph-bold ph-copy";
    if (!copyBusy) checkoutLabel.textContent = ready ? "Pedir por WhatsApp" : "Copiar pedido";
    waWarn.classList.toggle("is-visible", !ready);
    waNote.hidden = !ready;
    if (footWa) {
      footWa.hidden = !ready;
      if (ready) footWa.setAttribute("href", `https://wa.me/${CONFIG.whatsappNumber}`);
    }
  };

  const change = (key, delta, focusSel) => {
    removed = null;
    const next = (cart.get(key) || 0) + delta;
    if (next < 1) cart.delete(key); else cart.set(key, Math.min(next, CONFIG.maxQty));
    save(); render();
    if (focusSel) ($(focusSel, linesEl) || closeBtn).focus();
  };

  linesEl.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-act]");
    if (!btn || btn.getAttribute("aria-disabled") === "true") return;
    const { act, key } = btn.dataset;
    const name = lineName(key);
    const sel = (a) => `[data-act="${a}"][data-key="${CSS.escape(key)}"]`;
    if (act === "inc") { change(key, 1, sel("inc")); announce(`${name}: cantidad ${cart.get(key)}`); }
    if (act === "dec") { change(key, -1, sel("dec")); announce(`${name}: cantidad ${cart.get(key)}`); }
    if (act === "rm") {
      const qty = cart.get(key);
      change(key, -CONFIG.maxQty, null);
      removed = { key, qty };
      render();
      announce(`${name} quitado del carrito. Puedes deshacer.`);
      $("#undo-btn").focus();
    }
  });

  $("#undo-btn").addEventListener("click", () => {
    if (!removed) return;
    cart.set(removed.key, removed.qty);
    const name = lineName(removed.key);
    removed = null;
    save(); render();
    announce(`${name} restaurado.`);
    (linesEl.querySelector("button") || closeBtn).focus();
  });

  /* ===== Agregar al carrito (talla obligatoria en cascos) ===== */
  $$("[data-add]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const { sku, name } = btn.dataset;
      const p = catalog.get(sku);
      const card = btn.closest(".card");
      let size = "";
      if (p.sized) {
        const picked = $('input[type="radio"]:checked', card);
        const err = $(".size-error", card);
        if (!picked) {
          err.hidden = false;
          $$('input[type="radio"]', card).forEach((r) => r.setAttribute("aria-invalid", "true"));
          $('input[type="radio"]', card).focus();
          announce(`Elige tu talla para agregar ${name}.`);
          return;
        }
        err.hidden = true;
        size = picked.value;
      }
      removed = null;
      const key = keyOf(sku, size);
      cart.set(key, Math.min((cart.get(key) || 0) + 1, CONFIG.maxQty));
      save(); render();
      badge.classList.remove("is-bump"); void badge.offsetWidth; badge.classList.add("is-bump");
      announce(`${name}${size ? `, talla ${size},` : ""} agregado. ${count()} en el carrito.`);
      const label = btn.firstChild;
      const original = label.textContent;
      btn.classList.add("is-added");
      label.textContent = "Agregado";
      window.setTimeout(() => { btn.classList.remove("is-added"); label.textContent = original; }, 1400);
    });
  });
  $$(".size input[type='radio']").forEach((r) => r.addEventListener("change", () => {
    const card = r.closest(".card");
    $(".size-error", card).hidden = true;
    $$('input[type="radio"]', card).forEach((x) => x.removeAttribute("aria-invalid"));
  }));

  /* ===== Drawer: foco atrapado, Escape, retorno de foco, aria-modal ===== */
  let lastTrigger = null;
  const isOpen = () => drawer.classList.contains("is-open");

  const show = (panel) => {
    const isCart = panel === "cart";
    panelCart.hidden = !isCart;
    panelNav.hidden = isCart;
    title.textContent = isCart ? "DESPACHO RÁPIDO // ROAD CART" : "DESPACHO RÁPIDO // RUTAS";
  };

  const focusables = () => $$('a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])', drawer)
    .filter((el) => !el.closest("[hidden]") && el.offsetParent !== null);

  const open = (panel, trigger) => {
    lastTrigger = trigger || document.activeElement;
    show(panel);
    render();
    drawer.classList.add("is-open");
    scrim.classList.add("is-open");
    document.body.classList.add("is-locked");
    app.setAttribute("inert", "");
    app.setAttribute("aria-hidden", "true");
    menuBtns.forEach((m) => m.setAttribute("aria-expanded", "true"));
    closeBtn.focus();
  };

  const close = () => {
    if (!isOpen()) return;
    removed = null;
    drawer.classList.remove("is-open");
    scrim.classList.remove("is-open");
    document.body.classList.remove("is-locked");
    app.removeAttribute("inert");
    app.removeAttribute("aria-hidden");
    menuBtns.forEach((m) => m.setAttribute("aria-expanded", "false"));
    if (lastTrigger && document.contains(lastTrigger)) lastTrigger.focus();
  };

  openCartBtns.forEach((b) => b.addEventListener("click", () => open("cart", b)));
  menuBtns.forEach((m) => m.addEventListener("click", () => open("nav", m)));
  closeBtn.addEventListener("click", close);
  scrim.addEventListener("click", close);

  $("#drawer-to-cart").addEventListener("click", () => { show("cart"); render(); closeBtn.focus(); });

  $$("#panel-nav a, #cart-empty a").forEach((a) => a.addEventListener("click", () => {
    // cerrar sin devolver el foco al boton: el usuario navega a una seccion
    lastTrigger = null;
    close();
  }));

  drawer.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { e.stopPropagation(); close(); return; }
    if (e.key !== "Tab") return;
    const items = focusables();
    if (!items.length) { e.preventDefault(); drawer.focus(); return; }
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && (document.activeElement === first || document.activeElement === drawer)) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && isOpen()) close(); });

  window.matchMedia("(min-width: 1024px)").addEventListener("change", (e) => {
    if (e.matches && isOpen() && !panelNav.hidden) close();
  });

  /* ===== Checkout: WhatsApp si hay numero; si no, copiar pedido ===== */
  dest.addEventListener("input", () => { if (cart.size) render(); });
  checkout.addEventListener("click", (e) => {
    if (!waReady()) {
      e.preventDefault();
      console.warn("BIKER LIFESTYLE: define CONFIG.whatsappNumber en app.js (solo dígitos con lada de país) para activar el checkout por WhatsApp.");
      copyOrder();
    }
  });

  /* ===== Filtros (mechanical switches con aria-pressed) ===== */
  const filters = $$(".filter");
  const cards = $$("[data-line]");
  filters.forEach((f) => f.addEventListener("click", () => {
    filters.forEach((x) => x.setAttribute("aria-pressed", String(x === f)));
    const line = f.dataset.filter;
    let shown = 0;
    cards.forEach((c) => {
      const match = line === "all" || c.dataset.line === line;
      c.hidden = !match;
      if (match) shown += 1;
    });
    announce(`Mostrando ${shown} ${shown === 1 ? "gorra" : "gorras"}`);
  }));

  /* ===== Marquesina: pausa (WCAG 2.2.2) ===== */
  const marquee = $(".marquee");
  const mToggle = $("#marquee-toggle");
  mToggle.addEventListener("click", () => {
    const paused = marquee.classList.toggle("is-paused");
    mToggle.setAttribute("aria-pressed", String(paused));
    mToggle.setAttribute("aria-label", paused ? "Reanudar avisos en movimiento" : "Pausar avisos en movimiento");
    $("i", mToggle).className = paused ? "ph-bold ph-play" : "ph-bold ph-pause";
  });

  /* ===== Navegacion: seccion activa (IntersectionObserver, sin listeners de scroll) ===== */
  const navLinks = $$(".main-nav a");
  const byId = new Map(navLinks.map((a) => [a.getAttribute("href").slice(1), a]));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        navLinks.forEach((a) => a.removeAttribute("aria-current"));
        const link = byId.get(en.target.id);
        if (link) link.setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    byId.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
  }

  load();
  render();
});
