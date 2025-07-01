<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Poscosecha
    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-5.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/temas/tema_1/img_2.svg', class="img-fluid")
      .col-12.col-lg-7.mb-0
        p.mb-0 La etapa de poscosecha en el cultivo de aguacate comprende el conjunto de procesos realizados después de la recolección del fruto y antes de su comercialización o transformación.
        p.mb-0 Su objetivo principal es conservar la calidad, inocuidad y condiciones físicas del aguacate, optimizando su presentación comercial y su vida útil, tanto en mercado nacional como internacional.
        p.mb-0 Esta fase incluye acciones como la limpieza, clasificación, empaque, almacenamiento y transporte, todas bajo condiciones técnicas que minimicen daños mecánicos, eviten contaminaciones y conserven el estado fisiológico del fruto.

      separador

      #t_4_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 4.1 Clasificación y empaque
      .mb-3

      .bloque-texto-g.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_2.svg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Una vez el aguacate llega al centro de acopio o planta de poscosecha, debe pasar por un proceso de clasificación, el cual tiene como finalidad separar los frutos según criterios de calidad y características físicas. 
          p.mb-0 Este proceso puede realizarse de forma manual o mediante sistemas semiautomatizados, y debe llevarse a cabo en áreas limpias, con iluminación adecuada y personal capacitado. 
          p.mb-0 Los criterios más comunes de clasificación incluyen:




</template>

<script>
export default {
  name: 'Tema4',
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
