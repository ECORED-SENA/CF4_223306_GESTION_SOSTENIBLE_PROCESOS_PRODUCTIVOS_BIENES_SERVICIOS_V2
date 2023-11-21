<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 2
      h1 Sellos y etiquetado sostenible

    .row.align-items-center.justify-content-center
      .col-lg-8.mb-4(data-aos="fade-right")
        .cajon-b.color-acento-contenido.p-3.ps-0.mb-3
          p.mb-0 El Sello de Sostenibilidad ha integrado progresivamente la sustentabilidad en la gestión organizacional estratégica, y su metodología ha demostrado ser útil para comprender los riesgos y beneficios de las diferentes prácticas comerciales, así como expandir esta cultura en la cadena de suministro de manera que asegura la integridad de los intercambios, también es una herramienta para ayudar a exponer las deficiencias relevantes, así como para reconocer las prácticas sostenibles de las empresas que los adquieren.
        p Para que una empresa reciba un sello de sostenibilidad requiere hacer el trabajo en cualquiera de las siguientes 4 categorías: origen, evolución, esencia y excelencia. La entrega del sello y su tipo se mide dependiendo del nivel de cumplimiento de los requisitos que se establecen en un cuestionario diseñado para la evaluación del grado de avance. 
      .col-lg-4.col-8.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/img.png', alt='')

    p.mb-4(data-aos="fade") En la siguiente figura se presenta las 4 categorías en las que están divididas el sello de sostenibilidad de Icontec, una empresa o entidad que quiera el sello deberá hacer todo el camino iniciando por el origen para llegar hasta la excelencia:

    .row.justify-content-center.mb-3.mb-lg-5(data-aos="fade-down")
      .col-9.col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t2/tarj-img1.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-4
              h4.mt-5 ORIGEN
              p Es el principio a la sostenibilidad, las entidades se comprometen y ajustan sus procesos a la sostenibilidad.
      .col-9.col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t2/tarj-img2.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-4
              h4.mt-5 EVOLUCIÓN
              p.mb-5 Las entidades ya pasaron la prueba de inicio y se mantienen firmes en la creación de un modelo de negocio sostenible que sea estable.
      .col-9.col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t2/tarj-img3.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-4
              h4.mt-5 ESENCIA
              p Luego de tener los dos primero niveles se consigue la esencia que consiste en que la entidad esté centrada en la sostenibilidad con todos los procesos medidos en su impacto.
      .col-9.col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t2/tarj-img4.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-4
              h4.mt-5 EXCELENCIA
              p.mb-5 Es el nivel más alto del sello y se logra cuando las entidades están todo el tiempo buscando reducir la huella negativa que dejan en el ambiente y en el medio, por lo general son empresas de economía circular. 

    .bg-1.mb-4(data-aos="fade-down")
      .row.align-items-center.p-4
        .col-lg-2.col-md-3.mb-4.mb-lg-0
          img(src='@/assets/curso/temas/t2/img2.svg', alt='')
        .col-lg-10.col-md-9
          p.mb-0 El principio detrás de estas categorías es recopilar información sobre estándares de sostenibilidad en todo el mundo, incluido el Índice de sostenibilidad Dow Jones, ISO 26000, Pacto mundial, Iniciativa de informes globales, SR10, Sociedades BIC (colectivas y buenas), Objetivos de desarrollo sostenible, entre otros, y tema Dentro de cada uno es parte de una metodología de evaluación de cuatro frentes: orientación estratégica, económico-ética, social y ambiental (Icontec, 2022). Para postularse a un sello de sostenibilidad es necesario considerar los siguientes elementos como requisito:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade")
          p.mb-0 #[b Tabla 1.] Sellos de sostenibilidad
        .tabla-a.color-acento-contenido(data-aos="fade-down")
          table
            caption Nota. https://bit.ly/3QBS7Pw
            thead
              tr.bg-5.text-white
                th Elemento
                th Descripción
            tbody
              tr
                td.fw-bold Proceso de otorgamiento
                td 
                  ul.lista-ul.fa-ul.circulo.mb-0
                    li.mb-0 
                      i.fas.fa-circle
                      | Toda la organización estará en el alcance de la certificación.
              tr.bg-2
                td.fw-bold Autoevaluación
                td 
                  ul.lista-ul.fa-ul.circulo.mb-0
                    li 
                      i.fas.fa-circle
                      | Plataforma de autogestión.
                    li 
                      i.fas.fa-circle
                      | Mínimos de sostenibilidad.
                    li.mb-0 
                      i.fas.fa-circle
                      | Entrega de resultados.
              tr
                td.fw-bold Validación y verificación
                td 
                  ul.lista-ul.fa-ul.circulo.mb-0
                    li 
                      i.fas.fa-circle
                      | Revisión de resultados de autoevaluación por ICONTEC.
                    li 
                      i.fas.fa-circle
                      | Auditoría en sitio, remota o parcialmente remota.
                    li.mb-0 
                      i.fas.fa-circle
                      | Auditoría multisitio.
              tr.bg-2
                td.fw-bold Otorgamiento
                td 
                  ul.lista-ul.fa-ul.circulo.mb-0
                    li 
                      i.fas.fa-circle
                      | Decisión de otorgamiento.
                    li.mb-0 
                      i.fas.fa-circle
                      | Categorización.
    
    p.mb-4(data-aos="fade") Los sellos de sostenibilidad son un garante de beneficios para las empresas, a nivel de mercado no todas las empresas tienen estos identificativos y cada vez se harán más necesarios en busca de reducir el impacto negativo de las empresas en el ambiente; enseguida se presentan los beneficios para las empresas o entidades que los portan:                 

    .tarjeta.bg-17.p-4.py-5.mb-5(data-aos="fade-down")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-11
            .row
              .col-md-4.mb-4.mb-md-0
                h4 Sostenibilidad
                p Incorporar progresivamente la sostenibilidad en la gestión estratégica de la organización.
              .col-md-8
                img(src='@/assets/curso/temas/t2/slider-img1.png', alt='')
        .row.justify-content-center
          .col-lg-11
            .row
              .col-md-4.mb-4.mb-md-0
                h4 Riesgos y beneficios
                p Ayuda a comprender los riesgos y beneficios de las diferentes prácticas dentro de la organización.
              .col-md-8
                img(src='@/assets/curso/temas/t2/slider-img2.png', alt='')
        .row.justify-content-center
          .col-lg-11
            .row
              .col-md-4.mb-4.mb-md-0
                h4 Cadena de valor
                p Extiende la cultura a la cadena de valor de una manera que asegura la integridad de la empresa.
              .col-md-8
                img(src='@/assets/curso/temas/t2/slider-img3.png', alt='')       
        .row.justify-content-center
          .col-lg-11
            .row
              .col-md-4.mb-4.mb-md-0
                h4 Brechas significativas
                p Identifica brechas significativas y reconoce las prácticas de sostenibilidad de las organizaciones que lo adquieren.
              .col-md-8
                img(src='@/assets/curso/temas/t2/slider-img4.png', alt='')  
        .row.justify-content-center
          .col-lg-11
            .row
              .col-md-4.mb-4.mb-md-0
                h4 Objetivos de Desarrollo Sostenible
                p Permite ver en qué medida los ODS (Objetivos de Desarrollo Sostenible) están incorporados en tu estrategia.
              .col-md-8
                img(src='@/assets/curso/temas/t2/slider-img5.png', alt='')   
        .row.justify-content-center
          .col-lg-11
            .row
              .col-md-4.mb-4.mb-md-0
                h4 Resultados de evaluación
                p Tiene acceso a una plataforma de asesoramiento detallado y personalizado de los resultados de tu evaluación (Power BI).
              .col-md-8
                img(src='@/assets/curso/temas/t2/slider-img6.png', alt='')   
    
    .row.align-items-center.justify-content-center
      .col-lg-1.col-md-2.col-4.mb-4(data-aos="fade-right")
        .bg-15
          img.p-2(src='@/assets/curso/temas/t2/ico.svg', alt='')
      .col-lg-11.col-md-10.mb-4(data-aos="fade-left")
        p.mb-0 Además de Icontec, que es una de las entidades encargadas de certificar sellos en Colombia, existen otras empresas que ofrecen sellos de calidad y diferentes tipos de certificaciones que cumplen con los requisitos necesarios para garantizar la sostenibilidad. Estos sellos pueden ser tanto nacionales como internacionales y surgen como una respuesta a la globalización, permitiendo identificar a las empresas que cumplen con estos estándares. La conciencia sobre la sostenibilidad está en constante crecimiento, lo que motiva a los empresarios de todo el mundo a preferir cada vez más trabajar con empresas comprometidas con la sostenibilidad. Esto se debe a que reconocen que las materias primas, insumos y productos elaborados por estas empresas se producen con un firme compromiso de minimizar su impacto negativo en el mundo.

    .row.bg-acento-contenido.align-items-center.py-4.mb-5(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center
          .col-lg-2.col-md-2.col-4.mb-3.mb-md-0
            img.m-auto(src='@/assets/curso/temas/t2/dest.svg' alt='' style="width: 130px;")
          .col-lg-9.col-md-10
            p.mb-0.text-white Si quiere saber más de estos sellos revise el documento que se encuentra en el material complementario con el nombre de síntesis-sellos.pdf de Icesi (2021)

    p.mb-4(data-aos="fade") Los diferentes sellos de sostenibilidad tienen los mismos objetivos en común y todos buscan ser duraderos en el tiempo, esos objetivos son:

    .row.justify-content-center(data-aos="fade-down")
      .col-9.col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-acento-contenido
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t2/tarj2-img1.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-4
              h4.mt-4 Impacto ambiental
              p Minimizar el impacto ambiental negativo del proceso de fabricación, tanto en el sitio como en la fábrica, en el medio ambiente (incluida la protección del equilibrio del ecosistema, la reducción de contaminantes durante la producción), etc.
      .col-9.col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t2/tarj2-img2.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-4
              h4.mt-4 Uso de productos
              p.mb-5 Minimizar el uso de productos que puedan dañar la salud de los consumidores, los fabricantes o el ecosistema.
      .col-9.col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-acento-contenido
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t2/tarj2-img3.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-4
              h4.mt-4 Productos modificados genéticamente
              p Minimizar el uso de productos modificados genéticamente.
      .col-9.col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-acento-contenido
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t2/tarj2-img4.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-4
              h4.mt-4 Respeto por los animales
              p Evitar dolor innecesario a los animales, respetarlos en el proceso de reproducción natural.


    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.1  Beneficios tributarios para productos sostenibles 

    .row.align-items-center.justify-content-center
      .col-lg-8.mb-4(data-aos="fade-right")
        p En Colombia, los productos relacionados con prácticas que ayuden a salvaguardar el medio ambiente son tenidos en cuenta para beneficios tributarios, beneficios que ayudan a las empresas directamente al ahorro de dinero; esto se prueba una vez que se acogen a los incentivos consignados en los Estatutos Tributarios que da el Ministerio de Ambiente y Desarrollo Sostenible, mediante la inversión en conjuntos o recursos que minimicen el efecto ambiental negativo en sus operaciones. El MinAmbiente (2022) en sus beneficios tributarios relata que 
          span.fw-bold.t-brown “entre los beneficios están los descuentos y exenciones sobre impuesto de IVA y renta, y la exención de derechos arancelarios” 
          | que sumados son una gran parte de la carga tributaria de las empresas.
        p De manera general se presentan los beneficios para las empresas que apliquen por sostenibilidad; sin embargo, la invitación es a que los contadores de cada empresa sean quienes estén al tanto de las novedades porque cada empresa depende de su figura jurídica legal para acceder al descuento tributario. En la siguiente tabla se presentan dichos beneficios:
      .col-lg-4.col-7.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/img3.png', alt='')

    .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade")
      p.mb-0 #[b Tabla 2.] Beneficios tributarios de productos sostenibles
    .tabla-a.color-acento-contenido.mb-5(data-aos="fade-down")
      table
        caption Nota. Adaptado de MinAmbiente (2022).
        thead
          tr
            th.w-30.p-0.m-0 
            th.p-0.m-0
        tbody
          tr.bg-2
            td Equipos y elementos que no pagan IVA
            td Adquisición de equipos y elementos para sistemas de monitoreo y control ambiental, importación de equipos para reciclaje y tratamiento de basura, filtrado y tratamiento de aguas servidas, emisiones o residuos sólidos, y para otros proyectos. Los proyectos para reducir las emisiones de gases de efecto invernadero, así como los equipos para convertir vehículos a gas natural no están sujetos al IVA. El ahorro para los empresarios es del 16% del valor de la compra de equipos (artículos 424-5 numeral 4 y 428 letras “f” e “i” del Código Tributario).
          tr
            td Deducción en la base de impuesto a la renta
            td El valor de la inversión en control y mejoramiento ambiental puede ser deducido de la base de ingresos hasta un monto que no exceda el 20% de los ingresos netos (Artículo 158-2 del Código Tributario Colombiano).
          tr.bg-2
            td Rentas exentas
            td Están exentos del pago del impuesto sobre la renta la venta de energía generada a partir de recursos eólicos, biomasa o subproductos agrícolas que reduzcan las emisiones de gases de efecto invernadero y la venta de certificados de reducción de emisiones de CO2, así como las rentas por servicios energéticos ecoturísticos (artículos 207-2) N°1 y N°5 del Código Tributario Colombiano).

    .bloque-texto-g.color-secundario.p-3.p-sm-4.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t2/img4.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Estos incentivos están diseñados para fomentar la innovación en las empresas, animándolas a contribuir en la lucha contra el calentamiento global y, al mismo tiempo, obtener beneficios económicos de sus actividades. Se busca reconocer y premiar su contribución positiva a la sociedad. En este contexto, el Estado promueve la adopción de una economía circular, incentivando a un creciente número de empresas a comprometerse con la protección del medio ambiente y a contribuir al desarrollo de una economía sostenible. La cuestión ambiental ha cobrado una relevancia significativa en los tiempos actuales, razón por la cual el gobierno alienta tanto a grandes como a medianas empresas a ser parte de esta transformación, innovando y aportando al desarrollo económico sostenible.

    p(data-aos="fade") Al igual que las empresas, los ciudadanos también pueden recibir beneficios por el cuidado ambiental, este es el caso de los vehículos eléctricos que en varias ciudades tienen excepción de impuestos y libertad de movilidad en caso de que la ciudad tenga restricción, en el caso de las ciudades que tienen “pico y placa”.


    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.2  Ecoinnovación
    
    .row.align-items-center.justify-content-center.mb-2
      .col-lg-5.col-9.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/img5.png' alt='')
      .col-lg-7.mb-4(data-aos="fade-left")
        p Eco Innovación se refiere a la innovación ambiental, como la palabra lo indica, es cualquier forma de innovación que coopere con el desarrollo sostenible, reduzca el impacto ambiental y mejore el uso de los recursos. En términos de innovación, la innovación ambiental implica la construcción de productos y procesos que reduzcan la degradación ambiental. Desde una perspectiva económica, la innovación ambiental espera que las organizaciones hagan un buen uso de los recursos naturales para mejorar la paz humana.
        p Los objetivos planteados en la ecoinnovación buscan fomentar el desarrollo de nuevas ideas que puedan implementarse en la economía, optimizando el uso de los recursos naturales actuales y preservándolos al mismo tiempo. En este contexto, se pueden emplear tecnologías que contribuyan a la sostenibilidad.

    p.mb-4(data-aos="fade") En relación con la ecoinnovación, se ha avanzado significativamente en los últimos años. Un ejemplo de ello es la Unión Europea, que ha establecido el Plan de Acción sobre Ecoinnovación (2011). Este plan propone siete acciones fundamentales destinadas a orientar las iniciativas de empresas y Estados en materia de ecoinnovación. A continuación, se presentan estas siete acciones:

    TabsA.color-acento-contenido.mb-4(data-aos="fade-down")
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Política")
        .row.justify-content-center
          .col-lg-11
            .row.justify-content-center
              .col-lg-8
                h4 Política
                p La innovación ambiental debe ser un componente principal del proceso de revisión legislativa de la comunidad.
              .col-lg-4
                img(src='@/assets/curso/temas/t2/linea-img1.png', alt='')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Proyecto")
        .row.justify-content-center
          .col-lg-11
            .row.justify-content-center
              .col-lg-8
                h4 Proyecto
                p Ayudar a que las tecnologías ambientales innovadoras pasen del laboratorio al mercado.
              .col-lg-4
                img(src='@/assets/curso/temas/t2/linea-img2.png', alt='')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Estándares")
        .row.justify-content-center
          .col-lg-11
            .row.justify-content-center
              .col-lg-8
                h4 Estándares
                p Definición de estándares y parámetros en las áreas de tratamiento de residuos, gestión del agua o eficiencia energética.
              .col-lg-4
                img(src='@/assets/curso/temas/t2/linea-img3.png', alt='')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Financiación")
        .row.justify-content-center
          .col-lg-11
            .row.justify-content-center
              .col-lg-8
                h4 Financiación
                p La Comisión establecerá una red de patrocinadores de la innovación medioambiental en Europa, así como mecanismos de financiación específicos para ayudar a las empresas a trabajar en I+D “verde”.
              .col-lg-4
                img(src='@/assets/curso/temas/t2/linea-img4.png', alt='')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Cooperación")
        .row.justify-content-center
          .col-lg-11
            .row.justify-content-center
              .col-lg-8
                h4 Cooperación
                p Apoyo al establecimiento de empresas europeas en economías emergentes.
              .col-lg-4
                img(src='@/assets/curso/temas/t2/linea-img5.png', alt='')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="Habilidades")
        .row.justify-content-center
          .col-lg-11
            .row.justify-content-center
              .col-lg-8
                h4 Habilidades
                p Acelere la transición a una economía circular equipando a los trabajadores del mañana con las habilidades que necesitan.
              .col-lg-4
                img(src='@/assets/curso/temas/t2/linea-img6.png', alt='')
      .tarjeta.color-acento-contenido--borde.p-4(titulo="IPE ")
        .row.justify-content-center
          .col-lg-11
            .row.justify-content-center
              .col-lg-8
                h4 IPE 
                p #[em Innovation Partnership Europe] son las iniciativas que reúnen a agentes públicos y privados en sectores clave donde la innovación ambiental puede ayudar a mejorar la eficiencia y la productividad.
              .col-lg-4
                img(src='@/assets/curso/temas/t2/linea-img7.png', alt='')

    p.mb-4(data-aos="fade") La eco innovación es muy importante para la sociedad actualmente, lleva al desarrollo de nuevas fuentes de energías que buscan brindar soluciones a los problemas actuales que van deteriorando con el planeta, es por eso que hoy en día la gran mayoría de proyectos tienen que ver con el medio ambiente ya que son los que más se tienen en cuenta y son beneficiados tributariamente por el gobierno ayudando a crecer, estas ideas que contribuyen a una mejor eficiencia y productividad en los emprendedores.

    .row.bg-acento-contenido.align-items-center.py-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center
          .col-lg-2.col-md-2.col-4.mb-3.mb-md-0
            img.m-auto(src='@/assets/curso/temas/t4/dest.svg' alt='' style="width: 130px;")
          .col-lg-9.col-md-10
            p.mb-0.text-white Para ampliar el tema sobre la eco innovación, se recomienda ver el video sobre: “Eco-Innovación.” Que se encuentra en el material complementario de este componente formativo.


    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.3  Ecodiseño
    
    .row.justify-content-center
      .col-lg-8.mb-4(data-aos="fade-right")
        p El ecodiseño se basa en integrar criterios del medio ambiente en la etapa de concepción y desarrollo de cada producto, procurando tomar medidas preventivas con el propósito de reducir los impactos del medio ambiente en las distintas etapas de su periodo de vida. 
        p El ecodiseño es una parte importante de la economía circular, un esquema que intenta prolongar el costo de los productos indefinidamente manteniéndolos en un ciclo cerrado independiente de los desechos. El ecodiseño permite el uso de materiales sostenibles para bienes en una economía circular para completar su historial de rendimiento en una nueva ubicación funcional, a diferencia de una economía lineal que se basa en la iniciación, el uso y la eliminación de la comercialización.
        h5 Las características que se busca tener en un producto de ecodiseño son las siguientes:
      .col-lg-4.col-7.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/img6.png', alt='')

    .titulo-sexto.color-acento-contenido(data-aos="fade")
      p.mb-0 #[b Figura 4.] Características de un producto de ecodiseño

    .row.fondo-t2.align-items-center.py-5.pb-md-0.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .col-12(data-aos="fade-down")
            figure
              img(src='@/assets/curso/temas/t2/fig4.svg', alt='Un producto de ecodiseño utiliza menos material, es fácilmente reciclable, incorpora materiales biológicos, es duradero, multifuncional y reutilizable. Además, reduce emisiones y es innovador en su diseño.')

    p(data-aos="fade") Una de las características más importantes de un producto de eco diseño es el mensaje que transmite, el cual debe ser ecológico, de tal forma que genere conciencia ambiental en el usuario, quien al hacer compra y uso de ese producto debe sentir que está salvando el mundo.

    h5.mb-4(data-aos="fade") El ecodiseño tiene que ver con el diseño sostenible, el cual tiene su propia normativa, las normas más comunes de ecodiseño a nivel global son las siguientes:

    .row.justify-content-center.mb-2(data-aos="fade-down")
      .col-lg-4.col-md-6.mb-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0
            figure
              img(src="@/assets/curso/temas/t2/tarj3-img1.png", alt="")
            .text.p-lg-2.p-3
              .row.text-center.px-2.px-lg-4.pt-1.mt-3.mt-md-2.pt-md-0.mt-lg-3.mt-xl-4
                .h4.mt-2.mb-3 #[em Cradle to Cradle] (C2C)
                p #[em Cradle to cradle] se puede definir como el diseño y producción de productos de todo tipo de tal manera que al final de su vida, puedan ser verdaderamente reciclados (upcycled), imitando el ciclo de la naturaleza con todo reciclado o devuelto a la tierra, directa o indirectamente a través de los alimentos, como un completamente seguro y no tóxico.
      .col-lg-4.col-md-6.mb-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            figure
              img(src="@/assets/curso/temas/t2/tarj3-img2.png", alt="")
            .text.p-lg-2.p-3
              .row.text-center.px-2.px-lg-4.pt-1.mt-3.mt-md-2.pt-md-0.mt-lg-3.mt-xl-4
                .h4.mt-2.mb-3 ISO 14062
                p Gestión ambiental — Integración de los aspectos ambientales en el diseño y desarrollo de productos.
      .col-lg-4.col-md-6.mb-4
        .row.px-2.pt-2.h-100
          .col-12.m-0.nav-holder2.align-items-center.px-0
            figure
              img(src="@/assets/curso/temas/t2/tarj3-img3.png", alt="")
            .text.p-lg-2.p-3
              .row.text-center.px-2.px-lg-4.pt-1.mt-3.mt-md-2.pt-md-0.mt-lg-3.mt-xl-4
                .h4.mt-2.mb-3 ISO 14001
                p Norma de sistemas de gestión que especifica los requisitos para la formulación y mantenimiento de un SGA. Ayuda a controlar los aspectos ambientales, reducir impactos y asegurar el cumplimiento legal.

    p.mb-4(data-aos="fade") Estas normas son las que velan por el ecodiseño en el mercado, son las encargadas de vigilar el producto y ofrecerle garantía evaluando y acreditando el trabajo de cada empresa con los productos. Además, el ecodiseño tiene los siguientes beneficios exponenciales:

    .row.fondo2-t2.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .col-lg-9.mb-4(data-aos="fade-right")
            .row.mb-3
              .col-md-2.col-3.pe-0
                .bg-10.h-100.p-2.p-md-3.d-flex.align-items-center
                  img.m-auto(src='@/assets/curso/temas/t2/tarj4-ico1.svg', alt='', style="max-width: 75px;")
              .col-md-10.col-9.ps-0
                .bg-8.brr-10.h-100.p-3.p-md-4
                  h4 Artículos de mayor calidad:
                  p.mb-0 Los productos son de mejor calidad porque su desarrollo es mayor.
            .row.mb-3
              .col-md-2.col-3.pe-0
                .bg-10.h-100.p-2.p-md-3.d-flex.align-items-center
                  img.m-auto(src='@/assets/curso/temas/t2/tarj4-ico2.svg', alt='', style="max-width: 75px;")
              .col-md-10.col-9.ps-0
                .bg-8.brr-10.h-100.p-3.p-md-4
                  h4 Reducción de emisiones:
                  p.mb-0 El consumo durante el transporte disminuyó y, en consecuencia, las emisiones de CO2.
            .row.mb-3
              .col-md-2.col-3.pe-0
                .bg-10.h-100.p-2.p-md-3.d-flex.align-items-center
                  img.m-auto(src='@/assets/curso/temas/t2/tarj4-ico3.svg', alt='', style="max-width: 75px;")
              .col-md-10.col-9.ps-0
                .bg-8.brr-10.h-100.p-3.p-md-4
                  h4 Industrias más sostenibles:
                  p.mb-0 Las empresas ganan en capacidad de innovación y refuerzan su compromiso con el medio ambiente.
            .row.mb-3
              .col-md-2.col-3.pe-0
                .bg-10.h-100.p-2.p-md-3.d-flex.align-items-center
                  img.m-auto(src='@/assets/curso/temas/t2/tarj4-ico4.svg', alt='', style="max-width: 75px;")
              .col-md-10.col-9.ps-0
                .bg-8.brr-10.h-100.p-3.p-md-4
                  h4 Producción más eficiente:
                  p.mb-0 Favorece el ahorro de energía y requiere de menos recursos naturales y materias primas.
            .row.mb-3
              .col-md-2.col-3.pe-0
                .bg-10.h-100.p-2.p-md-3.d-flex.align-items-center
                  img.m-auto(src='@/assets/curso/temas/t2/tarj4-ico5.svg', alt='', style="max-width: 75px;")
              .col-md-10.col-9.ps-0
                .bg-8.brr-10.h-100.p-3.p-md-4
                  h4 Consumidores más fáciles:
                  p.mb-0 Satisface la demanda del mercado con productos más atractivos para el público cada vez más exigente.
            .row.mb-3
              .col-md-2.col-3.pe-0
                .bg-10.h-100.p-2.p-md-3.d-flex.align-items-center
                  img.m-auto(src='@/assets/curso/temas/t2/tarj4-ico6.svg', alt='', style="max-width: 75px;")
              .col-md-10.col-9.ps-0
                .bg-8.brr-10.h-100.p-3.p-md-4
                  h4 Diferenciación en el mercado:
                  p.mb-0 Los productos sostenibles cuentan con un valor añadido que lo distinguen de la competencia.
          .col-lg-3.col-5.mb-4(data-aos="fade-left")
            img(src='@/assets/curso/temas/t2/img7.svg', alt='')


    .row.bg-acento-contenido.align-items-center.py-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center
          .col-lg-2.col-md-2.col-4.mb-3.mb-md-0
            img.m-auto(src='@/assets/curso/temas/t4/dest.svg' alt='' style="width: 130px;")
          .col-lg-9.col-md-10
            p.mb-0.text-white Para ampliar el tema sobre el eco diseño, se recomienda ver el video sobre: “¿Qué es el eco diseño? (2020) que se encuentra en el material complementario de este componente formativo.


    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.4  Biodegradabilidad

    .row.align-items-center.justify-content-center.mb-2
      .col-lg-5.col-9.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/img8.png' alt='')
      .col-lg-7.mb-4(data-aos="fade-left")
        p Cuando se habla de biodegradabilidad, se hace referencia a la capacidad de un producto, en cuanto a sus materiales y sustancias, para descomponerse y formar parte del ciclo natural de la vida en la Tierra, basado en el carbono. La biodegradación depende en gran medida de factores naturales, ya que los productos biodegradables disponibles en el mercado actualmente están compuestos por materiales tales como paja, madera, hojas, entre otros elementos, que permiten que el producto complete un ciclo tras el cual se descompone en microorganismos, contribuyendo así a la reducción de la contaminación ambiental.
        p La biodegradación está influenciada tanto por la naturaleza química de la sustancia o material que se desea biodegradar, como por las condiciones ambientales presentes. Ambientes como los de compostaje y digestión anaeróbica favorecen una alta tasa de biodegradación a nivel industrial.
        .bg-3.p-3
          p.mb-0 Los productos biodegradables suelen compartir características similares durante su descomposición, retornando de forma natural a sus compuestos químicos primarios. Es en este punto donde se manifiesta el fenómeno de la biodegradabilidad, ya que algunos productos están compuestos por químicos de muy larga duración, como es el caso de la mayoría de los plásticos y el poliestireno expandido (icopor), que están hechos a base de polímeros. Por otro lado, los productos elaborados con materiales naturales suelen tener una vida útil más corta tras ser desechados, tal como sucede con el cartón, que está hecho a base de madera.

    .row.fondo3-t2.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          p.mb-4(data-aos="fade") Para tener mayor claridad del impacto de los productos en el medio ambiente los investigadores han trabajado en descubrir los tiempos en los que se degrada cada uno de los materiales con los que se trabaja habitualmente la fabricación de productos, tenga en cuenta la siguiente información para la elección de la materia prima de trabajo en sus productos, esta información es basada en Efimarket (2017):

          .tarjeta.bg-white.bx-sw1.p-4.p-lg-5
            LineaTiempoE.color-primario
              .row(titulo="4 semanas" subtitulo="Orgánicos ")
                .col-lg-5
                  figure
                    img(src='@/assets/curso/temas/t2/linea2-img1.png', alt='')
                .col-lg-7.mb-4.mb-lg-0.mt-4
                  p Los desechos y residuos orgánicos tardan tan sólo 4 semanas en degradarse, además de servir como abono para muchas plantas. Este tiempo de descomposición es real siempre que nuestros residuos no lleven productos tóxicos o químicos.
              .row(titulo="1 año" subtitulo="Papel, cartón ")
                .col-lg-5
                  figure
                    img(src='@/assets/curso/temas/t2/linea2-img2.png', alt='')
                .col-lg-7.mb-4.mb-lg-0.mt-4
                  p El papel y el cartón, al estar compuesto básicamente por celulosa, no supone un gran problema para la naturaleza, y su tiempo de descomposición es escaso. Además, si el ambiente es lluvioso y se encuentra en la superficie, su biodegradación se acelera. 
              .row(titulo="10 años" subtitulo="Aluminio")
                .col-lg-5
                  figure
                    img(src='@/assets/curso/temas/t2/linea2-img3.png', alt='')
                .col-lg-7.mb-4.mb-lg-0.mt-2
                  p Son los años que tarda la naturaleza en convertir una lata de refresco o cerveza en óxido de hierro, lo cual además de ser un tiempo considerable, es peligroso. Estas latas de aluminio están recubiertas de otros materiales, como el estaño y el barniz, lo que ralentiza su biodegradación, al necesitar de mucha humedad para iniciar su proceso de descomposición.
              .row(titulo="150 años" subtitulo="Plástico")
                .col-lg-5
                  figure
                    img(src='@/assets/curso/temas/t2/linea2-img4.png', alt='')
                .col-lg-7.mb-4.mb-lg-0.mt-2
                  p Las bolsas de plástico, fabricadas con polietileno de baja densidad, tardan más de un siglo en descomponerse totalmente. La buena noticia es que ya existen alternativas, como las bolsas de fécula de papa entre otras. Sin embargo, las botellas de plástico pueden tardar en degradarse hasta 1000 años si permanecen enterradas.
              .row(titulo="4.000 años" subtitulo="Vidrio")
                .col-lg-5
                  figure
                    img(src='@/assets/curso/temas/t2/linea2-img5.png', alt='')
                .col-lg-7.mb-4.mb-lg-0.mt-2
                  p Para los microorganismos del suelo es muy difícil realizar su descomposición, sea cual sea las dimensiones y las formas (como botellas de vidrio, vasos, gafas de cristal, etc…). El vidrio debe ser reciclado para este fin o su huella es casi eterna.
        

    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.5  Impacto ambiental positivo

    p.mb-4(data-aos="fade") El impacto ambiental positivo hace referencia a toda aquella actividad que beneficia al medio ambiente ayudando a mejorar o corregir los efectos negativos ambientales que se han generado en la actualidad. Los impactos ambientales positivos se pueden dar a través de diferentes formas naturalmente como lo son:

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-3.col-md-6.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/tarj5-ico1.svg' alt='')
          .tarjeta.bg-15
            .p-4
              h5.text-center Reforestación 
      .col-lg-3.col-md-6.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/tarj5-ico2.svg' alt='')
          .tarjeta.bg-18
            .p-4
              h5.text-center Tratamiento de agua residuales
      .col-lg-3.col-md-6.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/tarj5-ico3.svg' alt='')
          .tarjeta.bg-19
            .p-4
              h5.text-center Reciclaje
      .col-lg-3.col-md-6.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t2/tarj5-ico4.svg' alt='')
          .tarjeta.bg-20
            .p-4
              h5.text-center Uso de energías renovables

    .row.align-items-center.justify-content-center
      .col-lg-8.mb-4(data-aos="fade-right")
        p Al hacer referencia al impacto de la economía en el medio ambiente, se obtiene una perspectiva de la situación económica actual, destacando la contribución de nuevas corrientes económicas centradas en la sostenibilidad y el cuidado ambiental, como son los casos de los productos biodegradables y la economía circular. Estas innovaciones generan un impacto económico positivo en el medio ambiente, ofreciendo soluciones en áreas como el reciclaje y la reducción de la contaminación.
        p La energía renovable representa una de las propuestas más innovadoras y atractivas para los inversionistas, quienes buscan concretar una multitud de proyectos en este ámbito. Las fuentes de energía renovable contribuyen significativamente al cuidado del planeta, ya que se basan en el aprovechamiento de elementos naturales, minimizando así los riesgos para otros componentes esenciales del ecosistema. Un ejemplo claro de esto es la comparación con el petróleo, cuyo proceso de extracción y utilización representa un peligro constante para la tierra y las aguas, debido a su alta tasa de contaminación. En contraste, la biomasa ha emergido como una alternativa positiva y sostenible, convirtiéndose en un competidor natural del petróleo. Es por ello que se han propuesto numerosos proyectos con el objetivo de reemplazar progresivamente el uso del petróleo por fuentes de biomasa en los próximos años.
        h5 Para que una idea de negocio tenga un buen impacto positivo en el ambiente se debe tener en cuenta lo siguiente:
      .col-lg-4.col-7.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/img9.png', alt='')

    .row.fondo4-t2.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .titulo-sexto.color-acento-contenido(data-aos="fade")
            p.mb-0 #[b Figura 5.] Estrategias clave para una sostenibilidad integral
          .col-lg-8
            figure(data-aos="fade-down")
              img(src='@/assets/curso/temas/t2/fig5.svg', alt='La figura ilustra acciones para una gestión sostenible: evaluar proyectos ambientales y sociales, definir estrategias de sostenibilidad, aliar con grupos clave, adoptar buenas prácticas, usar tecnologías limpias, seguir la economía circular y optar por materias primas biodegradables. Todas están interconectadas en un ciclo, mostrando su interdependencia.')





</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    indicadorTarjetaFlip: true,
    mostrarIndicador: true,
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
