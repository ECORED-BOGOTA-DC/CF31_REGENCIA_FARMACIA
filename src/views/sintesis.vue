<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La promoción y seguimiento de productos farmacéuticos es crucial para informar sobre medicamentos, generar confianza y aumentar su demanda. Se realiza a través de estrategias como visitas a profesionales de la salud, participación en eventos médicos y publicidad. El seguimiento implica monitorear la eficacia y seguridad de los medicamentos en el mercado, recopilando información y realizando estudios de farmacovigilancia. Ambas actividades buscan garantizar el uso seguro y efectivo de los productos farmacéuticos, cumpliendo con regulaciones y manteniendo una comunicación abierta con profesionales y pacientes.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Imagen que resume los temas principales que contiene el componente de promoción y seguimiento a los productos farmacéuticos como es la estrategia de mercadeo que está conformada por diferentes variables cuyo objetivo es satisfacer las necesidades de los clientes, conocer además sobre la importancia de realizar seguimientos constantes con el fin de verificar si el plan de promoción cumple con las expectativas planteadas y con las estrategias implementadas para la venta de productos; este componente también abordó las diferentes fases del proceso de marketing. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
