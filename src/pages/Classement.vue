<template>
  <HeaderComponent />

  <ClassementComponent />

  <FooterComponent />
</template>

<script>
import { defineComponent } from 'vue'
import HeaderComponent from 'components/Header.vue'
import ClassementComponent from 'components/Classement.vue'
import FooterComponent from 'components/Footer.vue'
import { useMeta } from 'quasar'

const metaData = {
  title: 'Nos meilleures boulangeries sont ici',
  description: 'Retrouvez toutes les meilleures boulangeries en France sur My bakery.',
  titleTemplate: title => `${title}`,
  descriptionTemplate: description => `${description}`,

  // meta tags
  meta: {
    title: { name: 'title', content: 'Nos meilleures boulangeries sont ici' },
    description: { name: 'description', content: 'Retrouvez toutes les meilleures boulangeries en France sur My bakery.' },

    // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
    ogTitle: {
      property: 'og:title',
      // optional; similar to titleTemplate, but allows templating with other meta properties
      template() {
        return `Nos meilleures boulangeries sont ici`
      }
    }
  }
}

export default defineComponent({
  name: 'Classement',
  setup () {
    // needs to be called in setup()
    useMeta(metaData)
  },
  components: {
    HeaderComponent,
    ClassementComponent,
    FooterComponent
  }
})
</script>
