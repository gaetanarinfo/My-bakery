<template>
  <HeaderComponent />

  <ForgotComponent />

  <Section7 />

  <FooterComponent />
</template>

<script>
import HeaderComponent from 'components/Header.vue'
import ForgotComponent from 'components/ForgotPassword.vue'
import FooterComponent from 'components/Footer.vue'
import Section7 from 'components/home/sections/Section7.vue'

import { defineComponent } from 'vue'

// Balise Méta
import { useMeta } from 'quasar'

const title = 'My bakery - modification de votre mot de passe',
  description = 'Retrouvez toutes les meilleures boulangeries en France sur My Bakery.',
  url = 'https://my-bakery.fr/forgot-password',
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
  name: 'ForgotPassword',
  setup () {

    // needs to be called in setup()
    useMeta(metaData)

    return {

    }

  },
  components: {
    HeaderComponent,
    ForgotComponent,
    FooterComponent,
    Section7,
  },
})
</script>
