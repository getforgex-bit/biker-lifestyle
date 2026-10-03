# BIKER LIFESTYLE

Sitio de catálogo y pedidos de **Biker Lifestyle (Road & Speed Division)**: gorras, cascos certificados y accesorios CNC para moto, nacido en Chiapas, México. Los pedidos se cierran por WhatsApp con un mensaje armado desde el carrito.

Sitio estático (HTML, CSS y JavaScript sin dependencias ni paso de compilación).

## Estructura

```
public/            Lo que se publica
  index.html       Página única
  styles.css       Tokens y componentes (neobrutalismo: radio 0, sombras sin blur)
  app.js           Drawer, carrito, filtros y checkout por WhatsApp
  _headers         CSP, cabeceras de seguridad y caché (Cloudflare)
  robots.txt
wrangler.jsonc     Despliegue con Workers Static Assets
DESIGN.md          Sistema de diseño tal como está implementado
PRODUCT.md         Contexto de producto
docs/              Brief original del cliente
```

## Configuración pendiente (antes de publicar)

Al inicio de [public/app.js](public/app.js):

| Constante | Estado | Qué hace |
|---|---|---|
| `whatsappNumber` | `"NUMERO_OFICIAL"` (pendiente) | Solo dígitos con lada de país (ej. `5219671234567`). Sin número válido, el checkout ofrece "Copiar pedido". |
| `shippingMXN` | `null` | Tarifa de envío nacional en MXN. `null` muestra "A COTIZAR". |

## Desarrollo local

```bash
npx wrangler dev
```

o cualquier servidor estático sobre `public/` (por ejemplo `python -m http.server --directory public 8080`).

## Despliegue en Cloudflare

- **Desde GitHub** (cada push a `main` publica): Workers & Pages → Create → **Import a repository** → este repositorio. Build command: *(vacío)*; Deploy command: `npx wrangler deploy` (publica `public/`).
- **Desde la terminal**: `npx wrangler login` (una vez) y `npx wrangler deploy`.

Queda en `https://biker-lifestyle.<tu-cuenta>.workers.dev`. Usa Workers y no Pages: en la misma cuenta que Scan-bar, la página lo encuentra sola y Scan-bar sabe a qué URL mandar sus códigos. Pasos de todo el sistema: `docs/DESPLIEGUE.md` en el repositorio Scan-bar.

La política `Content-Security-Policy` de `public/_headers` solo permite scripts propios, Google Fonts, Phosphor (unpkg), imágenes https y consultas a `*.workers.dev` (Scan-bar). Si cambias de CDN o autoalojas fuentes e imágenes, actualízala.

## Pendientes antes de producción

- Definir el número de WhatsApp y la tarifa de envío (arriba).
- Autoalojar tipografías, iconos e imágenes (hoy vienen de Google Fonts, unpkg y googleusercontent) y entonces endurecer la CSP.
- Confirmar con el cliente las tallas S a XL, el método de pago y los datos de accesorios que no vienen del brief (ver DESIGN.md, sección Pendientes).
- Reemplazar el favicon (hoy usa el logo remoto) por un archivo propio y agregar etiquetas Open Graph cuando exista el dominio final.

## Scan-bar (catálogo y códigos)

Scan-bar es la base de datos de productos y códigos de barras de los negocios. Los productos de este HTML se registran solos en Scan-bar (Scan-bar revisa este repositorio cada 10 minutos; `npm run sync:repos` allá lo fuerza): **cada talla de casco es un producto con su propio código** (`BKR-CS01-M`). Los productos que se agregan desde Scan-bar (*Administración → Productos y etiquetas*) aparecen como tarjetas con el mismo diseño, sin tocar este repositorio.

- Conexión: automática si la página vive en `biker-lifestyle.<tu-cuenta>.workers.dev` (usa `scan-bar.<tu-cuenta>.workers.dev`). En otro dominio: `data-url="https://URL-DE-SCAN-BAR"` en la etiqueta de `scanbar.js` de `public/index.html`; `data-url="off"` la apaga.
- **CSP**: `public/_headers` ya permite `*.workers.dev` en `connect-src` e imágenes https; si Scan-bar vive en otro dominio, agrégalo a `connect-src` (si no, el navegador bloquea la consulta y el sitio sigue solo con sus productos).
- Probar en local: `http://localhost:8080/?scanbar=http://localhost:3000` (solo acepta localhost).
- En Scan-bar: categoría `gorras` (atributo `linea`: `deportiva`, `casual` o `biker`), `cascos` (variantes = tallas `S, M, L, XL`) o `accesorios`. Sin foto se usa la de otra tarjeta de su sección. Contrato y diseño completo: `docs/INTEGRACION-WEBS.md` en el repositorio Scan-bar.
