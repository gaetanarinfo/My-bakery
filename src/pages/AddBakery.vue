<template>
  <HeaderComponent />

  <AddBakeryComponent />

  <Section7 />

  <FooterComponent />
</template>

<script>
import { defineComponent, onMounted, computed } from 'vue'
import HeaderComponent from 'components/Header.vue'
import AddBakeryComponent from 'components/AddBakery.vue'
import FooterComponent from 'components/Footer.vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router';
import Section7 from 'components/home/sections/Section7.vue'

export default defineComponent({
  name: 'Bakery',
  setup() {
    return {
    }
  },
  components: {
    HeaderComponent,
    AddBakeryComponent,
    FooterComponent,
    Section7
  },
})
</script>
