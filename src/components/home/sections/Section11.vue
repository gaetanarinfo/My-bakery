<template name="SectionHome11">

  <div id="footer-link-bakerys" class="section">

    <div class="column-inner">

      <div class="wrapper">

        <div class="site-features">

          <div class="container home-section">

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

            <ul v-show="!visible">

              <li v-for="ville in villesFrance">
                <a class="cursor-pointer" :title="'Boulangerie à ' + ville.ville"
                  @click="this.$router.push('/bakerys-city/' + ville.ville_slug + '/' + ville.id)">Boulangerie à {{
                    ville.ville
                  }} ({{ ville.postcode }})</a>
              </li>

            </ul>

            <div v-show="!visible && chargeVilleOtherButton" class="chargeVille mt-5">

              <a @click="chargeVilleOther" class="btn btn-bakery">Afficher plus de villes</a>

            </div>

            <div class="loadingDiv" v-show="visible">
              <q-spinner-grid size="70px" color="info" />
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</template>

<script>
import { defineComponent, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
import { ref } from 'vue'

const villesFrance = ref([]),
  visible = ref(true),
  chargeVilleOtherButton = ref(true)

export default defineComponent({
  name: 'SectionHome11',
  setup () {

    const store = useStore()

    axios.get(process.env.WEBSITE + '/villes-france-home/' + 101)
      .then(res => {
        villesFrance.value = res.data.villesFrance
        visible.value = false
      })

    return {
      chargeVilleOther () {

        $([document.documentElement, document.body]).animate({
          scrollTop: $('#footer-link-bakerys').offset().top
        }, '200')

        visible.value = true
        chargeVilleOtherButton.value = false
        villesFrance.value = []

        axios.get(process.env.WEBSITE + '/villes-france-home/' + 0)
          .then(res => {
            villesFrance.value = res.data.villesFrance
            setTimeout(() => {
              visible.value = false
            }, 1500);
          })

      },
      villesFrance,
      visible,
      chargeVilleOtherButton
    }

  },
  mounted () {

  }
})
</script>
