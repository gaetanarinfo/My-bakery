<template>
  <HeaderComponent />

  <BakerysComponent />

  <Section7 />

  <FooterComponent />
</template>

<script>

import HeaderComponent from 'components/Header.vue'
import BakerysComponent from 'components/Bakerys.vue'
import FooterComponent from 'components/Footer.vue'
import Section7 from 'components/home/sections/Section7.vue'

import { defineComponent } from 'vue'
import { useMeta } from 'quasar'

// Balise Méta
const title = 'My bakery - nos meilleures boulangeries sont ici',
  description = 'Retrouvez toutes les meilleures boulangeries en France sur My Bakery.',
  url = 'https://my-bakery.fr/bakerys-pastry',
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
  name: 'Bakerys',
  components: {
    HeaderComponent,
    BakerysComponent,
    FooterComponent,
    Section7
  },
  setup () {

    // Balise Méta
    useMeta(metaData)

    return {

    }

  },
})
</script>
