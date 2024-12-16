<template>
  <HeaderComponent />

  <AddBakeryComponent />

  <Section7 />

  <FooterComponent />
</template>

<script>
import { defineComponent, onMounted, computed } from 'vue'
import HeaderComponent from 'components/Header.vue'
import AddBakeryComponent from 'components/AddBakery.vue'
import FooterComponent from 'components/Footer.vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router';
import Section7 from 'components/home/sections/Section7.vue'

import { useMeta } from 'quasar'

// Balise Méta
const title = 'My bakery - ajouter une boulangerie',
  description = 'Retrouvez toutes les meilleures boulangeries en France sur My Bakery.',
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
  setup() {

    useMeta(metaData)

    return {
    }

  },
  components: {
    HeaderComponent,
    AddBakeryComponent,
    FooterComponent,
    Section7
  },
})
</script>
