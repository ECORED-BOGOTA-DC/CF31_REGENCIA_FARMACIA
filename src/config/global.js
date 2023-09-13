export default {
  global: {
    componenteFormativo:
      'Promoción y seguimiento a los productos farmacéuticos',
    descripcionCurso:
      'En este componente formativo se abordan los conocimientos de la competencia “Lanzar la promoción comercial según objetivos y herramientas promocionales” para aprender a realizar la promoción y venta de productos farmacéuticos, teniendo en cuenta las estrategias de mercadeo diseñadas y aplicar las herramientas pertinentes que permitan verificar si las estrategias implementadas en la promoción y venta de productos farmacéuticos están dando los resultados esperados.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fases del proceso de <i>marketing</i>',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Presupuesto de <i>marketing</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estrategias de <i>marketing</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Técnicas de comunicación en <i>marketing</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Imagen corporativa',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Canal de ventas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Cliente',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Seguimiento al proceso de <i>marketing</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Beneficios del seguimiento ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Ciclo de vida del producto',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Técnicas de comunicación en <i>marketing</i>',
      referencia:
        'Marketing digital. (2020). <i>¿Qué es un CRM y para qué sirve? Beneficios + ejemplos</i> [video]. YouTube. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=Ztr24-JBL2s&ab_channel=Cyberclick%E2%80%A2MarketingDigital',
    },
    {
      tema: 'Seguimiento al proceso de <i>marketing</i>',
      referencia:
        'Marketing digital. (2020). <i>Métricas marketing digital: las más importantes explicadas</i> [video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=R4ZMiTnBZuM&ab_channel=Cyberclick%E2%80%A2MarketingDigital',
    },
    {
      tema: 'Seguimiento al proceso de <i>marketing</i>',
      referencia:
        'Gutiesco, D. (2021). <i>Cómo hacer seguimiento en ventas & marketing</i> [video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=lcHTZsCJFHM&ab_channel=DarioGutiesco',
    },
  ],
  glosario: [
    {
      termino: 'CRM',
      significado: '<i>Customer Relationship Management.</i>',
    },
    {
      termino: 'Cuota de mercado <i>(marketing)</i>',
      significado:
        'Es el porcentaje de consumo (respecto al total consumido) que vende una empresa.',
    },
    {
      termino: 'Eficacia',
      significado:
        'Es la capacidad de una organización para cumplir objetivos predefinidos en condiciones preestablecidas.',
    },
    {
      termino: 'Eficiencia',
      significado:
        'Es la capacidad de lograr un efecto deseado en cuestión con el mínimo de recursos posibles o en el menor tiempo posible.',
    },
    {
      termino: 'IGS',
      significado: 'Índice General de Satisfacción.',
    },
    {
      termino: 'Intrahospitalario',
      significado: 'Actividad que se da dentro de un hospital.',
    },
    {
      termino: 'KPI’s',
      significado:
        'Es el parámetro que mide el índice de fidelidad de una base de clientes.',
    },
    {
      termino: '<i>Leads (marketing)</i>',
      significado:
        'Se trata de un cliente potencial que demostró interés en consumir un producto o servicio.',
    },
    {
      termino: 'Mercadotecnia',
      significado:
        'Conjunto de técnicas y estudios que tienen como objeto mejorar la comercialización de un producto.',
    },
    {
      termino: 'Métricas',
      significado:
        'Es un número, una medida cuantitativa que sirve para medir y comparar.',
    },
    {
      termino: '<i>Offline</i>',
      significado:
        'Término empleado para hacer referencia a todo aquello que tiene lugar fuera de Internet, cuando no se está conectado a la red.',
    },
    {
      termino: '<i>Online</i>',
      significado:
        'Que se realiza a través de Internet o de otra red de datos.',
    },
    {
      termino: 'Perspectivas',
      significado:
        'Es el modo de analizar una determinada situación u objeto, es un punto de vista sobre una situación determinada.',
    },
    {
      termino: 'Previsto',
      significado:
        'Preparar o disponer con antelación los medios necesarios para disminuir los efectos negativos de una acción.',
    },
    {
      termino: 'Punto de inflexión',
      significado:
        'Es el punto a partir del cual una curva cambia su sentido, es decir, la inflexión es el momento en el que una curva o línea pasa de ser descendiente a ser ascendente, o al revés.',
    },
    {
      termino: 'Segmentar <i>(marketing)</i>',
      significado:
        'Proceso que consiste en dividir el mercado total de un bien o servicio en varios grupos más pequeños e internamente homogéneos.',
    },
    {
      termino: '<i>Target group</i>',
      significado:
        'Es el segmento de la demanda al que está dirigido un producto, ya sea un bien o un servicio.',
    },
    {
      termino: 'Utilidad del producto',
      significado:
        'Es la diferencia positiva de restar al precio de venta todos los costos y gastos que origina la obtención o producción de un producto.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cañizares, A. (2018). Control y seguimiento de un plan de <i>marketing.</i> PianoMarketing',
      link: 'https://www.pianomarketing.es/control-seguimiento-plan-marketing/',
    },
    {
      referencia:
        'Da Silva, D. (2020). <i>Seguimiento de ventas: qué es y 3 pasos de cómo hacerlo bien.</i> Zendesk.',
      link: 'https://www.zendesk.com.mx/blog/seguimiento-ventas/',
    },
    {
      referencia:
        'Edix. (2021). <i>Canales de venta: vender más y mejor.</i> Digital Workers.',
      link: 'https://www.edix.com/es/instituto/canales-de-venta/',
    },
    {
      referencia:
        'Navarro, J. (2008). <i>5 maneras de evaluar tu plan de marketing.</i> Emprendemania.',
      link: 'http://www.emprendemania.com/5-maneras-de-evaluar-su-plan-de/',
    },
    {
      referencia:
        'Nuño, P. (2018). <i>Proceso de marketing.</i> Emprende pyme.',
      link: 'https://www.emprendepyme.net/proceso-de-marketing.html',
    },
    {
      referencia:
        'Poblete, P. (2016). <i>Presupuesto de marketing y evaluación de beneficios generados por el producto.</i> DOCPLAYER.',
      link:
        'https://docplayer.es/8382311-Capitulo-6-presupuesto-de-marketing-y-evaluacion-de-beneficios-generados-por-el-proyecto.html',
    },
    {
      referencia:
        'UNAB. (s.f.). Implementación de estrategias de mercadeo. UNAB.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lina Marcela Ayala Pardo',
          cargo: 'Experta temática',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Gustavo Santis Mancipe',
          cargo: 'Diseñador instruccional',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora metodológica y pedagógica',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo desarrollo curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander ',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Adecuación instruccional - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseño web - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollo Fullstack - 2023',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
