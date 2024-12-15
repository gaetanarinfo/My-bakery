<template name="Products">

  <HeaderComponent />

  <ProductsComponent />

  <Section7 />

  <FooterComponent />

</template>

<script>

import HeaderComponent from 'components/Header.vue'
import ProductsComponent from 'components/Products.vue'
import FooterComponent from 'components/Footer.vue'
import Section7 from 'components/home/sections/Section7.vue'

import { defineComponent } from 'vue'

// Balise Méta
import { useMeta } from 'quasar'

const title = 'My bakery - nos produits & services',
  description = 'Explorez les services et les produits offerts par My Bakery. Les prix sont attractifs et adaptés à tous les budgets. Paiement sécurisé via Paypal.',
  url = 'https://my-bakery.fr/products',
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
  name: 'Products',
  components: {
    HeaderComponent,
    ProductsComponent,
    Section7,
    FooterComponent,
  },
  setup () {

    // needs to be called in setup()
    useMeta(metaData)

    return {

    }

  },
  mounted () {

    // Header

    $('.header').addClass('h-blog')
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
      $('html, body').animate({ scrollTop: 0 }, 200)
    })

  }
})

</script>
