<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Manejo agronómico 
    .bg_img_2.mb-3
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-5.mb-lg-0.mb-3
          figure
            img(src='@/assets/curso/temas/tema_2/img_1.png', class="img-fluid")
        .col-12.col-lg-7.mb-0
          p.mb-0 El manejo agronómico del cultivo de aguacate comprende todas las actividades que permiten el crecimiento saludable de las plantas desde su establecimiento hasta la fase productiva.
          p.mb-0 Estas labores deben planificarse de manera técnica, respetando los requerimientos específicos de la especie y su adaptación al entorno. 
          p.mb-0 En esta etapa, se destaca la importancia de las labores culturales como el tutorado, el plateo y las podas, además del diseño y aplicación de un programa de fertilización racional y un plan de Manejo Integrado de Plagas y Enfermedades (MIPE), que asegure la sanidad vegetal, la sostenibilidad del cultivo y la calidad de los frutos.

      separador

      #t_2_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 2.1 Labores culturales
      .mb-3

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-2.mb-lg-5.mb-3
          figure
            img(src='@/assets/curso/temas/tema_2/img_2.png', class="img-fluid")
        .col-12.col-lg-10.mb-5
          p.mb-0 Durante los primeros meses del establecimiento del cultivo, las plantas son vulnerables a factores climáticos como el viento, así como a interferencias con otras especies vegetales (arvenses) que compiten por agua, luz y nutrientes.
          p.mb-0 Por eso, es fundamental realizar labores culturales oportunas que contribuyan a la formación estructural de los árboles, al mejoramiento del suelo y a la prevención de problemas sanitarios.
        
        .col-12.col-lg-10.mb-0
          .tarjeta.tarjeta--fondo__slider.p-4
            SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-4
              .row.justify-content-center.align-items-center
                .col-12.col-lg-6.order-2.order-lg-1.mb-0
                  h5 Tutorado
                  p.mb-0 Se recomienda tutorar cada plántula al momento de la siembra, especialmente en zonas con vientos fuertes o lluvias intensas.
                  p.mb-0 El tutor se coloca de forma vertical, a 10 cm de la base del árbol, sin perforar la bolsa radicular ni dañar las raíces.
                  p.mb-0 Se utiliza cuerda de yute o cinta biodegradable para sujetar el tallo al tutor con amarre en forma de “8” que evite la estrangulación del tallo. 
                  p.mb-0 Esta labor asegura que el tallo crezca recto, facilitando futuras podas de formación y reduciendo el riesgo de quiebre o inclinación.
                .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema_2/img_3.png', class="img-fluid")
              .row.justify-content-center.align-items-center
                .col-12.col-lg-6.order-2.order-lg-1.mb-0
                  h5 Plateo
                  p.mb-0 Consiste en limpiar una zona circular alrededor del tronco, llamada “plato”, para mejorar la absorción de agua y nutrientes. El diámetro del plateo debe corresponder al tamaño de la copa. 
                  p.mb-0 Esta técnica también permite aplicar fertilizantes o materia orgánica de forma localizada y evita la competencia con malezas.
                  p.mb-0 Para mantener la humedad y proteger el sistema radicular, se recomienda cubrir el plato con <I>mulch</I> orgánico como hojas secas, paja o cáscara de arroz.
                .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema_2/img_4.png', class="img-fluid")
              .row.justify-content-center.align-items-center
                .col-12.col-lg-6.order-2.order-lg-1.mb-0
                  h5 Podas
                  p.mb-0 Las podas son fundamentales para dirigir el crecimiento del árbol, evitar entrecruzamientos y mejorar la entrada de luz y aire. 
                  p.mb-0 Existen dos tipos principales:
                  ul.mb-0
                    li <b>Poda de formación:</b> se realiza durante los dos primeros años para establecer una estructura de copa equilibrada.
                        p.mb-0 Se seleccionan entre 3 a 5 ramas principales distribuidas en diferentes direcciones, con ángulos amplios respecto al tallo.
                        p.mb-0 Se eliminan ramas con orientación hacia abajo, cruzadas o débiles.
                    li <b>Poda de mantenimiento:</b> se realiza a partir del tercer año para remover ramas secas, enfermas, mal orientadas o brotes innecesarios.
                        p.mb-0 Esta poda reduce la incidencia de plagas y enfermedades, mejora la calidad del fruto y prolonga la vida útil del árbol.
                  p.mb-0 Cada corte debe hacerse con herramientas desinfectadas (alcohol al 70 % o hipoclorito de sodio al 5 %) y, preferiblemente, aplicar cicatrizante a base de cobre en los cortes gruesos.
                .col-12.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3
                  figure
                    img(src='@/assets/curso/temas/tema_2/img_5.png', class="img-fluid")

      separador

      #t_2_2.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 2.2 Fertilización y MIPE
      .mb-3

      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-4.mb-lg-5.mb-3
          figure
            img(src='@/assets/curso/temas/tema_2/img_7.png', class="img-fluid")
        .col-12.col-lg-8.mb-5
          p.mb-0 La correcta nutrición del cultivo de aguacate y el manejo fitosanitario sostenible son pilares fundamentales para lograr productividad, calidad e inocuidad del fruto.
          p.mb-0 Para ello, se deben implementar de manera articulada prácticas de fertilización balanceada y el enfoque de Manejo Integrado de Plagas y Enfermedades (MIPE), el cual permite reducir el uso indiscriminado de agroquímicos, preservar la biodiversidad y cumplir con estándares de sostenibilidad exigidos por los mercados actuales.
        .col-12.col-lg-10.mb-5
          .row.d-flex.align-items-stretch.justify-content-center
            .col-9.col-lg-4.d-none.d-lg-flex.p-0
              figure.w-100.d-flex.flex-column
                img(src='@/assets/curso/temas/tema_2/img_8.png', class="img-fluid").h-100
            .col-12.col-lg-8.ps-0.d-flex
              .w-100.d-flex.flex-column
                .tarjeta.color-secundario-5.p-3.rounded-0.h-100
                  p.mb-0 La fertilización técnica del aguacate es un proceso agronómico planificado que busca suplir las necesidades nutricionales de la planta de manera eficiente y sostenible, para lograr un desarrollo vigoroso, alta productividad y buena calidad del fruto. 
                  p.mb-0 Esta especie presenta un sistema radicular superficial, poco ramificado y sin pelos absorbentes, lo que reduce su capacidad natural para extraer nutrientes del suelo.
                  p.mb-0 Por esta razón, el suministro de elementos esenciales debe realizarse de forma precisa, controlada y oportuna, con base en análisis de suelo y foliares, así como en la fase fenológica en la que se encuentre el cultivo.

        .col-12.col-lg-10.mb-3   
          .cajon.color-acento-contenido-mix-5.p-4
            p.mb-0 La demanda nutricional del aguacate se modifica a lo largo de su ciclo de desarrollo, por lo que es necesario ajustar el suministro de nutrientes según la etapa fenológica. Cada fase del cultivo requiere elementos específicos que cumplen funciones fisiológicas clave para el crecimiento, la floración, el llenado del fruto y la calidad final de la cosecha.
        
        .col-12.col-lg-10.mb-3 
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 1.
            |  Requerimientos nutricionales por etapa del aguacate.
          .tabla-a.mb-3
            table
              caption.mt-3
                p <b>Fuente.</b> SENA, 2025.
              thead
                tr
                  th Etapa del cultivo
                  th Elementos principales
                  th Función
              tbody
                tr
                  td Establecimiento (0 - 2 años)
                  td Fósforo, nitrógeno y calcio
                  td Desarrollo radicular y brotación inicial.
                tr
                  td Floración y cuajado
                  td Boro, zinc, manganeso y hierro
                  td Formación de polen, fecundación y diferenciación floral.
                tr
                  td Desarrollo del fruto
                  td Potasio, calcio, magnesio y azufre
                  td Llenado del fruto, firmeza de pulpa y transporte de azúcares.
                tr
                  td Maduración y cosecha
                  td Potasio, boro y magnesio
                  td Mejora de calidad, sabor, textura y vida poscosecha.
          
          p.mb-0 El plan de fertilización debe actualizarse anualmente, ajustándose a los resultados de los análisis del lote, al comportamiento de la variedad sembrada y a las condiciones climáticas locales.
          p.mb-5 Un programa bien estructurado no solo mejora la producción y la calidad del fruto, sino que fortalece la resistencia del cultivo a plagas, enfermedades y condiciones de estrés.
        .col-12.col-lg-8.mb-3 
          /// contenedor especial
        .col-12.col-lg-10.mb-3 
          p.mb-0 En el cultivo de aguacate, el MIPE es obligatorio para garantizar la sostenibilidad, prevenir residuos de agroquímicos en el fruto y cumplir con certificaciones de Buenas Prácticas Agrícolas (BPA) y normas internacionales de exportación.
          p.mb-5 Su implementación se basa en cinco pilares fundamentales:
          .row.d-flex.align-items-stretch.justify-content-center.align-items-center.mb-3
            .col-12.col-lg-8.order-2.order-lg-1.mb-lg-0.mb-3
              LineaTiempoD.color-adicional-3
                .row(numero="1" titulo="Monitoreo")
                  .col-md-12.mb-4.mb-md-0
                    p.text-small.mb-0 Observación sistemática para detectar poblaciones de plagas como ácaros, trips, escamas, barrenadores o moscas. 
                    p.text-small.mb-0 Se recomienda establecer parcelas testigo y registrar las condiciones que favorecen su aparición.
                .row(numero="2" titulo="Umbrales de acción")
                  .col-md-12.mb-4.mb-md-0
                    p.text-small.mb-0 No se debe intervenir con químicos hasta que las poblaciones de plaga superen los niveles económicamente dañinos.
                    p.text-small.mb-0 Esto evita aplicaciones innecesarias.
                .row(numero="3" titulo="Control biológico")
                  .col-md-12.mb-4.mb-md-0
                    p.text-small.mb-0 Uso de organismos benéficos como hongos entomopatógenos (<I>Beauveria bassiana, Metarhizium anisopliae</I>), avispas parasitoides o bacterias como <I>Bacillus thuringiensis</I> que controlan plagas sin afectar el ambiente.
                .row(numero="4" titulo="Control cultural")
                  .col-md-12.mb-4.mb-md-0
                    p.text-small.mb-0 Incluye prácticas como podas sanitarias, manejo de coberturas vegetales, eliminación de residuos de cosecha, rotación de cultivos o barreras vivas que dificulten el ingreso de insectos.
                .row(numero="5" titulo="Uso racional de agroquímicos")
                  .col-md-12.mb-4.mb-md-0
                    p.text-small.mb-0 Cuando es necesario aplicar insecticidas, se eligen productos de categoría toxicológica baja (III y IV), respetando los periodos de carencia y reentrada.
                    p.text-small.mb-0 Se recomienda alternar principios activos para evitar resistencia.
            .col-7.col-lg-4.order-1.order-lg-2.mb-lg-0.mb-3.d-flex
              figure.w-100.d-flex.flex-column
                img(src='@/assets/curso/temas/tema_2/img_11.png', class="img-fluid").height-100
</template>

<script>
export default {
  name: 'Tema2',
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
