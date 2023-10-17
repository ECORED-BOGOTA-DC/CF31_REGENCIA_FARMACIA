<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 10
      h1 Ciclo de vida del producto

    .row.mb-5(data-aos="fade-left")
      p.mb-0 Finalmente, recuerde que los productos tienen un ciclo de vida que se divide en cuatro fases:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      ImagenInfografica.color-acento-botones
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema10/img1.svg', alt='Imágen decorativa')

        .tarjeta.tarjeta-morada.p-3(x="7%" y="57%" numero="")
          .row.justify-content-center.align-items-center
            .col-lg-3.col-5.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema10/img2.svg', alt='Imágen decorativa')
            .col-lg-9
              h5 Lanzamiento
              p Es el momento en el que entra el producto al mercado.

        .tarjeta.tarjeta-morada.p-3(x="41%" y="46%" numero="")
          .row.justify-content-center.align-items-center
            .col-lg-3.col-5.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema10/img3.svg', alt='Imágen decorativa')
            .col-lg-9
              h5 Crecimiento
              p Es cuando el producto es vendido de forma creciente, por lo cual requiere de mejoras.

        .tarjeta.tarjeta-morada.p-3(x="62%" y="27%" numero="")
          .row.justify-content-center.align-items-center
            .col-lg-3.col-5.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema10/img4.svg', alt='Imágen decorativa')
            .col-lg-9
              h5 Madurez
              p Aquí las ventas ya están estables, se minimizan los costos de producción y hay poco crecimiento en ventas. Esta a su vez se subdivide en madurez cíclica, que es cuando la venta de los productos es estacional (toallas higiénicas) y de madurez perpetua cuando la venta de los productos es constante y por mucho tiempo (analgésicos).

        .tarjeta.tarjeta-morada.p-3(x="82.5%" y="53%" numero="")
          .row.justify-content-center.align-items-center
            .col-lg-3.col-5.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema10/img5.svg', alt='Imágen decorativa')
            .col-lg-9
              h5 Declive
              p En esta etapa el producto pierde fuerza, por lo cual la rentabilidad baja y obliga a la empresa a tomar la decisión de continuar o no con la venta del producto.




</template>

<script>
export default {
  name: 'Tema10',
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
