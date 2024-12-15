<template name="BakerysComponent">

  <div class="page-bakerys-bb background fadeIn2 bb background1">

    <div class="content">

      <h1>Nos meilleures boulangeries sont ici</h1>

      <div class="b-breadcrumb">

        <div class="b-breadcrumb">

          <ol class="breadcrumb">

            <li><a @click="this.$router.push('/')">Accueil</a></li>

            <li class="active">Boulangeries</li>

          </ol>

        </div>

      </div>

    </div>

  </div>

  <div id="classement" class="page-bakerys section fadeIn3 last-bakery">

    <div class="column-inner">

      <div class="wrapper">

        <BannerComponent :margin="true" v-show="showSimulatedReturnData" />

        <div class="bloc container">

          <div class="hp-container" v-show="showSimulatedReturnData">

            <div class="section text-center">

              <div class="row">

                <div class="col-lg-3 col-md-3">

                  <div class="form-order">

                    <div>

                      <h3>
                        Trier les boulangeries
                      </h3>

                    </div>

                    <div class="form-group">

                      <p class="mb-0"><strong>{{ bakerysAllCount }}</strong> boulangeries filtrées</p>

                    </div>

                    <div class="form-group">

                      <label for="">Filtrer par mot clé</label>

                      <span class="select">
                        <input v-model="search" type="text" class="form-control" placeholder="Entrer un mot clé...">
                      </span>

                    </div>

                    <div class="form-group">

                      <label for="">Filtrer par adresse</label>

                      <span class="select">
                        <input v-model="location" type="text" class="form-control" placeholder="Entrer une adresse...">
                      </span>

                    </div>

                    <div class="form-group">

                      <label for="">Filtrer par code postal</label>

                      <span class="select">
                        <input v-model="postalCode" type="text" class="form-control"
                          placeholder="Entrer un code postal...">
                      </span>

                    </div>

                    <div class="form-group devanture">

                      <span>Filtrer par devanture du magasin</span>

                      <div class="br-widget">

                        <input type="hidden" v-model="devanture" id="devanture" name="devanture">

                        <a role="button" v-for="note in 5" :key="note" data-name="devanture" :data-rating-value="note"
                          :data-rating-text="note"></a>

                        <div class="br-current-rating">0</div>

                      </div>

                    </div>

                    <div class="form-group proprete">

                      <label for="rating">Filtrer par propreté du magasin</label>

                      <div class="proprete">

                        <div class="br-widget">

                          <input type="hidden" v-model="proprete" id="proprete" name="proprete">

                          <a role="button" v-for="note in 5" :key="note" data-name="proprete" :data-rating-value="note"
                            :data-rating-text="note"></a>

                          <div class="br-current-rating">0</div>

                          <span span class="error-text proprete_error"></span>

                        </div>

                      </div>

                    </div>

                    <div class="form-group prix">

                      <label for="rating">Filtrer par prix des produits</label>

                      <div class="prix">

                        <div class="br-widget">

                          <input type="hidden" v-model="prix" id="prix" name="prix">

                          <a role="button" @click="prix = note" v-for="note in 5" :key="note" data-name="prix"
                            :data-rating-value="note" :data-rating-text="note"></a>

                          <div class="br-current-rating">0</div>

                          <span span class="error-text prix_error"></span>

                        </div>

                      </div>

                    </div>

                    <div class="form-group choix">

                      <label for="rating">Filtrer par choix des produits</label>

                      <div class="choix">

                        <div class="br-widget">

                          <input type="hidden" v-model="choix" id="choix" name="choix">

                          <a role="button" v-for="note in 5" :key="note" data-name="choix" :data-rating-value="note"
                            :data-rating-text="note"></a>

                          <div class="br-current-rating">0</div>

                          <span span class="error-text choix_error"></span>

                        </div>

                      </div>

                    </div>

                    <hr class="w-100" />

                    <div class="form-group validate">

                      <a role="button" class="btn btn-bakery me-3"
                        @click="chargeBakery(current, search, location, postalCode, true)">Rechercher</a>

                      <a role="button" class="btn btn-bakery"
                        @click="chargeBakery(current, search, location, postalCode, true, true)">Effacer</a>

                    </div>

                  </div>

                </div>

                <div v-if="bakerysAllCount >= 1" id="blocGrid" class="col-lg-9 col-md-9 row">

                  <div class="col-lg-4 col-md-4 bakery" v-for="bakery in bakerysAll" :key="bakery.id">

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

                              <a @click="addClick(bakery.id, '/bakery/' + bakery.url)" class="carousel-action">

                                <img v-if="bakery.image === 'default.jpg'" class="d-block w-100"
                                  :src="'bakerys/' + bakery.image" :alt="bakery.title">

                                <div v-else class="d-block"
                                  :style="'cursor: pointer; background: url(' + folderPicture + bakery.image + ');width: 100%;height: 211px;border-radius: 6px;background-size: 100% 100%;'">
                                </div>

                              </a>

                            </div>

                          </div>

                        </div>

                        <a @click="addClick(bakery.id, '/bakery/' + bakery.url)" class="title">{{ bakery.title
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

                              <a :data-rating-value="note4" :data-rating-text="note4"
                                v-if="bakery.counter_proprete === 0" v-for="note4 in 5" :key="note4" class=""></a>

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

                        <a @click="addClick(bakery.id, '/bakery/' + bakery.url)" class="btn btn-bakery">En
                          savoir +</a>

                      </div>

                    </div>

                  </div>

                </div>

                <div v-else id="blocGrid" class="col-lg-9 col-md-9"
                  style="display: flex; align-items: center;justify-content: center;">

                  <div class="cartEmpty"><img style="max-width: 500px" src="bakerys/large-5.jpg" alt="My Bakery">

                    <h3>Aucun résultat ne correspond<br />aux critères de recherche.</h3>

                    <p>Vous le saviez ? avec My Bakery, vous pouvez commander à tout moment,<br class="br-no"> notre
                      service technique
                      vous
                      livrera vos produits dans les plus brefs délais.</p>

                    <a class="ps-btn cursor-pointer" @click="this.$router.push('/products')">Nos produits</a>

                  </div>

                </div>

              </div>

              <div v-if="pagination">

                <div class="b-pagination">

                  <ul class="pagination">

                    <li>
                      <a role="button" v-bind:class="current === 1 ? 'disabled' : ''"
                        @click="chargeBakery(current - 1, search, location, postalCode)"><i
                          class="fa fa-angle-left"></i></a>
                    </li>

                    <li v-for="page in max" :key="page" v-bind:class="current === page ? 'active' : ''">
                      <a role="button" @click="chargeBakery(page, search, location, postalCode)">{{
                        page }}</a>
                    </li>

                    <li v-bind:class="current === pageMax ? 'active' : ''">
                      <a role="button" v-bind:class="current === pageMax ? 'disabled' : ''"
                        @click="chargeBakery(pageMax, search, location, postalCode)">{{
                          pageMax }}</a>
                    </li>

                    <li>
                      <a role="button" v-bind:class="current === Math.round((bakerysAllCount) / 9) ? 'disabled' : ''"
                        @click="chargeBakery(current + 1, search, location, postalCode)"><i
                          class="fa fa-angle-right"></i></a>
                    </li>

                  </ul>

                </div>

              </div>

            </div>

          </div>

          <div class="loadingDiv" v-show="visible">
            <q-spinner-grid size="70px" color="info" />
          </div>

        </div>

      </div>

    </div>

  </div>

</template>

<style lang="css">
.page-bakerys.last-bakery .column-inner .wrapper .bloc .section:last-child img {
  max-width: 100%;
  cursor: pointer;
  width: 100%;
  height: 100%;
}

@media all and (max-width: 768px) {
  .page-bakerys-bb.bb .content {
    padding: 2rem 2rem;
  }
}

.disabled {
  pointer-events: none;
}

.page-bakerys.section,
.page-bakerys .section {
  margin-bottom: 0;
}

.h-bakery {
  min-height: 200px;
}

@media all and (max-width: 768px) {
  .h-bakery {
    min-height: auto;
  }
}

.page-bakerys {
  padding: 5rem 0;
}

@media all and (max-width: 768px) {
  .page-bakerys {
    padding: 2rem 0;
  }
}

.b-pagination {
  text-align: center;
}

.b-pagination .pagination {
  margin: 0;
  display: inline-block;
}

.b-pagination .pagination li {
  display: inline-block;
  margin-right: 15px;
  text-align: center;
}

@media all and (max-width: 768px) {
  .b-pagination .pagination li {
    margin-bottom: 1rem;
  }
}

.b-pagination .pagination li>a:before,
.b-pagination .pagination li>a:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  z-index: -2;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.b-pagination .pagination li.active {
  border: none;
}

.b-pagination .pagination li a {
  text-decoration: none;
  padding: 0 17px;
  position: relative;
  display: inline-block;
  z-index: 30;
  font-family: "Lora", serif;
  font-size: 16px;
  color: #313131;
  line-height: 50px;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  -ms-border-radius: 0;
  border-radius: 0;
  border: none;
  background-color: transparent !important;
}

.b-pagination .pagination li.active a,
.b-pagination .pagination li a:hover {
  color: #fff;
}

.b-pagination .pagination li.active a:before,
.b-pagination .pagination li a:hover:before {
  background-color: #cd9b33;
}

.b-pagination .pagination li.active a:after {
  visibility: visible;
  opacity: 1;
}

.b-pagination .pagination li a:before {
  width: 50px;
  height: 50px;
  background-color: #e4e4e4;
}

.b-pagination .pagination li a:after {
  width: 45px;
  height: 45px;
  background-color: #cd9b33;
  z-index: -1;
  visibility: hidden;
  opacity: 0;
}

.page-bakerys.last-bakery .column-inner .wrapper {
  background: none;
}

.page-bakerys.last-bakery .column-inner .wrapper .bloc {
  padding: 0 0;
}
</style>

<script>
import { defineComponent, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import moment from 'moment'
import { ref } from 'vue'
import axios from 'axios'
import { Cookies } from 'quasar'
import BannerComponent from 'components/Banner.vue'

moment.locale('fr')

var counter = 1

const search = '',
  location = '',
  postalCode = '',
  bakerysAll = ref([]),
  bakerysAllCount = ref([]),
  pagination = ref(false),
  max = ref(1),
  pageMax = ref(0),
  current = ref(1),
  showSimulatedReturnData = ref(false),
  visible = ref(true),
  prix = ref(0),
  devanture = ref(0),
  choix = ref(0),
  proprete = ref(0)

export default defineComponent({
  name: 'BakerysComponent',
  components: {
    BannerComponent,
  },
  setup () {
    const store = useStore()

    return {
      addClick (id, url) {
        store.dispatch('fetchClickBakery', { 'bakeryId': id })
        this.$router.push(`${url}`)
      },
      showTextLoading () {
        visible.value = true
        showSimulatedReturnData.value = false
      },
      pagination,
      bakerysAll,
      Cookies: Cookies,
      bakerysAllCount,
      visible,
      search,
      location,
      postalCode,
      moment: moment,
      showSimulatedReturnData,
      folderPicture: 'https://serveur.my-bakery.fr/bakerys/images/',
      current,
      max,
      pageMax,
      prix,
      devanture,
      choix,
      proprete
    }
  },
  data () {
    return {

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

        if (cookies.split('-').length === 1) {
          Cookies.remove('bakerysList');
        }

      }

    },
    chargeBakery (page, search = null, location = null, postalCode = null, button = false, deletes = false) {

      if (deletes) {
        current.value = 1
        page = 1
        search = ''
        location = '',
        postalCode = ''
        prix.value = 0
        devanture.value = 0
        choix.value = 0
        proprete.value = 0
        $(document).find('.br-active').removeClass('br-active')
      }

      if (button) {
        current.value = 1
        page = 1
      }

      $([document.documentElement, document.body]).animate({
        scrollTop: $('#classement').offset().top
      }, '600')

      this.showTextLoading()

      setTimeout(() => {

        axios.post(process.env.WEBSITE + '/bakerys-page-search', { page, search, location, postalCode, prix: prix.value, devanture: devanture.value, choix: choix.value, proprete: proprete.value })
          .then((res) => {

            current.value = page
            bakerysAll.value = []
            bakerysAllCount.value = 0
            counter = 1

            if (res.data.succes === true) {
              bakerysAll.value = res.data.search
              bakerysAllCount.value = res.data.bakerysAllCount

              if (res.data.bakerysAllCount <= 10) {
                pagination.value = false
              } else {
                pagination.value = true
              }

              visible.value = false
              showSimulatedReturnData.value = true
              this.countBakery(res.data.search, res.data.bakerysAllCount)

            }

          })

      }, 2500);

    },
    countBakery (data1, data2) {

      max.value = 0
      pageMax.value = 0

      if (counter <= 1) {
        setTimeout(() => {

          if ((Math.round((data2) / data1.length)) <= 8) max.value = Math.round((data2) / data1.length) - 1;
          else max.value = data1.length

          if ((Math.round((data2) / data1.length)) <= 8) pageMax.value = Math.round((data2) / data1.length);
          else pageMax.value = Math.round((data2) / 9)


          counter++;

        }, 300);
      }
    }
  },
  mounted () {

    this.showTextLoading()

    setTimeout(() => {

      axios.get(process.env.WEBSITE + '/bakerys-all').then(res => {

        if (res.data.succes === true) {

          current.value = 1
          bakerysAll.value = []
          bakerysAllCount.value = 0
          counter = 1
          bakerysAll.value = res.data.bakerysAll
          bakerysAllCount.value = res.data.bakerysAllCount

          if (res.data.bakerysAllCount <= 10) {
            pagination.value = false
          } else {
            pagination.value = true
          }

          if (counter <= 1) {
            if ((Math.round((res.data.bakerysAllCount) / res.data.bakerysAll.length)) <= 8) max.value = Math.round((res.data.bakerysAllCount) / data1.length) - 1;
            else max.value = res.data.bakerysAll.length

            pageMax.value = Math.round((res.data.bakerysAllCount) / res.data.bakerysAll.length);
            counter++;
          }

          visible.value = false
          showSimulatedReturnData.value = true

        }

      })

    }, 1000);

    $(document).on('click', '.addClick', function (e) {

      e.preventDefault();

      var id = $(this).data('id'),
        url = $(this).attr('href')

      fetch('https://api.ipify.org?format=json')
        .then(x => x.json())
        .then(({ ip }) => {
          axios.post(process.env.WEBSITE + '/bakery-click', { bakeryId: id, ip })
            .then((res) => {


            })
        });

      this.$router.push(url)

    })

    // Header

    $(window).scroll(function () {
      if ($(this).scrollTop() >= 1500) {
        $('header').removeClass('navigation-sticky navigation-unpin')
      } else {
        $('header').removeClass('navigation-sticky navigation-unpin')
      }
    })

    $('.header').addClass('h-bakery')
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
      $('html, body').animate({ scrollTop: 0 })
    })

    // Header menu

    setTimeout(() => {
      $('.search-btn').on('click', function (e) {
        e.preventDefault()

        $('.searchbox').addClass('active')
        $('body').css({
          overflow: 'hidden'
        })
      })

      $('.searchbox-remove').on('click', function (e) {
        e.preventDefault()

        $('.searchbox').removeClass('active')
        $('body').css({
          overflow: 'auto'
        })
      })
    }, 1000)

    $(document).on('click', '.bakery-list', function (e) {

      e.preventDefault()

      const bakerysList = Cookies.has('bakerysList')

      var id = $(this).data('id')

      $(this).html('<i class="fa-solid fa-heart-circle-xmark text-danger me-2"></i> Supprimer')

      if ($(document).find('.bakery-list-' + id).length !== 0) {

        if (!bakerysList) {
          Cookies.set('bakerysList', id, { expires: 30000 })
        } else {
          Cookies.set('bakerysList', Cookies.get('bakerysList') + '-' + id)
        }

      } else {

      }

      $(this).removeClass('bakery-list-' + id).addClass('delete-bakery-list-' + id)
      $(this).removeClass('bakery-list')
      $(this).addClass('delete-bakery-list')

    })

    $(document).on('click', '.delete-bakery-list', function (e) {

      e.preventDefault()

      const cookies = Cookies.get('bakerysList')

      var id = $(this).data('id')


      if ($(document).find('.bakery-list-' + id).length !== 0) {

      } else {

        var total = cookies.replace('-' + id, '');

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

        $(this).html('<i class="fa-solid fa-heart text-danger me-2"></i> Ajoute à ma liste')
        $(this).removeClass('delete-bakery-list-' + id).addClass('bakery-list-' + id)
        $(this).removeClass('delete-bakery-list')
        $(this).addClass('bakery-list')

        if (cookies.split('-').length === 1) {
          Cookies.remove('bakerysList');
        }

      }

    })

    $(document).on('click', '.form-order .br-widget a', function (e) {

      e.preventDefault()

      var rating = $(this).data('rating-value'),
        name = $(this).data('name')

      if (name === 'proprete') {
        proprete.value = rating
      }

      if (name === 'prix') {
        prix.value = rating
      }

      if (name === 'devanture') {
        devanture.value = rating
      }

      if (name === 'choix') {
        choix.value = rating
      }

      $('#' + name).val(rating)
      $('#' + name).removeAttr('class')

      $(this).addClass('br-active')
      $(this).prevAll().addClass('br-active')
      $(this).nextAll().removeClass('br-active')

    })

  }
})
</script>
