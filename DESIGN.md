---
name: Apex Moto Neobrutalism
description: "Sistema de diseño de BIKER LIFESTYLE (Road & Speed Division), extraído del código real: public/styles.css, public/index.html y public/app.js."
colors:
  asphalt-pure: "#0A0A0A"
  asphalt-elevated: "#131313"
  asphalt-recessed: "#1C1B1B"
  mechanical-hard: "#262626"
  mechanical-light: "#353534"
  chrome-primary: "#F9F9FB"
  chrome-secondary: "#E5E2E1"
  chrome-muted: "#A8A8AD"
  redline-pure: "#E60000"
  redline-glow: "#FF2A2A"
  ink: "#000000"
typography:
  display-hero:
    fontFamily: "Anton, Impact, sans-serif"
    fontSize: "clamp(3rem, 6.4vw, 5.25rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  display-xl:
    fontFamily: "Anton, Impact, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  display-sm:
    fontFamily: "Anton, Impact, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  body-card:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "22px"
  button:
    fontFamily: "Space Grotesk, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.02em"
  label:
    fontFamily: "Space Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: "16px"
    letterSpacing: "0.1em"
  label-bar:
    fontFamily: "Space Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.1em"
  mono-ui:
    fontFamily: "Space Mono, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.08em"
  quote:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  none: "0px"
spacing:
  s1: "8px"
  s2: "16px"
  s3: "24px"
  s4: "32px"
  s6: "48px"
  s8: "64px"
  s12: "96px"
  gutter: "24px"
  margin: "48px"
components:
  button-red:
    backgroundColor: "{colors.redline-pure}"
    textColor: "{colors.chrome-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
    height: "48px"
  button-chrome:
    backgroundColor: "{colors.chrome-primary}"
    textColor: "{colors.asphalt-pure}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
    height: "48px"
  filter:
    backgroundColor: "{colors.asphalt-elevated}"
    textColor: "{colors.chrome-primary}"
    typography: "{typography.mono-ui}"
    rounded: "{rounded.none}"
    padding: "8px 16px"
    height: "44px"
  filter-pressed:
    backgroundColor: "{colors.chrome-primary}"
    textColor: "{colors.asphalt-pure}"
  card-product:
    backgroundColor: "{colors.asphalt-elevated}"
    textColor: "{colors.chrome-secondary}"
    typography: "{typography.body-card}"
    rounded: "{rounded.none}"
    padding: "16px"
  card-bar:
    backgroundColor: "{colors.asphalt-pure}"
    textColor: "{colors.chrome-secondary}"
    typography: "{typography.label-bar}"
    padding: "8px 16px"
  price-badge:
    backgroundColor: "{colors.chrome-primary}"
    textColor: "{colors.asphalt-pure}"
    typography: "{typography.mono-ui}"
    rounded: "{rounded.none}"
    padding: "6px 8px"
  input:
    backgroundColor: "{colors.asphalt-pure}"
    textColor: "{colors.chrome-primary}"
    typography: "{typography.mono-ui}"
    rounded: "{rounded.none}"
    padding: "10px 16px"
    height: "48px"
  chip:
    backgroundColor: "{colors.asphalt-pure}"
    textColor: "{colors.chrome-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "2px 8px"
  manifest:
    backgroundColor: "{colors.asphalt-elevated}"
    textColor: "{colors.chrome-primary}"
    typography: "{typography.quote}"
    rounded: "{rounded.none}"
    padding: "24px"
  drawer:
    backgroundColor: "{colors.asphalt-pure}"
    textColor: "{colors.chrome-primary}"
    rounded: "{rounded.none}"
    width: "440px"
---

# Design System: Apex Moto Neobrutalism

## Overview

**Creative North Star: "El Taller de Pista"** (nombre propuesto a partir del brief; falta confirmarlo con el cliente).

Un banco de taller a pie de curva: asfalto oscuro, cromo, una sola línea roja y piezas que se sienten atornilladas, no flotando. El sistema nace de la regla 70-20-10 del brief: 70 % neobrutalismo radical (ángulos de 90 grados, sombras duras sin blur, bordes gruesos, interacción de interruptor físico), 20 % editorial de motorsport (fichas técnicas tipo plano, retícula ortogonal, serif itálica solo para citas) y 10 % aire funcional (múltiplos de 8 px, contraste alto, lectura técnica inmediata).

La densidad es media. Cada superficie es una caja con borde; la profundidad es un desplazamiento sólido, nunca una luz difusa. El rojo `#E60000` es la única voz de acento y aparece como relleno, borde o sombra, casi nunca como texto pequeño.

**Key Characteristics:**
- Radio 0 y cero blur en todo el sistema, verificado sobre estilos calculados.
- Un motor único de interacción mecánica para botones, filtros e inputs.
- Cuatro familias con roles cerrados: Anton (carteles), Space Grotesk (interfaz), Space Mono (telemetría), Source Serif 4 itálica (citas).
- Solo tema oscuro, por mandato del brief (`color-scheme: dark`).
- Texto sobre rojo siempre grande (19.2 px bold o más) para cumplir contraste.

## Colors

Una paleta de tres superficies de asfalto, tres tonos de cromo y un acento rojo. Sin grises fuera de estos tokens.

### Primary
- **Redline** (`#E60000`, `--accent-redline-pure`): relleno de botones "Agregar" y "Ver catálogo", marquesina, bloque rojo del bento, última parada de la ruta, y color de borde o sombra de acento (filtro activo, talla elegida, foco de campo, tarjeta destacada). Nunca como texto sobre asfalto (4.11:1).
- **Redline Glow** (`#FF2A2A`, `--accent-redline-glow`): único rojo permitido como color de texto, y solo en titulares grandes ("nuestra ruta", 5.30:1 sobre `#0A0A0A`), iconos de la lista de características y borde de estado inválido.

### Neutral
- **Asphalt Pure** (`#0A0A0A`, `--surface-asphalt-pure`): lienzo principal, barras superiores de tarjeta, fondo del drawer, del dock y de los campos.
- **Asphalt Elevated** (`#131313`, `--surface-asphalt-elevated`): tarjetas, secciones alternas, hoja técnica, manifiesto, pie del drawer.
- **Asphalt Recessed** (`#1C1B1B`, `--surface-asphalt-recessed`): fondo de imágenes de producto, botones de icono, etiqueta de coordenadas, botón `-` deshabilitado.
- **Mechanical Hard** (`#262626`, `--border-mechanical-hard`): borde de 2 px de tarjetas y marcos; divisores de sección de 4 px.
- **Mechanical Light** (`#353534`, `--border-mechanical-light`): retícula de 1 px de la hoja técnica, líneas punteadas del ticket, bordes de botones de icono y tallas.
- **Chrome Primary** (`#F9F9FB`, `--text-chrome-primary`): texto principal, relleno de insignias de precio, botón cromo y filtro activo.
- **Chrome Secondary** (`#E5E2E1`, `--text-chrome-secondary`): descripciones, etiquetas de barra, texto de pie.
- **Chrome Muted** (`#A8A8AD`, `--text-chrome-muted`): especificación de tarjeta, SKU del carrito, etiquetas de la franja de datos, borde de campos. Ajustado desde `#8E8E93` del brief porque este último mide 6.07:1 y no llega a 7:1.
- **Ink** (`#000000`, `--ink`): exclusivo para sombras duras y bordes de interacción de 2 px. No es color de texto ni de superficie.

### Named Rules
**The One Voice Rule.** El rojo es una sola voz. Se usa como relleno, borde o sombra; el texto rojo existe solo en titulares de 24 px o más.

**The Large Text on Red Rule.** `#F9F9FB` sobre `#E60000` da 4.58:1: válido únicamente como texto grande (24 px, o 18.66 px bold o más). Todo texto sobre rojo es Anton de 24 px o Space Grotesk 700 de 19.2 px. Para texto pequeño con acento rojo se invierte: fondo cromo, texto oscuro, sombra roja (contador del carrito, dock).

**The Ink Rule.** El negro puro solo aparece como sombra o borde mecánico. En la práctica sobre `#0A0A0A` casi no se ve; la estructura la sostienen los bordes de `#262626` y los cambios de superficie.

## Typography

**Display Font:** Anton (con Impact y sans-serif como respaldo)
**Body Font:** Space Grotesk (con system-ui)
**Label/Mono Font:** Space Mono (con ui-monospace)
**Quote Font:** Source Serif 4 itálica 400 (con Georgia)

**Character:** Anton pone la voz de cartel de pista; Space Mono la telemetría de tablero (SKU, coordenadas, precios, estados); Space Grotesk mantiene la interfaz legible; la serif aparece solo cuando alguien habla (citas y manifiesto). Se cargan desde Google Fonts, Anton con un único peso 400.

### Hierarchy
- **Display Hero** (400, `clamp(3rem, 6.4vw, 5.25rem)` = 48 px en móvil, 84 px máximo, line-height 0.95, tracking -0.02em): solo el H1. La palabra "estilo" va en un bloque rojo con borde de 2 px, sombra de 6 px y giro de -1 grado (único elemento rotado).
- **Display XL** (400, `clamp(2rem, 4.2vw, 3rem)`, 0.95): títulos de sección (H2).
- **Display SM** (400, 1.5 rem, 0.95; 1.25 rem en tarjeta compacta y línea del carrito): nombres de producto, marca, títulos de panel. Mayúsculas siempre.
- **Body** (Space Grotesk 400, 16 px / 1.5): texto base. Párrafos de apoyo 1.125 rem / 1.6 con máximo de 65ch; descripciones de tarjeta 15 px / 22 px.
- **Button** (Space Grotesk 700, 1.2 rem = 19.2 px, line-height 1, tracking 0.02em, mayúsculas): todos los botones y el dock. El tamaño no es estético: es lo que hace que el texto sobre rojo cuente como texto grande.
- **Label** (Space Mono 700, 12 px / 16 px, tracking 0.1em, mayúsculas): etiquetas, chips, leyendas, especificación de tarjeta.
- **Label Bar** (Space Mono 700, 11 px, tracking 0.1em): solo la barra superior de la tarjeta de producto (SKU y "CHIAPAS MEX-190"), por mandato del brief 4A. Es el único texto por debajo de 12 px.
- **Mono UI** (Space Mono 700, 13 px, tracking 0.08em, mayúsculas): navegación, filtros, ticket, pie, insignia de precio (1 rem).
- **Quote** (Source Serif 4 itálica 400): manifiesto 16 px / 1.6; cita de historia 1.375 rem / 1.5; cita del pie 1.25 rem / 1.5.
- **Numeral** (Anton): total del ticket (1.75 rem, 1.5 rem en móvil) y cifras de la franja de datos (2 rem, 1.5 rem en móvil).

### Named Rules
**The Four Voices Rule.** Cada familia tiene un rol y no se mezcla: Anton no se usa para párrafos, Space Mono no se usa para prosa larga, la serif no se usa para interfaz.

**The Caps Display Rule.** Anton siempre en mayúsculas con line-height 0.95; un H1 de dos líneas es el máximo.

## Layout

Rejilla ortogonal de 12 columnas dentro de un contenedor `.wrap` de 1280 px máximo, con margen lateral de 48 px (20 px bajo 768 px) y gutter de 24 px (16 px bajo 768 px). Todo el espaciado sale de la escala de 8 px: 8, 16, 24, 32, 48, 64, 96. La cabecera es pegajosa, de una sola línea y 72 px. Debajo corre una única marquesina roja, con botón de pausa.

Secuencia de secciones, cada una con una familia de composición distinta: hero 7/5 con marco fotográfico cuadrado, franja de tres datos, franja "Cómo comprar" de tres pasos, editorial 6/6 con fotos escalonadas, catálogo de gorras (rejilla de 3, filtros), historia 7/5 con tablero de ruta, cascos 8/4 con hoja técnica, accesorios (bento de 3 celdas y rejilla de 3). Las secciones alternan `#0A0A0A` y `#131313` y se separan con una línea de 4 px `#262626`.

### Responsive (implementado)
- **Breakpoints reales:** 480 (se oculta el subtítulo de marca), 600 (lista de características a 1 columna), 720 (tarjetas compactas en gorras y accesorios), 768 (margen y gutter móviles), 900 (cascos a 1 columna compacta por debajo), 1024 (aparece la navegación de escritorio y desaparece el dock), 1200 (cascos 8/12 y hoja técnica 4/12). Además: teléfono horizontal con 500 px de alto o menos.
- **Dock móvil** (`.dock`, bajo 1024 px): barra fija inferior con Menú (1/3) y Carrito (2/3) que muestra cuenta y total. Respeta el área segura de iOS (`viewport-fit=cover`). En teléfono horizontal se oculta y vuelven los iconos del encabezado.
- **Tarjeta compacta:** imagen 1:1 de 132 px a la izquierda, datos a la derecha (descripción recortada a 2 líneas), acción a ancho completo. Unos 277 px de alto frente a unos 590 px de la tarjeta vertical.
- **Filtros** en carril horizontal con `scroll-snap` bajo 768 px.
- **Hover solo con puntero que lo soporta** (`@media (hover: hover)`); en táctil queda `:active`.
- **Drawer:** 440 px máximo, ancho completo en móvil; en móvil el pie se compacta (ticket de 12 px, campo de 44 px, se oculta la ayuda).

### Divergencias conocidas entre intención y código
- **Padding de sección en móvil:** la intención era 48 px, el valor efectivo es 64 px. La regla móvil `.section { padding-block: var(--s6) }` está en la línea 41 de public/styles.css, antes de la definición base de `.section` (línea 127), con la misma especificidad, así que la base la pisa. Lo mismo ocurre con `margin-bottom` de `.sec-head` (queda en 32 px, no 24 px). Medido a 375 px de ancho: 64 px y 32 px. Sin corregir; es una decisión pendiente.

## Elevation & Depth

Sistema de **capas por desplazamiento**: la profundidad es una sombra sólida de 0 de difusión, un cambio de superficie o un borde grueso. No hay sombras suaves, luces ni transparencias decorativas. El telón del drawer es un `#0A0A0A` al 88 % de opacidad, sin blur.

### Shadow Vocabulary
- **Micro** (`box-shadow: 2px 2px 0 #000000`): botones de icono del encabezado y botones del dock (`.mech--sx2`).
- **Control** (`3px 3px 0 #000000`): filtros en reposo, tallas, campos, etiqueta de coordenadas.
- **Control activo** (`3px 3px 0 #E60000`): filtro presionado, talla elegida, campo con foco.
- **Botón y bloque** (`4px 4px 0 #000000`): botones `.mech` por defecto y bloque de manifiesto.
- **Acento** (`4px 4px 0 #E60000`): botón cromo y botón de carrito del dock (la sombra roja realza el relleno claro) y tarjeta destacada del casco de edición especial.
- **Tarjeta y marco** (`6px 6px 0 #000000`): tarjetas de producto, marcos de foto, hoja técnica, celdas del bento, el bloque "estilo" del H1.
- **Drawer** (`-8px 0 0 #000000`): borde izquierdo sólido del panel lateral.

### Named Rules
**The Mechanical Switch Rule.** Todo control con sombra la contrae al interactuar: hover `translate(2px, 2px)` y active `translate(4px, 4px)`, con la sombra reducida la misma medida (mínimo 0), vía `max(calc(var(--sx) - Npx), 0px)`. Se implementa una sola vez para `.mech`, `.filter` y `.input`; cada uno declara su `--sx`. Con `prefers-reduced-motion` el cambio es instantáneo.

**The No Blur Rule.** Ningún `blur`, `backdrop-filter`, `filter` ni `text-shadow`. Un barrido de estilos calculados no encuentra ninguna sombra con difusión.

## Shapes

Geometría 100 % ortogonal: `border-radius: 0` global, con refuerzo explícito en botones e inputs para neutralizar los redondeos del navegador. Los bordes son gruesos y estructurales: 2 px en tarjetas y controles, 3 px en el drawer, 4 px en marcos de foto y divisores de sección. El borde rojo izquierdo de 4 px del manifiesto y de 3 px del drawer es el único recurso direccional. Las líneas punteadas de 2 px (ticket, línea del carrito, estado vacío, aviso de deshacer) reemplazan a la perforación de un ticket de peaje. La única forma que no es horizontal ni vertical es el giro de -1 grado del bloque "estilo".

## Components

Cada pieza se siente como un interruptor industrial: borde duro, relleno plano, sombra sólida y asentamiento al presionar.

### Buttons
- **Shape:** rectángulo recto (0), borde de 2 px negro, altura mínima 48 px, padding 12 px 24 px, Space Grotesk 700 de 19.2 px en mayúsculas (`.btn`).
- **Red** (`.btn--red`): relleno `#E60000`, texto `#F9F9FB`, sombra `4px 4px 0 #000`. Es la acción de comprar ("Agregar", "Ver catálogo").
- **Chrome** (`.btn--chrome`): relleno `#F9F9FB`, texto `#0A0A0A`, sombra `4px 4px 0 #E60000`. Acciones secundarias ("Ver cascos", "Ver carrito").
- **Icon** (`.icon-btn`): cuadrado de 48 px, relleno `#1C1B1B`, borde `#353534`, sombra de 2 px; borde rojo al pasar el puntero. Lleva `.cart-count`: insignia cromo con texto oscuro y borde rojo de 2 px.
- **Hover / Active:** ver The Mechanical Switch Rule. El foco usa contorno de 3 px `#F9F9FB` con desfase de 3 px (rojo `#FF2A2A` en botón cromo y filtro).
- **Agregado:** el botón de compra pasa a relleno cromo con el texto "Agregado" durante 1.4 s.
- **Deshabilitado / sin número:** el checkout cambia de etiqueta ("Copiar pedido" sin número de WhatsApp, "Pedir por WhatsApp" con él); el botón `-` en 1 usa `#1C1B1B` con texto `#A8A8AD` y `cursor: not-allowed`.

### Chips
- **Style:** borde de 2 px `#E5E2E1`, fondo `#0A0A0A`, texto `#F9F9FB`, Space Mono 12 px en mayúsculas, padding 2 px 8 px (`.chip`). Informativos, no interactivos.

### Cards / Containers
- **Corner Style:** recto.
- **Product Card** (`.card`, spec 4A): fondo `#131313`, borde 2 px `#262626`, sombra `6px 6px 0 #000`. Barra superior `#0A0A0A` con SKU (`BKR-GP01`) y "CHIAPAS MEX-190" en Space Mono 11 px. Imagen 1:1 sobre `#1C1B1B`. Insignia de precio (`.price-badge`) abajo a la izquierda: fondo `#F9F9FB`, texto `#0A0A0A`, Space Mono 700, borde 2 px `#000`. Cuerpo con nombre en Anton, descripción y línea de especificación con filete de 1 px. Pie con botón de compra a 100 % de ancho. La variante `.card--hot` cambia solo la sombra a `4px 4px 0 #E60000`.
- **Talla** (`.size`, solo cascos): grupo de radios S, M, L, XL de 44 px de alto que se reparten el ancho. En reposo borde `#353534` con sombra negra de 3 px; elegida, relleno cromo con sombra roja de 3 px. Sin talla al agregar aparece un aviso de borde punteado rojo y el foco va al primer radio.
- **Tarjeta compacta (móvil):** misma pieza en cuadrícula de dos columnas (132 px de imagen) hasta 719 px (gorras y accesorios) y hasta 899 px (cascos).
- **Frame** (`.frame`): marco de 4 px `#262626` con barras de telemetría arriba y abajo, usado en el hero y en el tablero de ruta.
- **Photo Card:** marco de 2 px con 8 px de aire y leyenda de nombre y precio.

### Inputs / Fields
- **Style:** fondo `#0A0A0A`, texto `#F9F9FB`, Space Mono 16 px (evita el zoom de iOS), borde de 2 px `#A8A8AD` (contra la superficie supera 3:1, WCAG 1.4.11), sombra negra de 3 px, etiqueta siempre arriba. El texto de apoyo (`.field-help`) va debajo.
- **Focus:** borde `#E60000` y sombra `3px 3px 0 #E60000`; el campo se asienta (sin desplazamiento).

### Navigation
- **Escritorio (1024 px o más):** cuatro enlaces en Space Mono 13 px (Gorras, Historia, Cascos, Accesorios), relleno vertical de 12 px; estado activo y hover con subrayado rojo de 3 px. El activo lo marca un `IntersectionObserver` con `aria-current`.
- **Móvil:** el dock inferior (Menú y Carrito) abre el drawer. El carrito del dock es cromo con texto oscuro, sombra roja y total en Space Mono 13 px.
- **Marquesina:** Anton 24 px sobre rojo, con botón de pausa cuadrado de 56 px (`aria-pressed`).

### Quick Dispatch Drawer (signature, spec 4C)
Panel lateral derecho de 440 px máximo, fondo `#0A0A0A`, borde izquierdo de 3 px `#E60000`, sombra `-8px 0 0 #000`. Entra en 160 ms con pasos (`steps(4)`). Dos paneles en un mismo componente: menú móvil (enlaces en Space Mono) y carrito. Título "DESPACHO RÁPIDO // ROAD CART" (o "// RUTAS"). Cierre con botón de icono mecánico.
- **Accesibilidad:** `role="dialog"`, `aria-modal`, `aria-labelledby`; al abrir el foco va al cierre, `#app` queda `inert` y `aria-hidden`, y el body no hace scroll; foco atrapado con Tab y Shift+Tab; Escape, telón y botón lo cierran; el foco vuelve al botón que lo abrió; región `role="status"` anuncia cambios.
- **Línea de carrito:** nombre (con "TALLA M" en cascos), SKU en `#A8A8AD`, precio de línea, selector `[-] [ 01 ] [+]` de bloques rectos con borde de 2 px cromo y "Quitar". Quitar muestra una barra de borde punteado con "Deshacer".
- **Ticket:** línea punteada, subtotal, envío nacional ("A COTIZAR" mientras no haya tarifa) y total en MXN (Anton 1.75 rem). Campo "Destino" opcional.
- **Checkout:** `wa.me/<número>?text=<mensaje codificado>` con el formato `BIKER LIFESTYLE 2025 // Solicitud de Pedido: 1x Casco Full Face Matte, Talla M [2,490 MXN] + 1x Gorra Chrome Cog & Visor [200 MXN]. Destino: por confirmar.` Sin número válido (10 a 15 dígitos) el botón se convierte en "Copiar pedido" y copia el mismo mensaje al portapapeles.
- **Persistencia:** el carrito vive en `localStorage` (clave `bl-cart-v2`, con respaldo en memoria) y se valida contra el catálogo leído del DOM.
- **Configuración** (arriba de public/app.js o `window.BL_CONFIG`): `whatsappNumber` (hoy `"NUMERO_OFICIAL"`, pendiente), `shippingMXN` (hoy `null`), `storageKey`, `maxQty` (99).

### Filtros (spec 4D)
Botones con `aria-pressed` dentro de `role="group"`. Reposo: fondo `#131313`, borde 2 px `#262626`, sombra negra de 3 px. Activo: fondo `#F9F9FB`, texto `#0A0A0A`, sombra `3px 3px 0 #E60000`. Etiquetas con conteo ("Deportiva Air-Mesh (02)"). Ocultan tarjetas con `hidden` y anuncian el resultado.

### Hoja técnica (spec 4B)
`<table>` con `<th scope="row">`, retícula de 1 px `#353534` sin borde exterior, filas alternas `#0A0A0A` y `#131313`. Encabezados en Space Mono 12 px `#A8A8AD`, valores en Space Grotesk 600 de 15 px. Datos: calota de ABS con policarbonato inyectado, homologación ECE 22.06 y DOT FMVSS 218, visor con Pinlock 70 MaxVision y liberación rápida sin herramientas, cierre micrométrico de trinquete de acero, forro hipoalergénico y desmontable, peso 1450 g ± 50 g.

### Bento de accesorios
Exactamente tres celdas: foto real (7 columnas, dos filas), bloque rojo sólido con titular de 36 px y texto de 19.2 px bold, y bloque asfalto con chips. Bajo 1024 px se apilan a ancho completo.

### Tablero de ruta
Lista ordenada de cuatro paradas (Tuxtla Gutiérrez, Chiapa de Corzo, San Cristóbal de Las Casas, Palenque) dentro de un `.frame`, con filetes de 1 px y la última fila en rojo.

## Do's and Don'ts

### Do:
- **Do** usar solo los tokens de color de este documento; el único gris atenuado es `#A8A8AD`.
- **Do** dar a todo control con sombra el comportamiento de interruptor: hover 2 px, active 4 px, sombra contraída.
- **Do** poner texto sobre rojo únicamente en 19.2 px bold o 24 px (4.58:1, solo texto grande).
- **Do** mantener las etiquetas de formulario arriba del campo y el borde del campo en `#A8A8AD`.
- **Do** escribir mayúsculas solo con Anton, Space Mono y botones; el texto corrido va en caja normal.
- **Do** usar Source Serif 4 itálica solo para citas, crónica y manifiesto.
- **Do** respetar `prefers-reduced-motion`: sin marquesina, sin transiciones; los cambios de estado son instantáneos.
- **Do** mantener botones de 44 px de alto como mínimo (48 px en botones principales).

### Don't:
- **Don't** usar `border-radius` distinto de 0 ni sombras con difusión; tampoco `backdrop-filter`, `filter` o `text-shadow`.
- **Don't** usar `#E60000` como color de texto sobre asfalto (4.11:1).
- **Don't** mostrar texto de menos de 12 px, salvo la barra SKU de la tarjeta de producto (11 px por el brief).
- **Don't** agregar estilos inline en `public/index.html`; todo vive en clases de public/styles.css.
- **Don't** mezclar familias fuera de su rol (Anton para prosa, serif para botones).
- **Don't** repetir una composición de sección ya usada en la misma página.
- **Don't** introducir un tema claro: el sistema es solo oscuro.

## Contraste medido

Calculado con la fórmula WCAG 2.x y verificado en el navegador sobre unas 250 combinaciones únicas de color, fondo, tamaño y peso por estado (escritorio y móvil, con el carrito y el menú abiertos). Umbral: 7:1 texto normal, 4.5:1 texto grande (24 px o más, o 18.66 px bold o más). Resultado: 0 fallos en todos los estados medidos.

| Texto | Fondo | Ratio | Uso | Resultado |
|---|---|---|---|---|
| `#F9F9FB` | `#0A0A0A` | 18.83 | Texto principal, botón de pausa | AAA |
| `#F9F9FB` | `#131313` | 17.67 | Texto en tarjetas | AAA |
| `#F9F9FB` | `#1C1B1B` | 16.34 | Texto sobre superficie hundida | AAA |
| `#E5E2E1` | `#0A0A0A` | 15.36 | Descripciones | AAA |
| `#E5E2E1` | `#131313` | 14.42 | Descripciones en tarjetas | AAA |
| `#E5E2E1` | `#1C1B1B` | 13.34 | Etiquetas en barras | AAA |
| `#A8A8AD` | `#0A0A0A` | 8.36 | Texto atenuado | AAA |
| `#A8A8AD` | `#131313` | 7.85 | Especificación de tarjeta | AAA |
| `#A8A8AD` | `#1C1B1B` | 7.26 | SKU del carrito, botón `-` deshabilitado | AAA |
| `#0A0A0A` | `#F9F9FB` | 18.83 | Insignia de precio, filtro activo, contador, dock | AAA |
| `#F9F9FB` | `#E60000` | 4.58 | Botones 19.2 px bold, marquesina 24 px, titulares sobre rojo | AAA solo texto grande |
| `#FF2A2A` | `#0A0A0A` | 5.30 | "Nuestra ruta" (48 px) | AAA solo texto grande |
| `#FF2A2A` | `#131313` | 4.97 | No usado en texto pequeño | AAA solo texto grande |

Los dos puntos señalados en la sección 3 del brief:
1. `#8E8E93` sobre `#0A0A0A` mide **6.07:1** (5.70 sobre `#131313`, 5.27 sobre `#1C1B1B`): no alcanza 7:1. Se aclaró a `#A8A8AD`; mínimo 7.26:1 en la peor superficie. Es el único token modificado.
2. `#F9F9FB` sobre `#E60000` mide **4.58:1**: válido solo como texto grande. Se conservó el rojo de marca y se fijó el tamaño del texto (19.2 px bold o 24 px).

Elementos no textuales (WCAG 1.4.11): el borde `#262626` sobre `#0A0A0A` mide 1.31:1. Es decorativo en tarjetas y marcos; en campos de formulario se usa `#A8A8AD` (6 a 8:1) para que el control sea localizable.

## Auditoría

Estado actual verificado sobre estilos calculados: 0 `border-radius` distinto de 0, 0 sombras con blur, 0 `backdrop-filter`, 0 estilos inline, 0 guiones largos en el texto visible, 0 fallos de contraste, sin desborde horizontal entre 320 y 1920 px.

Hallazgos de la primera versión (la versión original (no incluida en este repo), conservada solo como referencia) y su resolución:

| Hallazgo | Original | Estado |
|---|---|---|
| Radios de Tailwind (0.25 rem a 9999 px) y insignia `rounded-full` | líneas 2 y 151 | Corregido: CSS propio, radio 0 global |
| `backdrop-blur-sm` | línea 74 | Corregido |
| Texto de 10 a 13 px sobre rojo (4.58:1) | líneas 4, 28, 69, 152, 175, 249 y otras | Corregido: solo texto grande sobre rojo |
| Paleta Material fuera de los tokens del brief | línea 2 y todo el documento | Corregido |
| Marcas de agua con `mix-blend-mode` y `mask-image` (21 imágenes con estilos inline) | líneas 15 y 436 | Eliminadas |
| Animaciones simultáneas sin respetar movimiento reducido | líneas 2, 7 y 654 | Corregido: una marquesina con pausa |
| Carrito, buscador y menú móvil sin función | todo el documento | Corregido: drawer y carrito real |
| Datos de casco ajenos al brief (1,480 g, 4 canales de ventilación) | líneas 415 y 423 | Corregido |

Segunda auditoría (crítica con revisión de diseño y detector independientes, 19/32): checkout inservible sin número, falta de talla en cascos, carrito móvil apretado, "Destino" vacío enviado literal, embudo plano, falta de contenido de confianza, "Quitar" sin deshacer, marquesina sin pausa, textos de menos de 12 px y enlaces del pie de 40 px. Todo corregido salvo lo indicado en Pendientes.

## Pendientes y supuestos

- **Número de WhatsApp:** `CONFIG.whatsappNumber` sigue en `NUMERO_OFICIAL`. Hasta definirlo, el checkout ofrece "Copiar pedido".
- **Tarifa de envío:** no hay tarifa en el brief; el ticket dice "A COTIZAR". Definir `CONFIG.shippingMXN`.
- **Tallas S a XL:** el brief no define tallas; se asumió la escala estándar. Confirmar con el cliente.
- **Franja "Cómo comprar":** el paso 3 promete respuesta con costo de envío; el método de pago no está definido y no se menciona.
- **Datos de accesorios no incluidos en el brief:** rosca 8 / 10 mm, ajuste 4.7 a 7.1 in y "par + tornillería" se conservaron por decisión del cliente; falta confirmarlos. Los faros ($120) cuestan menos que los espejos ($139); verificar el precio.
- **Subtítulo "Modular, apertura rápida"** del casco Bronze Runner no está en el brief.
- **Padding de sección móvil:** divergencia descrita en Layout (64 px efectivos frente a 48 px previstos).
- **Tipografías, iconos e imágenes** se cargan desde Google Fonts, unpkg (Phosphor Bold) y las URL originales de googleusercontent. Para producción conviene autoalojarlos.
- **Nombre "El Taller de Pista":** propuesto a partir del brief; confirmar.
