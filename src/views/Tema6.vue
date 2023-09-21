<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Canal de ventas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema6/img1.svg', alt='Imágen decorativa')
      .col-lg-8
        p(data-aos="fade-left") Es el medio que utiliza la empresa ya sea para vender o promocionar sus productos y servicios con los consumidores, este canal funciona como plataforma publicitaria y tiene como objetivo capturar la atención tanto de las personas que ya son conocedoras de la marca como las que no. Por lo cual, es de suma importancia seleccionar el canal de venta más conveniente para lo que se busca conseguir.
        p(data-aos="fade-left") La proximidad entre el fabricante y el cliente está representada por el canal de ventas, ya que es por medio de este que se acerca la mercancía al consumidor de una manera eficiente y al menor costo posible.
        p(data-aos="fade-left") Existen diferentes canales de venta y a medida que las nuevas tecnologías van creciendo se van aumentando las plataformas que permiten exhibir los productos, servicios y contactan al vendedor con el cliente. Los canales de venta se clasifican en tres funciones:

    TabsB.color-acento-contenido
      .py-4.py-md-5(titulo="El proceso de venta" :icono="require('@/assets/curso/temas/tema6/img2.svg')")
        .row
          .col-lg-7.order-lg-1.order-2
            p Se subdivide en tres canales:
            ul.lista-ul--color.fa-ul2
              li
                i.fas.fa-check-circle
                p.mb-0 #[b Venta larga:] hay participación del productor, de la compañía mayorista, de la compañía minorista y del consumidor final.
              li
                i.fas.fa-check-circle
                p.mb-0 #[b Venta corta:] entran a participar el productor que hace contacto directo con la empresa minorista y esta con el cliente final.
              li
                i.fas.fa-check-circle
                p.mb-0 #[b Venta directo:] solo hay participación del productor y del cliente final.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema6/img3.svg', alt='Imágen decorativa')

      .py-4.py-md-5(titulo="La tecnología que se utiliza" :icono="require('@/assets/curso/temas/tema6/img4.svg')")
        .row
          .col-lg-7.order-lg-1.order-2
            p Esta clasificación incluye cuatro canales de venta:
            ul.lista-ul--color.fa-ul2
              li
                i.fas.fa-check-circle
                p.mb-0 #[b Tradicional:]  el de siempre, el de la venta de mostrador que no utiliza tecnología para atender a sus clientes, ya que la atención es en persona.
              li
                i.fas.fa-check-circle
                p.mb-0 #[b Ventas computarizadas:]  el vendedor y comprador realizan el canje por medio de la tecnología elemental.
              li
                i.fas.fa-check-circle
                p.mb-0 #[b Ventas electrónicas:] este sistema combina el telefónico con el computarizado por medio de la Internet.
              li
                i.fas.fa-check-circle
                p.mb-0 #[b Ventas audiovisuales:] en este canal el vendedor se conecta con el cliente por medio del teléfono, la televisión o la Internet.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema6/img5.svg', alt='Imágen decorativa')

      .py-4.py-md-5(titulo="El soporte" :icono="require('@/assets/curso/temas/tema6/img6.svg')")
        .row
          .col-lg-7.order-lg-1.order-2
            p En cuanto al soporte existen dos canales de venta que son:
            ul.lista-ul--color.fa-ul2
              li
                i.fas.fa-check-circle
                p.mb-0 #[b Venta fuera de Internet (#[i offline]):] este es el tradicional, donde la venta se lleva a cabo en persona.
              li
                i.fas.fa-check-circle
                p.mb-0 #[b Venta por Internet (#[i online]):] en este se realizan todas las ventas por medio de la Internet.   El canal de venta online es un medio electrónico, por el cual se realizan diferentes acciones como promocionar y vender productos y servicios. Debido a los avances tecnológicos las investigaciones revelan que hoy en día la mayor parte de los clientes se encuentran por medios digitales, por lo cual una empresa que no esté actualizada en este tema tiende a entrar en decadencia. Algunos tipos de canales online son Google Shopping, mercado libre, redes sociales, entre otros.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema6/img7.svg', alt='Imágen decorativa')

</template>

<script>
export default {
  name: 'Tema6',
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
