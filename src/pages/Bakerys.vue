<template>
  <HeaderComponent />

  <BakerysComponent />

  <FooterComponent />
</template>

<script>
import { defineComponent } from 'vue'
import HeaderComponent from 'components/Header.vue'
import BakerysComponent from 'components/Bakerys.vue'
import FooterComponent from 'components/Footer.vue'

export default defineComponent({
  name: 'Bakerys',
  setup () {
  },
  components: {
    HeaderComponent,
    BakerysComponent,
    FooterComponent
  }
})
</script>
