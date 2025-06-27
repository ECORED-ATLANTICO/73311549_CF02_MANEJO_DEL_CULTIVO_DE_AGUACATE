<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.order-2.order-lg-1
        p.mb-0 El componente formativo “Manejo del cultivo de aguacate, cosecha y postcosecha” ofrece al aprendiz herramientas técnicas y prácticas para abordar el proceso integral de producción del aguacate, desde la preparación del terreno y la siembra hasta la recolección, selección y conservación del fruto. 
        p.mb-3 A partir del conocimiento de los factores edafoclimáticos, prácticas culturales, nutricionales y sanitarias del cultivo, se fortalecen las competencias en la aplicación de buenas prácticas agrícolas para asegurar la productividad, sostenibilidad y calidad del fruto.
        .cajon.color-acento-contenido.p-4
          p.mb-0 Este componente también enfatiza en el manejo poscosecha bajo criterios técnicos y normativos, con un enfoque en la trazabilidad del producto y las exigencias del mercado nacional e internacional.
          p.mb-0 Además, promueve la toma de decisiones agronómicas sustentadas en parámetros técnicos y la adaptación tecnológica.
          p.mb-0 Así, se contribuye a la formación de talento humano capacitado para implementar sistemas de producción de aguacate eficientes, sostenibles y orientados al mercado.
      .col-8.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3.d-flex
        figure.w-100.d-flex.flex-column
          img(src='@/assets/curso/introduccion/img_1.png', class="img-fluid").h-100  

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/5d_qM71avJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
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
