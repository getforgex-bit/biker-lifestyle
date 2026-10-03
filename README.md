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

**Opción A, Cloudflare Pages conectado a GitHub** (recomendada para este flujo):

1. Cloudflare Dashboard, Workers & Pages, Create, Pages, Connect to Git, elegir este repositorio.
2. Framework preset: **None**. Build command: *(vacío)*. Build output directory: **`public`**.
3. Cada push a `main` publica; cada rama genera una vista previa.
4. Dominio propio: Custom domains en el proyecto de Pages.

**Opción B, Workers Static Assets desde terminal:**

```bash
npx wrangler login
npx wrangler deploy
```

La política `Content-Security-Policy` de `public/_headers` solo permite Google Fonts, Phosphor (unpkg) y las imágenes de `lh3.googleusercontent.com`. Si cambias de CDN o autoalojas fuentes e imágenes, actualízala.

## Pendientes antes de producción

- Definir el número de WhatsApp y la tarifa de envío (arriba).
- Autoalojar tipografías, iconos e imágenes (hoy vienen de Google Fonts, unpkg y googleusercontent) y entonces endurecer la CSP.
- Confirmar con el cliente las tallas S a XL, el método de pago y los datos de accesorios que no vienen del brief (ver DESIGN.md, sección Pendientes).
- Reemplazar el favicon (hoy usa el logo remoto) por un archivo propio y agregar etiquetas Open Graph cuando exista el dominio final.
