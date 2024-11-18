<template name="BakerysComponent">
  <div class="background fadeIn2 bb background1">

    <div class="content">

      <h1>Nos meilleures boulangeries sont ici</h1>

      <div class="b-breadcrumb">

        <div class="b-breadcrumb">

          <ol class="breadcrumb">

            <li><a href="/">Accueil</a></li>

            <li class="active">Boulangeries</li>

          </ol>

        </div>

      </div>

      <div class="form-order">

        <div>
          <h3>
            Trier les boulangeries
          </h3>
        </div>

        <form>

          <div class="form-group">

            <label for="">Trier par mot clé</label>

            <span class="select">
              <input v-model="search" type="text" class="form-control" placeholder="Entrer un mot clé...">
            </span>

          </div>

          <div class="form-group">

            <label for="">Trier par adresse</label>

            <span class="select">
              <input v-model="location" type="text" class="form-control" placeholder="Entrer une adresse...">
            </span>

          </div>

        </form>

        <div class="form-group mt-5">

          <a role="button" class="btn btn-bakery"
            @click="chargeBakery(this.current, this.search, this.location)">Rechercher</a>

        </div>

      </div>

    </div>

  </div>

  <div id="classement" class="section fadeIn3 last-bakery">

    <div class="column-inner">

      <div class="wrapper">

        <div class="bloc container">

          <div class="hp-container">

            <div class="section text-center">

              <div v-show="showSimulatedReturnData" id="blocGrid" class="row">

                <div class="col-lg-4 col-md-4 bakery" v-for="bakery in bakerysAll" :key="bakery.id">

                  <div class="row">

                    <div>

                      <div :id="'carouselBakery' + bakery.id" class="carousel slide slider-bakery carousel-fade"
                        data-ride="carousel">

                        <div class="carousel-indicators">

                          <button type="button" :data-bs-target="'#carouselBakery' + bakery.id" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1"></button>

                          <button type="button" v-if="bakery.image_2 !== 'default2.jpg'"
                            :data-bs-target="'#carouselBakery' + bakery.id" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>

                          <button type="button" v-if="bakery.image_3 !== 'default.jpg'"
                            :data-bs-target="'#carouselBakery' + bakery.id" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>

                          <button type="button" v-if="bakery.image_4 !== 'default2.jpg'"
                            :data-bs-target="'#carouselBakery' + bakery.id" data-bs-slide-to="3"
                            aria-label="Slide 4"></button>

                        </div>

                        <div class="carousel-inner">

                          <div class="carousel-item active">

                            <a :href="'#/bakery/' + bakery.url"
                              style="display: grid;justify-content: center;background-color: white;">
                              <img v-if="bakery.image === 'default.jpg'"
                                style="width: 100%;height: 265px;" class="d-block w-100"
                                :src="'bakerys/' + bakery.image" :alt="bakery.title">
                              <img v-else class="d-block w-100" :src="folderPicture + bakery.image" :alt="bakery.title">
                            </a>

                          </div>

                          <div v-if="bakery.image_2 !== 'default2.jpg'" class="carousel-item">

                            <a :href="'#/bakery/' + bakery.url">
                              <div
                                :style="'background: url(' + folderPicture + bakery.image_2 + ');max-width: 100px;width: 100%;height: 60px;background-position: center;background-repeat: no-repeat;background-attachment: fixed;background-size: cover;'">
                              </div>
                            </a>

                          </div>

                          <div v-if="bakery.image_3 !== 'default.jpg'" class="carousel-item">

                            <a :href="'#/bakery/' + bakery.url">
                              <div
                                :style="'background: url(' + folderPicture + bakery.image_3 + ');max-width: 100px;width: 100%;height: 60px;background-position: center;background-repeat: no-repeat;background-attachment: fixed;background-size: cover;'">
                              </div>
                            </a>

                          </div>

                          <div v-if="bakery.image_4 !== 'default2.jpg'" class="carousel-item">

                            <a :href="'#/bakery/' + bakery.url">
                              <div
                                :style="'background: url(' + folderPicture + bakery.image_4 + ');max-width: 100px;width: 100%;height: 60px;background-position: center;background-repeat: no-repeat;background-attachment: fixed;background-size: cover;'">
                              </div>
                            </a>

                          </div>

                        </div>

                        <button class="carousel-control-prev" type="button"
                          :data-bs-target="'#carouselBakery' + bakery.id" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>

                        <button class="carousel-control-next" type="button"
                          :data-bs-target="'#carouselBakery' + bakery.id" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>

                      </div>

                      <a :href="'#/bakery/' + bakery.url" class="title">{{ bakery.title }}</a>

                      <div>
                        <p class="content">{{ bakery.small_content }}</p>
                      </div>

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

                          <div v-if="bakery.counter_prix !== 0" class="br-current-rating">{{
                            Math.round(bakery.counter_prix * 5 / bakery.sum_prix)
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

                          <a href="#" :data-rating-value="note4" :data-rating-text="note4"
                            v-if="bakery.counter_choix === 0" v-for="note4 in 5" :key="note4" class=""></a>

                          <div v-if="bakery.counter_choix !== 0" class="br-current-rating">{{
                            Math.round(bakery.counter_choix * 5 / bakery.sum_choix)
                          }}</div>

                          <div class="br-current-rating" v-else>0</div>

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

                          Aucun commentaire pour cette boulangerie !

                        </div>

                      </div>

                    </div>

                    <div class="text-end mt-3 grid-mobile">

                      <div v-if="Cookies.has('bakerysList') !== false">

                        <a v-if="Cookies.get('bakerysList').indexOf(bakery.id) != -1" @click="saveBakeryList(bakery.id)"
                          :class="'btn btn-bakery me-3 delete-bakery-list-' + bakery.id"><i
                            class="fa-solid fa-heart me-2 text-danger"></i>Supprimer</a>

                        <a v-else @click="saveBakeryList(bakery.id)"
                          :class="'btn btn-bakery me-3 bakery-list-' + bakery.id"><i
                            class="fa-solid fa-heart-circle-xmark me-2 text-danger"></i>Ajouter à ma liste</a>

                        <a :href="'#/bakery/' + bakery.url" class="btn btn-bakery">En savoir +</a>

                      </div>

                      <div v-else>

                        <a @click="saveBakeryList(bakery.id)" :class="'btn btn-bakery me-3 bakery-list-' + bakery.id"><i
                            class="fa-solid fa-heart me-2 text-danger"></i>Ajouter à ma liste</a>

                        <a :href="'#/bakery/' + bakery.url" class="btn btn-bakery">En savoir +</a>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div v-show="showSimulatedReturnData">

                <div class="b-pagination">

                  <ul class="pagination">

                    <li>
                      <a role="button" v-bind:class="this.current === 1 ? 'disabled' : ''"
                        @click="chargeBakery(this.current - 1, this.search, this.location)"><i
                          class="fa fa-angle-left"></i></a>
                    </li>

                    <li v-for="page in max" :key="page" v-bind:class="current === page ? 'active' : ''">
                      <a role="button" @click="chargeBakery(page, this.search, this.location)">{{ page }}</a>
                    </li>

                    <li v-bind:class="this.current === pageMax ? 'active' : ''">
                      <a role="button" v-bind:class="this.current === pageMax ? 'disabled' : ''"
                        @click="chargeBakery(pageMax, this.search, this.location)">{{ pageMax }}</a>
                    </li>

                    <li>
                      <a role="button"
                        v-bind:class="this.current === Math.round(this.bakerysAllCount / 9) ? 'disabled' : ''"
                        @click="chargeBakery(this.current + 1, this.search, this.location)"><i
                          class="fa fa-angle-right"></i></a>
                    </li>

                  </ul>

                </div>

              </div>

              <div v-show="paginationData">
                <q-inner-loading style="z-index: 9999;" size="5rem" color="blue-5" :showing="visible" />
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<style lang="css">
.last-bakery .column-inner .wrapper .bloc .section:last-child img {
  max-width: 100%;
  cursor: pointer;
  width: 100%;
  height: 100%;
}

.bb .content {
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  max-width: 1170px;
  text-align: center;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
}

@media all and (max-width: 768px) {
  .bb .content {
    padding: 2rem 2rem;
  }
}

.disabled {
  pointer-events: none;
}

.section {
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

#classement {
  padding: 5rem 0;
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

.last-bakery .column-inner .wrapper {
  background: none;
}

.last-bakery .column-inner .wrapper .bloc {
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

moment.locale('fr')

var counter = 1
const search = '',
  location = ''

export default defineComponent({
  name: 'BakerysComponent',
  setup () {
    const store = useStore()
    const visible = ref(false)
    const showSimulatedReturnData = ref(true)
    const paginationData = ref(true)

    const bakerysAll = computed(() => {
      return store.state.bakerysAll
    })

    const bakerysAllCount = computed(() => {
      return store.state.bakerysAllCount
    })

    onMounted(() => {
      store.dispatch('fetchBakerysAll')
    })

    return {
      showTextLoading () {
        visible.value = true
        showSimulatedReturnData.value = true

        setTimeout(() => {
          visible.value = false
          showSimulatedReturnData.value = true
        }, 1500)
      },
      bakerysAll,
      Cookies: Cookies,
      bakerysAllCount,
      visible,
      paginationData,
      search: search,
      location: location,
      moment: moment,
      showSimulatedReturnData,
    }
  },
  data () {
    return {
      folderPicture: 'https://serveur.my-bakery.fr/bakerys/images/',
      current: ref(1),
      max: 1,
      pageMax: 0
    }
  },
  methods: {
    saveBakeryList (id) {

      const bakerysList = Cookies.has('bakerysList'),
        cookies = Cookies.get('bakerysList')

      $('.bakery-list-' + id).html('<i class="fa-solid fa-heart-circle-xmark text-danger me-2"></i> Supprimer')

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

        $('.bakery-list-' + id).html('<i class="fa-solid fa-heart text-danger me-2"></i> Ajouter à ma liste')

        Cookies.set('bakerysList', total)

        if (cookies.split('-').length === 1) {
          Cookies.remove('bakerysList');
        }

      }

    },
    chargeBakery (getPage, search = null, location = null) {

      if (search.trim() == "" && location.trim() == "") {
        this.showTextLoading()
      }

      if (search.trim() != "" && location.trim() != "" && this.search.length >= 3 && this.location.length >= 3) {
        this.showTextLoading()
      }

      if (search.trim() == "" && location.trim() != "" && this.location.length >= 3) {
        this.showTextLoading()
      }

      if (search.trim() != "" && location == "" && this.search.length >= 3) {
        this.showTextLoading()
      }

      setTimeout(() => {

        if (search.trim() != "" && location.trim() != "" && this.search.length >= 3 && this.location.length >= 3) {

          axios.get(process.env.WEBSITE + '/bakerys-page-search-location/' + getPage + '/' + search.trim() + '/' + location.trim())
            .then((res) => {

              this.current = getPage

              $('#blocGrid').html('')
              $('.b-pagination').hide()

              if (search == null || location == null) {
                $([document.documentElement, document.body]).animate({
                  scrollTop: $('#blocGrid').offset().top
                }, 'slow')
              }

              if (res.data.bakerysAll.length != 0) {

                $.each(res.data.bakerysAll, function (index, bakery) {

                  // Galeries
                  var galeries = '<div id="carouselBakery' + bakery.id + '" class="carousel slide slider-bakery carousel-fade" data-ride="carousel">'

                  galeries += '<div class="carousel-inner">'

                  if (bakery.image === 'default.jpg') galeries += '<div class="carousel-item active"><a href="#/bakery/' + bakery.url + '"><img class="d-block w-100" style="width: 100%;height: 265px;display: grid;justify-content: center;background-color: white;" src="bakerys/' + bakery.image + '" alt="' + bakery.title + '"></a></div>'
                  else if (bakery.image !== 'default.jpg') galeries += '<div class="carousel-item active"><a href="#/bakery/' + bakery.url + '"><div class="d-block w-100" style="width: 100%;height: 265px;background-position: center !important;background-repeat: no-repeat !important;background-attachment: static !important;background-size: cover !important;background: url(https://serveur.my-bakery.fr/bakerys/images/' + bakery.image + ')"></div></a></div>'

                  if (bakery.image_2 !== 'default2.jpg') galeries += '<div class="carousel-item"><a href="#/bakery/' + bakery.url + '"><div class="d-block w-100" style="width: 100%;height: 265px;background-position: center !important;background-repeat: no-repeat !important;background-attachment: static !important;background-size: cover !important;background: url(https://serveur.my-bakery.fr/bakerys/images/' + bakery.image_2 + ')"></div></a></div>'
                  if (bakery.image_3 !== 'default.jpg') galeries += '<div class="carousel-item"><a href="#/bakery/' + bakery.url + '"><div class="d-block w-100" style="width: 100%;height: 265px;background-position: center !important;background-repeat: no-repeat !important;background-attachment: static !important;background-size: cover !important;background: url(https://serveur.my-bakery.fr/bakerys/images/' + bakery.image_3 + ')"></div></a></div>'
                  if (bakery.image_4 !== 'default2.jpg') galeries += '<div class="carousel-item"><a href="#/bakery/' + bakery.url + '"><div class="d-block w-100" style="width: 100%;height: 265px;background-position: center !important;background-repeat: no-repeat !important;background-attachment: static !important;background-size: cover !important;background: url(https://serveur.my-bakery.fr/bakerys/images/' + bakery.image_4 + ')"></div></a></div>'

                  galeries += '<button class="carousel-control-prev" type="button" data-bs-target="#carouselBakery' + bakery.id + '"data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselBakery' + bakery.id + '" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div>'

                  galeries += '</div>'

                  var bloc_list = ''

                  if (Cookies.has('bakerysList') && Cookies.get('bakerysList').indexOf(bakery.id) === -1) {
                    bloc_list = '<a role="button" data-id="' + bakery.id + '" class="btn btn-bakery me-3 bakery-list bakery-list-' + bakery.id + '"><i class="fa-solid fa-heart me-2 text-danger"></i>Ajouter à ma liste</a>'
                  }

                  if (Cookies.has('bakerysList') && Cookies.get('bakerysList').indexOf(bakery.id) !== -1) {
                    bloc_list += '<a role="button" data-id="' + bakery.id + '" class="btn btn-bakery me-3 delete-bakery-list delete-bakery-list-' + bakery.id + '" > <i class="fa-solid fa-heart-circle-xmark me-2 text-danger"></i>Supprimer</a>'
                  }

                  // Commentaire
                  if (bakery.author_comment != null) {
                    var bloc_comment = '<div v-if="bakery.author_comment !== null"><p class="last-ratings">Par <strong>' + bakery.author_comment + '</strong> - <span>le ' + moment(bakery.created_at_comment).format('DD MMMM YYYY à H:mm') + '</span></p><p class="last-ratings">' + bakery.content_comment + '</p></div>'
                  }

                  // Commentaire
                  if (bakery.author_comment == null) {
                    var bloc_comment = '<div class="empty-comments">Aucun commentaire pour cette boulangerie !</div>'
                  }

                  var devanture = '',
                    proprete = '',
                    prix = '',
                    choix = ''

                  // Devanture si + de 0
                  if (bakery.counter_devanture != 0) {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_devanture * 5 / bakery.sum_devanture)) {
                        devanture += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      } else {
                        devanture += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class="br-selected"></a>'
                      }

                    }
                  } else {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_devanture * 5 / bakery.sum_devanture)) {
                      } else {
                        devanture += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      }

                    }
                  }

                  // Proprete si + de 0
                  if (bakery.counter_proprete != 0) {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_proprete * 5 / bakery.sum_proprete)) {
                        proprete += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      } else {
                        proprete += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class="br-selected"></a>'
                      }

                    }
                  } else {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_proprete * 5 / bakery.sum_proprete)) {
                      } else {
                        proprete += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      }

                    }
                  }

                  // Prix si + de 0
                  if (bakery.counter_prix != 0) {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_prix * 5 / bakery.sum_prix)) {
                        prix += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      } else {
                        prix += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class="br-selected"></a>'
                      }

                    }
                  } else {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_prix * 5 / bakery.sum_prix)) {
                      } else {
                        prix += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      }

                    }
                  }

                  // Choix si + de 0
                  if (bakery.counter_prix != 0) {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_choix * 5 / bakery.sum_choix)) {
                        choix += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      } else {
                        choix += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class="br-selected"></a>'
                      }

                    }
                  } else {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_choix * 5 / bakery.sum_choix)) {
                      } else {
                        choix += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      }

                    }
                  }

                  $('#blocGrid').append('<div class="col-lg-4 col-md-4 bakery"><div class="row"><div>' + galeries + '<a href="#/bakery/' + bakery.url + '" class="title">' + bakery.title + '</a> <div><p class="content">' + bakery.small_content + '</p></div></div><div><div class="devanture"><span>Devanture du magasin :</span><div class="br-widget">' + devanture + '</div></div><div class="proprete"><span>Propreté du magasin :</span><div class="br-widget">' + proprete + '</div></div><div class="prix"><span>Prix des produits :</span><div class="br-widget">' + prix + '</div></div><div class="choix"><span>Choix des produits :</span><div class="br-widget">' + choix + '</div></div><p class="location"><i class="fa-solid fa-map-location me-1"></i>' + bakery.adresse + '</p><div class="text-end"><p class="mb-1"><strong>Dernier commentaire :</strong></p>' + bloc_comment + '</div></div><div class="text-end mt-3 grid-mobile">' + bloc_list + '<a href="#/bakery/' + bakery.url + '" class="btn btn-bakery">En savoir +</a></div></div></div>')

                })

              } else {

                $('#blocGrid').html('<div class="alert alert-info">Aucune boulangerie n\'a été trouvé.</div>')

              }

            })
            .catch((error) => {
              console.log(error);
            })
        }

        if (search.trim() == "" && location.trim() != "" && this.location.length >= 3) {

          axios.get(process.env.WEBSITE + '/bakerys-page-location/' + getPage + '/' + location.trim())
            .then((res) => {

              this.current = getPage

              if (search == null || location == null) {
                $([document.documentElement, document.body]).animate({
                  scrollTop: $('#blocGrid').offset().top
                }, 'slow')
              }

              $('#blocGrid').html('')
              $('.b-pagination').hide()

              if (res.data.bakerysAll.length != 0) {

                $.each(res.data.bakerysAll, function (index, bakery) {

                  // Galeries
                  var galeries = '<div id="carouselBakery' + bakery.id + '" class="carousel slide slider-bakery carousel-fade" data-ride="carousel">'

                  galeries += '<div class="carousel-inner">'

                  if (bakery.image === 'default.jpg') galeries += '<div class="carousel-item active"><a href="#/bakery/' + bakery.url + '"><img class="d-block w-100" style="width: 100%;height: 265px;display: grid;justify-content: center;background-color: white;" src="bakerys/' + bakery.image + '" alt="' + bakery.title + '"></a></div>'
                  else if (bakery.image !== 'default.jpg') galeries += '<div class="carousel-item active"><a href="#/bakery/' + bakery.url + '"><div class="d-block w-100" style="width: 100%;height: 265px;background-position: center !important;background-repeat: no-repeat !important;background-attachment: static !important;background-size: cover !important;background: url(https://serveur.my-bakery.fr/bakerys/images/' + bakery.image + ')"></div></a></div>'

                  if (bakery.image_2 !== 'default2.jpg') galeries += '<div class="carousel-item"><a href="#/bakery/' + bakery.url + '"><div class="d-block w-100" style="width: 100%;height: 265px;background-position: center !important;background-repeat: no-repeat !important;background-attachment: static !important;background-size: cover !important;background: url(https://serveur.my-bakery.fr/bakerys/images/' + bakery.image_2 + ')"></div></a></div>'
                  if (bakery.image_3 !== 'default.jpg') galeries += '<div class="carousel-item"><a href="#/bakery/' + bakery.url + '"><div class="d-block w-100" style="width: 100%;height: 265px;background-position: center !important;background-repeat: no-repeat !important;background-attachment: static !important;background-size: cover !important;background: url(https://serveur.my-bakery.fr/bakerys/images/' + bakery.image_3 + ')"></div></a></div>'
                  if (bakery.image_4 !== 'default2.jpg') galeries += '<div class="carousel-item"><a href="#/bakery/' + bakery.url + '"><div class="d-block w-100" style="width: 100%;height: 265px;background-position: center !important;background-repeat: no-repeat !important;background-attachment: static !important;background-size: cover !important;background: url(https://serveur.my-bakery.fr/bakerys/images/' + bakery.image_4 + ')"></div></a></div>'

                  galeries += '<button class="carousel-control-prev" type="button" data-bs-target="#carouselBakery' + bakery.id + '"data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselBakery' + bakery.id + '" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div>'

                  galeries += '</div>'

                  var bloc_list = ''

                  if (Cookies.has('bakerysList') && Cookies.get('bakerysList').indexOf(bakery.id) === -1) {
                    bloc_list = '<a role="button" data-id="' + bakery.id + '" class="btn btn-bakery me-3 bakery-list bakery-list-' + bakery.id + '"><i class="fa-solid fa-heart me-2 text-danger"></i>Ajouter à ma liste</a>'
                  }

                  if (Cookies.has('bakerysList') && Cookies.get('bakerysList').indexOf(bakery.id) !== -1) {
                    bloc_list += '<a role="button" data-id="' + bakery.id + '" class="btn btn-bakery me-3 delete-bakery-list delete-bakery-list-' + bakery.id + '" > <i class="fa-solid fa-heart-circle-xmark me-2 text-danger"></i>Supprimer</a>'
                  }

                  // Commentaire
                  if (bakery.author_comment != null) {
                    var bloc_comment = '<div v-if="bakery.author_comment !== null"><p class="last-ratings">Par <strong>' + bakery.author_comment + '</strong> - <span>le ' + moment(bakery.created_at_comment).format('DD MMMM YYYY à H:mm') + '</span></p><p class="last-ratings">' + bakery.content_comment + '</p></div>'
                  }

                  // Commentaire
                  if (bakery.author_comment == null) {
                    var bloc_comment = '<div class="empty-comments">Aucun commentaire pour cette boulangerie !</div>'
                  }

                  var devanture = '',
                    proprete = '',
                    prix = '',
                    choix = ''

                  // Devanture si + de 0
                  if (bakery.counter_devanture != 0) {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_devanture * 5 / bakery.sum_devanture)) {
                        devanture += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      } else {
                        devanture += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class="br-selected"></a>'
                      }

                    }
                  } else {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_devanture * 5 / bakery.sum_devanture)) {
                      } else {
                        devanture += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      }

                    }
                  }

                  // Proprete si + de 0
                  if (bakery.counter_proprete != 0) {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_proprete * 5 / bakery.sum_proprete)) {
                        proprete += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      } else {
                        proprete += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class="br-selected"></a>'
                      }

                    }
                  } else {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_proprete * 5 / bakery.sum_proprete)) {
                      } else {
                        proprete += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      }

                    }
                  }

                  // Prix si + de 0
                  if (bakery.counter_prix != 0) {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_prix * 5 / bakery.sum_prix)) {
                        prix += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      } else {
                        prix += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class="br-selected"></a>'
                      }

                    }
                  } else {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_prix * 5 / bakery.sum_prix)) {
                      } else {
                        prix += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      }

                    }
                  }

                  // Choix si + de 0
                  if (bakery.counter_prix != 0) {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_choix * 5 / bakery.sum_choix)) {
                        choix += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      } else {
                        choix += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class="br-selected"></a>'
                      }

                    }
                  } else {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_choix * 5 / bakery.sum_choix)) {
                      } else {
                        choix += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      }

                    }
                  }

                  $('#blocGrid').append('<div class="col-lg-4 col-md-4 bakery"><div class="row"><div>' + galeries + '<a href="#/bakery/' + bakery.url + '" class="title">' + bakery.title + '</a> <div><p class="content">' + bakery.small_content + '</p></div></div><div><div class="devanture"><span>Devanture du magasin :</span><div class="br-widget">' + devanture + '</div></div><div class="proprete"><span>Propreté du magasin :</span><div class="br-widget">' + proprete + '</div></div><div class="prix"><span>Prix des produits :</span><div class="br-widget">' + prix + '</div></div><div class="choix"><span>Choix des produits :</span><div class="br-widget">' + choix + '</div></div><p class="location"><i class="fa-solid fa-map-location me-1"></i>' + bakery.adresse + '</p><div class="text-end"><p class="mb-1"><strong>Dernier commentaire :</strong></p>' + bloc_comment + '</div></div><div class="text-end mt-3 grid-mobile">' + bloc_list + '<a href="#/bakery/' + bakery.url + '" class="btn btn-bakery">En savoir +</a></div></div></div>')

                })

              } else {

                $('#blocGrid').html('<div class="alert alert-info">Aucune boulangerie n\'a été trouvé.</div>')

              }

            })
            .catch((error) => {
              console.log(error);
            })
        }

        if (search.trim() != "" && location.trim() == "" && this.search.length >= 3) {

          axios.get(process.env.WEBSITE + '/bakerys-page/' + getPage + '/' + search.trim())
            .then((res) => {

              this.current = getPage

              if (search == null || location == null) {
                $([document.documentElement, document.body]).animate({
                  scrollTop: $('#blocGrid').offset().top
                }, 'slow')
              }

              $('#blocGrid').html('')
              $('.b-pagination').hide()

              if (res.data.bakerysAll.length != 0) {

                $.each(res.data.bakerysAll, function (index, bakery) {

                  // Galeries
                  var galeries = '<div id="carouselBakery' + bakery.id + '" class="carousel slide slider-bakery carousel-fade" data-ride="carousel">'

                  galeries += '<div class="carousel-inner">'

                  if (bakery.image === 'default.jpg') galeries += '<div class="carousel-item active"><a href="#/bakery/' + bakery.url + '"><img class="d-block w-100" style="width: 100%;height: 265px;display: grid;justify-content: center;background-color: white;" src="bakerys/' + bakery.image + '" alt="' + bakery.title + '"></a></div>'
                  else if (bakery.image !== 'default.jpg') galeries += '<div class="carousel-item active"><a href="#/bakery/' + bakery.url + '"><div class="d-block w-100" style="width: 100%;height: 265px;background-position: center !important;background-repeat: no-repeat !important;background-attachment: static !important;background-size: cover !important;background: url(https://serveur.my-bakery.fr/bakerys/images/' + bakery.image + ')"></div></a></div>'

                  if (bakery.image_2 !== 'default2.jpg') galeries += '<div class="carousel-item"><a href="#/bakery/' + bakery.url + '"><div class="d-block w-100" style="width: 100%;height: 265px;background-position: center !important;background-repeat: no-repeat !important;background-attachment: static !important;background-size: cover !important;background: url(https://serveur.my-bakery.fr/bakerys/images/' + bakery.image_2 + ')"></div></a></div>'
                  if (bakery.image_3 !== 'default.jpg') galeries += '<div class="carousel-item"><a href="#/bakery/' + bakery.url + '"><div class="d-block w-100" style="width: 100%;height: 265px;background-position: center !important;background-repeat: no-repeat !important;background-attachment: static !important;background-size: cover !important;background: url(https://serveur.my-bakery.fr/bakerys/images/' + bakery.image_3 + ')"></div></a></div>'
                  if (bakery.image_4 !== 'default2.jpg') galeries += '<div class="carousel-item"><a href="#/bakery/' + bakery.url + '"><div class="d-block w-100" style="width: 100%;height: 265px;background-position: center !important;background-repeat: no-repeat !important;background-attachment: static !important;background-size: cover !important;background: url(https://serveur.my-bakery.fr/bakerys/images/' + bakery.image_4 + ')"></div></a></div>'

                  galeries += '<button class="carousel-control-prev" type="button" data-bs-target="#carouselBakery' + bakery.id + '"data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselBakery' + bakery.id + '" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div>'

                  galeries += '</div>'

                  var bloc_list = ''

                  if (Cookies.has('bakerysList') && Cookies.get('bakerysList').indexOf(bakery.id) === -1) {
                    bloc_list = '<a role="button" data-id="' + bakery.id + '" class="btn btn-bakery me-3 bakery-list bakery-list-' + bakery.id + '"><i class="fa-solid fa-heart me-2 text-danger"></i>Ajouter à ma liste</a>'
                  }

                  if (Cookies.has('bakerysList') && Cookies.get('bakerysList').indexOf(bakery.id) !== -1) {
                    bloc_list += '<a role="button" data-id="' + bakery.id + '" class="btn btn-bakery me-3 delete-bakery-list delete-bakery-list-' + bakery.id + '" > <i class="fa-solid fa-heart-circle-xmark me-2 text-danger"></i>Supprimer</a>'
                  }

                  // Commentaire
                  if (bakery.author_comment != null) {
                    var bloc_comment = '<div v-if="bakery.author_comment !== null"><p class="last-ratings">Par <strong>' + bakery.author_comment + '</strong> - <span>le ' + moment(bakery.created_at_comment).format('DD MMMM YYYY à H:mm') + '</span></p><p class="last-ratings">' + bakery.content_comment + '</p></div>'
                  }

                  // Commentaire
                  if (bakery.author_comment == null) {
                    var bloc_comment = '<div class="empty-comments">Aucun commentaire pour cette boulangerie !</div>'
                  }

                  var devanture = '',
                    proprete = '',
                    prix = '',
                    choix = ''

                  // Devanture si + de 0
                  if (bakery.counter_devanture != 0) {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_devanture * 5 / bakery.sum_devanture)) {
                        devanture += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      } else {
                        devanture += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class="br-selected"></a>'
                      }

                    }
                  } else {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_devanture * 5 / bakery.sum_devanture)) {
                      } else {
                        devanture += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      }

                    }
                  }

                  // Proprete si + de 0
                  if (bakery.counter_proprete != 0) {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_proprete * 5 / bakery.sum_proprete)) {
                        proprete += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      } else {
                        proprete += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class="br-selected"></a>'
                      }

                    }
                  } else {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_proprete * 5 / bakery.sum_proprete)) {
                      } else {
                        proprete += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      }

                    }
                  }

                  // Prix si + de 0
                  if (bakery.counter_prix != 0) {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_prix * 5 / bakery.sum_prix)) {
                        prix += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      } else {
                        prix += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class="br-selected"></a>'
                      }

                    }
                  } else {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_prix * 5 / bakery.sum_prix)) {
                      } else {
                        prix += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      }

                    }
                  }

                  // Choix si + de 0
                  if (bakery.counter_prix != 0) {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_choix * 5 / bakery.sum_choix)) {
                        choix += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      } else {
                        choix += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class="br-selected"></a>'
                      }

                    }
                  } else {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_choix * 5 / bakery.sum_choix)) {
                      } else {
                        choix += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      }

                    }
                  }

                  $('#blocGrid').append('<div class="col-lg-4 col-md-4 bakery"><div class="row"><div>' + galeries + '<a href="#/bakery/' + bakery.url + '" class="title">' + bakery.title + '</a> <div><p class="content">' + bakery.small_content + '</p></div></div><div><div class="devanture"><span>Devanture du magasin :</span><div class="br-widget">' + devanture + '</div></div><div class="proprete"><span>Propreté du magasin :</span><div class="br-widget">' + proprete + '</div></div><div class="prix"><span>Prix des produits :</span><div class="br-widget">' + prix + '</div></div><div class="choix"><span>Choix des produits :</span><div class="br-widget">' + choix + '</div></div><p class="location"><i class="fa-solid fa-map-location me-1"></i>' + bakery.adresse + '</p><div class="text-end"><p class="mb-1"><strong>Dernier commentaire :</strong></p>' + bloc_comment + '</div></div><div class="text-end mt-3 grid-mobile">' + bloc_list + '<a href="#/bakery/' + bakery.url + '" class="btn btn-bakery">En savoir +</a></div></div></div>')

                })

              } else {
                $('#blocGrid').html('<div class="alert alert-info">Aucune boulangerie n\'a été trouvé.</div>')
              }

            }).catch((error) => {
              console.log(error);
            })

        }

        if (search.trim() == "" && location.trim() == "") {

          axios.get(process.env.WEBSITE + '/bakerys-pagination/' + getPage)
            .then((res) => {

              this.current = getPage

              $([document.documentElement, document.body]).animate({
                scrollTop: $('#blocGrid').offset().top
              }, 'slow')

              $('#blocGrid').html('')

              if (res.data.bakerysAll.length != 0) {

                $.each(res.data.bakerysAll, function (index, bakery) {

                  // Galeries
                  var galeries = '<div id="carouselBakery' + bakery.id + '" class="carousel slide slider-bakery carousel-fade" data-ride="carousel">'

                  galeries += '<div class="carousel-inner">'

                  if (bakery.image === 'default.jpg') galeries += '<div class="carousel-item active"><a href="#/bakery/' + bakery.url + '"><img class="d-block w-100" style="width: 100%;height: 265px;display: grid;justify-content: center;background-color: white;" src="bakerys/' + bakery.image + '" alt="' + bakery.title + '"></a></div>'
                  else if (bakery.image !== 'default.jpg') galeries += '<div class="carousel-item active"><a href="#/bakery/' + bakery.url + '"><div class="d-block w-100" style="width: 100%;height: 265px;background-position: center !important;background-repeat: no-repeat !important;background-attachment: static !important;background-size: cover !important;background: url(https://serveur.my-bakery.fr/bakerys/images/' + bakery.image + ')"></div></a></div>'

                  if (bakery.image_2 !== 'default2.jpg') galeries += '<div class="carousel-item"><a href="#/bakery/' + bakery.url + '"><div class="d-block w-100" style="width: 100%;height: 265px;background-position: center !important;background-repeat: no-repeat !important;background-attachment: static !important;background-size: cover !important;background: url(https://serveur.my-bakery.fr/bakerys/images/' + bakery.image_2 + ')"></div></a></div>'
                  if (bakery.image_3 !== 'default.jpg') galeries += '<div class="carousel-item"><a href="#/bakery/' + bakery.url + '"><div class="d-block w-100" style="width: 100%;height: 265px;background-position: center !important;background-repeat: no-repeat !important;background-attachment: static !important;background-size: cover !important;background: url(https://serveur.my-bakery.fr/bakerys/images/' + bakery.image_3 + ')"></div></a></div>'
                  if (bakery.image_4 !== 'default2.jpg') galeries += '<div class="carousel-item"><a href="#/bakery/' + bakery.url + '"><div class="d-block w-100" style="width: 100%;height: 265px;background-position: center !important;background-repeat: no-repeat !important;background-attachment: static !important;background-size: cover !important;background: url(https://serveur.my-bakery.fr/bakerys/images/' + bakery.image_4 + ')"></div></a></div>'

                  galeries += '<button class="carousel-control-prev" type="button" data-bs-target="#carouselBakery' + bakery.id + '"data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselBakery' + bakery.id + '" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div>'

                  galeries += '</div>'

                  var bloc_list = ''

                  if (Cookies.has('bakerysList') && Cookies.get('bakerysList').indexOf(bakery.id) === -1) {
                    bloc_list = '<a role="button" data-id="' + bakery.id + '" class="btn btn-bakery me-3 bakery-list bakery-list-' + bakery.id + '"><i class="fa-solid fa-heart me-2 text-danger"></i>Ajouter à ma liste</a>'
                  }

                  if (Cookies.has('bakerysList') && Cookies.get('bakerysList').indexOf(bakery.id) !== -1) {
                    bloc_list += '<a role="button" data-id="' + bakery.id + '" class="btn btn-bakery me-3 delete-bakery-list delete-bakery-list-' + bakery.id + '" > <i class="fa-solid fa-heart-circle-xmark me-2 text-danger"></i>Supprimer</a>'
                  }

                  // Commentaire
                  if (bakery.author_comment != null) {
                    var bloc_comment = '<div v-if="bakery.author_comment !== null"><p class="last-ratings">Par <strong>' + bakery.author_comment + '</strong> - <span>le ' + moment(bakery.created_at_comment).format('DD MMMM YYYY à H:mm') + '</span></p><p class="last-ratings">' + bakery.content_comment + '</p></div>'
                  }

                  // Commentaire
                  if (bakery.author_comment == null) {
                    var bloc_comment = '<div class="empty-comments">Aucun commentaire pour cette boulangerie !</div>'
                  }

                  var devanture = '',
                    proprete = '',
                    prix = '',
                    choix = ''

                  // Devanture si + de 0
                  if (bakery.counter_devanture != 0) {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_devanture * 5 / bakery.sum_devanture)) {
                        devanture += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      } else {
                        devanture += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class="br-selected"></a>'
                      }

                    }
                  } else {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_devanture * 5 / bakery.sum_devanture)) {
                      } else {
                        devanture += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      }

                    }
                  }

                  // Proprete si + de 0
                  if (bakery.counter_proprete != 0) {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_proprete * 5 / bakery.sum_proprete)) {
                        proprete += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      } else {
                        proprete += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class="br-selected"></a>'
                      }

                    }
                  } else {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_proprete * 5 / bakery.sum_proprete)) {
                      } else {
                        proprete += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      }

                    }
                  }

                  // Prix si + de 0
                  if (bakery.counter_prix != 0) {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_prix * 5 / bakery.sum_prix)) {
                        prix += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      } else {
                        prix += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class="br-selected"></a>'
                      }

                    }
                  } else {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_prix * 5 / bakery.sum_prix)) {
                      } else {
                        prix += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      }

                    }
                  }

                  // Choix si + de 0
                  if (bakery.counter_prix != 0) {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_choix * 5 / bakery.sum_choix)) {
                        choix += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      } else {
                        choix += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class="br-selected"></a>'
                      }

                    }
                  } else {
                    for (let i = 1; i <= 5; i++) {

                      if (i > Math.round(bakery.counter_choix * 5 / bakery.sum_choix)) {
                      } else {
                        choix += '<a href="#" data-rating-value="' + i + '" data-rating-text="' + i + '" class=""></a>'
                      }

                    }
                  }

                  $('#blocGrid').append('<div class="col-lg-4 col-md-4 bakery"><div class="row"><div>' + galeries + '<a href="#/bakery/' + bakery.url + '" class="title">' + bakery.title + '</a> <div><p class="content">' + bakery.small_content + '</p></div></div><div><div class="devanture"><span>Devanture du magasin :</span><div class="br-widget">' + devanture + '</div></div><div class="proprete"><span>Propreté du magasin :</span><div class="br-widget">' + proprete + '</div></div><div class="prix"><span>Prix des produits :</span><div class="br-widget">' + prix + '</div></div><div class="choix"><span>Choix des produits :</span><div class="br-widget">' + choix + '</div></div><p class="location"><i class="fa-solid fa-map-location me-1"></i>' + bakery.adresse + '</p><div class="text-end"><p class="mb-1"><strong>Dernier commentaire :</strong></p>' + bloc_comment + '</div></div><div class="text-end mt-3 grid-mobile">' + bloc_list + '<a href="#/bakery/' + bakery.url + '" class="btn btn-bakery">En savoir +</a></div></div></div>')

                })

              } else {
                $('#blocGrid').html('<div class="alert alert-info">Aucune boulangerie n\'a été trouvé.</div>')
              }

            }).catch((error) => {
              console.log(error);
            })

        }

      }, 1500);

    },
    countBakery () {
      if (counter <= 1) {
        setTimeout(() => {
          if (this.bakerysAll.length <= 8) this.max = 1;
          else this.max = 9;

          this.pageMax = Math.round(this.bakerysAllCount / 9);
          counter++;
        }, 300);
      }
    }
  },
  mounted () {

    $('#menu-main-menu').removeAttr('style')

    setTimeout(() => {
      this.countBakery()
    }, 1000);

    // Header menu

    $(document).on('click', '.menu-toggle-2:not(.active)', function (e) {
      e.preventDefault()

      $(this).addClass('active')

      $('#menu-main-menu').fadeIn(300)

    })

    $(document).on('click', '.menu-toggle-2.active', function (e) {
      e.preventDefault()

      $(this).removeClass('active')

      $('#menu-main-menu').fadeOut(300)

    })

    $(document).on('click', '#blog .btn-target', function (e) {
      e.preventDefault()
      var url = $(this).attr('href')
      location.href = url
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
      }, 'slow')
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

    $(document).on('click', '.menu-toggle', function (e) {
      e.preventDefault()

      $(this).toggleClass('active')

      $('#menu-main-menu').fadeToggle(300)
    })

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

    // Carrousel
    setTimeout(() => {
      const sliderCarousel = document.querySelector('.slider-bakery')

      const carouselBakery = new bootstrap.Carousel(sliderCarousel, {
        interval: 2000,
        wrap: true
      })
    }, 1000);

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

  }
})
</script>
