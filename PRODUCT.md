# Product

<!-- impeccable:product-schema 1 -->

<!-- Fuentes: brief-biker-lifestyle_1.md (especificación única indicada por el usuario). Los hechos marcados [inferido] no están en el brief y deben confirmarse. -->

## Platform

web

## Stack

Existente: HTML estático + `public/styles.css` + `public/app.js` sin framework ni build (public/index.html). Sin dependencia de Tailwind.

## Users

Motociclistas y público streetwear de México, con foco en Chiapas. Entran desde el celular o escritorio a ver el catálogo, comparar precios y pedir por WhatsApp. [inferido: predominio de móvil]

## Product Purpose

BIKER LIFESTYLE (Road & Speed Division) es una marca de streetwear y equipamiento de motocicleta nacida en Chiapas, México. Lema: "Pinta el camino con tu estilo // Edición 2025". El sitio vende gorras, cascos certificados y accesorios CNC con envío nacional; el pedido se cierra por WhatsApp con un mensaje prellenado construido desde el carrito.

## Positioning

Equipamiento técnico y rudo forjado entre la niebla de San Cristóbal de Las Casas y las curvas de la carretera federal MEX-190. Una marca chiapaneca de moteros para moteros, con homologación dual real en cascos (ECE 22.06 y DOT FMVSS 218).

## Operating Context

Catálogo cerrado:
- Gorras oficiales, precio fijo 200 MXN: Línea Deportiva Air-Mesh, Línea Casual Distressed Washed, Línea Biker Parches 3D.
- Cascos, 2,490 a 2,890 MXN: ABS con policarbonato inyectado, visor antirrayas con pines Pinlock 70 MaxVision y liberación rápida, cierre micrométrico de trinquete de acero, forro hipoalergénico desmontable, 1450 g ± 50 g.
- Accesorios CNC y hardware universal, 120 a 599 MXN: aluminio Billet 6061-T6 con anodizado duro y cromo industrial.
Checkout por enlace wa.me con mensaje codificado. Envío nacional.

## Capabilities and Constraints

- Sin backend: carrito en `localStorage`, pedido por WhatsApp.
- Pendiente: número oficial de WhatsApp (constante `NUMERO_OFICIAL`, configurable).
- Pendiente: tarifa de envío nacional (hoy "A COTIZAR").
- Idioma: español de México. Moneda: MXN.
- Objetivo de accesibilidad WCAG AAA (7:1 texto normal, 4.5:1 texto grande); drawer operable con teclado y lector de pantalla; respetar `prefers-reduced-motion`.
- Restricción de marca vinculante del brief: cero border-radius, cero blur, sombras duras de desplazamiento, grises solo de los tokens definidos.

## Brand Commitments

- Nombre: BIKER LIFESTYLE, división "Road & Speed". Lema y edición 2025 como arriba.
- Tokens de color, jerarquía tipográfica (Anton, Space Grotesk, Space Mono, Source Serif 4 itálica solo para citas y manifiesto) y componentes definidos en el brief, implementados en public/styles.css y documentados en DESIGN.md. Único ajuste aprobado por el propio brief: `#8E8E93` aclarado a `#A8A8AD` por contraste.
- Voz: técnica, directa, orgullo local chiapaneco.
- Fundadores nombrados en el sitio: Moisés Velázquez, Edu Manuel, Esaú, Harlin, Henri y Diana Nayeli.

## Evidence on Hand

- Logo y fotografías en las URL de la versión original (no incluida en este repo) (hero de moto, retrato de piloto, cascos, kit de accesorios, seis gorras, seis accesorios).
- Catálogo, precios y especificaciones del brief.
- Ausentes, no inventar: testimonios, reseñas, cifras de ventas, número de WhatsApp, tarifa de envío, política de garantía, certificados descargables.

## Product Principles

1. La especificación técnica real manda: cada dato de producto sale del brief, nunca de relleno.
2. Pedir debe ser tan directo como accionar un interruptor: del catálogo al mensaje de WhatsApp en pocos toques.
3. Rudeza legible: el estilo duro nunca sacrifica contraste ni uso con teclado.
4. Orgullo local: Chiapas y la MEX-190 son el origen verificable de la marca, no un adorno.
5. Sin promesas que la tienda no pueda cumplir (envío, garantía, stock) hasta tener el dato real.

## Accessibility & Inclusion

WCAG AAA como objetivo. Contraste medido y documentado en DESIGN.md; foco visible, objetivos táctiles de 44 px o más, navegación por teclado completa en el drawer, `aria-live` para cambios del carrito, movimiento reducido respetado.
