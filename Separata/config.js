/* =========================================================
   CONFIGURACIÓN DE LA SEPARATA
   Este es el único archivo que necesitas editar para
   publicar números nuevos.
   Sitio: https://ccinec.github.io/Publicaciones_CCINEC/separata/
   ========================================================= */

const CONFIG = {
  // Nombre que aparece arriba y en la pestaña del navegador
  revista: "Separata CCINEC | Nº 01",

  // Botón arriba a la derecha que lleva de vuelta a la revista (bórralo para ocultarlo)
  relacionado: { texto: "Ver revista", url: "../" },

  // Lista de ediciones (mismas opciones que en la revista).
  // La separata no tiene índice: sus enlaces son los textos en azul, que ya vienen en el PDF.
  ediciones: [
    {
      carpeta: "01",
      nombre: "Nº 01 · Memoria 2022 - 2025",
      pdf: "numeros/01/ccinec-separata-n01-2026.pdf",
      descargable: false,
      nota: "Visita los enlaces de los textos en azul para ver las publicaciones y documentos citados.",
      enlacesExtra: [
        { pagina: 2, texto: "ccinecali@gmail.com", url: "mailto:ccinecali@gmail.com" },
        { pagina: 2, texto: "@ccinec__", url: "https://www.instagram.com/ccinec__/" },
      ],
    },
  ],

  // Texto mientras carga
  textoCarga: "Cargando la separata…",

  // Solo para ediciones con imágenes: formato de los archivos, "jpg" o "webp"
  extension: "jpg",
};
