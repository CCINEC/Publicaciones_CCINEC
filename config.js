/* =========================================================
   CONFIGURACIÓN DE LA REVISTA
   Este es el único archivo que necesitas editar para
   publicar números nuevos.
   Sitio: https://ccinec.github.io/Publicaciones_CCINEC/
   ========================================================= */

const CONFIG = {
  // Nombre que aparece arriba y en la pestaña del navegador
  revista: "Publicaciones CCINEC | Nº 02",

  // Botón arriba a la derecha que lleva a la separata (bórralo para ocultarlo)
  relacionado: { texto: "Ver separata", url: "separata/" },

  // Lista de ediciones. La PRIMERA es la que se abre por defecto,
  // así que pon siempre el número más reciente arriba.
  //
  //   carpeta:       nombre de la carpeta dentro de /numeros (se usa en el enlace ?edicion=)
  //   nombre:        cómo aparece en el menú (el menú solo se muestra si hay 2 ediciones o más)
  //   pdf:           ruta al PDF (relativa: así sigue funcionando aunque cambie la dirección del sitio)
  //   descargable:   true muestra el botón "Descargar PDF"; false lo oculta
  //   indice:        páginas del PDF donde está el índice y "desfase" entre la
  //                  numeración impresa y la página real del archivo.
  //                  Ej.: si la página impresa 4 es la página 6 del PDF, desfase = 2.
  //                  Bórralo si la edición no tiene índice.
  //   nota:          texto de ayuda sobre la revista. Bórralo para no mostrar la nota.
  //                  El visor le agrega solo cómo ampliar las páginas.
  //   enlacesExtra:  enlaces que no vienen en el PDF: el visor busca el texto en esa
  //                  página del PDF y lo vuelve clicable.
  //
  // (También se puede cargar una edición desde imágenes 001.jpg, 002.jpg…:
  //  en vez de pdf, pon paginas: con la cantidad total de páginas.)
  ediciones: [
    {
      carpeta: "02",
      nombre: "Nº 02 · Octubre 2026",
      pdf: "numeros/02/ccinec-n02-2026.pdf",
      descargable: false,
      indice: { paginas: [4, 5], desfase: 2 },
      nota: "Navega los contenidos desde los títulos del índice y visita los enlaces de las anotaciones.",
      enlacesExtra: [
        { pagina: 3, texto: "ccinecali@gmail.com", url: "mailto:ccinecali@gmail.com" },
        { pagina: 3, texto: "@ccinec__", url: "https://www.instagram.com/ccinec__/" },
      ],
    },
  ],

  // Texto mientras carga
  textoCarga: "Cargando la revista…",

  // Solo para ediciones con imágenes: formato de los archivos, "jpg" o "webp"
  extension: "jpg",
};
