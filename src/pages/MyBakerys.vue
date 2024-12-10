<template>
  <HeaderComponent />

  <MyBakerysComponent />

  <Section7 />

  <FooterComponent />
</template>

<script>
import HeaderComponent from 'components/Header.vue'
import MyBakerysComponent from 'components/MyBakerys.vue'
import FooterComponent from 'components/Footer.vue'
import Section7 from 'components/home/sections/Section7.vue'

import { defineComponent } from 'vue'

// Balise Méta
import { useMeta } from 'quasar'

const title = 'My bakery - liste de souhaits',
  description = 'Consultez la liste de toutes les boulangeries que vous aimez et que vous souhaitez partager avec vos proches.',
  url = 'https://my-bakery.fr/my-bakerys',
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
  name: 'MyBakerys',
  components: {
    HeaderComponent,
    MyBakerysComponent,
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
