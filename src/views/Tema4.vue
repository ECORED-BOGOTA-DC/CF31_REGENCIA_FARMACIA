<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Técnicas de comunicación en <i>marketing</i>

    .row.justify-content-center.align-items-center.mb-5
      .tarjeta-amarilla.p-4
        .row.justify-content-center.align-items-center
          .col-lg-8
            p.mb-5 En el tema de <i>marketing</i> la comunicación juega un papel muy importante, ya que es el medio por el cual se informa y se incita a las personas a formar parte del establecimiento como clientes, y tiene como propósitos:

            ul.lista-ul--color.mb-0
              li
                i.fas.fa-check(style="color: #7E5EE3")
                | Enterar a las personas de la existencia de sus productos y servicios.
              li
                i.fas.fa-check(style="color: #7E5EE3")
                | Incitar a esas personas a ensayar sus productos y experimentar sus servicios.
              li
                i.fas.fa-check(style="color: #7E5EE3")
                | Recordarle a la comunidad la existencia de estos y las ventajas que tienen para su bienestar.

          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema4/img1.svg', alt='alt')

    .row.mb-5
      p Para que exista comunicación debe haber varios elementos, estos son:


    .titulo-sexto.color-acento-contenido.mb-5
      h5 Figura 2.
      br
      i.mb-0 Elementos necesarios para la comunicación


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        figure
          img(src='@/assets/curso/temas/tema4/img2.svg', alt='alt').img2-tm4

    
    .row.justify-content-center.align-items-center.mb-5
      .bg-fondo.mt-5
        .row.justify-content-center.align-items-center
          .col-lg-5
            .tarjeta.tarjeta-azul3.p-4
              .row.justify-content-center.align-items-center
                .col-2.my-4
                  figure
                    img(src='@/assets/curso/temas/tema4/img-comillas.svg', alt='alt')
              
              p.text-center “La comunicación es el proceso por el que se intercambian o comparten significados especiales a través de un conjunto de símbolos comunes”

              .row.mt-4
                .col-lg-1
                .col-lg-11
                  h4 (Lamb, Hair y McDaniel, 2006, p. 484).


          .col-lg-7
            figure
              img(src='@/assets/curso/temas/tema4/img3.svg', alt='alt').img3-tm4


















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
