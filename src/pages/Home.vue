<template>

  <q-page class="home">

    <HeaderComponent />

    <SliderComponent />

    <SectionsHome />

    <FooterComponent />

  </q-page>

</template>

<script>

import { defineComponent } from 'vue'

import HeaderComponent from 'components/home/Header.vue'
import FooterComponent from 'components/Footer.vue'
import SliderComponent from 'components/Slider.vue'
import SectionsHome from 'components/SectionsHome.vue'

// Balise Méta
import { useMeta } from 'quasar'

const title = 'My bakery - classement des meilleurs boulangerie de France',
  description = 'Retrouvez toutes les meilleures boulangeries en France sur My Bakery.',
  url = 'https://my-bakery.fr',
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

export default defineComponent({
  name: 'Home',
  components: {
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    SectionsHome
  },
  setup () {

    // Balise Méta
    useMeta(metaData)

    return {

    }

  },
  mounted () {

    // Header

    $(window).scroll(function () {
      if ($(this).scrollTop() >= 300) {
        $('.fadeIn.header').addClass('navigation-sticky navigation-unpin')
      } else {
        $('.fadeIn.header').removeClass('navigation-sticky navigation-unpin')
      }
    })

    $('.fadeIn').fadeIn(600)
    $('.fadeIn2').fadeIn(600)
    $('.fadeIn3').fadeIn(600)
    $('.fadeIn4').fadeIn(600)
    $('.fadeIn5').fadeIn(600)
    $('.fadeIn6').fadeIn(600)
    $('.fadeIn7').fadeIn(600)
    $('.fadeIn8').fadeIn(600)
    $('.fadeIn9').fadeIn(600)
    $('.fadeIn10').fadeIn(600)
    $('.fadeIn11').fadeIn(600)
    $('.fadeIn12').fadeIn(600)
    $('.fadeIn13').fadeIn(600)
    $('.fadeIn14').fadeIn(600)

  }
})
</script>
