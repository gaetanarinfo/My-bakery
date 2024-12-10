<template>
  <HeaderComponent />

  <MyAccountComponent />

  <Section7 />

  <FooterComponent />
</template>

<script>
import HeaderComponent from 'components/Header.vue'
import MyAccountComponent from 'components/MyAccount.vue'
import FooterComponent from 'components/Footer.vue'
import Section7 from 'components/home/sections/Section7.vue'

import { defineComponent } from 'vue'

// Balise Méta
import { useMeta } from 'quasar'

const title = 'My bakery - connexion & incription',
  description = 'En vous inscrivant ou en vous connectant sur My Bakery, profitez d\'un accès complet à notre site internet, grâce à votre compte : acheter nos produits, ajouter ou modifier un établissement, suivre votre commande ou voir les statistiques de votre établissement depuis sa création.',
  url = 'https://my-bakery.fr/my-account',
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
  name: 'MyAccount',
  components: {
    HeaderComponent,
    MyAccountComponent,
    FooterComponent,
    Section7,
  },
  setup () {

    // needs to be called in setup()
    useMeta(metaData)

    return {

    }

  },
})
</script>
