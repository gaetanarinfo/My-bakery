<template name="BakeryComponent">
  <div class="background fadeIn2 bb background1">

    <div class="content">

      <h1>{{ bakery.title }}</h1>

      <div class="b-breadcrumb">

        <div class="b-breadcrumb">

          <ol class="breadcrumb">

            <li><a href="/">Accueil</a></li>

            <li class="before"><a role="button" @click="this.$router.push('/bakerys')">Boulangeries</a></li>

            <li class="active">{{ bakery.title }}</li>

          </ol>

        </div>

      </div>

    </div>

  </div>

  <div class="bakery-single section fadeIn3">

    <div class="container">

      <div class="bakery-detail">

        <div class="bakery">

          <div class="row">

            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">

              <div class="thumbnail">

                <div class="slick-slider">

                  <a href="" tabindex="0"><img :src="'bakerys/' + bakery.image" :alt="bakery.title"></a>

                  <a href="" tabindex="0"><img :src="'bakerys/' + bakery.image_2" :alt="bakery.title"></a>

                  <a href="" tabindex="0"><img :src="'bakerys/' + bakery.image_3" :alt="bakery.title"></a>

                  <a href="" tabindex="0"><img :src="'bakerys/' + bakery.image_4" :alt="bakery.title"></a>

                </div>

              </div>

              <div class="preview">

                <div class="slick-nav">

                  <div class="item" style="width: 98px;">
                    <img :src="'bakerys/' + bakery.image" :alt="bakery.title" />
                  </div>

                  <div class="item" style="width: 98px;">
                    <img :src="'bakerys/' + bakery.image_2" :alt="bakery.title" />
                  </div>

                  <div class="item" style="width: 98px;">
                    <img :src="'bakerys/' + bakery.image_3" :alt="bakery.title" />
                  </div>

                  <div class="item" style="width: 98px;">
                    <img :src="'bakerys/' + bakery.image_4" :alt="bakery.title" />
                  </div>

                </div>

              </div>

            </div>

            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">

              <div class="info">
                <h2>{{ bakery.title }}</h2>

                <div class="rating last-bakery">

                  <div class="choix">

                    <div class="br-widget">

                      <a v-if="bakery.counter_choix !== 0" v-for="note4 in 5" :key="note4" :data-rating-value="note4"
                        :data-rating-text="note4"
                        v-bind:class="note4 > Math.round(bakery.counter_choix * 5 / bakery.sum_choix) ? '' : 'br-selected'"></a>

                      <a :data-rating-value="note4" :data-rating-text="note4" v-if="bakery.counter_choix === 0"
                        v-for="note4 in 5" :key="note4" class=""></a>

                      <div v-if="bakery.counter_choix !== 0" class="br-current-rating">{{
                        Math.round(bakery.counter_choix * 5 / bakery.sum_choix)
                      }}</div>

                      <div class="br-current-rating" v-else>0</div>

                    </div>

                  </div>

                </div>

                <div>
                  <p>{{ bakery.adresse }}</p>
                </div>

                <div>
                  <p><i class="fa-solid fa-phone me-1"></i>{{ bakery.phone }}</p>
                </div>

                <div>
                  <p><i class="fa-brands fa-accessible-icon me-1"></i> Accès handicapé <span :class="(bakery.handicap == 0) ? 'text-danger' : 'text-success'">{{ (bakery.handicap == 0) ? 'non' : 'oui' }}</span></p>
                </div>

                <div class="short-desc">

                  <p>{{ bakery.small_content }}</p>

                </div>

                <div class="simple-action grid-mobile text-end">

                  <div v-if="Cookies.has('bakerysList') !== false">

                    <a v-if="Cookies.get('bakerysList').indexOf(bakery.id) != -1" @click="saveBakeryList(bakery.id)"
                      :class="'btn btn-bakery me-3 delete-bakery-list-' + bakery.id"><i
                        class="fa-solid fa-heart me-2 text-danger"></i>Supprimer</a>

                    <a v-else @click="saveBakeryList(bakery.id)"
                      :class="'btn btn-bakery me-3 bakery-list-' + bakery.id"><i
                        class="fa-solid fa-heart-circle-xmark me-2 text-danger"></i>Ajouter à ma liste</a>

                  </div>

                  <div v-else>

                    <a @click="saveBakeryList(bakery.id)" :class="'btn btn-bakery me-3 bakery-list-' + bakery.id"><i
                        class="fa-solid fa-heart me-2 text-danger"></i>Ajouter à ma liste</a>

                  </div>

                </div>

                <div class="sharing">

                  <p class="text-right">Partager sur :

                    <a :href="'https://www.facebook.com/sharer/sharer.php?u=https://my-bakery.fr' + $route.fullPath"><i
                        class="fa fa-facebook"></i></a>

                    <a :href="'https://twitter.com/share?url=https://my-bakery.fr' + $route.fullPath + '&text=' + bakery.title + '&via=my-bakery'"
                      onclick="window.open(this.href);return false;"><i class="fa fa-twitter"></i></a>

                    <a
                      :href="'https://www.linkedin.com/shareArticle?mini=true&url=https://my-bakery.fr' + $route.fullPath + '&text=' + bakery.title"><i
                        class="fa fa-linkedin"></i></a>

                  </p>

                </div>

              </div>

            </div>

          </div>

          <GoogleMapLoader :mapConfig="mapConfig" :apiKey="apiKey">

          </GoogleMapLoader>

          <div class="bakery-content">

            <ul class="tab-list" role="tablist">

              <li class="active" id="btn_description">

                <a aria-controls="tab_description" role="tab" data-toggle="tab" aria-expanded="true">Description</a>

              </li>

              <li class="" id="btn_reviews">

                <a aria-controls="tab_reviews" role="tab" data-toggle="tab" aria-expanded="false">Avis
                  ({{ bakeryComments.length }})</a>

              </li>

              <li class="" id="btn_hours">

                <a aria-controls="tab_hours" role="tab" data-toggle="tab" aria-expanded="false">Horaire d'ouverture</a>

              </li>

            </ul>

          </div>

          <div class="tab-content">

            <div class="tab-pane active" role="tabpanel" id="tab_description" v-html="bakery.content">
            </div>

            <div class="tab-pane" role="tabpanel" id="tab_reviews">

              <div id="reviews">

                <div v-if="bakeryComments.length !== 0" id="comments">

                  <p class="mb-20">{{ bakeryComments.length }} avis pour <strong>{{ bakery.title }}</strong></p>

                  <div class="commentlist">

                    <div class="bypostauthor bs-review">

                      <div v-for="bakeryComment in bakeryComments" v-bind:id="bakeryComment.id"
                        :id="'comment' + bakeryComment.id" class="comment-container">

                        <div class="bs-review-thumbnail">
                          <img :alt="bakeryComment.author" src="users/028cac9c481f4f5c4269f34ace3667a0.png" height="80"
                            width="80" loading="lazy">
                        </div>

                        <div class="bs-review-content">

                          <header>

                            <p class="meta mb-0">
                              Par <a>{{ bakeryComment.author }}</a> -
                              {{ moment(bakeryComment.created_at).format("DD MMMM YYYY à H: mm") }}
                            </p>

                          </header>

                          <div class="description">

                            <p class="mb-0">{{ bakeryComment.content }}</p>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

                <div id="review-form-rapper">

                  <div class="bs-bakery-review">

                    <div class="row">

                      <div class="bs-form-bakery-review">

                        <div class="col-xs-12">

                          <h4>AJOUTEZ VOTRE AVIS</h4>

                          <form id="form-comment">

                            <input type="hidden" :value="bakery.url" id="url" name="url">

                            <p class="comment-notes"><span id="email-notes">Votre adresse e-mail ne sera pas
                                publié.</span> <span class="required-field-message" aria-hidden="true">Champs obligatoires
                                sont marqués<span class="required" aria-hidden="true">*</span></span></p>

                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">

                              <div class="form-group">

                                <label for="rating">Devanture du magasin <sup>*</sup></label>

                                <div class="devanture">

                                  <div class="br-widget">

                                    <input type="hidden" id="devanture" name="devanture">

                                    <a role="button" v-for="note in 5" :key="note" data-name="devanture"
                                      :data-rating-value="note" :data-rating-text="note"></a>

                                    <div class="br-current-rating">0</div>

                                    <span span class="error-text devanture_error"></span>

                                  </div>

                                </div>

                              </div>

                            </div>

                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">

                              <div class="form-group">

                                <label for="rating">Propreté du magasin <sup>*</sup></label>

                                <div class="proprete">

                                  <div class="br-widget">

                                    <input type="hidden" id="proprete" name="proprete">

                                    <a role="button" v-for="note in 5" :key="note" data-name="proprete"
                                      :data-rating-value="note" :data-rating-text="note"></a>

                                    <div class="br-current-rating">0</div>

                                    <span span class="error-text proprete_error"></span>

                                  </div>

                                </div>

                              </div>

                            </div>

                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">

                              <div class="form-group">

                                <label for="rating">Prix des produits <sup>*</sup></label>

                                <div class="prix">

                                  <div class="br-widget">

                                    <input type="hidden" id="prix" name="prix">

                                    <a role="button" v-for="note in 5" :key="note" data-name="prix"
                                      :data-rating-value="note" :data-rating-text="note"></a>

                                    <div class="br-current-rating">0</div>

                                    <span span class="error-text prix_error"></span>

                                  </div>

                                </div>

                              </div>

                            </div>

                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">

                              <div class="form-group">

                                <label for="rating">Choix des produits <sup>*</sup></label>

                                <div class="choix">

                                  <div class="br-widget">

                                    <input type="hidden" id="choix" name="choix">

                                    <a role="button" v-for="note in 5" :key="note" data-name="choix"
                                      :data-rating-value="note" :data-rating-text="note"></a>

                                    <div class="br-current-rating">0</div>

                                    <span span class="error-text choix_error"></span>

                                  </div>

                                </div>

                              </div>

                            </div>

                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                              <div class="form-group">

                                <label for="comment">Votre avis <sup>*</sup></label>

                                <textarea v-model="comment" id="comment" class="form-control" name="comment" cols="45"
                                  rows="8"></textarea>

                                <span class="error-text comment_error"></span>

                              </div>

                            </div>

                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                              <div class="form-group">

                                <label for="author">Votre nom <sup>*</sup></label>

                                <input v-model="author" id="author" name="author" type="text" size="30"
                                  class="form-control" aria-required="true">

                                <span class="error-text author_error"></span>

                              </div>

                              <div class="form-group">

                                <label for="emailComment">Adresse email <sup>*</sup></label>

                                <input v-model="emailComment" id="emailComment" name="emailComment" type="email"
                                  class="form-control" size="30" aria-required="true">

                                <span class="error-text email_error"></span>

                              </div>

                            </div>

                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">

                              <div class="form-group">

                                <button type="submit" v-bind:class="submit !== false ? '' : 'disabled'"
                                  @click="submitComment" class="submit btn btn-bakery">Valider<i class="ps-icon-next"></i>
                                </button>

                              </div>

                            </div>

                          </form>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div class="tab-pane" role="tabpanel" id="tab_hours">

              <div id="reviews">

                <div id="review-form-rapper">

                  <div class="bs-bakery-review">

                    <div class="row">

                      <div class="bs-form-bakery-review">

                        <div class="col-xs-12">

                          <ul class="bakeryHour" v-if="bakeryHours.length >= 1">

                            <li v-for="bakeryHour in bakeryHours" v-bind:id="bakeryHour.id">
                              <div>{{ bakeryHour.date }}</div>
                              <div v-if="bakeryHour.active !== 0">{{ bakeryHour.am }}</div>
                              <div v-else>Fermé</div>
                            </li>

                          </ul>

                          <div v-else>Aucun horaire prévu pour cette boulangerie.</div>

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

    </div>

  </div>
</template>

<style lang="css">
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
import GoogleMapLoader from 'components/GoogleMapLoader'
import { useQuasar } from 'quasar'
import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { useStore } from 'vuex'
import moment from 'moment'
import { ref } from 'vue'
import { Cookies } from 'quasar'
import { useRoute } from 'vue-router';
import axios from 'axios'

moment.locale('fr')

import slick_css from "../css/slick.scss";

slick_css

export default defineComponent({
  name: 'BakeryComponent',
  components: {
    GoogleMapLoader,
  },
  setup() {
    const route = useRoute();
    const store = useStore()
    const visible = ref(false)
    const showSimulatedReturnData = ref(true)
    const paginationData = ref(true)
    const $q = useQuasar()

    const bakery = computed(() => {
      return store.state.bakery
    })

    const bakeryComments = computed(() => {
      return store.state.bakeryComments
    })

    const bakeryHours = computed(() => {
      return store.state.bakeryHours
    })

    onMounted(() => {
      store.dispatch('fetchBakery',
        {
          'url': route.params.url
        })
    })

    $q.notify.registerType('success-form', {
      icon: 'fa-solid fa-check',
      progress: false,
      color: 'green-6',
      textColor: 'white',
      classes: 'glossy',
      timeout: 3500
    })

    $q.notify.registerType('error-form', {
      icon: 'fa-solid fa-xmark',
      progress: false,
      color: 'red-6',
      textColor: 'white',
      classes: 'glossy',
      timeout: 3500
    })

    return {
      showTextLoading() {
        visible.value = true
        showSimulatedReturnData.value = true

        setTimeout(() => {
          visible.value = false
          showSimulatedReturnData.value = true
        }, 1500)
      },
      bakery,
      bakeryComments,
      bakeryHours,
      Cookies: Cookies,
      visible,
      paginationData,
      moment: moment,
      showSimulatedReturnData,
      showNotifComment() {
        $q.notify({
          type: 'success-form',
          message: 'Votre avis a bien été ajouté.'
        })
      },
      errorNotifComment(message = null) {
        $q.notify({
          type: 'error-form',
          message: message ? message : 'Une erreur est survenue dans le formulaire.'
        })
      }
    }
  },
  data() {

    $(document).on('change', '#form-comment', function (e) {

      var emailComment = $('#emailComment').val(),
        author = $('#author').val(),
        comment = $('#comment').val()

      if (emailComment.length >= 2 && comment.length >= 2 && author.length >= 2) {
        $('#form-comment button').removeClass('disabled')
      } else {
        $('#form-comment button').addClass('disabled')
      }

    })

    return {
      apiKey: process.env.GOOGLE_API_KEY,
      v$: useValidate(),
      submit: false,
      url: null,
      comment: null,
      author: null,
      emailComment: null
    }
  },
  computed: {
    mapConfig() {
      return {
        center: { lat: parseFloat(localStorage.getItem('lat')), lng: parseFloat(localStorage.getItem('lng')) },
        zoom: 18,
        fullscreenControl: true,
        clickableIcons: true,
        streetViewControl: false,
        marker: [
          { id: 'a', image: localStorage.getItem('image'), caption: localStorage.getItem('title'), content: localStorage.getItem('description'), address: localStorage.getItem('adresse'), position: { lat: parseFloat(localStorage.getItem('lat')), lng: parseFloat(localStorage.getItem('lng')) } },
        ],
      }
    },
  },
  methods: {
    saveBakeryList(id) {

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
    submitComment(e) {
      e.preventDefault();

      this.v$.$validate() // checks all inputs

      let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
      let valid = reg.test(this.emailComment)

      if (valid) {

        $('.' + 'email' + '_error').removeAttr()
        $('.' + 'email' + '_error').text("");

        if (!this.v$.$error && $('#devanture').val().length >= 1 && $('#prix').val().length >= 1 && $('#choix').val().length >= 1 && $('#proprete').val().length >= 1) {

          axios.post(process.env.WEBSITE + '/bakery-comment', {
            'url': $('#url').val(),
            'devanture': $('#devanture').val(),
            'proprete': $('#proprete').val(),
            'prix': $('#prix').val(),
            'choix': $('#choix').val(),
            'email': this.emailComment,
            'author': this.author,
            'comment': this.comment,
          })
            .then((res) => {

              if (res.data.success === true) {

                this.showNotifComment()

                $([document.documentElement, document.body]).animate({
                  scrollTop: $('.commentlist').offset().top
                }, 300)

                setTimeout(() => {
                  $('#tab_reviews .commentlist .bypostauthor').prepend('<div class="comment-container"><div class="bs-review-thumbnail"><img :alt="' + this.author + '" src="users/028cac9c481f4f5c4269f34ace3667a0.png" height="80"width="80" loading="lazy"></div><div class="bs-review-content"><header><p class="meta mb-0">Par <a>' + this.author + '</a> - ' + moment().format('DD MMMM YYYY à H: mm') + '</p></header><div class="description"><p class="mb-0">' + this.comment + '</p></div></div></div>').hide().fadeIn(600)
                }, 600);

                setTimeout(() => {
                  $(document).find('.error-text').text('')
                  $(document).find('.error-text').removeAttr()
                  $('#form-comment').find('input').val('')
                  this.submit = false
                  $('#form-comment button').addClass('disabled')
                  $(document).find('#form-comment a.br-active').removeClass('br-active')
                  this.devanture = null
                  this.proprete = null
                  this.prix = null
                  this.choix = null
                  this.emailComment = null
                  this.author = null
                  this.comment = null

                }, 3500);

              } else {
                this.errorNotifComment(res.data.message)
              }

            })
            .catch((error) => {
              this.errorNotifComment()
            })

        } else {

          this.submit = false

          if (this.emailComment && this.author && this.comment && $('#devanture').val().length >= 1 && $('#prix').val().length >= 1 && $('#choix').val().length >= 1 && $('#proprete').val().length >= 1) {

            this.submit = true

            return true
          }

          if (!this.comment) {
            $('.' + 'comment' + '_error').attr('style', 'display: block')
            $('.' + 'comment' + '_error').text("Le champs commentaire est obligatoire !");
          } else {
            $('.' + 'comment' + '_error').removeAttr()
            $('.' + 'comment' + '_error').text("");
          }

          if (!this.author) {
            $('.' + 'author' + '_error').attr('style', 'display: block')
            $('.' + 'author' + '_error').text("Le champs nom est obligatoire !");
          } else {
            $('.' + 'author' + '_error').removeAttr()
            $('.' + 'author' + '_error').text("");
          }

          if (!this.emailComment) {
            $('.' + 'email' + '_error').attr('style', 'display: block')
            $('.' + 'email' + '_error').text("Le champs adresse email est obligatoire !");
          } else {
            $('.' + 'email' + '_error').removeAttr()
            $('.' + 'email' + '_error').text("");
          }

          if ($('#devanture').val().length <= 0) {
            $('.' + 'devanture' + '_error').attr('style', 'display: block')
            $('.' + 'devanture' + '_error').text("Votre note pour la devanture est obligatoire !");
          } else {
            $('.' + 'devanture' + '_error').removeAttr()
            $('.' + 'devanture' + '_error').text("");
          }

          if ($('#choix').val().length <= 0) {
            $('.' + 'choix' + '_error').attr('style', 'display: block')
            $('.' + 'choix' + '_error').text("Votre note pour le choix des produits est obligatoire !");
          } else {
            $('.' + 'choix' + '_error').removeAttr()
            $('.' + 'choix' + '_error').text("");
          }

          if ($('#proprete').val().length <= 0) {
            $('.' + 'proprete' + '_error').attr('style', 'display: block')
            $('.' + 'proprete' + '_error').text("Votre note pour la propreté du magasin des produits est obligatoire !");
          } else {
            $('.' + 'proprete' + '_error').removeAttr()
            $('.' + 'proprete' + '_error').text("");
          }

          if ($('#prix').val().length <= 0) {
            $('.' + 'prix' + '_error').attr('style', 'display: block')
            $('.' + 'prix' + '_error').text("Votre note pour le prix est obligatoire !");
          } else {
            $('.' + 'prix' + '_error').removeAttr()
            $('.' + 'prix' + '_error').text("");
          }

        }

      } else {

        $('.' + 'email' + '_error').attr('style', 'display: block')
        $('.' + 'email' + '_error').text("Le champs adresse email n'est pas valide !");

      }
    }
  },
  validations() {
    return {
      comment: { required },
      author: { required },
      emailComment: { required }
    }
  },
  mounted() {

    $('#menu-main-menu').removeAttr('style')

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

      // Slick
      $('.slick-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        speed: 300,
        fade: true,
        asNavFor: '.slick-nav'
      });

      $('.slick-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slick-slider',
        centerMode: true,
        focusOnSelect: true
      });

      $('#btn_description').on('click', function (e) {

        e.preventDefault()

        $(this).addClass('active')
        $('#tab_description').addClass('active')

        $('#btn_reviews').removeClass('active')
        $('#tab_reviews').removeClass('active')
        $('#btn_hours').removeClass('active')
        $('#tab_hours').removeClass('active')

      })

      $('#btn_reviews').on('click', function (e) {

        e.preventDefault()

        $(this).addClass('active')
        $('#tab_reviews').addClass('active')

        $('#btn_description').removeClass('active')
        $('#tab_description').removeClass('active')
        $('#btn_hours').removeClass('active')
        $('#tab_hours').removeClass('active')
      })

      $('#btn_hours').on('click', function (e) {

        e.preventDefault()

        $(this).addClass('active')
        $('#tab_hours').addClass('active')

        $('#btn_description').removeClass('active')
        $('#tab_description').removeClass('active')
        $('#btn_description').removeClass('active')
        $('#tab_description').removeClass('active')
        $('#btn_reviews').removeClass('active')
        $('#tab_reviews').removeClass('active')

      })


    }, 100)


    $(document).on('click', '.bs-form-bakery-review .br-widget a', function (e) {

      e.preventDefault()

      var rating = $(this).data('rating-value'),
        name = $(this).data('name')

      $('#' + name).val(rating)
      $('#' + name).removeAttr('class')

      $(this).addClass('br-active')
      $(this).prevAll().addClass('br-active')
      $(this).nextAll().removeClass('br-active')

    })

  }
})
</script>
