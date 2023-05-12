<template name="SectionHome4">
  <div id="classement" class="section fadeIn4 last-bakery">

    <div class="column-inner">

      <div class="wrapper">

        <div class="bloc container">

          <div class="hp-container">

            <div class="section text-center">

              <h2 class="title">Nos meilleurs boulangerie&nbsp;!</h2>

              <p class="description">Tout est dit, ça se passe en dessous.</p>

              <div>
                <img class="delicious" src="floral.png" alt="Delicieux">
              </div>

            </div>

            <div class="section">

              <div class="row">

                <div class="col-lg-6 bakery" v-for="bakery in bakerys" :key="bakery.id">

                  <div class="row">

                    <div>

                      <div class="carousel slide slider-bakery carousel-fade" data-ride="carousel">

                        <div class="carousel-inner">

                          <div class="carousel-item active">

                            <a :href="'#/bakery/' + bakery.url">
                              <img class="d-block w-100" :src="'bakerys/' + bakery.image" alt="First slide">
                            </a>

                          </div>

                          <div class="carousel-item">

                            <a :href="'#/bakery/' + bakery.url">
                              <img class="d-block w-100" :src="'bakerys/' + bakery.image_2" alt="Second slide">
                            </a>

                          </div>

                        </div>

                      </div>

                      <a :href="'#/bakery/' + bakery.url" class="title">{{ bakery.title }}</a>

                    </div>

                    <div>
                      <div class="devanture">

                        <span>Devanture du magasin :</span>

                        <div class="br-widget">

                          <a href="#" v-if="bakery.counter_devanture !== 0" v-for="note in 5" :key="note"
                            :data-rating-value="note" :data-rating-text="note"
                            v-bind:class="note > Math.round(bakery.counter_devanture * 5 / bakery.sum_devanture) ? '' : 'br-selected'"></a>

                          <a href="#" v-if="bakery.counter_devanture === 0" v-for="note in 5" :key="note" class=""></a>

                          <div v-if="bakery.counter_devanture !== 0" class="br-current-rating">{{
                            Math.round(bakery.counter_devanture * 5 /
                              bakery.sum_devanture) }}</div>

                          <div class="br-current-rating" v-else>0</div>
                        </div>

                      </div>

                      <div class="proprete">

                        <span>Propreté du magasin :</span>

                        <div class="br-widget">

                          <a href="#" v-if="bakery.counter_proprete !== 0" v-for="note2 in 5" :key="note2"
                            :data-rating-value="note2" :data-rating-text="note2"
                            v-bind:class="note2 > Math.round(bakery.counter_proprete * 5 / bakery.sum_proprete) ? '' : 'br-selected'"></a>

                          <a href="#" v-if="bakery.counter_proprete === 0" v-for="note2 in 5" :key="note2" class=""></a>

                          <div class="br-current-rating" v-if="bakery.counter_proprete !== 0">{{
                            Math.round(bakery.counter_proprete * 5 / bakery.sum_proprete)
                          }}</div>

                          <div class="br-current-rating" v-else>0</div>

                        </div>

                      </div>

                      <div class="prix">

                        <span>Prix des produits :</span>

                        <div class="br-widget">

                          <a href="#" v-if="bakery.counter_prix !== 0" v-for="note3 in 5" :key="note3"
                            :data-rating-value="note3" :data-rating-text="note3"
                            v-bind:class="note3 > Math.round(bakery.counter_prix * 5 / bakery.sum_prix) ? '' : 'br-selected'"></a>

                          <a href="#" v-if="bakery.counter_prix === 0" v-for="note3 in 5" :key="note3" class=""></a>

                          <div v-if="bakery.counter_prix !== 0" class="br-current-rating">{{ Math.round(bakery.counter_prix * 5 / bakery.sum_prix)
                          }}</div>

                          <div class="br-current-rating" v-else>0</div>

                        </div>

                      </div>

                      <div class="choix">

                        <span>Choix des produits :</span>

                        <div class="br-widget">

                          <a href="#" v-if="bakery.counter_choix !== 0" v-for="note4 in 5" :key="note4"
                            :data-rating-value="note4" :data-rating-text="note4"
                            v-bind:class="note4 > Math.round(bakery.counter_choix * 5 / bakery.sum_choix) ? '' : 'br-selected'"></a>

                          <a href="#" v-if="bakery.counter_choix === 0" v-for="note4 in 5" :key="note4" class=""></a>

                          <div v-if="bakery.counter_choix !== 0" class="br-current-rating">{{ Math.round(bakery.counter_choix * 5 / bakery.sum_choix)
                          }}</div>

                          <div class="br-current-rating" v-else>0</div>

                        </div>

                      </div>

                      <p class="location">
                        <i class="fa-solid fa-map-location me-1"></i> {{ bakery.adresse + ' ' + bakery.cp + ' ' +
                          bakery.ville }}
                      </p>

                      <div class="text-end">

                        <p class="mb-1"><strong>Dernier commentaire :</strong></p>

                        <div v-if="bakery.author_comment !== null">

                          <p class="last-ratings">Par <strong>{{ bakery.author_comment }}</strong> - <span>le {{
                            moment(bakery.created_at_comment).format('DD MMMM YYYY à H:mm') }}</span></p>

                          <p class="last-ratings">{{ bakery.content_comment }}</p>

                        </div>

                        <div class="empty-comments" v-else>

                          Aucun commentaire pour cette boulangerie !

                        </div>

                      </div>

                    </div>

                    <div class="text-end mt-3">
                      <a :href="'#/bakery/' + bakery.url" class="btn btn-bakery">En savoir +</a>
                    </div>

                  </div>

                </div>

              </div>

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
import moment from 'moment'

export default defineComponent({
  name: 'SectionHome4',

  setup() {
    const store = useStore()

    const bakerys = computed(() => {
      return store.state.bakerys
    })

    onMounted(() => {
      store.dispatch('fetchBakerys')
    })

    return {
      bakerys,
      moment: moment
    }
  }
})
</script>
