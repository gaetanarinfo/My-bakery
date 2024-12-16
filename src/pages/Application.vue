<template name="Application">

  <HeaderComponent />

  <ApplicationComponent />

  <Section7 />

  <FooterComponent />

</template>

<script>
import { defineComponent, onMounted, computed } from 'vue'
import HeaderComponent from 'components/Header.vue'
import ApplicationComponent from 'components/Application.vue'
import FooterComponent from 'components/Footer.vue'
import Section7 from 'components/home/sections/Section7.vue'

import application_css from "../css/application.scss";

application_css

import { useMeta } from 'quasar'

// Balise Méta
const title = 'My bakery - notre application',
  description = 'L\'application My Bakery est disponible sur les plateformes Android et iOS. Vous pouvez l\'acheter et la télécharger en 3 clics sur notre site internet.',
  url = 'https://my-bakery.fr/add-bakery',
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
  name: 'Bakery',
  setup () {

    useMeta(metaData)

    return {
    }

  },
  components: {
    HeaderComponent,
    ApplicationComponent,
    FooterComponent,
    Section7
  },
})
</script>
