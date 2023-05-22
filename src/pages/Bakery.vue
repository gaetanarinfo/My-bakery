<template>
  <HeaderComponent />

  <BakeryComponent />

  <Section7 />

  <FooterComponent />
</template>

<script>
import { defineComponent, onMounted, computed } from 'vue'
import HeaderComponent from 'components/Header.vue'
import BakeryComponent from 'components/Bakery.vue'
import FooterComponent from 'components/Footer.vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router';
import Section7 from 'components/home/sections/Section7.vue'

export default defineComponent({
  name: 'Bakery',
  setup() {

    const route = useRoute();
    const store = useStore()

    const bakery = computed(() => {
      return store.state.bakery
    })

    onMounted(() => {
      store.dispatch('fetchBakery',
        {
          'url': route.params.url
        })
    })

    return {
      bakery,
    }
  },
  components: {
    HeaderComponent,
    BakeryComponent,
    FooterComponent,
    Section7
  },
})
</script>
