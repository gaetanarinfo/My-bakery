<template>
  <HeaderComponent />

  <ForgotComponent />

  <Section7 />

  <FooterComponent />
</template>

<script>
import { defineComponent, onMounted, computed } from 'vue'
import HeaderComponent from 'components/Header.vue'
import ForgotComponent from 'components/ForgotPassword.vue'
import FooterComponent from 'components/Footer.vue'
import Section7 from 'components/home/sections/Section7.vue'

export default defineComponent({
  name: 'ForgotPassword',
  setup() {

  },
  components: {
    HeaderComponent,
    ForgotComponent,
    FooterComponent,
    Section7,
  },
})
</script>
