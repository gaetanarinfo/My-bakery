<template>

  <q-page class="home">

    <HeaderComponent />

    <SliderComponent />

    <SectionsHome />

    <FooterComponent />

  </q-page>

</template>

<script>
import { defineComponent } from 'vue'
import HeaderComponent from 'components/home/Header.vue'
import FooterComponent from 'components/Footer.vue'
import SliderComponent from 'components/Slider.vue'
import SectionsHome from 'components/SectionsHome.vue'

import scripts from "../js/home";

scripts

export default defineComponent({
  name: 'IndexPage',
  components: {
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    SectionsHome
  },
  mounted() {

    $('.fadeIn').fadeIn(600)
    $('.fadeIn2').fadeIn(600)
    $('.fadeIn3').fadeIn(600)
    $('.fadeIn4').fadeIn(600)
    $('.fadeIn5').fadeIn(600)
    $('.fadeIn6').fadeIn(600)
    $('.fadeIn7').fadeIn(600)
    $('.fadeIn8').fadeIn(600)
    $('.fadeIn9').fadeIn(600)
    $('.fadeIn10').fadeIn(600)
    $('.fadeIn11').fadeIn(600)
    $('.fadeIn12').fadeIn(600)
    $('.fadeIn13').fadeIn(600)

  }
})
</script>
