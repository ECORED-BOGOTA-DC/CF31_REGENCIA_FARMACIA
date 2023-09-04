<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Cliente

    .row.justify-content-center.align-items-center.mb-5
      .col-4.col-lg-1
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema7/img1.svg', alt='Imágen decorativa')

      .col-lg-11
        p(data-aos="fade-left") Recuerde que el cliente en salud es la persona que adquiere un servicio que necesita o desea para sí mismo o para otra persona. Es necesario recalcar que el usuario es el motivo principal por el que se crean las instituciones de salud.

        p(data-aos="fade-left") En el diario vivir de las instituciones se maneja diversidad o tipos de clientes, que si se diferencian sus rasgos o características será más fácil saber cómo se deben tratar.

    .row.mb-5(data-aos="fade-left")
      p Los clientes se pueden clasificar en:

    .row.bg-titulo4.align-items-center.p-1.mb-5(data-aos="fade-right")
      h3.my-3 Cliente según su nivel de fidelización


    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema7/img2.svg', alt='Imágen decorativa').img1-tm7

      .col-lg-9
        .tarjeta.tarjeta-azul2.p-4
          .row
            .col-lg-2
            .col-lg-10
              p #[b Cliente ocasional:] sus adquisiciones no tienen una frecuencia establecida.

              p #[b Cliente de compra regular:] la mayor parte de las compras las realiza en el establecimiento; pero también hay momentos donde las adquiere en otra parte.

              p #[b Clientes de compra frecuente:] normalmente adquiere los productos del establecimiento.

              p.mb-0 #[b Clientes-embajadores:] son los clientes frecuentes que además hacen propaganda con sus conocidos sobre la calidad los productos.

    .row.bg-titulo4.align-items-center.p-1.mb-5(data-aos="fade-right")
      h3.my-3 Cliente según su comportamiento


    .row.justify-content-center.align-items-center.mb-5
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta-azul4.p-4
          .row.mb-3
            .col-4
              img(src='@/assets/curso/temas/tema7/img3.svg' alt='Imágen decorativa')

          p.text-center #[b Cliente amable:] su actitud es amigable, asienta con un sí a todo lo que se le dice; pero no muestra claridad en las cosas, por lo cual la mejor estrategia es enseñarle pocos productos.

        .tarjeta.tarjeta-azul4.p-4
          .row.mb-3
            .col-4
              img(src='@/assets/curso/temas/tema7/img4.svg' alt='Imágen decorativa')

          p.text-center #[b Cliente reflexivo:] le gusta tener las cosas claras y la información completa antes de realizar cualquier compra, porque son muy organizados. Requieren ser atendidos con paciencia, tranquilidad y datos precisos del producto.

        .tarjeta.tarjeta-azul4.p-4
          .row.mb-3
            .col-4
              img(src='@/assets/curso/temas/tema7/img5.svg' alt='Imágen decorativa')

          p.text-center #[b Cliente entusiasta:] son muy conversadores y no siempre sus temas tienen que ver con la compra del producto, por lo cual el vendedor es quien debe enfocar la conversación en el producto; pero con sutileza.

        .tarjeta.tarjeta-azul4.p-4
          .row.mb-3
            .col-4
              img(src='@/assets/curso/temas/tema7/img6.svg' alt='Imágen decorativa')

          p.text-center #[b Cliente tímido:] no se acercan mucho y no sostienen miradas con el vendedor. Requiere sentirse en confianza, por lo cual no se debe mirar muy fijamente a los ojos o hacerle preguntas personales.

        .tarjeta.tarjeta-azul4.p-4
          .row.mb-3
            .col-4
              img(src='@/assets/curso/temas/tema7/img7.svg' alt='Imágen decorativa')
              
          p.text-center #[b Cliente indeciso:] no tiene muy claro si realizar la compra o no, por lo cual pregunta mucho. Ante esto se debe tener paciencia y explicarle todo lo que requiera sin presionarlo.

        .tarjeta.tarjeta-azul4.p-4
          .row.mb-3
            .col-4
              img(src='@/assets/curso/temas/tema7/img8.svg' alt='Imágen decorativa')
              
          p.text-center #[b Cliente silencioso:] es de pocas palabras; pero muy buen escucha de todo lo que se le dice. No manifiesta de entrada lo que necesita. Se debe ser amable con él, darle opciones y mostrar interés.

        .tarjeta.tarjeta-azul4.p-4
          .row.mb-3
            .col-4
              img(src='@/assets/curso/temas/tema7/img9.svg' alt='Imágen decorativa')
              
          p.text-center #[b Cliente discutidor:] llega con actitud desafiante y soberbia. Ante este tipo de cliente se debe conservar la calma y evitar a toda costa caer en una discusión con él.

        .tarjeta.tarjeta-azul4.p-4
          .row.mb-3
            .col-4
              img(src='@/assets/curso/temas/tema7/img10.svg' alt='Imágen decorativa')
              
          p.text-center #[b Cliente orgulloso:] es muy bueno con la labia y cree sabérsela todas, por lo cual no permite que lo asesoren. Si permite un consejo se le brinda con certeza y claridad.

        .tarjeta.tarjeta-azul4.p-4
          .row.mb-3
            .col-4
              img(src='@/assets/curso/temas/tema7/img11.svg' alt='Imágen decorativa')
              
          p.text-center #[b Cliente escéptico:] es desconfiado y prevenido, por lo que pregunta las ventajas y desventajas del producto, pues teme ser engañado.

        .tarjeta.tarjeta-azul4.p-4
          .row.mb-3
            .col-4
              img(src='@/assets/curso/temas/tema7/img12.svg' alt='Imágen decorativa')
              
          p.text-center #[b Cliente ocupado:] desde el inicio su saludo va acompañado de un “cuento con poco tiempo”, suele ser impaciente y querer que lo atiendan de inmediato.

    .row.bg-titulo4.align-items-center.p-1.mb-5(data-aos="fade-right")
      h3.my-3 Clientes en función de su satisfacción


    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")
      .col-lg-10
        .tarjeta.tarjeta-morada.p-4
          .row
            .col-lg-10
              ul.lista-ul--color.fa-ul2
                li
                  i.fas.fa-check-circle
                  p.mb-0 #[b Clientes complacidos:] se muestran satisfechos con la atención y la compra, por lo que suelen convertirse en clientes-embajadores.        
                li
                  i.fas.fa-check-circle
                  p.mb-0 #[b Clientes satisfechos:] se muestran satisfechos con la atención y la compra; pero si en otra parte les ofrecen a un precio más bajo no dudan en comprar allí, son clientes que generan estar en la búsqueda de estrategias para fidelizarlos.
                li
                  i.fas.fa-check-circle
                  p.mb-0 #[b Clientes indiferentes:] su postura es cambiante por lo que pueden cambiar de marca con mucha facilidad.
                li
                  i.fas.fa-check-circle
                  p.mb-0 #[b Clientes insatisfechos:] son clientes que no quedan satisfechos o con la atención o con el producto, por lo cual rompen relaciones comerciales con el establecimiento.
                li
                  i.fas.fa-check-circle
                  p.mb-0 #[b Clientes rehenes:] son los clientes insatisfechos; pero que no se van porque no encuentran alternativas accesibles o porque no pueden.

      .col-lg-2
        figure
          img(src='@/assets/curso/temas/tema7/img13.svg', alt='Imágen decorativa').img13-tm7



</template>

<script>
export default {
  name: 'Tema7',
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
