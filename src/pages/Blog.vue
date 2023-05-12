<template>
  <HeaderComponent />

  <BlogComponent />

  <FooterComponent />
</template>

<script>
import { defineComponent } from 'vue'
import HeaderComponent from 'components/Header.vue'
import BlogComponent from 'components/Blog.vue'
import FooterComponent from 'components/Footer.vue'

export default defineComponent({
  name: 'Blog',
  components: {
    HeaderComponent,
    BlogComponent,
    FooterComponent
  }
})
</script>
