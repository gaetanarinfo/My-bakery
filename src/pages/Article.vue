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

export default defineComponent({
  name: 'Article',
  components: {
    HeaderComponent,
    ArticleComponent,
    FooterComponent,
    Section7
  }

})
</script>
