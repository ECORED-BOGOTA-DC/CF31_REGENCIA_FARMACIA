<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Presupuesto de <i>marketing</i>

    .row.mb-5
      p La ejecución de las estrategias de mercadeo requiere recursos económicos que deben estar claros y detallados, y a ese detalle es al que se llama presupuesto de <i>marketing</i>. La determinación el presupuesto se puede ver intermediada por factores como:

    .row.justify-content-center.align-items-center.mb-5
      TabsB.color-primario
        .py-4.py-md-5(titulo="Estrategia de la organización" :icono="require('@/assets/curso/temas/tema2/img1.svg')")
          .row.justify-content-center.align-items-center
            .col-md-7.mb-4.mb-md-0
              p En este punto cada empresa define los recursos que está dispuesta a destinar para publicidad para cumplir con los objetivos de venta, por ejemplo, la farmacia X decide contratar personal para repartir volantes en el sector de un evento de <i>marketing</i> que tendrá, mientras que la farmacia Y decide promocionar su producto solo por medio de un pendón en la puerta. 
          
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema2/img2.svg', alt='Imágen decorativa')

        .py-4.py-md-5(titulo="Objetivos de la empresa y del <i>marketing</i>" :icono="require('@/assets/curso/temas/tema2/img3.svg')")
          .row.justify-content-center.align-items-center
            .col-md-7.mb-4.mb-md-0
              p Dependiendo de la rapidez con la que la empresa desee dar a conocer su producto o servicio y la penetración en el mercado competitivo, los costos en publicidad serán más o menos altos.
          
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema2/img4.svg', alt='Imágen decorativa')

        .py-4.py-md-5(titulo="Competencia y gastos en publicidad" :icono="require('@/assets/curso/temas/tema2/img5.svg')")
          .row.justify-content-center.align-items-center
            .col-md-7.mb-4.mb-md-0
              p La inversión en publicidad depende del movimiento publicitario de los competidores y de la cuota de mercado propia y de la competencia.
          
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema2/img6.svg', alt='Imágen decorativa')

        .py-4.py-md-5(titulo="Productos ofertados" :icono="require('@/assets/curso/temas/tema2/img7.svg')")
          .row.justify-content-center.align-items-center
            .col-md-7.mb-4.mb-md-0
              p En este punto juegan un papel muy importante los beneficios del producto o el servicio y el área donde esté ubicada la farmacia, ya que hay establecimientos que tienen mayor competencia que otros, por lo cual dependiendo de esos factores la publicidad debe ser mayor o menor.
          
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema2/img8.svg', alt='Imágen decorativa')

        .py-4.py-md-5(titulo="Punto del ciclo de vida en que se encuentra el producto" :icono="require('@/assets/curso/temas/tema2/img9.svg')")
          .row.justify-content-center.align-items-center
            .col-md-7.mb-4.mb-md-0
              p El ciclo de vida de un producto pasa por cuatro fases que son la de lanzamiento, crecimiento, madurez y declive, dependiendo de la fase en la que se encuentre el producto al que se le aplicará el <i>marketing</i>, los gastos en publicidad cambian, por ejemplo, un producto en la fase de lanzamiento requiere de alta inversión publicitaria.

              figure
                img(src='@/assets/curso/temas/tema2/img10.svg', alt='Imagen que muestra el ciclo de vida de un producto compuesto por cuatro fases que son:<br>Lanzamiento<br>crecimiento<br>Madurez<br> y Declive')

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema2/img11.svg', alt='Imágen decorativa')


    .row.justify-content-center.align-items-center.mb-5
      p.mb-5 Definir el presupuesto de <i>marketing</i> es importante por las siguientes razones, ver figura.

      .titulo-sexto.color-acento-contenido.mb-5
        h5 Figura 1.
        br
        i.mb-0 Importancia del presupuesto

      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema2/img12.png', alt='Figura 1. que expone las razones de definir el presupuesto que son:<br>1. Permite considerar los ingresos para futuras inversiones, créditos, inventarios, etc.<br>2. Contribuye a la coherencia entre recursos y objetivos.<br>3. Sirve como guía en las actividades de marketing.<br>4. Garantiza que las actividades sean acordes al plan.<br>5. Establece un proceso de evaluación de resultados verdaderos con los resultados esperados.<br>6. Exige al seguimiento y la creación de nuevos objetivos durante todo el proceso.')      

    .row.bg-titulo1.align-items-center.p-1.mb-4
      h3.my-3 Métodos para la elaboración del presupuesto de <i>marketing</i>

    
    .row.justify-content-center.align-items-center.mb-5
      p Existen diferentes métodos para elaborar el presupuesto de <i>marketing</i> a continuación se mencionan los principales:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-4
          .tarjeta-numerada__numero
            .h2 1
          h5.text-center.ps-1 De porcentaje de ventas 
          p.text-center Tiene que ver con el análisis a la cantidad de dinero invertido en publicidad y promoción por las empresas productivas.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.p-4
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b De tareas 
          p.text-center.mb-0 Se busca crear un presupuesto que sea de apoyo eficaz a todo lo que involucra la mercadotecnia. Para poder tener claro el presupuesto total requerido es necesario conocer los costos por cada área de acción de la mercadotecnia.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-4
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Competitivo
          p.text-center.mb-0 En este método se considera la inversión que realiza la competencia en mercadotecnia y se debe comparar con la propia.

      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-4
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b De objetivo y tarea 
          p.text-center.mb-0 En este método se establece el alcance de la promoción del producto o servicio, por lo cual se deben tener objetivos claros, se deben determinar las tareas para el logro de dichos objetivos y se deben promediar los costos de la ejecución de las tareas. 


    .row.justify-content-center.align-items-center.mb-5
      p La siguiente tabla es un ejemplo de la distribución del presupuesto de <i>marketing</i>.

    .titulo-sexto.color-acento-contenido.mb-5
      h5 Tabla 1.
      br
      i.mb-0 Ejemplo de distribución de presupuesto de <i>marketing</i>.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        table(alt='Muestra el ejemplo de la distribución de un presupuesto de marketing.')
          caption Nota. Adaptado de https://docplayer.es/8382311-Capitulo-6-presupuesto-de-marketing-y-evaluacion-de-beneficios-generados-por-el-proyecto.html 
          thead.text-center(style='background-color: #CBBFF4')
              <th colspan="5">Presupuesto de <i>marketing</i></th>
          tbody
            tr(style='background-color: #E5DFF9')
              <th width="10% !important">Ítem</th>
              <th style="width:10%">Concepto</th>
              <th style="width:10%">Valor</th>
              <th style="width:10%">Anexo No.</th>
              <th style="width:10%">% de incidencia</th>
            tr.text-center
              <th colspan="4">Distribución</th>
              <th colspan="1">18%</th>
            tr.text-center
              td <b>1</b>
              td Estudio de mercado de farmacias
              td 650,00
              td 5,01
              td 2%
            tr.text-center
              td <b>2</b>
              td Estrategia de <i>push</i> para farmacias
              td 5.800,00
              td 5,02
              td 14%
            tr.text-center
              td <b>3</b>
              td Grupos focales y reuniones con médicos
              td 1.150,00
              td 5,03
              td 3%
            tr.text-center(style='background-color: #E5DFF9')
              <th colspan="4">Precio</th>
              <th colspan="1">0%</th>
            tr.text-center
              td <b>4</b>
              td Elaboración de cajas para el registro de precios
              td 110,00
              td 5,04
              td 0%
            tr.text-center(style='background-color: #E5DFF9')
              <th colspan="4">Comunicación</th>
              <th colspan="1">72%</th>
            tr.text-center
              td <b>5</b>
              td Reunión de prelanzamiento del producto
              td 1.675,00
              td 5,05
              td 4%
            tr.text-center
              td <b>6</b>
              td Evento de lanzamiento del producto
              td 6.200,00
              td 5,06
              td 15%
            tr.text-center
              td <b>7</b>
              td Actividades de notoriedad y seguimiento
              td 750,00
              td 5,07
              td 2%
            tr.text-center
              td <b>8</b>
              td Entrega de material especializado en visita médica
              td 4.320,00
              td 5,08
              td 11%
            tr.text-center
              td <b>9</b>
              td Reuniones con sociedades médicas, auspicios, congresos y cursos
              td 10.400,00
              td 5,09
              td 25%
            tr.text-center
              td <b>10</b>
              td Actividades de <i>lobbing</i>
              td 4.800,00
              td 5,10
              td 12%
            tr.text-center
              td <b>11</b>
              td Premio para red de visita
              td 1.600,00
              td 5,11
              td 4%
            tr.text-center(style='background-color: #E5DFF9')
              <th colspan="2">Otra</th>
              <th colspan="1"></th>
              <th colspan="1"></th>
              <th colspan="1">9%</th>
            tr.text-center
              td <b>12</b>
              td Capacitación a directivos
              td 2.500,00
              td 5,12
              td 3%
            tr.text-center
              td <b>13</b>
              td Capacitación para visitadores médicos
              td 1.148,00
              td 5,13
              td 6%
            tr(style='background-color: #E5DFF9')
              <th colspan="2">Total</th>
              <th colspan="1">41.103,00	</th>
              <th colspan="1"></th>
              <th colspan="1">100%</th>


    .row.bg-titulo2.align-items-center.p-1.mb-5
      h3.my-3 Análisis del presupuesto

    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-lg-1
        figure
          img(src='@/assets/curso/temas/tema2/img13.svg', alt='Imágen decorativa')       

      .col-lg-5
        p Este análisis se realiza por medio de un indicador que permite a la empresa identificar cuál será la inversión por realizar para ejecutar el plan de <i>marketing</i>.

      .col-lg-6
        .tarjeta-azul2.p-4
          .row.justify-content-center.align-items-center
            .col-lg-5
              p.mb-0 𝑃𝑟𝑒𝑠𝑢𝑝𝑢𝑒𝑠𝑡𝑜 𝑑𝑒 𝑚𝑎𝑟𝑘𝑒𝑡𝑖𝑛𝑔=
            
            .col-lg-6
              figure
                img(src='@/assets/curso/temas/tema2/img14.svg', alt='Imágen decorativa') 







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
