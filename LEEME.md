# Publicaciones CCINEC · visor digital

Sitio: https://ccinec.github.io/Publicaciones_CCINEC/
Separata: https://ccinec.github.io/Publicaciones_CCINEC/separata/

## Estructura del repositorio

```
Publicaciones_CCINEC/          (raíz del repositorio CCINEC/Publicaciones_CCINEC)
├── index.html                 El visor de la revista
├── config.js                  ← Lo que editas: nombre, ediciones, índice, nota, enlaces extra
├── numeros/02/                Nº 02 (ccinec-n02-2026.pdf)
├── portada.jpg                Imagen al compartir el enlace en WhatsApp o redes
├── qr/index.html              Redirección para el QR de la revista
├── lib/                       Librerías: StPageFlip (MIT) y PDF.js (Apache 2.0)
├── .nojekyll                  Archivo técnico para GitHub Pages: no lo borres
└── separata/                  ← El paquete de la separata va aquí, completo
```

La separata es un visor independiente (tiene su propio index.html, config.js y lib/)
que vive en la carpeta `separata/`. GitHub Pages publica una sola rama por repositorio,
por eso la separata va como carpeta y no como rama: así queda en su propia dirección
(…/Publicaciones_CCINEC/separata/) y conectada con la revista mediante los botones
"Ver separata" y "Ver revista".

## Publicar en GitHub (recomendado: GitHub Desktop)

1. En GitHub Desktop: File > Clone repository > CCINEC/Publicaciones_CCINEC.
2. Copia dentro de la carpeta clonada TODO el contenido de este paquete
   y la carpeta `separata` completa (con su contenido).
3. Escribe un resumen, pulsa "Commit to main" y luego "Push origin".
4. En github.com/CCINEC/Publicaciones_CCINEC > Settings > Pages:
   Deploy from a branch · main · / (root) · Save.

Si subes desde la web (Add file > Upload files), GitHub puede perder las subcarpetas
internas (por ejemplo lib/pdfjs/standard_fonts y lib/pdfjs/wasm). Con GitHub Desktop
se sube la estructura completa.

## Publicar una edición nueva

1. Exporta el PDF desde InDesign (Interactivo, páginas sueltas, 150 ppp).
2. Crea `numeros/03/` y pon ahí el PDF.
3. En `config.js`, copia el bloque de la edición anterior, pégalo ARRIBA y ajusta
   carpeta, nombre, pdf, páginas del índice y desfase.

## Funciones del visor

- Índice clicable: lleva a cada artículo (indice.paginas y desfase en config.js).
- Enlaces del PDF (textos azules, notas) y enlaces extra (enlacesExtra en config.js).
- Vista ampliada: doble toque, pellizco o botón de lupa. Dentro se mueve con un dedo,
  se amplía hasta 5×, se cambia de página deslizando y los enlaces funcionan.
  En computador: doble clic, Ctrl + rueda o los botones − / +; Esc cierra.

## Probar en tu computador

Usa Live Server en Visual Studio Code (los PDF no se ven abriendo index.html con doble clic).

## QR

- Revista: https://ccinec.github.io/Publicaciones_CCINEC/qr/
- Separata: https://ccinec.github.io/Publicaciones_CCINEC/separata/qr/
Para cambiar a dónde llevan, edita las dos líneas marcadas en el qr/index.html de cada uno.
