# BRIEF DE DISEÑO — BIKER LIFESTYLE (Road & Speed Division)

Rol: Director de Arte y Diseñador UI/UX Senior especializado en Neobrutalismo Técnico y cultura Motorsport (Apex Moto Neobrutalism).

Objetivo: estructurar, auditar, implementar y elevar el sistema de diseño visual, los tokens CSS y los componentes web de BIKER LIFESTYLE, marca de streetwear y equipamiento de motocicleta nacida en Chiapas, México. Lema: "Pinta el camino con tu estilo // Edición 2025".

## 1. Contexto e identidad de marca

Inspiración: equipamiento técnico y rudo forjado entre la niebla fría de San Cristóbal de Las Casas y las curvas de la carretera federal MEX-190 en Chiapas.

Matriz de ADN estético (regla 70-20-10):
- 70 % Neobrutalismo radical: bordes a 90 grados, cero redondeo, sombras duras sin blur, traslaciones físicas en interacción.
- 20 % Editorial motorsport de revista: fichas técnicas tipo blueprint, retículas ortogonales, serif clásica para el manifiesto.
- 10 % Aire funcional: espaciado en múltiplos de 8 px, contraste alto y legibilidad técnica inmediata.

### Catálogo

Gorras oficiales (precio fijo 200 MXN):
- Línea Deportiva Air-Mesh: paneles de ventilación para uso bajo casco, broche mecánico.
- Línea Casual Distressed Washed: lona pesada con acabado desgastado de taller.
- Línea Biker Parches 3D: gráficos vulcanizados de alta densidad y herrajes metálicos.

Cascos y seguridad certificada (2,490 a 2,890 MXN):
- Homologación dual: ECE 22.06 y DOT FMVSS 218.
- Calota de ABS con policarbonato inyectado.
- Visor antirrayas con pines para Pinlock 70 MaxVision y liberación rápida sin herramientas.
- Cierre micrométrico de trinquete de acero y forro hipoalergénico desmontable.
- Peso: 1450 g ± 50 g.

Accesorios CNC y hardware universal (120 a 599 MXN):
- Aluminio Billet 6061-T6 con anodizado duro negro y cromo industrial.
- Espejos convexos de manillar con cristal tintado azul antirreflejante.
- Grips de alta densidad con contrapesos antivibración.
- Manijas regulables en 6 posiciones con bisagra retráctil anti-quiebre.
- Faros auxiliares LED CREE, encapsulado IP68, soportes antivibración.

## 2. Reglas estéticas obligatorias

1. Cero bordes redondeados y cero blur
   - border-radius: 0 en botones, tarjetas, badges, modales, inputs, drawers y divisores.
   - Ningún box-shadow con blur mayor a 0.
   - Sombras permitidas:
     - Micro-elementos: 2px 2px 0 #000000
     - Botones y tarjetas: 4px 4px 0 #000000 o 4px 4px 0 #E60000
     - Tarjetas principales y modales: 6px 6px 0 #000000
   - Microinteracción "switch mecánico": en hover translate(2px, 2px) y en active translate(4px, 4px), contrayendo la sombra en la misma medida, como un botón industrial de encendido.
   - Respetar prefers-reduced-motion (sin traslaciones animadas si el usuario lo pide).

2. Jerarquía tipográfica cuádruple
   - Anton: titulares en mayúsculas, line-height 0.95, letter-spacing -0.02em. Carteles, números de velocidad, nombres de producto.
   - Space Grotesk: interfaz, navegación, descripciones y botones.
   - Space Mono: telemetría, coordenadas (MEX-190 // 16.7370 N), SKUs, precios y estados de stock.
   - Source Serif 4 itálica: solo citas, crónicas de ruta y el manifiesto.

3. Sin grises SaaS corporativos: usar exclusivamente los tokens de la sección 3.

4. Accesibilidad (objetivo WCAG AAA)
   - Texto normal: contraste mínimo 7:1.
   - Texto grande (24 px o más, o 18.66 px bold): mínimo 4.5:1.
   - Si un par de colores no alcanza el umbral, reportarlo y proponer el ajuste mínimo en lugar de ignorarlo.

## 3. Tokens de color (regla 60-30-10)

60 % superficie:
- --surface-asphalt-pure: #0A0A0A
- --surface-asphalt-elevated: #131313
- --surface-asphalt-recessed: #1C1B1B

30 % estructura y texto:
- --border-mechanical-hard: #262626 (2 px)
- --border-mechanical-light: #353534 (1 px)
- --text-chrome-primary: #F9F9FB
- --text-chrome-secondary: #E5E2E1
- --text-chrome-muted: #8E8E93

10 % acento:
- --accent-redline-pure: #E60000
- --accent-redline-glow: #FF2A2A

Puntos de contraste que deben verificarse en la auditoría:
- #8E8E93 sobre #0A0A0A queda por debajo de 7:1. Usarlo solo en texto grande o aclararlo (por ejemplo hacia #A8A8AD) y medir.
- Texto #F9F9FB sobre botón #E60000 ronda 4.6:1: válido solo como texto grande/bold. Para AAA en texto normal, oscurecer el rojo del fondo del botón o aumentar el tamaño del texto.

## 4. Componentes

A. Tarjeta de producto (gorras y hardware CNC)
- Fondo #131313, borde 2px solid #262626, sombra 6px 6px 0 #000000.
- Barra superior #0A0A0A con SKU (ej. BKR-GP01) y "CHIAPAS MEX-190" en Space Mono 11 px.
- Imagen 1:1 sobre #1C1B1B.
- Badge de precio en esquina inferior izquierda: fondo #F9F9FB, texto #0A0A0A, Space Mono 700, borde 2px solid #000000.
- Botón de compra a 100 % de ancho, fondo rojo, texto #F9F9FB en Space Grotesk 700, con microinteracción mecánica.

B. Hoja técnica / blueprint de cascos
- Tabla con retícula 1px solid #353534, filas alternadas #0A0A0A y #131313.
- Datos: calota ABS/policarbonato, certificación ECE 22.06 / DOT FMVSS 218, Pinlock Ready 70 MaxVision, peso 1450 g ± 50 g.
- Bloque de manifiesto: fondo #131313, borde izquierdo 4px solid #E60000, Source Serif 4 itálica 16 px sobre el honor de rodar en las carreteras de Chiapas.

C. Quick Dispatch Drawer (menú móvil y carrito)
- Se desliza desde la derecha. Fondo #0A0A0A, borde izquierdo 3px solid #E60000, sombra -8px 0 0 #000000.
- Encabezado "DESPACHO RAPIDO // ROAD CART" y botón de cierre con borde 2 px y traslación mecánica.
- Accesible: foco atrapado dentro del drawer, cierre con Escape, retorno del foco al botón que lo abrió, aria-modal.
- Selector de cantidad de tres bloques rectos: [-] [ 01 ] [+], con feedback al clic y etiquetas accesibles.
- Desglose con línea perforada estilo ticket de peaje y total en MXN con envío nacional.
- Checkout hacia WhatsApp usando el esquema de enlace wa.me con el número oficial (pendiente: NUMERO_OFICIAL, definirlo como constante configurable) y mensaje prellenado y codificado para URL, construido a partir del carrito real. Ejemplo del formato:
  BIKER LIFESTYLE 2025 // Solicitud de Pedido: 1x Casco ECE 22.06 [2,490 MXN] + 1x Gorra Biker 3D [200 MXN]. Destino: Ciudad y Código Postal.

D. Filtros (mechanical switches)
- Reposo: fondo #131313, borde #262626.
- Activo: fondo #F9F9FB, texto #0A0A0A, sombra 3px 3px 0 #E60000.
- Implementar como botones con aria-pressed o como tabs con roles ARIA correctos.

## 5. Fases de trabajo (ejecutar en orden)

1. Shape drawer: diseñar el drawer de navegación móvil y el carrito lateral con enlaces en Space Mono y selectores mecánicos.
2. Polish: implementar desplazamientos mecánicos en hover y active de botones e inputs; consolidar clases CSS y eliminar estilos inline redundantes.
3. Critique: auditar contraste WCAG AAA de cada par texto/fondo usado y verificar cero border-radius y cero blur en todo el código. Entregar lista de hallazgos con archivo y línea.
4. Document: escribir DESIGN.md con tokens finales, matriz tipográfica y especificación de componentes, reflejando el sistema real implementado.

## Criterios de terminado
- Ningún border-radius distinto de 0 ni sombra con blur en el CSS final.
- Todos los pares de contraste medidos y documentados.
- Drawer usable con teclado y lector de pantalla.
- DESIGN.md coincide con el código.
