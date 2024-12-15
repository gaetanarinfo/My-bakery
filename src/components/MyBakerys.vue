<template name="MyBakerys">

  <div class="background fadeIn2 bb background2">

    <div class="content">

      <h1>Liste de souhaits</h1>

      <div class="b-breadcrumb">

        <div class="b-breadcrumb">

          <ol class="breadcrumb">

            <li><a @click="this.$router.push('/')">Accueil</a></li>

            <li class="active">Liste de souhaits</li>

          </ol>

        </div>

      </div>

    </div>

  </div>

  <div class="page-my-bakerys section fadeIn3">

    <div class="ps-content b-80 b-80">

      <div class="container">

        <div class="table-responsive">

          <table id="table-list" class="table b-table b-table-whishlist">

            <thead>

              <tr>

                <th></th>

                <th>Nom</th>

                <th>Vue(s)</th>

                <th>Actions</th>

              </tr>

            </thead>

            <tbody>

              <tr v-if="bakerysFavorites.length === 0">

                <td colspan="5">

                  <div class="alert alert-info">Aucune boulangerie n'est présente dans votre liste.</div>

                </td>

              </tr>

              <tr v-else v-for="favorite in bakerysFavorites" v-bind:id="'tr-' + favorite.id">

                <td colspan="2">

                  <div class="grid-t-m">

                    <div class="image">
                      <a role="button" @click="this.$router.push('/bakery/' + favorite.url)">
                        <img v-if="favorite.image === 'default.jpg'" :src="'bakerys/' + favorite.image" width="100"
                          height="70" :alt="favorite.title">
                        <img v-else :src="folderPicture + favorite.image" width="100" height="70" :alt="favorite.title">
                      </a>
                    </div>

                    <div class="title">
                      <a role="button" @click="this.$router.push('/bakery/' + favorite.url)">
                        <h5>{{ favorite.title }}</h5>
                        <p class="location">{{ favorite.adresse }}</p>
                      </a>
                    </div>

                  </div>

                </td>

                <td>
                  <p class="text-center" v-if="favorite.views !== 0"><b>{{ favorite.views }}</b> vue(s)</p>
                  <p class="text-center" v-else><b>0</b> vue</p>
                </td>

                <td>

                  <div>

                    <a role="button" :data-id="favorite.id" @click="removeFavorite(favorite.id)">
                      <i class="fa-solid fa-trash text-danger"></i>
                    </a>

                  </div>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>

  </div>

  <div id="classement-my-bakerys" class="page-my-bakerys bakery section last-bakery">

    <div class="column-inner">

      <div class="wrapper">

        <div class="bloc container">

          <div class="hp-container">

            <div class="section text-center">

              <h2 class="title">Ces boulangeries pourrait vous intéresser&nbsp;!</h2>

              <p>&nbsp;</p>

              <div>
                <img class="delicious" src="floral.png" alt="Delicieux">
              </div>

            </div>

            <div class="section">

              <div class="row">

                <div class="col-lg-4 bakery" v-for="bakery in bakerys" :key="bakery.id">

                  <div class="row">

                    <div>

                      <div :id="'carouselBakery' + bakery.id"
                        :class="(bakery.highlighting_at !== null) ? 'carousel ahead slide slider-bakery carousel-fade' : 'carousel slide slider-bakery carousel-fade'"
                        data-ride="carousel">

                        <div class="favorite-bakery-dark" v-if="bakery.image === 'default.jpg'">

                          <a v-if="Cookies.get('bakerysList').indexOf(bakery.id) != -1"
                            @click="saveBakeryList(bakery.id)" :class="'delete-bakery-list-' + bakery.id">
                            <i class="fa-solid fa-heart-circle-xmark text-danger"></i>
                          </a>

                          <a v-else @click="saveBakeryList(bakery.id)" :class="'bakery-list-' + bakery.id">
                            <i class="fa-solid fa-heart text-danger"></i>
                          </a>

                        </div>

                        <div class="favorite-bakery" v-else>

                          <a v-if="Cookies.get('bakerysList').indexOf(bakery.id) != -1"
                            @click="saveBakeryList(bakery.id)" :class="'delete-bakery-list-' + bakery.id">
                            <i class="fa-solid fa-heart-circle-xmark text-danger"></i>
                          </a>

                          <a v-else @click="saveBakeryList(bakery.id)" :class="'bakery-list-' + bakery.id">
                            <i class="fa-solid fa-heart text-danger"></i>
                          </a>

                        </div>

                        <div class="carousel-inner">

                          <div class="carousel-item active">

                            <a @click="addClick(bakery.id, 'bakery/' + bakery.url)" class="carousel-action">
                              <img v-if="bakery.image === 'default.jpg'"
                                style="max-width: 365px;width: 100%;height: 265px;" class="d-block w-100"
                                :src="'bakerys/' + bakery.image" :alt="bakery.title">
                              <img v-else class="d-block w-100" :src="folderPicture + bakery.image" :alt="bakery.title">
                            </a>

                          </div>

                        </div>

                      </div>

                      <a @click="addClick(bakery.id, 'bakery/' + bakery.url)" class="title">{{ bakery.title
                        }}</a>

                      <div>
                        <p class="content">{{ bakery.small_content }}</p>
                      </div>

                    </div>

                    <div>

                      <div class="rating">

                        <div class="devanture">

                          <span>Devanture du magasin :</span>

                          <div class="br-widget">

                            <a v-if="bakery.counter_devanture !== 0" v-for="note4 in 5" :key="note4"
                              :data-rating-value="note4" :data-rating-text="note4"
                              v-bind:class="note4 > Math.round(bakery.counter_devanture / bakery.sum_devanture).toFixed(1) ? '' : 'br-selected'"></a>

                            <a :data-rating-value="note4" :data-rating-text="note4"
                              v-if="bakery.counter_devanture === 0" v-for="note4 in 5" :key="note4" class=""></a>

                            <div v-if="bakery.counter_devanture !== 0" class="br-current-rating">{{
                              Math.round(bakery.counter_devanture / bakery.sum_devanture).toFixed(1)
                            }}</div>

                            <div class="br-current-rating" v-else>0</div>

                          </div>

                        </div>

                      </div>

                      <div class="rating">

                        <div class="proprete">

                          <span>Propreté du magasin :</span>

                          <div class="br-widget">

                            <a v-if="bakery.counter_proprete !== 0" v-for="note4 in 5" :key="note4"
                              :data-rating-value="note4" :data-rating-text="note4"
                              v-bind:class="note4 > Math.round(bakery.counter_proprete / bakery.sum_proprete).toFixed(1) ? '' : 'br-selected'"></a>

                            <a :data-rating-value="note4" :data-rating-text="note4" v-if="bakery.counter_proprete === 0"
                              v-for="note4 in 5" :key="note4" class=""></a>

                            <div v-if="bakery.counter_proprete !== 0" class="br-current-rating">{{
                              Math.round(bakery.counter_proprete / bakery.sum_proprete).toFixed(1)
                            }}</div>

                            <div class="br-current-rating" v-else>0</div>

                          </div>

                        </div>

                      </div>

                      <div class="rating">

                        <div class="prix">

                          <span>Prix des produits :</span>

                          <div class="br-widget">

                            <a v-if="bakery.counter_prix !== 0" v-for="note4 in 5" :key="note4"
                              :data-rating-value="note4" :data-rating-text="note4"
                              v-bind:class="note4 > Math.round(bakery.counter_prix / bakery.sum_prix).toFixed(1) ? '' : 'br-selected'"></a>

                            <a :data-rating-value="note4" :data-rating-text="note4" v-if="bakery.counter_prix === 0"
                              v-for="note4 in 5" :key="note4" class=""></a>

                            <div v-if="bakery.counter_prix !== 0" class="br-current-rating">{{
                              Math.round(bakery.counter_prix / bakery.sum_prix).toFixed(1)
                            }}</div>

                            <div class="br-current-rating" v-else>0</div>

                          </div>

                        </div>

                      </div>

                      <div class="rating">

                        <div class="choix">

                          <span>Choix des produits :</span>

                          <div class="br-widget">

                            <a v-if="bakery.counter_choix !== 0" v-for="note4 in 5" :key="note4"
                              :data-rating-value="note4" :data-rating-text="note4"
                              v-bind:class="note4 > Math.round(bakery.counter_choix / bakery.sum_choix).toFixed(1) ? '' : 'br-selected'"></a>

                            <a :data-rating-value="note4" :data-rating-text="note4" v-if="bakery.counter_choix === 0"
                              v-for="note4 in 5" :key="note4" class=""></a>

                            <div v-if="bakery.counter_choix !== 0" class="br-current-rating">{{
                              Math.round(bakery.counter_choix / bakery.sum_choix).toFixed(1)
                            }}</div>

                            <div class="br-current-rating" v-else>0</div>

                          </div>

                        </div>

                      </div>

                      <p class="location">
                        <i class="fa-solid fa-map-location me-1"></i> {{ bakery.adresse }}
                      </p>

                      <div class="text-end">

                        <p class="mb-1"><strong>Dernier commentaire :</strong></p>

                        <div v-if="bakery.author_comment !== null">

                          <p class="last-ratings">Par <strong>{{ bakery.author_comment }}</strong> - <span>le {{
                            moment(bakery.created_at_comment).format('DD MMMM YYYY à H:mm') }}</span></p>

                          <p class="last-ratings">{{ bakery.content_comment }}</p>

                        </div>

                        <div class="empty-comments" v-else>

                          Il n'y a aucun commentaire sur cette boulangerie !

                        </div>

                      </div>

                    </div>

                    <div class="text-end mt-3 grid-mobile">

                      <a @click="addClick(bakery.id, 'bakery/' + bakery.url)" class="btn btn-bakery">En savoir
                        +</a>

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

<style lang="scss">
.page-my-bakerys.last-bakery .column-inner .wrapper .bloc {
  padding-bottom: 0;
}

.page-my-bakerys.section,
.page-my-bakerys .section {
  margin-bottom: 0;
}

.h-blog {
  min-height: 200px;
}

@media all and (max-width: 768px) {
  .h-blog {
    min-height: 100%;
  }
}
</style>

<script>
import { defineComponent, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import moment from 'moment'
import { ref } from 'vue'
import { Cookies } from 'quasar'
import axios from 'axios'

moment.locale('fr')

const bakerysFavorites = ref([])

export default defineComponent({
  name: 'BlogcComponent',
  setup () {
    const store = useStore()
    const visible = ref(false)
    const showSimulatedReturnData = ref(true)

    const bakerys = computed(() => {
      return store.state.bakerys
    })

    onMounted(() => {
      store.dispatch('fetchBakerys', { 'limite': 3 })
    })

    if (Cookies.has('bakerysList')) {

      axios.get(process.env.WEBSITE + '/favorites/' + Cookies.get('bakerysList')).then(res => {
        bakerysFavorites.value = res.data.favorites
      })

    } else {
      bakerysFavorites = []
    }

    return {
      addClick (id, url) {
        store.dispatch('fetchClickBakery', { 'bakeryId': id })
        this.$router.push(`${url}`)
      },
      folderPicture: process.env.WEBSITE + '/bakerys/images/',
      showTextLoading () {
        visible.value = true
        showSimulatedReturnData.value = true

        setTimeout(() => {
          visible.value = false
          showSimulatedReturnData.value = true
        }, 3000)
      },
      visible,
      moment: moment,
      Cookies: Cookies,
      bakerys,
      bakerysFavorites,
      showSimulatedReturnData,
    }
  },
  methods: {
    saveBakeryList (id) {

      const bakerysList = Cookies.has('bakerysList'),
        cookies = Cookies.get('bakerysList')

      $('.bakery-list-' + id).html('<i class="fa-solid fa-heart-circle-xmark text-danger"></i>')

      if ($(document).find('.bakery-list-' + id).length !== 0) {

        if (!bakerysList) {
          Cookies.set('bakerysList', id, { expires: 30000 })
        } else {
          Cookies.set('bakerysList', Cookies.get('bakerysList') + '-' + id)
        }

        $('.bakery-list-' + id).removeClass('bakery-list-' + id).addClass('delete-bakery-list-' + id)

      } else {

        var total = cookies.replace('-' + id, '')

        if (cookies.indexOf(id + '-') != -1) {

          var total = cookies.replace(id + '-', '');
          Cookies.set('bakerysList', total, {
            secure: true,
            sameSite: 'None'
          });

        } else if (cookies.indexOf('-' + id) != -1) {

          var total = cookies.replace('-' + id, '');
          Cookies.set('bakerysList', total, {
            secure: true,
            sameSite: 'None'
          });

        }

        $('.delete-bakery-list-' + id).addClass('bakery-list-' + id)

        $('.delete-bakery-list-' + id).removeClass('delete-bakery-list-' + id)

        $('.bakery-list-' + id).html('<i class="fa-solid fa-heart text-danger"></i>')

        Cookies.set('bakerysList', total)

        console.log(cookies.split('-').length);

        if (cookies.split('-').length === 1) {
          Cookies.remove('bakerysList');
          bakerysFavorites.value = []
        }

      }

      axios.get(process.env.WEBSITE + '/favorites/' + Cookies.get('bakerysList')).then(res => {
        bakerysFavorites.value = res.data.favorites
      })

    },
    removeFavorite (id) {

      if (Cookies.has('bakerysList')) {

        var cookies = Cookies.get('bakerysList')

        var total = cookies.replace('-' + id, '')

        if (cookies.indexOf(id + '-') != -1) {

          var total = cookies.replace(id + '-', '');
          Cookies.set('bakerysList', total, {
            secure: true,
            sameSite: 'None'
          });

        } else if (cookies.indexOf('-' + id) != -1) {

          var total = cookies.replace('-' + id, '');
          Cookies.set('bakerysList', total, {
            secure: true,
            sameSite: 'None'
          });

        }

        if (cookies.split('-').length === 1) {
          Cookies.remove('bakerysList')
          $('#table-list tbody tr').html('<td colspan="5"><div class="alert alert-info">Aucune boulangerie n\'est présente dans votre liste.</div></td>')
        } else {
          $('#tr-' + id).fadeOut(600)
          setTimeout(() => {
            $('#tr-' + id).remove()
          }, 600);
        }

      }

    }
  },
  mounted () {

    // Header

    $('.header').addClass('h-blog')
    $('body').removeClass('loading')
    $('.fadeIn').fadeIn(600)
    $('.fadeIn2').fadeIn(600)
    $('.fadeIn3').fadeIn(600)
    $('.fadeIn7').fadeIn(600)
    $('.fadeIn8').fadeIn(600)

    // Scroll click

    $(document).on('click', '.scroll-click-s', function (e) {
      e.preventDefault()

      const scroll = $(this).data('scroll')

      $([document.documentElement, document.body]).animate({
        scrollTop: $('#' + scroll).offset().top
      }, '200')
    })

    // FOOTER

    // Back to top

    $(window).scroll(function () {
      if ($(this).scrollTop() >= 600) {
        $('#back-top').addClass('active')
      } else {
        $('#back-top').removeClass('active')
      }
    })

    $(document).on('click', '#back-top', function (e) {
      e.preventDefault()
      $('html, body').animate({ scrollTop: 0 }, 200)
    })

  }
})
</script>
