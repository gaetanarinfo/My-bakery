<template name="SectionHome11">

  <div id="footer-link-bakerys" class="section fadeIn12">

    <div class="column-inner">

      <div class="wrapper">

        <div class="site-features">

          <div class="container">

            <div class="bloc container">

              <div class="hp-container">

                <div class="section text-center">

                  <h2 class="title">Les boulangeries dans nos villes !</h2>

                  <p class="description"></p>

                  <div>
                    <img class="delicious" src="floral.png" alt="Delicieux">
                  </div>

                </div>

              </div>

            </div>

            <ul>

              <li v-for="ville in villesFrance">
                <a class="cursor-pointer" :title="'Boulangerie à ' + ville.ville" @click="this.$router.push('/bakerys-city/' + ville.ville_slug + '/' + ville.id)">Boulangerie à {{ ville.ville
                  }}</a>
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
