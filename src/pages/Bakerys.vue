<template>
  <HeaderComponent />

  <BakerysComponent />

  <Section7 />

  <FooterComponent />
</template>

<script>
import { defineComponent } from 'vue'
import HeaderComponent from 'components/Header.vue'
import BakerysComponent from 'components/Bakerys.vue'
import FooterComponent from 'components/Footer.vue'
import Section7 from 'components/home/sections/Section7.vue'

export default defineComponent({
  name: 'Bakerys',
  setup () {
  },
  components: {
    HeaderComponent,
    BakerysComponent,
    FooterComponent,
    Section7
  }
})
</script>
