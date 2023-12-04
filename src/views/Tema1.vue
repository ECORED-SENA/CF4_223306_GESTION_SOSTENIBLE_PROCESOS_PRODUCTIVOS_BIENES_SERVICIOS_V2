<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 1
      h1 Modelo de negocio en la implementación de la economía circular

    p.mb-4(data-aos="fade") Un modelo de negocio es una herramienta de planificación previa al inicio de un proyecto, que facilita definir con claridad los objetivos y alcances de una empresa en un proyecto específico, evaluando su viabilidad como se detalla a continuación:

    ImagenInfografica.color-acento-botones.mb-5(data-aos="fade-down")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/t1/img-infog.svg', alt='El modelo de negocio define la estrategia operativa de un proyecto, determinando el tipo de ventas (B2C o B2B), áreas de mejora, segmento de mercado, y estrategias de ventas y generación de recursos para la empresa.')
      .tarjeta.bg-1.p-3(x="21.5%" y="32.5%" numero="+")
        .titulo-sexto.color-acento-contenido.mb-3
          h5.mb-0 ¿Cada cuánto se venderá?
        p Se establece la modalidad de ventas logrando establecer si se le vende a cliente por detalle o a cliente por mayor y cada cuanto se hace eso (B2B, B2C).
      .tarjeta.bg-1.p-3(x="38%" y="24.5%" numero="+")
        .titulo-sexto.color-acento-contenido.mb-3
          h5.mb-0 ¿Qué se debe mejorar?
        p El modelo de negocio entiende la mejora continua como la oportunidad de avanzar rápidamente en el mercado y establece un plan para trabajar en ello.
      .tarjeta.bg-1.p-3(x="90%" y="26%" numero="+")
        .titulo-sexto.color-acento-contenido.mb-3
          h5.mb-0 ¿A quién se le vende?
        p Define el cliente objetivo dejando claro el segmento de mercado a trabajar por parte de una empresa.
      .tarjeta.bg-1.p-3(x="69%" y="56.5%" numero="+")
        .titulo-sexto.color-acento-contenido.mb-3
          h5.mb-0 ¿Cómo generar ventas?
        p Las ventas son el resultado de una planeación que debe ser detallada con proyecciones establecidas.
      .tarjeta.bg-1.p-3(x="31%" y="64.5%" numero="+")
        .titulo-sexto.color-acento-contenido.mb-3
          h5.mb-0 ¿Cómo generar recursos?
        p Las empresas no viven solo de las ventas, el modelo de negocio apoya directamente la generación de recursos para los diferentes movimientos empresariales.
    
    .row.align-items-center.justify-content-center.mb-3
      .col-lg-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/img.png' alt='')
      .col-lg-8.mb-4(data-aos="fade-left")
        p El modelo de negocio es fundamental para entender los alcances de la empresa y prevenir inversiones erróneas, protegiendo así los intereses de la organización. Esta herramienta de investigación facilita la identificación clara de la naturaleza de la empresa y del usuario dentro del contexto del mercado. Dada su amplitud, existen diversos tipos de modelos de negocio. En este contexto y para fines formativos, nos centraremos en el modelo de negocio circular. En pocas palabras, los modelos de negocio encapsulan el conjunto de ideas, estrategias y principios que las organizaciones utilizan para crear valor.
        p En Colombia se viene trabajando el sustento de la economía con este tipo de modelos, como lo dice MinAmbiente (2020) 
          span.t-brown.fw-bold “la economía circular abre oportunidades para un abanico de nuevos modelos de negocio a partir de innovaciones tecnológicas, servicios de desmaterialización y productos nuevos que aumentan las posibilidades de nuevos ciclos de transformación en sistemas industriales” 
          | por ende los emprendimientos nacionales y las empresas ven grandes oportunidades en este medio. Un modelo de negocio circular se fundamenta en el análisis y desarrollo, a partir de su concepción, de cada una de las probables recirculaciones de elementos y materiales y la reducción o supresión de residuos, durante todo el periodo de vida del producto.
    
    h5.mb-4(data-aos="fade") Para entender mejor el concepto de modelo de negocio se realiza la siguiente gráfica que explica lo que es un modelo de negocio circular:

    .titulo-sexto.color-acento-contenido(data-aos="fade")
      p.mb-0 #[b Figura 1.] Modelo de negocio en la economía circular
    figure.mb-5(data-aos="fade-down")
      img(src='@/assets/curso/temas/t1/fig1.svg', alt='El diagrama muestra un modelo de economía circular para productos. Tras ser diseñados y manufacturados, los productos se venden y usan. Posteriormente, pueden ser revendidos, reparados o remanufacturados. Si finalizan su vida útil, se reciclan o revalorizan, tratando los residuos como recursos. Este ciclo puede repetirse varias veces, promoviendo el compartir y reutilizar recursos en lugar de descartarlos.')
      figcaption.mt-3 Nota. Tomada de Guía rápida para diseñar modelos de negocio circulares de Alba, Á. (2021). 

    .row.align-items-center.justify-content-center
      .col-lg-8.mb-4(data-aos="fade-right")
        .cajon-b.color-secundario.p-3.ps-0.mb-3
          p.mb-0 La economía circular y la innovación deben ser componentes fundamentales en el ADN de las empresas, ya que estas herramientas les permiten mantenerse competitivas. La circularidad, en particular, desempeña un papel crucial en la innovación de los planes estratégicos empresariales, impulsando a las empresas a pensar en el futuro y a adoptar modelos de negocio que reciclen y transformen materiales, completando así el ciclo de la circularidad.
        p La economía circular no solo fomenta el reciclaje de materiales, sino que también contribuye a la descontaminación del medio ambiente, una problemática urgente en la actualidad. Este modelo ha captado la atención de las empresas, incentivándolas a implementarlo en sus operaciones para conservar el medio ambiente de manera innovadora, reutilizando materia prima para generar nuevos productos. A nivel mundial, la economía circular ha sido bien recibida por los consumidores, quienes aprueban este enfoque económico por su contribución a la reducción del calentamiento global.
      .col-lg-4.col-7.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/img2.png', alt='')

    h5.mb-4(data-aos="fade") A continuación, se presentan varios ejemplos de negocios que han adoptado el modelo de economía circular:

    .row.fondo-t1.align-items-center.py-4.mb-3
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .col-lg-10(data-aos="fade-down")
            ImagenInfografica.color-acento-botones.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/temas/t1/img-infog2.svg', alt='La imagen muestra los negocios circulares promueven prácticas sostenibles a través de: 1) suministros circulares que utilizan materiales renovables o reciclables, 2) recuperación de recursos para reutilizar materiales de desecho, 3) extensión de la vida útil de los productos, y 4) modelos de compartir y alquilar bienes para maximizar su uso.')
              .tarjeta.bg-3.p-3(x="29.5%" y="22.5%" numero="+")
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Suministros circulares
                p.mb-0 Se basa en el aporte de suministros que sean completamente renovables, reciclables o biodegradables y que, por tanto, ayudan a mantener la circularidad de los procesos y sistemas de consumo.
                p.mb-0 Su propuesta de valor reside en la sustitución de combustibles fósiles o de materiales críticos o escasos.
              .tarjeta.bg-3.p-3(x="36.5%" y="46.5%" numero="+")
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Recuperación de recursos
                p.mb-0 Es hacer más rentable la obtención de ciertos materiales a partir de los residuos que directamente de la minería tradicional. Por ejemplo: usar piezas de elementos funcionales de productos que no funcionan, por ejemplo, una batería de teléfono en un teléfono que no funciona.
              .tarjet.bg-3.p-3(x="50%" y="54%" numero="+")
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Extensión de la vida del producto
                p.mb-0 La idea es hacer productos que no sean desechables, que sean útiles en al menos un periodo de tiempo prudente. Por ejemplo: cambiar las bolsas de un solo uso por bolsas de varios usos.
              .tarjeta.bg-3.p-3(x="63.5%" y="46.5%" numero="+")
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Compartir plataformas
                p.mb-0 También llamado consumo colaborativo, consiste en usar la tecnología para aumentar el uso de todo tipo de bienes. En ellas, el propietario ofrece a otros usuarios el uso de aquello que está en su poder a cambio de una compensación económica o comprar licencias entre varios usuarios o un camión entre varias empresas.
              .tarjeta.bg-3.p-3(x="70.5%" y="22.5%" numero="+")
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Producto como servicio
                p.mb-0 Muy similar al anterior, la diferencia está en que es la marca o el fabricante quien ofrece la posibilidad a sus clientes de, en lugar de comprar, pagar por el uso del producto.
                p.mb-0 El usuario deja de ser propietario y pasa a “alquilar” el producto en cuestión.


    .row.bg-primario.align-items-center.py-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center
          .col-lg-2.col-md-2.col-4.mb-3.mb-md-0
            img.m-auto(src='@/assets/curso/temas/t1/dest.svg' alt='' style="width: 130px;")
          .col-lg-10.col-md-10
            p.mb-0 Para ampliar el tema sobre el Modelo de negocio en la implementación de la economía circular, se recomienda ver el video sobre: “La Economía circular en la empresa y nuevas modelos de negocio” que se encuentra relacionado en el material complementario.


    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.1  Portafolio de iniciativas de economía circular

    p.mb-4(data-aos="fade") Un portafolio de iniciativas, es un conjunto de ideas agrupadas y presentadas de una forma ordenada      con la información completa y necesaria para que el inversor pueda ver lo que se pretende realizar. En este caso un portafolio de iniciativas de economía circular es una estrategia que muestra las mejores ideas en la ejecución del plan que hace circular el modelo de negocio de la empresa, la tarea de este portafolio es mostrar las mejores opciones y estrategias para cumplir con el objetivo principal. A continuación, se presenta el portafolio de economía circular como recurso básico de trabajo:

    .titulo-sexto.color-acento-contenido(data-aos="fade")
      p.mb-0 #[b Figura 2.] Portafolio de economía circular
    figure.mb-5(data-aos="fade-down")
      img(src='@/assets/curso/temas/t1/fig2.svg', alt='La infografía ilustra la gestión de recursos tanto renovables como finitos en un sistema circular. Los renovables, derivados de la agricultura, se transforman en materias primas bioquímicas y pueden regenerarse como biogás o reingresar al ciclo. Los recursos finitos, tras su uso en productos y servicios, se someten a un ciclo de reutilización buscando su restauración y minimización de desechos. En este sistema, el consumidor juega un papel vital, enfocándose en compartir, mantener y reducir impactos negativos.')
      figcaption.mt-3 Nota. Elaborado a partir de Ceiba (2020)

    p.mb-4(data-aos="fade") Se busca que los portafolios de la economía circular sean innovadores, con el fin de experimentar nuevos proyectos en el ámbito internacional, ofreciendo un intercambio de experiencias y nuevos conocimientos a la economía. Es por eso por lo que entre más innovador sea el portafolio, más va a llamar la atención de las empresas se recomienda que cuente con las siguientes características:

    SlyderF.mb-5(columnas="col-lg-4 col-md-6" data-aos="fade-down")
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t1/tarj-ico1.svg' alt='')
        .tarjeta.bg-8
          .p-4
            .m-auto.bg-white.w-fit.text-center.br-21.px-5.py-2.mb-4
              h4.mb-0.text-center Identificación
            p.text-center Se debe mostrar con claridad de donde es el portafolio.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t1/tarj-ico2.svg' alt='')
        .tarjeta.bg-8
          .p-4
            .m-auto.bg-white.w-fit.text-center.br-21.px-5.py-2.mb-4
              h4.mb-0.text-center Categorización
            p.text-center Presenta el material ordenado y jerarquizado.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t1/tarj-ico3.svg' alt='')
        .tarjeta.bg-8
          .p-4
            .m-auto.bg-white.w-fit.text-center.br-21.px-5.py-2.mb-4
              h4.mb-0.text-center Evaluación
            p.text-center El portafolio está todo el tiempo en evaluación constante.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t1/tarj-ico4.svg' alt='')
        .tarjeta.bg-8
          .p-4
            .m-auto.bg-white.w-fit.text-center.br-21.px-5.py-2.mb-4
              h4.mb-0.text-center Selección
            p.text-center Permite seleccionar los productos o servicios que trabaja la empresa.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t1/tarj-ico5.svg' alt='')
        .tarjeta.bg-8
          .p-4
            .m-auto.bg-white.w-fit.text-center.br-21.px-5.py-2.mb-4
              h4.mb-0.text-center Priorización
            p.text-center Da relevancia a los productos o servicios que mejor trabaja la empresa con relación a la circularidad.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t1/tarj-ico6.svg' alt='')
        .tarjeta.bg-8
          .p-4
            .m-auto.bg-white.w-fit.text-center.br-21.px-5.py-2.mb-4
              h4.mb-0.text-center Balanceo
            p.text-center Muestra el balance de la empresa con el medio social y medio ambiente.
      .tarjeta-avatar
        img(src='@/assets/curso/temas/t1/tarj-ico7.svg' alt='')
        .tarjeta.bg-8
          .p-4
            .m-auto.bg-white.w-fit.text-center.br-21.px-5.py-2.mb-4
              h4.mb-0.text-center Autorización
            p.text-center Permite autorizar a la empresa para trabajar en economía circular.

    .row.align-items-center.justify-content-center
      .col-lg-1.col-md-2.col-4.mb-4(data-aos="fade-right")
        .bg-15
          img.p-2(src='@/assets/curso/temas/t1/ico.svg', alt='')
      .col-lg-11.col-md-10.mb-4(data-aos="fade-left")
        p.mb-0 Cada portafolio persigue un objetivo específico que debe ser identificado, evaluado y clasificado antes de ser priorizado. Una vez definido su propósito, la empresa puede determinar la opción más adecuada para invertir. La selección debe incluir estrategias eficaces para alcanzar los objetivos establecidos, minimizando así el riesgo de incurrir en pérdidas financieras o sufrir retrasos en su desarrollo.


    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.2  Fondos de inversión de impacto social

    p.mb-4(data-aos="fade") Una inversión de impacto es el concepto usado en todo el mundo, para referirse a inversiones llevadas a cabo a fin de crear efecto social y medioambiental positivo, medible junto con retorno financiero, contribuyendo al desarrollo social y protección de medio ambiente. Además de abordar problemas como lo que refiere Ship2BFundation (2021) 
      span.t-brown.fw-bold “la inversión de impacto aborda problemas ambientales y sociales diferentes como la agricultura sostenible, vivienda asequible, salud asequible y accesible, desafíos del cambio climático y otros temas importantes que mejoren la calidad de vida entre la población”
      | . Este tipo de inversión está potenciando las ganas de los inversores por proyectos innovadores de alto impacto.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .bloque-texto-g.bg-3.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t1/img3.png')})`}")
          .bloque-texto-g__texto.p-4
            p.mb-0 La inversión de impacto también es una ganancia financiera, ya que los costos sociales van de la mano con los beneficios financieros. Una indagación de un rendimiento financiero no califica una inversión social en una donación caritativa o una donación no reembolsable. Lo que distingue a la inversión social de la inversión tradicional es que la rentabilidad financiera está estrechamente relacionada con el desempeño social y depende del logro de los objetivos sociales: específicamente, los inversores solo recibirán productividad y rentabilidad financiera si esto se logra a eso se le puede llamar mínimo impacto social.

    p.mb-4(data-aos="fade") El impacto social debe ser medido y convertido en métricas financieras, , como se muestra en la siguiente infografía:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade")
          p.mb-0 #[b Figura  3.]  Inversión con impacto social
        figure(data-aos="fade-down")
          img(src='@/assets/curso/temas/t1/fig3.svg', alt='La infografía muestra la interconexión entre el capital, las motivaciones detrás de su asignación y las entidades que se benefician de él dentro del paradigma de la inversión con impacto social.')
          figcaption.mt-3 Nota. Elaborado a partir de Bustamante (2016)

    .row.align-items-center.justify-content-center
      .col-lg-8.mb-4(data-aos="fade-right")
        p Las inversiones de impacto resultan atractivas para las empresas no solo porque persiguen generar retornos financieros, sino también debido a su impacto ambiental y social positivo. Dichas inversiones poseen un carácter transformador y se distinguen porque buscan inducir un cambio positivo; además, evitan los impactos negativos asociados a la inversión en términos medioambientales y de sostenibilidad. En Colombia, como señala Daniel Uribe de AFE, las empresas muestran una creciente preferencia por este tipo de inversión. Esto se debe a la existencia de distintos tipos de actores, cada uno con sus propias motivaciones, expectativas y enfoques, los cuales se coordinan para crear iniciativas orientadas a la inversión de impacto. En este contexto colombiano, existen 32 actores involucrados en el ecosistema de inversión de impacto, y el 10% de ellos son fundaciones. Asimismo, se disponen de diversos mecanismos para llevar a cabo la inversión de impacto, incluyendo fondos de inversión, fondos de inversión de impacto, estrategias de #[em Blended Finance] y bonos de impacto social, entre otros (2018).
      .col-lg-4.col-7.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/img4.png', alt='')

    p.mb-4(data-aos="fade") Por otro lado, mediante este tipo de inversiones, las empresas aspiran a optimizar la relación entre rentabilidad y riesgo. Esto puede lograrse a través de una adecuada gestión de las características presentadas en la siguiente infografía, lo cual conduce hacia la sostenibilidad:

    figure(data-aos="fade-down")
      img(src='@/assets/curso/temas/t1/fig4.svg', alt='La imagen presenta cinco elementos clave relacionados con inversiones y su impacto: Rentabilidad financiera. Impacto social. Intencionalidad y medición. Impacto ambiental. Ámbito geográfico.') 

      

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
