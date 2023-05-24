<template>
  <HeaderComponent />

  <MyAccountComponent />

  <Section7 />

  <FooterComponent />
</template>

<script>
import { defineComponent } from 'vue'
import HeaderComponent from 'components/Header.vue'
import MyAccountComponent from 'components/MyAccount.vue'
import FooterComponent from 'components/Footer.vue'
import Section7 from 'components/home/sections/Section7.vue'

export default defineComponent({
  name: 'MyAccount',
  setup () {
  },
  components: {
    HeaderComponent,
    MyAccountComponent,
    FooterComponent,
    Section7,
  },
})
</script>
