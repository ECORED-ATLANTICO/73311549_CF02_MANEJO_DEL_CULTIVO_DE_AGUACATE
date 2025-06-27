<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-3.mb-lg-0.mb-3.d-flex
        figure.w-100.d-flex.flex-column
          img(src='@/assets/curso/sintesis/img_1.png', class="img-fluid").height-100  
      .col-12.col-lg-9
        p.mb-0 El componente formativo “Manejo del cultivo de aguacate, cosecha y poscosecha” permite comprender los procesos técnicos del cultivo de aguacate, desde su establecimiento en campo hasta su transporte.
        p.mb-0 Se inicia con el estudio de los criterios para la selección y preparación del lote, así como su adecuación física y nutricional.
        p.mb-0 Posteriormente, se profundiza en el manejo agronómico, lo que permite establecer su importancia en el desarrollo del cultivo mediante labores culturales, fertilización y manejo integrado de plagas y enfermedades (MIPE).
        p.mb-0 Asimismo, se analizan los procesos de cosecha, proporcionando herramientas para determinar el punto de madurez y aplicar técnicas de recolección que conserven la calidad del fruto.
        p.mb-0 Se presentan prácticas que influyen en la manipulación en campo, así como en el empaque y clasificación. La documentación aborda los componentes de la poscosecha, incluyendo almacenamiento, transporte y trazabilidad.
        p.mb-0 Para fortalecer la aplicación de estos conceptos, se detallan aspectos logísticos y fitosanitarios. Finalmente, se analiza la relación entre buenas prácticas agrícolas, calidad comercial y sostenibilidad.
    .row.justify-content-center
      .col-12.col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
