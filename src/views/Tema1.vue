<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fases del proceso de <i>marketing</i>

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-md-3.col-6.mb-lg-0.mb-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/img1.svg', alt='Imágen decorativa')
      .col-lg-11(data-aos="fade-left")
        p La mejor manera que tiene una empresa de cualquier índole de conocer, entender, identificar las necesidades más puntuales y gustos de sus clientes es por medio del <i>marketing</i>.
        p Las fases de todo el proceso de <i>marketing</i> ayudan a reconocer las actividades prevalentes a realizar y, cuándo y cómo hacerlas realidad, de manera que la rentabilidad obtenida sea a gran escala. Estas fases son:


    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .tarjeta.tarjeta-azul.p-4
        PasosB.color-acento-contenido
          .row.justify-content-center.align-items-center(titulo="Estudiar")
            .col-lg-6.order-lg-1.order-2
              h4 1. Estudiar las oportunidades del mercado
              p Esta fase consiste en buscar, analizar e investigar exhaustivamente todas las oportunidades que el mercado ofrece, es decir, identificar competidores, las necesidades más importantes de la comunidad, entre otros, que permitan lograr un negocio rentable. Para lograr esto es de gran ayuda el análisis de datos (cuáles son las demandas de los productos y los servicios más fuertes de la sociedad).
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imágen decorativa')

          .row.justify-content-center.align-items-center(titulo="Penetrar")
            .col-lg-6.order-lg-1.order-2
              h4 2. Penetrar el mercado
              p En esta fase se selecciona el mercado al cual se quiere llegar, es decir, se debe segmentar el mercado, de manera que el enfoque y esfuerzo esté completamente dirigido a ello. Para ello, es necesario tener claras las características de los productos o servicios que se van a incorporar, por ejemplo, servicio de inyectología o charlas que van sujetas a la clase de compradores que hacen uso de los servicios. 
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img3.svg', alt='Imágen decorativa')

          .row.justify-content-center.align-items-center(titulo="Análisis")
            .col-lg-6.order-lg-1.order-2
              h4 3. Análisis del mercado
              p Teniendo claro el mercado a penetrar, en esta fase se debe realizar un análisis minucioso de ese mercado, de manera que se identifiquen a mayor profundidad los posibles clientes y la competencia. Una herramienta útil en este caso es la matriz DOFA, ya que ayuda a reconocer las debilidades, oportunidades, fortalezas y amenazas del mercado a penetrar. Las oportunidades y las amenazas vienen del exterior, por lo cual no se tiene dominio sobre ellas; pero bien identificadas se les puede poner a funcionar a favor de la empresa; las debilidades y fortalezas son internas, por lo cual es factible tomar acción sobre estas. Es importante tener presente que esta fase es la clave para lograr el éxito esperado, ya que la toma de decisiones está soportada sobre la información obtenida. 
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img4.svg', alt='Imágen decorativa')

          .row.justify-content-center.align-items-center(titulo="Diseño")
            .col-lg-6.order-lg-1.order-2
              h4 4. Diseño de estrategias
              p Esta fase es considerada el punto de inflexión de todo el plan de <i>marketing</i>, ya que aquí se diseña cada una de las estrategias que se van a utilizar. En esta fase toma sentido el <i>marketing mix</i> conformado por las 4 Ps (precio, producto, promoción y plaza).
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img5.svg', alt='Imágen decorativa')

          .row.justify-content-center.align-items-center(titulo="Diseñar planes")
            .col-lg-6.order-lg-1.order-2
              h4 5. Diseñar planes de acción para implementar estrategias
              p Este punto consiste en definir las directrices a seguir, de manera que las estrategias diseñadas sean implementadas de forma correcta y además se ponen en acción todas las estrategias anteriormente diseñadas, con el recurso humano necesario, competente y con los materiales que se hayan previsto.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img6.svg', alt='Imágen decorativa')

          .row.justify-content-center.align-items-center(titulo="Control")
            .col-lg-6.order-lg-1.order-2
              h4 6. Control y evaluación del proceso
              p Esta es la última fase del proceso y es igual de importante que las demás fases, ya que es en este punto donde se entran a evaluar si las estrategias definidas están cumpliendo con los objetivos propuestos de rentabilidad. Además, esta fase permite evidenciar errores, fallas o desviaciones a tiempo y, así mismo, realizar las pertinentes correcciones.
            .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema1/img7.svg', alt='Imágen decorativa')


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
