<template name="SectionHome11">

  <div id="footer-link-bakerys" class="section fadeIn12">

    <div class="column-inner">

      <div class="wrapper">

        <div class="site-features">

          <div class="container">

            <ul>

              <li v-for="ville in villesFrance">
                <a :title="'Boulangerie ' + ville.nom " :href="'/#/bakerys-region/' + ville.nom_slug">{{ ville.nom }}</a>
              </li>

            </ul>

          </div>

        </div>

      </div>

    </div>

  </div>

</template>

<script>
import { defineComponent, onMounted, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'SectionHome11',
  setup () {

    const store = useStore()

    const villesFrance = computed(() => {
      return store.state.villesFrance
    })

    onMounted(() => {
      store.dispatch('fetchVillesFrance')
    })

    return {
      villesFrance
    }

  },
  mounted () {

  }
})
</script>
