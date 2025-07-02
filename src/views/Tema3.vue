<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Cosecha
    .bg_img_2.mb-3
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-5.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema_3/img_1.png', class="img-fluid")
        .col-12.col-lg-7.mb-0
          p.mb-0 La cosecha del aguacate representa una etapa crítica del proceso productivo, ya que de su correcta ejecución depende la calidad final del fruto, su vida útil y su aceptación en el mercado.
          p.mb-0 Esta fase no solo implica la recolección de los frutos maduros, sino también la aplicación de criterios técnicos que garanticen la integridad física, fisiológica y sanitaria del producto.
          p.mb-0 Identificar con precisión el momento óptimo de cosecha, utilizar las herramientas adecuadas y adoptar buenas prácticas en el manejo en campo, permite minimizar pérdidas poscosecha, preservar la calidad e inocuidad, y facilitar la comercialización nacional o internacional.

      separador

      #t_3_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 3.1 Madurez y recolección
      .mb-3

      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-lg-2.mb-lg-5.mb-3
          figure
            img(src='@/assets/curso/temas/tema_3/img_2.svg', class="img-fluid")
        .col-12.col-lg-10.mb-5
          p.mb-0 La cosecha del aguacate requiere criterios técnicos que aseguren la calidad y vida útil del fruto.
          p.mb-0 Al ser un fruto climatérico, su maduración ocurre fuera del árbol, por lo que es fundamental identificar el momento adecuado de corte.
          p.mb-0 Esta etapa debe basarse en indicadores confiables de madurez fisiológica y ejecutarse con herramientas y prácticas que minimicen el deterioro y preserven la inocuidad del producto.
      .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-3
        .col-12.col-lg-5.mb-3.d-flex
          .w-100.d-flex.flex-column
            .tarjeta.color-acento-botones.height-100
              figure
                img(src="@/assets/curso/temas/tema_3/img_3.png", class="img-fluid")
              p.p-3.pt-2.pb-0.mb-0 El punto óptimo de cosecha se identifica mediante signos como el cambio de color en la cáscara y el pedúnculo, tiempo desde floración, materia seca, contenido de aceite y textura de la semilla.
              p.p-3.pt-2.mb-0 Cada variedad requiere evaluación específica.

        .col-12.col-lg-5.mb-3.d-flex
          .w-100.d-flex.flex-column
            .tarjeta.color-terciario.height-100
              figure
                img(src="@/assets/curso/temas/tema_3/img_4.png", class="img-fluid")
              p.p-3.pb-0.pt-2.mb-0 La recolección se realiza manualmente con cuchillas limpias, dejando 0,5 a 1 cm de pedúnculo. Se evita cosechar con humedad y se recolecta en la mañana. 
              p.p-3.pt-2.mb-0 Frutos golpeados, húmedos o mal manipulados pierden calidad y vida útil.

    separador

    #t_3_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.2 Manejo en campo
    .mb-3

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-lg-10
        .row.justify-content-center.align-items-center.mb-3
          .col-12.col-lg-7.order-2.order-lg-1.mb-lg-0.mb-3
            p.mb-0 El manejo en campo del fruto de aguacate, posterior a la cosecha, es determinante para conservar su calidad, prolongar su vida útil y evitar pérdidas por daños físicos o contaminación.
            p.mb-0 Esta etapa incluye una secuencia de acciones clave que deben ejecutarse de forma higiénica, ordenada y oportuna, desde la preselección hasta el transporte hacia la planta de poscosecha.
            p.mb-0 Aplicar correctamente este protocolo mejora la eficiencia operativa y asegura un producto óptimo para su comercialización.
          .col-12.col-lg-5.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_3/img_5.png', class="img-fluid")
      .col-12.col-lg-10
        .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-3
          .col-10.col-lg-5.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/temas/tema_3/img_6.png', class="img-fluid")
          .col-12.col-lg-7.order-2.order-lg-1.mb-lg-0.mb-3
            LineaTiempoD.color-adicional-3
              .row(numero="1" titulo="Preselección en campo")
                .col-md-12.mb-4.mb-md-0
                  p.text-small.mb-0 Durante el acopio inicial, descarta frutos con daños visibles como picaduras de insectos, deformaciones, necrosis o presencia de hongos.
                  p.text-small.mb-0 Esta selección evita pérdidas posteriores, reduce la carga microbiana y mejora la eficiencia en la planta de poscosecha.
              .row(numero="2" titulo="Acondicionamiento del fruto")
                .col-md-12.mb-4.mb-md-0
                  p.text-small.mb-0 Ubica los frutos seleccionados en canastillas plásticas limpias, ventiladas, sin sobrepasar cuatro capas ni 20 kg por unidad. 
                  p.text-small.mb-0 Las canastillas deben ser lisas, resistentes, fáciles de lavar y con dimensiones estandarizadas para facilitar el transporte.
              .row(numero="3" titulo="Condiciones del acopio")
                .col-md-12.mb-4.mb-md-0
                  p.text-small.mb-0 Evita que el fruto toque el suelo. Ubica las canastillas en áreas sombreadas, ventiladas y limpias, protegidas de animales, lluvia o contaminantes.
                  p.text-small.mb-0 Mantén el tiempo entre la recolección y el ingreso a planta lo más corto posible.
              .row(numero="4" titulo="Transporte hasta planta")
                .col-md-12.mb-4.mb-md-0
                  p.text-small.mb-0 Transporta los frutos en vehículos limpios, libres de residuos, con ventilación adecuada y protegidos del sol directo.
                  p.text-small.mb-0 Asegura el acomodo para evitar compresión, fricción o daños térmicos que afecten su calidad y vida útil.

</template>

<script>
export default {
  name: 'Tema3',
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
