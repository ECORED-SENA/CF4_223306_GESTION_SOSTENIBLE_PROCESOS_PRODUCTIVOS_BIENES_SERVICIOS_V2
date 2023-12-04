<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 4
      h1 Tipos de programas

    .bloque-texto-g.bg-11.p-3.p-sm-4.p-md-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t4/img.png')})`}")
      .bloque-texto-g__texto.p-5
        p.mb-0 El Gobierno Nacional de Colombia ha implementado diversos programas enfocados en el ahorro y la utilización eficiente del agua, así como en la eficiencia energética, todo ello con el objetivo de preservar los recursos naturales del país. El Estado se erige como el principal interesado en la protección de estos recursos, buscando asegurar su disponibilidad para los ciudadanos sin que estos deban preocuparse por su escasez. Los programas de ahorro establecidos definen parámetros, métodos y modelos de gestión dirigidos tanto a empresas como a ciudadanos, promoviendo prácticas que contribuyan al cuidado y conservación de los recursos naturales.


    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 4.1  Programas de ahorro y uso eficiente del agua

    .row.justify-content-center
      .col-lg-8.mb-4(data-aos="fade-right")
        p Las entidades encargadas de gestionar los recursos hídricos para grandes usuarios, acueductos urbanos, puentes verdes y pequeños usuarios, son responsables de entregar un programa de uso eficiente y económico para la conservación del agua según lo establece la Ley 373 en 1997, el objetivo de la ley es la de establecer actividades para asegurar la conservación y protección de los recursos hídricos.
        .cajon.color-acento-botones.p-4.mb-4
          p.mb-0 Un programa es un mecanismo de planificación sistemática para mantener el suministro de agua existente en un área determinada para satisfacer la demanda de agua requerida por la población de acuerdo con la situación ambiental actual. 
        p El programa de “Economía y uso efectivo del agua” incluye una serie de subprogramas que posibilitan el desarrollo de planes y estrategias con el objetivo de desarrollar protocolos para la gestión del recurso hídrico: educación ambiental, medición, aprovechamiento y reutilización de aguas pluviales y bajo consumo; también trabaja las tecnologías y áreas de especial manejo, incentivos o penalizaciones.
      .col-lg-4.col-7.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t4/img2.png', alt='')

    .row.bg-acento-contenido.align-items-center.py-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center
          .col-lg-2.col-md-2.col-4.mb-3.mb-md-0
            img.m-auto(src='@/assets/curso/temas/t4/dest.svg' alt='' style="width: 130px;")
          .col-lg-10.col-md-10
            p.mb-0.text-white Para ampliar el tema sobre Programas de ahorro y uso eficiente del agua, se recomienda ver el video sobre: “Ahorro y uso eficiente del Agua” que se encuentra en el material complementario de este componente formativo.
    
    .row.fondo-t4.align-items-center.py-5.mb-3
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .row.align-items-center.justify-content-center.mb-3
            .col-lg-4.mb-4(data-aos="fade-right")
              img(src='@/assets/curso/temas/t4/img3.png' alt='')
            .col-lg-8.mb-4(data-aos="fade-left")
              p También se encuentra el PUEEA (Programa para la Eficiencia y Conservación del Agua), este documento explica el funcionamiento y la disponibilidad del recurso hídrico en el tiempo. Este programa trabaja una concesión legal de agua para una población determinada cuando se requiera. Este documento es uno de los requisitos que se deben presentar y cumplir para solicitar la prórroga de las concesiones de agua y en las decisiones de concesión requeridas. Además, todas las personas naturales o jurídicas que operen una concesión de agua deben presentar un documento PUEEA.
              p En la siguiente gráfica se puede ver la normatividad que sustenta el PUEEA en Colombia:

          .col-lg-10
            .titulo-sexto.color-acento-contenido(data-aos="fade")
              p.mb-0 #[b Figura 6.] Normatividad que fundamenta el PUEEA
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/t4/fig6.svg', alt='La figura muestra una pirámide estructurada en niveles. Desde arriba hacia abajo, los niveles son: Ley 373 de 1997, Decreto 1090 de 2018, Política Nacional de Gestión del Recurso Hídrico y Política Nacional de Educación. Cada nivel representa la importancia o jerarquía de las leyes y políticas mencionadas.')
              figcaption.mt-3 Nota. https://bit.ly/3QPY8bz

    p.mb-4(data-aos="fade") Algunos otros proyectos que trabajan la regulación del recurso hídrico son los siguientes:

    .row.justify-content-center
      .col-lg-7.mb-4(data-aos="fade-rigth")
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-4")
          .row.justify-content-center(titulo="Zonas de manejo especial")
            .col-md-10.mb-4.mb-md-0
              p El proyecto tiene como objetivo proteger áreas con pantanos, bosques nubosos y áreas afectadas por los acuíferos de quebradas y ríos con prioridad.
          .row.justify-content-center(titulo="Reducción de pérdidas")
            .col-md-10.mb-4.mb-md-0
              p Las actividades y objetivos están integrados para reducir pérdidas en el sistema de agua. Por ejemplo, cambio de tubería, mantenimiento de redes y otros.
          .row.justify-content-center(titulo="Uso de aguas lluvias y reúso de aguas")
            .col-md-10.mb-4.mb-md-0
              p Este proyecto se enfoca en implementar actividades que mejoren la recolección de agua de lluvia y fomenten la reutilización del agua en áreas residenciales y en la red de agua.
          .row.justify-content-center(titulo="Tecnologías de bajo consumo")
            .col-md-10.mb-4.mb-md-0
              p El objetivo es fomentar e implementar acciones que respalden la adopción de dispositivos, sistemas y herramientas que minimicen el consumo de agua, promoviendo así un uso eficiente y económico del recurso hídrico en la red de abastecimiento terrestre, estableciendo un acuerdo de colaboración entre los usuarios.
          .row.justify-content-center(titulo="Incentivos tarifarios, tributarios y sanciones")
            .col-md-10.mb-4.mb-md-0
              p Definen herramientas que establecen lineamientos en las normas de plomería para promover el uso eficiente y económico de los recursos hídricos y evitar la infrautilización.
      .col-lg-5.col-8.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t4/img4.png', alt='')

    p.mb-4(data-aos="fade") Además de proyectos de regulación, existen otras iniciativas enfocadas en la disponibilidad de recursos hídricos, así como en el ahorro y uso eficiente del agua, los cuales se detallan a continuación:

    .row.justify-content-center
      .col-lg-5.mb-4
        .h-100
          img(src='@/assets/curso/temas/t4/tarj-ico1.svg', alt='')
          .bg-12.p-4.min-h250
            h4 Proyecto de medición
            p.mb-0 Es un proyecto para realizar actividades que faciliten la medición del consumo o uso de agua en el sistema de abastecimiento de agua, con el objetivo de lograr actividades de ahorro en la red y en el hogar del consumidor. Estas son mediciones realizadas con instrumentos como micrómetros y calibres.
      .col-lg-5.mb-4
        .h-100
          img(src='@/assets/curso/temas/t4/tarj-ico2.svg', alt='')
          .bg-13.p-4.min-h250
            h4 Educación ambiental
            p.mb-0 El objetivo de este proyecto es incluir campañas educativas, actividades y capacitación para promover el uso racional y eficiente del agua. Es un proyecto de transición para otros.


    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 4.2  Programas de eficiencia energética

    .bg-1.mb-4(data-aos="fade-down")
      .row.align-items-center.p-4
        .col-lg-2.col-md-3.mb-4.mb-lg-0
          img(src='@/assets/curso/temas/t4/img5.svg', alt='')
        .col-lg-10.col-md-9
          p.mb-0 Los Programas de Caracterización del Consumo de Energía y Eficiencia Energética implementados por la UPME (Unidad de Planificación Energética Mineral) tienen como objetivo promover el desarrollo de políticas públicas para mejorar el uso de los recursos y la energía, y finalmente recomendaciones sobre fuentes de energía adecuadas. Estos programas tienen varios objetivos, como se puede ver a continuación:

    .bg-10.w-fit.py-2.px-3.mb-4(data-aos="fade")
      h4.mb-0 Primer balance de energía útil para Colombia (BEU) – 2018
    
    .row.align-items-center.justify-content-center
      .col-lg-1.col-md-2.col-4.mb-4(data-aos="fade-right")
        .bg-14
          img.p-2(src='@/assets/curso/temas/t4/ico.svg', alt='')
      .col-lg-11.col-md-10.mb-4(data-aos="fade-left")
        p.mb-0 El Balance Energético Beneficioso (BEU) es un programa que mide el daño económico causado por tecnología obsoleta, prácticas ineficientes y baja volatilidad de la matriz energética nacional en 2015. Los sectores estudiados son residencial, industrial, transporte, comercial y público. En cuanto al cálculo de ineficiencias, se evalúan las características de los equipos existentes frente a la mejor tecnología disponible (BAT), tanto a nivel nacional como internacional.

    p.mb-4(data-aos="fade") El BEU determinó que las pérdidas atribuibles a la ineficiencia energética ascendieron a aproximadamente 6.700 millones de dólares, en comparación con los equipos de BAT actualmente en uso en Colombia. A nivel internacional, estas pérdidas se estimaron en 11.000 millones de dólares, tal como se ilustra en la figura siguiente:

    .row.mb-5.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 7.] Primer balance de energía útil para Colombia (BEU) – 2018
        img(src='@/assets/curso/temas/t4/fig7.png', alt='El diagrama ilustra la distribución de diferentes fuentes de energía hacia diversos sectores en un escenario nacional. las fuentes, que incluyen diesel oil, bagazo, entre otras, se dirigen hacia sectores como comercial/público, industrial, residencial y transporte. en el resumen del flujo energético, se destaca la energía útil con 407, ineficiencia con 511 y perdidas” con 226, utilizando la unidad de medida “PJ”.')
    
    .bg-10.w-fit.py-2.px-3.mb-4(data-aos="fade")
      h4.mb-0 Proyecto de eficiencia energética industrial en Colombia 2016-2019

    .row.align-items-center.justify-content-center
      .col-lg-8.mb-4(data-aos="fade-right")
        .cajon-b.color-acento-contenido.p-3.ps-0.mb-4
          p.mb-0 El Programa de Eficiencia Energética Industrial de Colombia tiene como objetivo promover el mercado de productos y servicios energéticamente eficientes mediante el fortalecimiento de los reglamentos y normas técnicas, la creación de capacidades en los Sistemas de Gestión de Energía y Calidad (SGEn) y la mejora de los procesos. En este proyecto se evaluaron 180 industrias y se capacitaron cerca de 100 técnicos de industrias ubicadas en siete regiones del país, tales como: Cundinamarca Boyacá, Santander y Norte de Santander, Egy Cafetero, Atlántico y Valle del Cauca.
        p Como resultado, SGEn mide y divulga un ahorro total de optimización de 1.287 TJ/año, o 87.707,42 toneladas de CO#[sub 2]/año, lo que contribuye al objetivo de la industria nacional de PROURE para 2017-2022 y se estima en un 5 %. En la siguiente figura se muestra el impacto de esa implementación a nivel general Colombia:
      .col-lg-4.col-7.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t4/img6.png', alt='')

    .row.mb-5.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 8.] Impacto de la implementación de Sistemas de Gestión de Energía SGEn
        img(src='@/assets/curso/temas/t4/fig8.svg', alt='La figura muestra el impacto de la implementación de los Sistemas de Gestión de Energía SGen en Colombia. Se destaca la presencia en 7 regiones, incluyendo Barranquilla, Norte de Santander, Santander, Boyacá, Eje Cafetero, Valle del Cauca y Bta/Cundinamarca. Gracias a esta implementación, 113 industrias han sido atendidas. En términos de capacitación, 22 mujeres y 129 técnicos han sido capacitados. Además, se han establecido 3 convenios con universidades RECIEE.')
        figcaption.mt-3 Nota. https://bit.ly/3c7kOoq 

    .bg-10.w-fit.py-2.px-3.mb-4(data-aos="fade")
      h4.mb-0 Programa de evaluación industrial PEVI (2018-2022).

    .row.align-items-center.justify-content-center
      .col-lg-6.mb-4(data-aos="fade-right")
        p Gracias al éxito del proyecto EEI en Colombia, UNIDO/UPME ha comenzado a darle continuidad a través de una iniciativa denominada “Programa para el Desarrollo Industrial (PEVI)” que creará y promoverá oportunidades para el uso eficiente de la energía en la industria y al mismo tiempo, formar administradores universitarios en regiones específicas del país. El PEVI consta de dos fases piloto que se implementaron en 2018 y 2019. Estas fases facilitan la generación de insumos para identificar y validar metodologías, planes y mecanismos, trabajando con universidades e industria de la región.
        p Se aplicaron 21 estudios de la industria, resultando en ahorros potenciales de energía de más del 8% gracias a buenas prácticas mínimas o sin costo. Para garantizar la continuidad y mejorar las experiencias adquiridas, se establece el establecimiento de tres Centros de Evaluación de la Industria para 2020, con un enfoque en mejorar el modelo operativo y de gestión para garantizar que se creen académicos y contribuyan a las oportunidades de eficiencia energética en las industrias impactantes en el sitio.
      .col-lg-6.col-7.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t4/img7.png', alt='')

    .row.fondo2-t4.align-items-center.py-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          p.mb-4(data-aos="fade") A continuación, se enuncia la normatividad que fundamenta los programas de eficiencia energética:

          .row.justify-content-center(data-aos="fade-down")
            .col-lg-9
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 9.] Normatividad que fundamenta los programas de eficiencia energética
              img(src='@/assets/curso/temas/t4/fig9.svg', alt='La figura muestra una pirámide de cinco niveles que representa diferentes normativas en orden jerárquico. Comenzando desde la cima, las normativas son: Ley 697 de 2001, Decreto 3683 de 2003, Decreto 2688 de 2008, Resolución UPME 196 de 2020 y, en la base, la Resolución 40156 de 2022 - MME.')


    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 4.3  Formulación del cálculo de los indicadores de gestión

    p Los indicadores de desempeño energético son expresiones o valores que se utilizan para monitorear y controlar cambios en el desempeño energético y reducir la pérdida de energía en cualquier proceso de generación, lo que permite a cualquier organización, establecer planes estratégicos para lograr resultados a corto, mediano y largo plazo.
    p El cálculo se hace a través de las siguientes fórmulas:

    .row.fondo3-t4.align-items-center.py-4.mb-3
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-around

          .col-lg-5.col-8.mb-4
            img(src='@/assets/curso/temas/t4/img8.svg', alt='La imagen detalla fórmulas relacionadas con la eficiencia energética. Se sabe que: Energía consumida = Energía aprovechada + Pérdidas. Pérdidas: % Pérdidas = Pérdidas / Energía consumida. Eficiencia del proceso: Eficiencia del proceso = Energía aprovechada / Energía consumida. Entonces: Eficiencia del proceso = 100% - % Pérdidas')
          .col-lg-7.mb-4
            .bx-sw1.br-21
              img(src='@/assets/curso/temas/t4/formulas.svg', alt='')
            //.bg-white.bx-sw1.br-21.p-4   
              .row.align-items-center.mb-3
                .col-lg-4
                  ul.lista-ul--color.fa-ul
                    li 
                      i.fas.fa-check-circle
                      | Se sabe que: 
                .col-lg-8
                  p.mb-0 Energía consumida = Energía aprovechada + Pérdidas
              .row.align-items-center.mb-3
                .col-lg-4
                  ul.lista-ul--color.fa-ul
                    li 
                      i.fas.fa-check-circle
                      | Pérdidas:
                .col-lg-8
                  img(src='@/assets/curso/temas/t4/form1.svg', alt='Pérdidas: % Pérdidas = Pérdidas / Energía consumida', style="width: 300px;")
              .row.align-items-center.mb-3
                .col-lg-4
                  ul.lista-ul--color.fa-ul
                    li 
                      i.fas.fa-check-circle
                      | Eficiencia del proceso:
                .col-lg-8
                  img(src='@/assets/curso/temas/t4/form2.svg', alt='Eficiencia del proceso: Eficiencia del proceso = Energía aprovechada / Energía consumida', style="width: 380px;")
              .row.align-items-center.mb-3
                .col-lg-4
                  ul.lista-ul--color.fa-ul
                    li 
                      i.fas.fa-check-circle
                      | Entonces: 
                .col-lg-8
                  p.mb-0 Eficiencia del proceso = 100% - % Pérdidas 
    .row.justify-content-center(data-aos="fade-down")
      .col-lg-4.col-md-6.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t4/tarj2-ico1.svg' alt='')
          .tarjeta.bg-8
            .p-4
              p.text-center La energía consumida: es igual a la energía aprovechada más pérdidas. Las pérdidas son las que se deben reducir con los proyectos de eficiencia energética que impulsen a maximizar el aprovechamiento. 
      .col-lg-4.col-md-6.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t4/tarj2-ico2.svg' alt='')
          .tarjeta.bg-8
            .p-4
              p.text-center El porcentaje de pérdidas: son las pérdidas divididas entre la energía consumida. 
      .col-lg-4.col-md-6.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t4/tarj2-ico3.svg' alt='')
          .tarjeta.bg-8
            .p-4
              p.text-center La eficiencia de procesos: es la energía aprovechada por la energía consumida, se procura garantizar la eficiencia del proceso y reducir el porcentaje de pérdidas.


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
