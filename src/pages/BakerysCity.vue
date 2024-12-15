<template name="BakerysCity">

  <HeaderComponent />

  <BakerysCityComponent />

  <Section7 />

  <FooterComponent />

</template>

<script>
import HeaderComponent from 'components/Header.vue'
import BakerysCityComponent from 'components/BakerysCity.vue'
import Section7 from 'components/home/sections/Section7.vue'
import FooterComponent from 'components/Footer.vue'

import { defineComponent } from 'vue'
import { useRoute } from 'vue-router';
import { useMeta } from 'quasar'
import axios from 'axios'

export default defineComponent({
  name: 'BakerysCity',
  components: {
    HeaderComponent,
    Section7,
    BakerysCityComponent,
    FooterComponent,
  },
  setup () {

    const route = useRoute()

    axios.get(process.env.WEBSITE + '/bakerys-markers/' + route.params.ville + '/' + route.params.id)
      .then(res => {

        const title = 'My bakery - boulangerie à ' + res.data.nom,
          description = 'Découvrez toutes les boulangeries classées par ville, découvrez les boulangeries à ' + res.data.nom,
          url = 'https://my-bakery.fr/bakerys-city/' + route.params.ville + '/' + route.params.id,
          metaData = {
            title: title,
            description: description,
            titleTemplate: title => `${title}`,
            descriptionTemplate: description => `${description}`
          }

        $(document).find('title').text(title)

        $(document).find('meta').attr('og:title', title)
        $(document).find('meta').attr('og:desciption', description)
        $(document).find('meta').attr('og:image', process.env.BANNER_URL + '/boulanger.png')
        $(document).find('meta').attr('og:url', url)

        $(document).find('meta').attr('twitter:title', title)
        $(document).find('meta').attr('twitter:description', description)
        $(document).find('meta').attr('twitter:image', process.env.BANNER_URL + '/boulanger.png')
        $(document).find('meta').attr('twitter:url', url)

        // Balise Méta
        useMeta(metaData)

      })

    return {

    }

  },
  mounted () {

    // Header

    $(window).scroll(function () {
      if ($(this).scrollTop() >= 1500) {
        $('header').removeClass('navigation-sticky navigation-unpin')
      } else {
        $('header').removeClass('navigation-sticky navigation-unpin')
      }
    })

    $('.header').addClass('h-bakery')
    $('body').removeClass('loading')
    $('.fadeIn').fadeIn(600)
    $('.fadeIn2').fadeIn(600)
    $('.fadeIn3').fadeIn(600)
    $('.fadeIn7').fadeIn(600)
    $('.fadeIn8').fadeIn(600)

    // Scroll click

    $(document).on('click', '.scroll-click-s', function (e) {
      e.preventDefault()

      const scroll = $(this).data('scroll')

      $([document.documentElement, document.body]).animate({
        scrollTop: $('#' + scroll).offset().top
      }, '200')
    })

    // FOOTER

    // Back to top

    $(window).scroll(function () {
      if ($(this).scrollTop() >= 600) {
        $('#back-top').addClass('active')
      } else {
        $('#back-top').removeClass('active')
      }
    })

    $(document).on('click', '#back-top', function (e) {
      e.preventDefault()
      $('html, body').animate({ scrollTop: 0 })
    })

  }
})
</script>
