<template>
  <HeaderComponent />

  <MyBakerysComponent />

  <FooterComponent />
</template>

<script>
import { defineComponent } from 'vue'
import HeaderComponent from 'components/Header.vue'
import MyBakerysComponent from 'components/MyBakerys.vue'
import FooterComponent from 'components/Footer.vue'

import { useMeta } from 'quasar'

const metaData = {
  title: 'Liste de souhaits',
  titleTemplate: title => `${title}`,

  // meta tags
  meta: {
    title: { name: 'title', content: 'Liste de souhaits' },

    // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
    ogTitle: {
      property: 'og:title',
      // optional; similar to titleTemplate, but allows templating with other meta properties
      template() {
        return `Liste de souhaits`
      }
    }
  }
}

export default defineComponent({
  name: 'MyBakerys',
  setup () {
    // needs to be called in setup()
    useMeta(metaData)
  },
  components: {
    HeaderComponent,
    MyBakerysComponent,
    FooterComponent
  },
})
</script>
