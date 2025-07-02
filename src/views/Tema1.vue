<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Establecimiento del cultivo
    .bg_img_1.mb-3
      .bloque-texto-g.bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema_1/img_1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Para iniciar el cultivo de aguacate es necesario preparar bien el terreno, ya que de esto depende el buen desarrollo de las plantas.
          p.mb-0 Lo primero es hacer una revisión del lote para conocer si el suelo, el clima, la pendiente y la calidad del agua son adecuados para sembrar.
          p.mb-0 A continuación, se abordan los criterios técnicos para la selección del lote y los pasos necesarios para su adecuada preparación, así como las consideraciones prácticas para realizar una siembra eficiente, organizada y productiva.

      separador

      #t_1_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 1.1	Selección y preparación del lote
      .mb-3

      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-lg-2.mb-lg-5.mb-3
          figure
            img(src='@/assets/curso/temas/tema_1/img_2.svg', class="img-fluid")
        .col-12.col-lg-10.mb-5
          p.mb-0 Para establecer una plantación de aguacate es necesario identificar y acondicionar un lote que cumpla con condiciones agroecológicas favorables. 
          p.mb-0 Este proceso requiere evaluar tanto las características físicas del terreno como la disponibilidad de servicios esenciales, incluyendo el acceso a fuentes de agua, vías de transporte y barreras naturales contra el viento.
        .col-12.col-lg-10.mb-5
          .tarjeta.tarjeta--fondo__slider.p-4
            SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4
              .row.justify-content-center.align-items-center
                .col-12.col-lg-6.order-2.order-lg-1.mb-0
                  p.mb-0 El aguacate prospera en suelos profundos, bien drenados, con pH entre 5,5 y 7,0, y con textura franca a franco-arenosa.
                  p.mb-0 La profundidad efectiva del suelo debe superar los 60 cm para permitir un adecuado desarrollo radicular.
                  p.mb-0 Es crucial evitar zonas con napas freáticas superficiales o suelos compactados que puedan generar encharcamientos y favorecer la aparición de enfermedades radiculares como <I>Phytophthora cinnamomi.</I>
                .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema_1/img_3.png', class="img-fluid")
              .row.justify-content-center.align-items-center
                .col-12.col-lg-6.order-2.order-lg-1.mb-0
                  p.mb-0 La pendiente del terreno ideal no debe superar el 30 %. En laderas, se debe aplicar manejo de conservación de suelos, como la construcción de terrazas, zanjas de infiltración o barreras vivas siguiendo las curvas a nivel.
                  p.mb-0 En zonas planas, el lote debe ser nivelado para evitar acumulaciones de agua y facilitar las labores mecanizadas o manuales.
                .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema_1/img_4.png', class="img-fluid")

        .col-12.col-lg-10.mb-5
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-9.order-2.order-lg-1
              p.mb-0 Antes de establecer un cultivo de aguacate, es indispensable conocer las condiciones químicas y físicas del suelo mediante un análisis técnico detallado.
              p.mb-0 Esta evaluación permite determinar los niveles de pH, salinidad, contenido de materia orgánica, textura, capacidad de intercambio catiónico (CIC), conductividad eléctrica, y concentración de nutrientes esenciales.
              p.mb-0 Con base en estos resultados, se formulan recomendaciones específicas sobre el tipo de enmiendas requeridas para acondicionar el suelo y asegurar un entorno favorable para el desarrollo de las raíces y el establecimiento saludable de la plantación.
            .col-12.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema_1/img_5.png', class="img-fluid")

        .col-12.col-lg-10.mb-0
          .row.justify-content-center.align-items-center.mb-5
            .col-8.col-lg-3.mb-lg-0.mb-3
              figure
                img(src="@/assets/curso/temas/tema_1/img_6.png", class="img-fluid")
            .col-12.col-lg-9
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--color-primario-5")
                div(titulo="Cal agrícola o dolomita")
                  p.ps-5.mb-0 Se utiliza para corregir suelos ácidos (pH < 5.5), neutralizando la toxicidad del aluminio y aumentando la disponibilidad de calcio y magnesio.
                  p.ps-5.mb-0 La cal agrícola contiene carbonato de calcio, mientras que la dolomita también aporta magnesio.
                  p.ps-5.mb-0 Se aplica de forma uniforme 30 a 45 días antes de la siembra, según análisis de suelo.
                div(titulo="Yeso agrícola")
                  p.ps-5.mb-0 Es ideal para suelos con alto contenido de sodio, ya que mejora la estructura y la permeabilidad sin modificar el pH. 
                  p.ps-5.mb-0 Libera calcio que desplaza el sodio del complejo de intercambio, facilitando su lavado con riego o lluvia.
                  p.ps-5.mb-0 Su uso está indicado especialmente en suelos compactados o con encostramiento superficial.
                div(titulo="Materia orgánica")
                  p.ps-5.mb-0 Aporta nutrientes, mejora la estructura y retención de agua, y activa la vida microbiana del suelo.
                  p.ps-5.mb-0 Se recomienda compost bien descompuesto, estiércol tratado o bokashi, aplicados antes de la siembra o alrededor del árbol en producción.
                  p.ps-5.mb-0 Su uso continuo contribuye a la sostenibilidad del cultivo y la salud del suelo.
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-2.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema_1/img_7.svg', class="img-fluid")
        .col-12.col-lg-10
          p.mb-0 Antes de ejecutar la siembra del aguacate, es fundamental llevar a cabo una secuencia de acciones técnicas que garanticen el acondicionamiento adecuado del lote.
          p.mb-0 Estas acciones permiten optimizar las condiciones físicas, químicas e hídricas del suelo, y establecer de manera precisa la ubicación de cada planta dentro del sistema productivo.
          p.mb-0 Para ello, se debe considerar la preparación mecánica del terreno, la disponibilidad y calidad del agua para riego, así como el trazado estratégico del lote de acuerdo con la topografía y el recorrido solar.
          p.mb-0 A continuación, se exploran tres aspectos clave que conforman esta etapa fundamental:
    .bg_img_1.mb-3
      .row.justify-content-center.align-items-center.mb-3
        .col-12.col-lg-10.mb-5
          ImagenInfografica.time-line-info.pulso-invertido.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema_1/img_8.png')

            .tarjeta.color-adicional-1(x="18%" y="48%" numero="" @mouseenter="mostrarModal(3)" @click="toggleModal(3)")
              .h5.mb-3 Labores de preparación del terreno
              p.mb-0 El terreno debe ser acondicionado con labores mecánicas que mejoren su estructura.
              p.mb-0 Se inicia con el desmonte y subsolado para romper capas compactadas, seguido de arado y rastrillado para aflojar el suelo y nivelar la superficie.
              p.mb-0 Esto permite una mejor infiltración del agua y facilita el crecimiento radicular uniforme.
            .tarjeta.color-adicional-1(x="48.6%" y="48%" numero="" @mouseenter="mostrarModal(3)" @click="toggleModal(3)")
              .h5.mb-3 Disponibilidad de agua
              p.mb-0 El lote debe contar con acceso continuo a una fuente de agua limpia, ya sea superficial o subterránea.
              p.mb-0 Esta disponibilidad es clave en el establecimiento, floración y llenado del fruto. 
              p.mb-0 Se recomienda analizar la calidad del agua para evitar problemas de salinidad o acumulación de sodio en el suelo.
            .tarjeta.color-adicional-1(x="80.2%" y="48%" numero="" @mouseenter="mostrarModal(3)" @click="toggleModal(3)")
              .h5.mb-3 Trazado del lote
              p.mb-0 Antes de sembrar, se marcan los sitios donde irá cada planta, teniendo en cuenta la pendiente y la dirección del sol.
              p.mb-0 El trazado puede ser cuadrado, triangular o en curvas de nivel, según el terreno.
              p.mb-0 Esta labor define el orden, la densidad y la eficiencia en el uso del espacio y la luz.
          separador

          #t_1_2.titulo-segundo.color-acento-contenido
            .h2(data-aos="fade-right") 1.2	Siembra y distancias 
          .mb-3

          p.mb-0 La siembra es una actividad técnica que requiere cuidado, precisión y conocimiento del comportamiento de las plántulas en campo.
          p.mb-5 El éxito de esta labor determina en gran medida la uniformidad de la plantación, el crecimiento inicial y la futura arquitectura del árbol.
          
          .row.justify-content-center.align-items-center.mb-3
            .col-12.col-lg-9.order-2.order-lg-1
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--color-primario-5")
                div(titulo="Época  de siembra")
                  p.ps-5.mb-0 La siembra debe realizarse al inicio de la temporada de lluvias o con un sistema de riego instalado. 
                  p.ps-5.mb-0 Esto garantiza que las plántulas reciban la humedad necesaria para su adaptación y minimiza el estrés hídrico.
                  p.ps-5.mb-0 En zonas con climas bimodales, se recomienda planificar la siembra a comienzos del primer semestre.
                div(titulo="Tipo de material vegetal")
                  p.ps-5.mb-0 Se utilizan plántulas injertadas entre 60 y 120 cm de altura, provenientes de viveros certificados.
                  p.ps-5.mb-0 El injerto debe estar bien soldado, con brotes vigorosos, sistema radicular sano y libre de plagas o enfermedades.
                  p.ps-5.mb-0 La bolsa plástica debe retirarse con cuidado para no dañar las raíces; se recomienda hacer un corte inferior y deslizar hacia arriba.
                div(titulo="Ahoyado y trasplante")
                  p.ps-5.mb-0 Los hoyos deben abrirse con al menos 30 días de anticipación y tener dimensiones mínimas de 40 cm de ancho por 50 cm de profundidad.
                  p.ps-5.mb-0 Se deben llenar con una mezcla de tierra fértil, materia orgánica y enmiendas como fosfato diamónico o cal dolomita, según el análisis de suelo.
                  p.ps-5.mb-0 El árbol se planta de forma que el cuello de la raíz quede ligeramente por encima del nivel del suelo. 
                  p.ps-5.mb-0 El hueco se rellena con tierra fina y se compacta ligeramente para evitar bolsas de aire.
                  p.ps-5.mb-0 Se debe dejar un montículo de 10 cm alrededor del tallo para evitar acumulación de agua.
                  p.ps-5.mb-0 Se finaliza con un riego de asentamiento y, de ser posible, se coloca cobertura vegetal seca (<I>mulch</I>).
                div(titulo="Distancias de siembra")
                  p.ps-5.mb-0 El marco de siembra más utilizado es de 7 X 7 metros, equivalente a 204 árboles por hectárea.
                  p.ps-5.mb-0 Esta densidad permite un adecuado equilibrio entre penetración de luz, desarrollo radicular y manejo sanitario.
                  p.ps-5.mb-0 En suelos fértiles o con riego, se pueden usar distancias menores (6 X 6 m), mientras que en terrenos de ladera o con baja fertilidad, se prefieren marcos de 8 X 8 o 9 X 9 m para reducir la competencia.

            .col-9.col-lg-3.order-1.order-lg-2.mb-lg-0.mb-3
              figure
                img(src='@/assets/curso/temas/tema_1/img_9.png', class="img-fluid")

          p.mb-0 A continuación, se presenta una tabla orientativa de densidad de siembra que permite estimar el número de árboles por hectárea según el marco de plantación seleccionado. 
          p.mb-0 La elección de la distancia depende del vigor del patrón, la fertilidad del suelo y las condiciones topográficas del lote. 
          p.mb-5 Esta información facilita la planificación eficiente del cultivo y el manejo agronómico futuro.

          .titulo-sexto.color-acento-contenido
            h5 Tabla 1.
            |  Distribución orientativa de densidad de siembra.
          .tabla-a.mb-5
            table
              caption 
                p <b>Fuente.</b> SENA, 2025.
              thead
                tr
                  th Distancia (m)
                  th Tipo de patrón
                  th Árboles/ ha (cuadrado)
                  th Árboles/ ha (triángulo)
              tbody
                tr.bg-table-01
                  td 6 X 6
                  td Alto vigor
                  td 278
                  td 321
                tr.bg-table-02
                  td 7 X 7
                  td Medio vigor
                  td 204
                  td 236
                tr.bg-table-01
                  td 8 X 8
                  td Alto vigor
                  td 156
                  td 180
                tr.bg-table-02
                  td 9 X 9
                  td Bajo vigor
                  td 123
                  td 142
    .bloque-texto-t.justify-content-center.align-items-center.mb-0
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/temas/tema_1/img_10.png')
      .bloque-texto-t__texto.col-10.mb-0
        p.mb-0 Después de la siembra, se recomienda realizar un seguimiento semanal para verificar prendimiento, detectar posibles problemas sanitarios y realizar resiembras en caso necesario. 
        p.mb-0 Durante los primeros tres meses, el árbol debe mantenerse libre de malezas, bien tutorado y con humedad constante en el plato.
        p.mb-0 El éxito de esta etapa garantiza un sistema radicular fuerte y una planta bien conformada para iniciar el ciclo productivo.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
