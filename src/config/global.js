export default {
  global: {
    Name: 'Manejo del cultivo de aguacate, cosecha y postcosecha.',
    Description:
      'Este componente desarrolla competencias para el manejo agronómico, tecnológico y comercial del aguacate, abordando desde la siembra hasta la poscosecha. Aplica buenas prácticas agrícolas, parámetros técnicos y criterios de calidad, permitiendo optimizar la productividad y responder a las exigencias del mercado nacional e internacional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-contenido.png'),
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
        titulo: 'Establecimiento del cultivo ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Selección y preparación del lote',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Siembra y distancias',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Manejo agronómico ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Labores culturales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Fertilización y MIPE',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Cosecha',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Madurez y recolección',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Manejo en campo',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Poscosecha',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Clasificación y empaque',
            hash: 't_1_1',
          },
          {
            numero: '4.2',
            titulo: 'Almacenamiento y transporte',
            hash: 't_1_2',
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
        download: 'downloads/dist.pdf',
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
      tema: 'Poscosecha',
      referencia:
        'Escobar Calderón, J. V., Cortés Rodríguez, M., Rodríguez Fonseca, P. E., Correa Londoño, G., & Grupo de Alimentos Funcionales (GAF). (2018). Evaluación de la influencia de la zona de cultivo, índice de madurez de cosecha y condiciones de almacenamiento bajo refrigeración sobre la calidad del aguacate (Persea americana Mill cv. Hass). Universidad Nacional de Colombia.',
      tipo: 'Artículo científico',
      link: 'https://repositorio.unal.edu.co/handle/unal/83497',
    },
    {
      tema: 'Almacenamiento y transporte',
      referencia:
        'Astudillo, C., & Rodríguez, P. (2018). Parámetros fisicoquímicos del aguacate Persea americana Mill. cv. Hass (Lauraceae) producido en Antioquia (Colombia) para exportación. Manejo de cosecha y tecnología poscosecha, (mayo-agosto 2018), 0122 8706.',
      tipo: 'Artículo técnico PDF',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=6627457',
    },
    {
      tema: 'Poscosecha ',
      referencia:
        'SENA. (2025). Manejo tecnológico del cultivo de aguacate: cosecha y poscosecha. ECORED SENA.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=n1Dswau8x-4',
    },
  ],
  glosario: [
    {
      termino: 'Aguacate climatérico',
      significado:
        'Tipo de fruto que continúa su maduración después de la cosecha, influenciado por la producción de etileno.',
    },
    {
      termino: 'Análisis de suelo',
      significado:
        'Evaluación química y física del suelo para determinar pH, textura, nutrientes y condiciones de fertilidad antes de establecer el cultivo.',
    },
    {
      termino: 'Fertilización',
      significado:
        'Aplicación controlada de nutrientes al suelo o al follaje para suplir las necesidades del cultivo en cada etapa fenológica.',
    },
    {
      termino: 'Tutorado',
      significado:
        'Técnica de soporte físico a las plántulas para evitar daños por viento y dirigir el crecimiento vertical del tallo.',
    },
    {
      termino: 'Plateo',
      significado:
        'Limpieza del área circular alrededor del tallo del árbol para mejorar la absorción de agua, aplicar fertilizantes y controlar malezas.',
    },
    {
      termino: 'Podas de formación',
      significado:
        'Corte de ramas en los primeros años del árbol para estructurar una copa equilibrada, mejorar la aireación y facilitar el manejo.',
    },
    {
      termino: 'MIPE',
      significado:
        'Manejo Integrado de Plagas y Enfermedades: estrategia que combina métodos biológicos, culturales y químicos para mantener el control fitosanitario sostenible.',
    },
    {
      termino: 'Madurez fisiológica',
      significado:
        'Punto óptimo en el que el fruto ha completado su desarrollo y puede iniciar su maduración postcosecha sin perder calidad.',
    },
    {
      termino: 'Materia seca',
      significado:
        'Porcentaje de sólidos del fruto, útil como indicador de madurez, especialmente en variedades como Hass (mínimo 21 %).',
    },
    {
      termino: 'Clasificación del fruto',
      significado:
        'Proceso poscosecha en el que se separan los frutos por tamaño, color, firmeza, forma y sanidad para cumplir exigencias de mercado.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Registro sistemático que permite seguir todo el proceso productivo del fruto desde la finca hasta el consumidor final.',
    },
    {
      termino: 'Transporte técnico',
      significado:
        'Desplazamiento del fruto bajo condiciones controladas de limpieza, ventilación y temperatura para evitar daños físicos y preservar la calidad comercial.',
    },
  ],
  referencias: [
    {
      referencia:
        'Moreno Henao, J. M. (2020). Buenas prácticas poscosecha del aguacate (Persea americana Mill.).<br>Gobernación del Tolima & SENA. ',
      link: 'https://www.redalyc.org/pdf/1698/169818107001.pdf',
    },
    {
      referencia:
        'MAG (Ministerio de Agricultura y Ganadería de Costa Rica). (2021). Manual de manejo pre y poscosecha de aguacate. MAG. ',
      link: 'https://www.mag.go.cr/bibliotecavirtual/F01-9029.pdf',
    },
    {
      referencia:
        'Arpaia, M. L., White, A. K., Woolf, A. B., & Hofman, P. J. (2018). Protocolo de almacenamiento y maduración de aguacate cv. Hass. Center for Produce Quality. ',
      link:
        'https://pdfs.semanticscholar.org/2cd9/09c62ea3922155fd112ec157bffcf73bae77.pdf',
    },
    {
      referencia:
        "Revista Mexicana de Fitotecnia. (2014). Comportamiento postcosecha de frutos de aguacate 'Hass' almacenados y bajo atmósfera modificada. Fitotecnia Mexicana, 37(3).",
      link: 'https://revistafitotecniamexicana.org/documentos/37-3/7a.pdf',
    },
    {
      referencia:
        'ICTA. (2025). Manual de manejo poscosecha de aguacate. Instituto de Ciencia y Tecnología Agrícola (Guatemala). ',
      link:
        'https://www.icta.gob.gt/publicaciones/Aguacate/Manual%20aguacate%202024.pdf',
    },
    {
      referencia:
        'Agrocalidad. (2015). Guía de buenas prácticas agrícolas para el cultivo de aguacate. ',
      link: 'https://faolex.fao.org/docs/pdf/ecu167499.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos ',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Andrea Bobadilla Gutiérrez ',
          cargo: 'Guionista línea de producción.  ',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Heydy Cristina González García',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Diseñador web',
          centro:
            'Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Maria Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adie Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
}
