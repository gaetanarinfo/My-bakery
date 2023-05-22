<template>
  <HeaderComponent />

  <BlogComponent />

  <Section7 />

  <FooterComponent />
</template>

<script>
import { defineComponent } from 'vue'
import HeaderComponent from 'components/Header.vue'
import BlogComponent from 'components/Blog.vue'
import FooterComponent from 'components/Footer.vue'
import { useMeta } from 'quasar'
import Section7 from 'components/home/sections/Section7.vue'

const metaData = {
  title: 'Notre blog sur my bakery',
  description: 'Bienvenue sur le blog de my bakery, retrouvez tous nos articles liée à la boulangerie, à nos applications, ou au mise à jour du site internet.',
  titleTemplate: title => `${title}`,
  descriptionTemplate: description => `${description}`,

  // meta tags
  meta: {
    title: { name: 'title', content: 'Notre blog sur my bakery' },
    description: { name: 'description', content: 'Bienvenue sur le blog de my bakery, retrouvez tous nos articles liée à la boulangerie, à nos applications, ou au mise à jour du site internet.' },

    // note: for Open Graph type metadata you will need to use SSR, to ensure page is rendered by the server
    ogTitle: {
      property: 'og:title',
      // optional; similar to titleTemplate, but allows templating with other meta properties
      template() {
        return `Notre blog sur my bakery`
      }
    }
  }
}

export default defineComponent({
  name: 'Blog',
  setup () {
    // needs to be called in setup()
    useMeta(metaData)
  },
  components: {
    HeaderComponent,
    BlogComponent,
    FooterComponent,
    Section7
  }

})
</script>
