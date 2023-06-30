<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/introduccion/img1.svg', alt='alt')

      .col-lg-8
        p En la nueva era los establecimientos farmacéuticos se han visto en la necesidad de crear estrategias de mercadeo para promocionar sus productos y servicios, las cuales están conformadas por diferentes variables que apuntan a satisfacer necesidades relevantes de las personas y así convertirlas en clientes potenciales.

        p Todo ello implica realizar un seguimiento que permita evidenciar si el plan de promoción ha cumplido con las expectativas y objetivos planteados al inicio.

        p En el presente componente formativo se abordan temas relacionados con la verificación del cumplimiento de las estrategias implementadas en la promoción y venta de los productos farmacéuticos, partiendo de los resultados obtenidos.





</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
