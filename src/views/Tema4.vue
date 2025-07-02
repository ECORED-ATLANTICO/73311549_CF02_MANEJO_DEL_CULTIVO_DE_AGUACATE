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
          img(src='@/assets/curso/temas/tema_4/img_1.png', class="img-fluid")
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
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema_4/img_2.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Una vez el aguacate llega al centro de acopio o planta de poscosecha, debe pasar por un proceso de clasificación, el cual tiene como finalidad separar los frutos según criterios de calidad y características físicas. 
          p.mb-0 Este proceso puede realizarse de forma manual o mediante sistemas semiautomatizados, y debe llevarse a cabo en áreas limpias, con iluminación adecuada y personal capacitado. 
          p.mb-0 Los criterios más comunes de clasificación incluyen:

      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-lg-10.mb-5
          .row.justify-content-center.align-items-center.mb-3
            .col-12.col-lg-8.order-2.order-lg-1
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--color-primario-5")
                div(titulo="Tamaño y peso")
                  p.ps-5.mb-0 Los frutos se agrupan según rangos de calibre establecidos por el mercado nacional o internacional, definidos en gramos o número de unidades por caja. 
                  p.ps-5.mb-0 Este criterio garantiza uniformidad en la presentación del producto, facilita el empaque y asegura que se cumplan los requisitos del comprador.
                div(titulo="Color externo")
                  p.ps-5.mb-0 Se clasifica la fruta según el grado de desarrollo del color de la cáscara, diferenciando entre fruta verde (inmadura), pintona (en transición) o madura (lista para consumo).
                  p.ps-5.mb-0 Esta clasificación permite segmentar la fruta según su destino inmediato: venta en fresco, maduración controlada o procesamiento.
                div(titulo="Forma y simetría")
                  p.ps-5.mb-0 Se excluyen frutos con deformaciones evidentes, curvaturas pronunciadas, crecimiento desigual o daños mecánicos visibles que afecten su apariencia.
                  p.ps-5.mb-0 La forma regular y simétrica es un requisito importante para mercados exigentes, especialmente en exportación.
                div(titulo="Estado sanitario")
                  p.ps-5.mb-0 Se identifican y retiran frutos con signos de enfermedades fúngicas, heridas abiertas, picaduras de insectos, manchas negras (roña), moho, o cualquier daño que pueda comprometer la inocuidad y vida útil del producto. 
                  p.ps-5.mb-0 Esta inspección es clave para evitar la contaminación cruzada.
                div(titulo="Firmeza y consistencia")
                  p.ps-5.mb-0 Se verifica mediante presión manual suave si el fruto mantiene una firmeza uniforme, sin zonas blandas, hundimientos o signos de sobremaduración.
                  p.ps-5.mb-0 Los frutos demasiado blandos o con textura irregular se excluyen por riesgo de deterioro durante el transporte y almacenamiento.

            .col-9.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema_4/img_3.png', class="img-fluid")

      separador

      #t_4_2.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 4.2 Almacenamiento y transporte 
      .mb-3

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-2.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema_4/img_4.svg', class="img-fluid")
        .col-12.col-lg-10
          p.mb-0 Una vez empacados, los frutos deben almacenarse en condiciones controladas que retarden la maduración y conserven sus características comerciales.
          p.mb-0 El almacenamiento del aguacate varía según el estado fisiológico del fruto, el destino final y el tiempo estimado hasta su consumo. 
          p.mb-0 El aguacate es sensible al etileno (gas que acelera la maduración).
          p.mb-0 Por tanto, debe almacenarse lejos de productos climatéricos como banano, mango o manzana, especialmente si no se desea acelerar el proceso de maduración.
          p.mb-0 Las condiciones recomendadas para el almacenamiento son:
      
      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-lg-10.mb-5
          .tarjeta.tarjeta--fondo__slider.p-4
            SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4
              .row.justify-content-center.align-items-center
                .col-12.col-lg-6.order-2.order-lg-1.mb-0
                  h5.mb-1 Temperatura
                  p.mb-0 El aguacate debe almacenarse a temperaturas controladas para conservar su firmeza, evitar la maduración prematura y prolongar su vida útil.
                  p.mb-0 La fruta firme (no madura) se conserva adecuadamente entre 4 °C y 7 °C, mientras que la fruta madura lista para consumo debe mantenerse entre 2 °C y 4 °C. Temperaturas fuera de estos rangos pueden provocar daños por frío o acelerar procesos fisiológicos indeseados como el ablandamiento excesivo o la proliferación de hongos.
                .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema_4/img_5.png', class="img-fluid")
              .row.justify-content-center.align-items-center
                .col-12.col-lg-6.order-2.order-lg-1.mb-0
                  h5.mb-1 Humedad relativa
                  p.mb-0 Mantener una humedad relativa entre el 85 % y el 90 % es esencial para prevenir la deshidratación del fruto durante el almacenamiento.
                  p.mb-0 Un ambiente muy seco provoca pérdida de peso, arrugamiento de la piel y disminución del valor comercial.
                  p.mb-0 Por el contrario, una humedad excesiva sin ventilación adecuada puede favorecer el desarrollo de hongos.
                  p.mb-0 Se recomienda monitorear constantemente con higrómetros y aplicar sistemas de humidificación si es necesario.
                .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema_4/img_6.png', class="img-fluid")
              .row.justify-content-center.align-items-center
                .col-12.col-lg-6.order-2.order-lg-1.mb-0
                  h5.mb-1 Ventilación
                  p.mb-0 El almacenamiento del aguacate requiere ventilación continua y uniforme para permitir la renovación del aire, controlar la acumulación de gases como el etileno y evitar condiciones anaeróbicas que generen fermentación o mal olor.
                  p.mb-0 Una buena circulación del aire contribuye a mantener temperaturas homogéneas en toda la cámara, previene focos de condensación y reduce el riesgo de contaminación cruzada entre los frutos.
                .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema_4/img_7.png', class="img-fluid")
        .col-12.col-lg-10.mb-3
          .row.justify-content-center.align-items-center.mb-3
            .col-12.col-lg-10.order-2.order-lg-1
              p.mb-0 El transporte del aguacate es una etapa clave en la cadena poscosecha, ya que de su correcta ejecución depende la conservación de la calidad física y fisiológica del fruto hasta su destino final.
              p.mb-0 Este proceso debe realizarse en vehículos adecuados, con superficies internas limpias, sin residuos ni contaminantes, y preferiblemente dotados con aislamiento térmico o sistemas de refrigeración, especialmente en recorridos largos o bajo temperaturas ambientales elevadas.
            .col-9.col-lg-2.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema_4/img_8.svg', class="img-fluid")

        .col-12.col-lg-10.mb-5
          .row.justify-content-center.align-items-center.mb-3
            .col-12.col-lg-4.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema_4/img_9.png', class="img-fluid")
            .col-12.col-lg-8
              p.mb-0 Para preservar la integridad del producto durante el traslado, las cajas o canastillas deben apilarse correctamente, sin sobrepeso, evitando deformaciones o bloqueos que impidan la circulación de aire.
              p.mb-3 Se deben minimizar las vibraciones, los impactos, la exposición directa al sol y las altas temperaturas, ya que estas condiciones pueden acelerar la maduración, provocar daños mecánicos internos y reducir la vida útil del aguacate.
              .cajon.color-color-secundario-mix-5.p-4
                p.mb-0 En el caso de envíos a mercados internacionales, se deben cumplir estrictamente los protocolos fitosanitarios exigidos por el país de destino. Esto incluye, según el requerimiento del cliente o normativa de importación:
        .col-12.col-lg-10.mb-3
          .row.justify-content-center.align-items-center.mb-3
            .col-12.col-lg-3.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema_4/img_10.png', class="img-fluid")
            .col-12.col-lg-9.mb-lg-0.mb-3
    




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
