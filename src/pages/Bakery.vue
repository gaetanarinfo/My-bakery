<template>
  <HeaderComponent />

  <BakeryComponent />

  <Section7 />

  <FooterComponent />
</template>

<script>

import HeaderComponent from 'components/Header.vue'
import BakeryComponent from 'components/Bakery.vue'
import FooterComponent from 'components/Footer.vue'
import Section7 from 'components/home/sections/Section7.vue'

import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router';
import axios from 'axios'
import { useMeta } from 'quasar'

export default defineComponent({
  name: 'Bakery',
  components: {
    HeaderComponent,
    BakeryComponent,
    FooterComponent,
    Section7
  },
  setup () {

    const route = useRoute(),
      store = useStore(),
      bakery = computed(() => {
        return store.state.bakery
      })

    store.dispatch('fetchBakery',
      {
        'url': route.params.url
      })

    axios.get(process.env.WEBSITE + '/bakery/' + route.params.url)
      .then(res => {

        const title = 'My bakery - ' + res.data.bakery.title,
          description = res.data.bakery.small_content,
          image = res.data.bakery.image,
          url = 'https://my-bakery.fr/bakery/' + res.data.bakery.url,
          metaData = {
            title: title,
            description: 'description', content: description,
            titleTemplate: title => `${title}`,
            descriptionTemplate: description => `${description}`
          }

          $(document).find('title').text(title)

          $(document).find('meta').attr('og:title', title)
          $(document).find('meta').attr('og:desciption', description)
          $(document).find('meta').attr('og:image', process.env.WEBSITE + '/bakerys/images/' + image)
          $(document).find('meta').attr('og:url', url)

          $(document).find('meta').attr('twitter:title', title)
          $(document).find('meta').attr('twitter:description', description)
          $(document).find('meta').attr('twitter:image', process.env.WEBSITE + '/bakerys/images/' + image)
          $(document).find('meta').attr('twitter:url', url)

        useMeta(metaData)

      })

    return {
      bakery,
    }
  },
})
</script>
