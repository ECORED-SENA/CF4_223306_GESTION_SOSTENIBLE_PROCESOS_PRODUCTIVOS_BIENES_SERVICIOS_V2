<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 3
      h1 Comunicación

    p.mb-4(data-aos="fade") La comunicación es la realidad que une a las personas y empresas permitiendo que se integren desde cualquier lugar del mundo, en el siguiente video se explica a detalle cada uno de los elementos que permiten hacer el proceso:  

    figure.mb-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/uyfkdAMQAI8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Elementos de la comunicación

    .bg-1.p-4(data-aos="fade-down")
      .row.align-items-center
        .col-lg-3.col-md-4.mb-3.mb-md-0
          img(src='@/assets/curso/temas/t3/ico.svg', alt='')
        .col-lg-9.col-md-8
          p.mb-0 Estos elementos permiten que la comunicación sea una oportunidad en el diario vivir, el tema es muy amplio y se puede dividir en subgrupos para entenderla mejor: dos subgrupos importantes son los que tienen que ver con la comunicación oral y la comunicación escrita que también se conocen como tipos de la comunicación y se describen a continuación:


    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 3.1  La comunicación oral 

    p(data-aos="fade") La comunicación es un proceso que se lleva a cabo entre dos o más personas mediante el uso de un lenguaje o código compartido, utilizando un medio de transmisión físico, que comúnmente es el aire. Sin embargo, en la actualidad, se han incorporado elementos de comunicación oral que se utilizan frecuentemente en la vida cotidiana, tales como los teléfonos, computadoras y otros dispositivos electrónicos.

    h5.mb-4(data-aos="fade") En la comunicación oral la expresión juega un rol muy importante, las personas tienen dos formas de usarla:

    .tabla-a.color-acento-contenido.mb-5(data-aos="fade-down")
      thead
        tr.bg-5.text-white
          th Espontánea
          th Reflexiva
      tbody
        tr.bg-2
          td El propósito principal del habla espontánea es promover el rápido intercambio de ideas entre las personas, pero puede haber otros.
          td.bl-1 La función principal de las respuestas del habla es atraer y persuadir o persuadir al oyente. La estructura del texto en sí y la estructura gramatical son más complejas que la expresión oral automática.
    
    p.mb-4(data-aos="fade") A continuación, se hacen recomendaciones para lograr comunicación de manera efectiva que se llama asertiva:

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/VXQJ7DGmkio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Comunicación asertiva


    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 3.2  Comunicación de atributos ambientales

    .row.align-items-center.justify-content-center
      .col-lg-8.mb-4(data-aos="fade-right")
        p La comunicación ambiental juega un papel crucial al proporcionar a los ciudadanos información esencial, y facilita el aprendizaje en la consulta de datos para una comprensión más profunda de los acontecimientos en el entorno natural. Esto empodera a cada individuo para seleccionar conscientemente la información que recibe y comparte, con el objetivo de protegerse a sí mismo y contribuir al bienestar colectivo. Los temas prioritarios en este ámbito incluyen la concienciación ambiental y la modificación de hábitos, aspectos que las nuevas generaciones comprenden y valoran profundamente. El mensaje central debe enfocarse en fomentar la construcción de una sociedad plenamente sostenible.
        p La comunicación ambiental trasciende la mera difusión de temas relacionados con el medio ambiente; su propósito fundamental es promover la educación ambiental. De esta forma, la comunicación proveniente de negocios verdes o empresas alineadas con los principios de la economía circular debería adoptar este enfoque comunicacional.
        p La lealtad del cliente, por otro lado, implica establecer un vínculo emocional con los consumidores, incentivándoles a realizar compras recurrentes y fortaleciendo la relación entre clientes y empresas. Proporcionar una experiencia de compra positiva y memorable contribuye a cimentar un lazo de confianza, motivando a los clientes a adquirir nuevamente productos o servicios y a recomendar la marca a su círculo cercano. A continuación, se presentan algunos elementos clave a considerar al comunicarse con los usuarios:
      .col-lg-4.col-7.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/img.png', alt='')

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/sMT9eoUp_UY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Criterios de comunicación asertiva



</template>

<script>
export default {
  name: 'Tema3',
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
