<template>
  <q-page>

    <HeaderComponent />

    <SliderComponent />

    <SectionsHome />

    <FooterComponent />

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import HeaderComponent from 'components/Header.vue'
import FooterComponent from 'components/Footer.vue'
import SliderComponent from 'components/Slider.vue'
import SectionsHome from 'components/SectionsHome.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    SectionsHome
  }

})
</script>
