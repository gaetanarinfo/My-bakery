<template>

  <HeaderComponent />

  <ArticleComponent />

  <Section7 />

  <FooterComponent />

</template>

<script>
import { defineComponent } from 'vue'
import HeaderComponent from 'components/Header.vue'
import ArticleComponent from 'components/Article.vue'
import FooterComponent from 'components/Footer.vue'
import Section7 from 'components/home/sections/Section7.vue'
import { useRoute } from 'vue-router';
import axios from 'axios'

import { useMeta } from 'quasar'

export default defineComponent({
  name: 'Article',
  components: {
    HeaderComponent,
    ArticleComponent,
    FooterComponent,
    Section7
  },
  setup () {

    const route = useRoute()

    axios.get(process.env.WEBSITE + '/blogs/' + route.params.url)
      .then(res => {

        const title = 'My bakery - ' + res.data.blog.title,
          description = res.data.blog.small_content,
          image = res.data.blog.image,
          url = 'https://my-bakery.fr/article/' + res.data.blog.url,
          metaData = {
            title: title,
            description: 'description', content: description,
            titleTemplate: title => `${title}`,
            descriptionTemplate: description => `${description}`
          }

        $(document).find('title').text(title)

        $(document).find('meta').attr('og:title', title)
        $(document).find('meta').attr('og:desciption', description)
        $(document).find('meta').attr('og:image', process.env.WEBSITE + '/blogs/images/' + image)
        $(document).find('meta').attr('og:url', url)

        $(document).find('meta').attr('twitter:title', title)
        $(document).find('meta').attr('twitter:description', description)
        $(document).find('meta').attr('twitter:image', process.env.WEBSITE + '/blogs/images/' + image)
        $(document).find('meta').attr('twitter:url', url)

        useMeta(metaData)

      })

    return {

    }

  }
})
</script>
