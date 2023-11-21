<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 5
      h1 Sistemas de costos

    .cajon-b.color-primario.p-3.mb-4(data-aos="fade")
      p.mb-0 Los sistemas de costos son un grupo de técnicas y métodos para calcular el precio de las diferentes ocupaciones de la compañía, considerando el tipo de actividad se posee la siguiente categorización de los sistemas de costos:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-4")(data-aos="fade-down")
      .row.justify-content-center(titulo="Sistemas de costos según el tratamiento de los costos fijos")
        .col-lg-7
          p Los sistemas de costos tienen la posibilidad de clasificar conforme el procedimiento de los precios fijos, de acuerdo con la forma de concentración de los precios y de acuerdo con el procedimiento de precios. Los sistemas de precios de acuerdo con el procedimiento de los precios fijos tienen la posibilidad de ser: sistemas de precios por absorción y sistemas de precios cambiantes.
        .col-lg-4
          img(src='@/assets/curso/temas/t5/acord-1.png' alt='')
      .row.justify-content-center(titulo="Sistemas de costos según la forma de concentración de los costos")
        .col-lg-7
          p Los sistemas de costos conforme con la forma de concentración de los precios tienen la posibilidad de ser: precios por directivas y precios por procesos. Los precios por directivas se emplean una vez que hay demandas especiales de consumidores. En lo que respecta, los precios por procesos se aplican una vez que la producción es repetitiva y diversificada, aunque los artículos sean uniformes entre sí.
        .col-lg-4
          img(src='@/assets/curso/temas/t5/acord-2.png' alt='')
      .row.justify-content-center(titulo="Sistemas de costos según el método de costos")
        .col-lg-7
          p De acuerdo con el sistema de costeo procedimental, se encuentra: el sistema de precios históricos o de producción, el sistema de precios predeterminados. Estos últimos incluyen: el sistema de precios estimados y el sistema de precios estándar.
          p Sistemas de precios históricos o resultantes, es el precio en función de los insumos reales utilizados. En los sistemas de precios históricos existen: sistemas de guía de producción, sistemas de precios de categorías, procesos y actividades.
        .col-lg-4
          img(src='@/assets/curso/temas/t5/acord-3.png' alt='')

    .row.bg-acento-contenido.align-items-center.py-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .col-lg-2.col-md-2.col-4.mb-3.mb-md-0
            img.m-auto(src='@/assets/curso/temas/t5/ico.svg' alt='' style="width: 130px;")
          .col-lg-10.col-md-10
            p.mb-0.text-white Para ampliar el tema sobre Sistema de costo, se recomienda revisar el artículo sobre: “Diseño de Sistemas de Costeo: Fundamentos Teóricos” que se encuentra en el material complementario de este componente formativo. 


    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 5.1 Análisis costo beneficio

    .row.align-items-center.justify-content-center
      .col-lg-8.mb-4(data-aos="fade-right")
        .cajon-b.color-secundario.p-3.ps-0.mb-4
          p.mb-0 El costo – beneficio es un proceso por medio del cual las empresas tienen la posibilidad de examinar elecciones, sistemas, proyectos, o establecer un costo para intangibles. El modelo se hace identificando las ventajas de una acción, así como los costes asociados y restando los costes de las ventajas. Una vez hecho el ejercicio se tiene resultados útiles que se van a poder utilizar para obtener conclusiones sobre la viabilidad o conveniencia de una elección o situación. 
        p La investigación de costo – beneficio es la manera de tomar elecciones fundamentadas en datos más usada por las organizaciones. Tanto en medio de las novedosas como en esas más establecidas. Los principios y las diversas fases del proceso tienen la posibilidad de utilizar básicamente cualquier proceso de toma de elecciones. No importa si está referente con el comercio o de otra tipología.
      .col-lg-4.col-7.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t5/img.png', alt='')

    .row.fondo-t5.align-items-center.py-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          p.mb-4(data-aos="fade") El análisis de costo beneficio se puede utilizar para:

          .row.align-items-center.justify-content-center.mb-3
            .col-lg-5.mb-4(data-aos="fade-right")
              img(src='@/assets/curso/temas/t5/img2.svg' alt='')
            .col-lg-7.mb-4(data-aos="fade-left")
              .row.justify-content-center.mb-4
                .w-fit.bg-white.p-2.px-4.br-21.bx-sw1
                  h4.text-center.mb-0 Usos del análisis costo beneficio empresarial
              ol.lista-ol--cuadro.lista-ol--separador.mt-3
                li 
                  .lista-ol--cuadro__vineta
                    span.fw-bold 1
                  | Evaluar si una inversión de capital merece la pena.
                li 
                  .lista-ol--cuadro__vineta
                    span.fw-bold 2
                  | Decidir si contratar o no nuevos empleados.
                li 
                  .lista-ol--cuadro__vineta
                    span.fw-bold 3
                  | Determinar si un proyecto o cambio operativo es factible.
                li 
                  .lista-ol--cuadro__vineta
                    span.fw-bold 4
                  span.mb-0 Desarrollar un #[em benchmarking] para comparar proyectos.
                li 
                  .lista-ol--cuadro__vineta
                    span.fw-bold 5
                  span.mb-0 Comparar una iniciativa de #[em marketing] con otra.
                li 
                  .lista-ol--cuadro__vineta
                    span.fw-bold 6
                  | Priorizar las inversiones.
                li 
                  .lista-ol--cuadro__vineta
                    span.fw-bold 7
                  | Establecer metas para el proyecto en sí.

          .col-12
            .tabla-a.color-acento-contenido(data-aos="fade-down")
              table
                thead
                  tr.bg-5.text-white
                    th El análisis de costo beneficio trae sus ventajas como lo son:
                    th Pero también trae consigo ciertas desventajas las cuales son:
                tbody
                  tr.bg-2
                    td 
                      ul.lista-ul--color.fa-ul.mb-0
                        li.mb-0 
                          i.fas.fa-check-circle
                          | Base de datos
                    td
                      ul.lista-ul--color.fa-ul.mb-0
                        li.mb-0 
                          i.fas.fa-check-circle
                          | Difícil predicción de todas las variables
                  tr.bg-white
                    td 
                      ul.lista-ul--color.fa-ul.mb-0
                        li.mb-0 
                          i.fas.fa-check-circle
                          | Simplificación de decisiones.
                    td
                      ul.lista-ul--color.fa-ul.mb-0
                        li.mb-0 
                          i.fas.fa-check-circle
                          | La fiabilidad solo se basa de los datos que tengas.
                  tr.bg-2
                    td 
                      ul.lista-ul--color.fa-ul.mb-0
                        li.mb-0 
                          i.fas.fa-check-circle
                          | Costes y beneficios ocultos.
                    td
                      ul.lista-ul--color.fa-ul.mb-0
                        li.mb-0 
                          i.fas.fa-check-circle
                          | Elimina los elementos humanos.


    Separador          
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 5.2  Tasa de retorno

    .row.fondo2-t5.align-items-center.py-4
      .col-lg-12.col-12.px-lg-5.px-4
        .row.align-items-center.justify-content-center

          .col-lg-10
            .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade-down")
              .bloque-texto-g__img(
                :style="{'background-image': `url(${require('@/assets/curso/temas/t5/img3.png')})`}")
              .bloque-texto-g__texto.p-5
                p.mb-0 La tasa de retorno conocida como tasa de rentabilidad, es la productividad que da una inversión siendo el indicador adecuado para medir la inversión, reflejando así el margen de pérdidas o beneficios obtenidos en el periodo de tiempo que se realizó la inversión. Para medir la tasa de retorno se debe aplicar la siguiente fórmula: Tasa de rentabilidad–= [(Valor final - valor inicial) / Valor inicial] x 100

            p(data-aos="fade") En la tasa de retorno también se encuentra la tasa interna de retorno. Cuando se habla de la tasa interna de retorno se hace referencia a una tasa porcentual que indica la rentabilidad anual que genera el proyecto. Es un instrumento más que hay para lograr evaluar un plan sin perder de vista el total del proyecto.

            p(data-aos="fade") Con la tasa interna de retorno se puede saber en qué momento una inversión puede ser rentable o no y es reflejada en porcentaje. Se usa especialmente cuando se tienen varias alternativas de inversión para definir con cual opción se puede quedar la empresa sin multiplicar su riesgo. 

            p.mb-4(data-aos="fade") La fórmula de la tasa de retorno interna es la siguiente:

            .row.align-items-center.justify-content-center
              .col-lg-8.mb-4(data-aos="fade-right")
                .bg-6.p-3
                  h3.text-center.text-white.mb-0 Tasa interna de retorno.
                .bg-7.p-3.px-md-4
                  .row.align-items-center 
                    .col-md-6.mb-3.mb-md-0
                      p Donde:
                      p #[b Qn =] es el flujo de caja en el periodo n.
                      p #[b N =] es el número de periodos.
                      p #[b I =] es el valor de la inversión inicial.
                    .col-md-6
                      img(src='@/assets/curso/temas/t5/form.svg', alt='')
              .col-lg-4.col-7.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/temas/t5/img3.svg', alt='')


    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 5.3  Costo anual equivalente

    .row.align-items-center.justify-content-center
      .col-lg-5.col-8.mb-4.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t5/img4.png' alt='')
      .col-lg-7(data-aos="fade-left")
        p Este es un porcentaje que le permite comparar diferentes alternativas que ofrecen los proveedores de productos o servicios financieros. Se utiliza para evaluar proyectos de inversión y corresponde a todos los ingresos y gastos convertidos a un monto equivalente una vez al año, el mismo para cada período. El costo anual equivalente del proyecto es el costo y los ingresos.
        p Se usa para una diversidad de fines, integrado el presupuesto de capital; sin embargo, se utiliza con más frecuencia para examinar dos o más proyectos potenciales con diferentes ciclos de vida, donde los precios son la variable más importante.
        p La fórmula que se maneja es la siguiente:
        .bg-6.p-3
          h3.text-center.text-white.mb-0 Costo anual equivalente
        .bg-7.p-3.px-md-4.px-lg-5
          h4.text-center CAUE o BAUE = VAN * (1+i) n*i/(1-i) n*i
          p.mb-0 Donde:
          p.mb-0 #[b i:] corresponde a la tasa de intereses.
          p.mb-0 #[b n:] corresponde al número de periodos a evaluar



</template>

<script>
export default {
  name: 'Tema5',
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
