<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Imagen corporativa

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema5/img1.png', alt='Imágen decorativa')
      .col-lg-8(data-aos="fade-left")
        p(data-aos="fade-left") Este es un concepto propio del entorno del <i>marketing</i> y de la economía de la organización, que abarca el posicionamiento de la empresa en un mercado y cómo lo perciben los clientes, la competencia y el resto de las personas que conozcan su actividad económica y la manera como la llevan a cabo.
        p(data-aos="fade-left") Por medio de la imagen corporativa las empresas son identificadas; pero de la excelencia de la construcción de esta las hace diferenciarse, ser reconocidas y atractivas en el mercado, por lo cual la construcción de una imagen corporativa sólida y notable es un excelente mecanismo para incrementar la rentabilidad y tener mejor desempeño en las ventas de los productos y los servicios. Todo esto se logra, por lo general, con una serie de estrategias de <i>marketing</i> y un plan estratégico.
      p.mt-5(data-aos="fade-left") La imagen corporativa está conformada por:


    SlyderF(columnas="col-lg-6 col-xl-4" data-aos="zoom-in")
      .tarjeta.color-acento-contenido
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/tema5/img2.png' alt='Imágen decorativa')
        h5.text-center.mt-4 <h4 style= "color:#12263F;">Nombre de la empresa</h4>

      .tarjeta.color-acento-contenido
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/tema5/img3.png' alt='Imágen decorativa')
        h5.text-center.mt-4 <h4 style= "color:#12263F;">Nombre y naturaleza de los productos</h4>

      .tarjeta.color-acento-contenido
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/tema5/img4.png' alt='Imágen decorativa')
        h5.text-center.mt-4 <h4 style= "color:#12263F;">Logotipo</h4>

      .tarjeta.color-acento-contenido
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/tema5/img5.png' alt='Imágen decorativa')
        h5.text-center.mt-4 <h4 style= "color:#12263F;">Lemas y <em>jingles</em> publicitarios</h4>

      .tarjeta.color-acento-contenido
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/tema5/img6.png' alt='Imágen decorativa')
        h5.text-center.mt-4 <h4 style= "color:#12263F;">Plataformas <i>online</i> y página web</h4>

      .tarjeta.color-acento-contenido
        .row.justify-content-center.mb-3
          .col-12
            img(src='@/assets/curso/temas/tema5/img7.png' alt='Imágen decorativa')
        h5.text-center <h4 style= "color:#12263F;">Reputación y responsabilidad social corporativa</h4>

</template>

<script>
export default {
  name: 'Tema5',
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
