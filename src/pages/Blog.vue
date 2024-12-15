<template>
  <HeaderComponent />

  <BlogComponent />

  <Section7 />

  <FooterComponent />
</template>

<script>

import HeaderComponent from 'components/Header.vue'
import BlogComponent from 'components/Blog.vue'
import FooterComponent from 'components/Footer.vue'
import Section7 from 'components/home/sections/Section7.vue'

import { defineComponent } from 'vue'
import { useMeta } from 'quasar'

const title = 'My bakery - notre blog',
  description = 'Nous vous invitons à découvrir tous les articles que nous publions sur le blog, qu\'ils concernent la boulangerie, notre application ou les dernières mises à jour de notre site internet.',
  url = 'https://my-bakery.fr/blogs-bakerys',
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
  name: 'Blog',
  components: {
    HeaderComponent,
    BlogComponent,
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
