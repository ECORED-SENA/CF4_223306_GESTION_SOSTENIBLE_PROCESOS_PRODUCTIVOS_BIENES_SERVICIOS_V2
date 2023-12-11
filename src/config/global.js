export default {
  global: {
    componenteFormativo:
      'Estrategias de economía circular y evaluación de la eficacia de alternativas implementadas',
    descripcionCurso:
      'Este componente se centra en identificar nuevos modelos de negocios en la implementación de la economía circular, iniciativas de economía circular, fondos de inversión de impacto social. Así mismo, conceptos de ecoinnovación, ecodiseño y la identificación de sellos y etiquetado sostenible.<br>Por otro lado, conocer la importancia de la comunicación con los clientes de consumo de productos sostenibles, la importancia de implementar programas de ahorro y uso eficiente del agua y energía. Así mismo, los indicadores financieros, ambientales y comerciales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo:
          'Modelo de negocio en la implementación de la economía circular',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Portafolio de iniciativas de economía circular',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Fondos de inversión de impacto social',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sellos y etiquetado sostenible',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Beneficios tributarios para productos sostenibles',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Ecoinnovación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Ecodiseño',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Biodegradabilidad',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Impacto ambiental positivo',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'La comunicación oral',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Comunicación de atributos ambientales',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Tipos de programas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Programas de ahorro y uso eficiente del agua',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Programas de eficiencia energética',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Formulación del cálculo de los indicadores de gestión',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Sistemas de costos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Análisis costo beneficio',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Tasa de retorno',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Costo anual equivalente',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Indicadores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Indicadores financieros',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Indicadores ambientales',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Indicadores comerciales',
            hash: 't_6_3',
          },
        ],
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
        download: 'downloads/223306-CF04-DU.pdf',
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
      tema: '1. Modelo de negocio en la implementación de la economía circular',
      referencia:
        'EOI Escuela de Organización Industrial (2021), La Economía circular en la empresa y nuevos modelos de negocio.[video] ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=K6FqZPy3fYk',
    },
    {
      tema: '2. Sellos y etiquetado sostenible',
      referencia: 'Icesi. (2021). Sellos y certificaciones de sostenibilidad',
      tipo: 'Documento PDF      ',
      link:
        'https://www.icesi.edu.co/centros-academicos/images/Centros/Kairos/Archivos/sistesis-sellos.pdf',
    },
    {
      tema: '2.2 Ecoinnovación',
      referencia: 'Grupo GEA (2017),Eco-Innovación.[video]',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=44fzIv7nYdM',
    },
    {
      tema: '2.3 Ecodiseño',
      referencia: 'Un mundo tecnológico (2020), ¿Qué es el ecodiseño?[video]',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MbaZdkHTBWU',
    },
    {
      tema: '4.1 Programa de ahorro y uso eficiente del agua',
      referencia: 'Santoyo S. (2020), Ahorro y uso eficiente del Agua[video]',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=u3ZvOiOw2yQ',
    },
    {
      tema: '5. Sistema de costo',
      referencia:
        'Morillo Moreno, Marisela. Diseño de Sistemas de Costeo: Fundamentos Teóricos. Actualidad Contable FACES. Año 5 No.5, enero-junio 2002. Mérida. Venezuela. (7-22)',
      tipo: 'Artículo',
      link: 'https://www.redalyc.org/pdf/257/25700507.pdf',
    },
    {
      tema: '6.2 Indicadores ambientales',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA (2021), Indicadores ambientales[video]',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YnI3J9G8FiA',
    },
  ],
  glosario: [
    {
      termino: 'Biodegradable',
      significado:
        'Son los productos, materiales que se descomponen por agentes biológicos.',
    },
    {
      termino: 'Ecodiseño',
      significado:
        'es un enfoque en la creación de productos y servicios que minimiza el impacto ambiental considerando todo el ciclo de vida, desde la producción hasta el final de su uso. Es fundamental en la economía circular para extender la vida útil de los productos y reducir residuos.',
    },
    {
      termino: 'Ecoinnovación',
      significado:
        'Es conocida como la introducción de un nuevo o significativamente mejorado producto, proceso que genera beneficios económicos a las organizaciones y mitigan el impacto ambiental.',
    },
    {
      termino: 'Impacto',
      significado:
        'Es el estado resultante en dimensiones o variables de interés generados por una intervención.',
    },
    {
      termino: 'Liquidez',
      significado:
        'Es la capacidad que tiene una organización, persona o entidad de hacer frente a sus obligaciones financieras.',
    },
    {
      termino: 'PUEAA',
      significado: ' Programa de Uso Eficiente y Ahorro del Agua.',
    },
    {
      termino: 'Rentas',
      significado: 'Es el precio de los insumos que tiene una cantidad fija.',
    },
    {
      termino: 'Retorno',
      significado: 'Pago, satisfacción o recompensa del beneficio recibido.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'Se refiere a satisfacer las necesidades presentes sin comprometer la de las generaciones futuras.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alba, A. (2021). <em>Guía rápida para diseñar modelos de negocio circulares</em>. ',
      link:
        'https://innolandia.es/guia-rapida-para-disenar-modelos-de-negocio-circulares/  ',
    },
    {
      referencia:
        'Bello, E. (2021). <em>Qué es el análisis de coste-beneficio de una empresa y cómo hacerlo</em>. Thinking for Innovation. ',
      link:
        'https://www.iebschool.com/blog/analisis-coste-beneficio-finanzas/ ',
    },

    {
      referencia:
        'Ceiba. (2020). <em>Tránsito hacia una economía circular comunitaria cero residuos</em>.',
      link:
        'https://ceiba.org.mx/ccd-irp-transito-hacia-economia-circular-comunitaria-cero-residuos-post-pandemia/ ',
    },

    {
      referencia:
        'Efimarket. (2017). <em>¿Cuánto tardan en degradarse los materiales?</em>',
      link:
        'https://www.efimarket.com/blog/cuanto-tardan-degradarse-los-materiales/ ',
    },
    {
      referencia: 'Icontec. (2022). <em>Sello de Sostenibilidad ICONTEC</em>. ',
      link:
        'https://www.icontec.org/eval_conformidad/sello-de-sostenibilidad-icontec/',
    },
    {
      referencia:
        'Icesi. (2021). <em>Sellos y certificaciones de sostenibilidad</em>.',
      link:
        'https://www.icesi.edu.co/centros-academicos/images/Centros/Kairos/Archivos/sistesis-sellos.pdf',
    },
    {
      referencia: 'Minambiente (2020). <em>Modelos de negocios</em>. ',
      link:
        'https://economiacircular.minambiente.gov.co/index.php/transicion-a-la-economia-circular/modelos-de-negocio/',
    },
    {
      referencia:
        'MinAmbiente. (2022). <em>Conozca los beneficios tributarios para empresas que ayuden a proteger el medio ambiente</em>.',
      link:
        'https://www.minambiente.gov.co/cambio-climatico/conozca-los-beneficios-tributarios-para-empresas-que-ayuden-a-proteger-el-medio-ambiente/ ',
    },
    {
      referencia:
        'Pérez, A, B, (2018). <em>Cálculo de los indicadores financieros</em>.',
      link:
        'http://www.enciclopediafinanciera.com/indicadores-financieros.html ',
    },
    {
      referencia:
        'Ship2BFundation. (2021). <em>¿Qué es la inversión de impacto?</em>.',
      link: 'https://www.ship2b.org/actualidad/que-es-la-inversion-de-impacto/',
    },
    {
      referencia: 'Un mundo tecnológico (2020). <em>¿Qué es el ecodiseño?</em>',
      link: 'https://www.youtube.com/watch?v=MbaZdkHTBWU',
    },
    {
      referencia:
        'Unión Europea. (2021). <em>El Plan de Acción sobre Ecoinnovación</em>.',
      link:
        'https://ec.europa.eu/environment/ecoap/about-action-plan/objectives-methodology_es ',
    },
    {
      referencia:
        'Uribe, D. (2018). <em>Inversión de Impacto como un mecanismo para la innovación y la escalabilidad</em>. AFE. ',
      //link:
      //'https://afecolombia.org/inversion-de-impacto-como-un-mecanismo-para-la-innovacion-y-la-escalabilidad/ ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'May Stefanny González Verjel',
          cargo: 'Experto temático',
          centro:
            'Centro de Industria empresa y servicios regionales - Regional Norte de Santander',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Full-stack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
