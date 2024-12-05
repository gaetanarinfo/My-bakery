<template name="ProductsComponent">

  <div class="background fadeIn2 bb background6">

    <div class="content">

      <h1>Notre boutique</h1>

      <div class="b-breadcrumb">

        <div class="b-breadcrumb">

          <ol class="breadcrumb">

            <li><a href="/">Accueil</a></li>

            <li class="active">Boutique</li>

          </ol>

        </div>

      </div>

    </div>

  </div>

  <div id="products" class="section fadeIn3">

    <div class="container">

      <div class="row gutters-sm u-column1 mb-3" v-show="showSimulatedReturnData">

        <div class="snip1265">

          <div :id="'product_' + product.id" v-for="product in products" v-bind:key="product.id"
            :class="(product.ahead === 1) ? 'plan featured' : 'plan'">

            <header>

              <i :class="product.image"></i>

              <h4 class="plan-title">
                {{ product.title }}
              </h4>

              <div class="plan-cost"><span class="plan-price">{{ product.price, '.', ',' }} HT € <span
                    class="perMonth">/
                    mois</span></span></div>

            </header>

            <ul class="plan-features" v-html="product.content"></ul>

            <div class="plan-select"><a @click="addCart(product.id)">Ajouter au panier</a></div>

          </div>

        </div>

        <div class="snip1265 showCart" v-show="showCart">

          <div class="plan">

            <div class="plan-select">

              <a v-if="shoppingCart <= 3" @click="this.$router.push('/cart')"><i
                  class="fa-solid fa-cart-shopping me-2"></i>Voir le
                panier</a>

              <a v-else @click="nextProduct()">Suivant<i class="fa-solid fa-arrow-right ms-2"></i></a>

            </div>

          </div>

        </div>

        <div class="mt-4">
          <p class="text-warning mb-0" style="font-size: 12px; font-weight: 600">* 1 semaine compris dans le pack si
            plus
            0.25 / centimes par jour supplémentaire !</p>
          <p class="text-warning" style="font-size: 12px; font-weight: 600">** illimité pendant le mois du pack</p>
        </div>

      </div>

      <div v-show="product2" class="row gutters-sm u-column2 head-banniere mb-3">

        <div class="card-banniere">

          <div class="headerBanner">
            <h3>Configuration de votre bannière</h3>
            <img src="annonce.png" alt="My Bakery">
          </div>

          <div>

            <div class="subFlex">
              <p class="subtitle">Reliez votre boulangerie : </p>
              <p><a @click="showSearch()"><i class="fa-solid fa-magnifying-glass"></i></a></p>
            </div>

            <div v-show="searchBoxShow" class="searchBox">
              <input v-model="searchBox" @keyup="search(this.searchBox)" placeholder="Ex : Boulangerie paris..."
                type="text" name="searchBox" id="searchBox">
              <div class="clear"><img src="xmark-solid.svg"></div>
            </div>

            <div class="box searchbox-result-list">

              <ul class="ul-list" id="ul-list">

                <li v-for="bakery in bakerysList" :data-id="bakery.id" class="li-list">

                  <div>
                    <img src="logo-list.png" />
                    <p>
                      {{ bakery.title }}
                    </p>
                  </div>

                  <p class="add-list">
                    <a>
                      <i class="fa-solid fa-check text-success"></i>
                    </a>
                  </p>

                </li>

              </ul>

            </div>

          </div>

          <hr />

          <div>
            <p class="subtitle">Sélectionner votre créneau : </p>

            <VueDatePicker v-model="date" :disabled-dates="disabledDates" :loading="loading"
              :month-change-on-scroll="false" no-today :min-date="new Date()" :markers="markers"
              :enable-time-picker="false" locale="fr" dark inline auto-apply :range="{ minRange: 6 }"
              @update:model-value="handleDate" />

            <div class="affichage-price">
              <p class="subtitle2">Affichage pendant {{ moment(dateE).add(1, 'days').diff(moment(dateS), "days") }}
                jour(s)
              </p>
              <p class="subtitle2 text-right">{{ (Number(moment(dateE).add(1, 'days').diff(moment(dateS), "days")) > 6)
                ?
                'Jours supplémentaire ' + (Number(moment(dateE).add(1, 'days').diff(moment(dateS), "days")) - 7) *
                parseFloat(0.25).toFixed(2) + ' €' : 'Jours supplémentaire 0 €'
                }}</p>
            </div>

          </div>

          <hr />

          <h3>Télécharger votre bannière (Large)</h3>

          <div>

            <div class="dropzone" @dragover.prevent @dragenter.prevent @dragstart.prevent
              @drop.prevent="handleFileChange($event.dataTransfer)">
              <input id="file-input" type="file" accept="image/*" @change="handleFileChange($event.target)" required />
              <h2 class="file-input" for="file-input">Cliquez ou faites glisser l'image</h2>
              <img class="preview" v-bind:src="preview" />
            </div>

            <div class="removeImage text-center mt-4"><a @click="removeImage" class="btn btn-danger">Supprimer
                l'image</a></div>

            <div class="error-text image-error"></div>

          </div>

          <hr />

          <h3>Télécharger votre bannière (Carré)</h3>

          <div>

            <div class="dropzone2" @dragover.prevent @dragenter.prevent @dragstart.prevent
              @drop.prevent="handleFileChange2($event.dataTransfer)">
              <input id="file-input2" type="file" accept="image/*" @change="handleFileChange2($event.target)"
                required />
              <h2 class="file-input2" for="file-input2">Cliquez ou faites glisser l'image</h2>
              <img class="preview2" v-bind:src="preview2" />
            </div>

            <div class="removeImage2 text-center mt-4"><a @click="removeImage2" class="btn btn-danger">Supprimer
                l'image</a></div>

            <div class="error-text image2-error"></div>

          </div>

          <hr />

          <h3>Information complémetaire</h3>

          <div>

            <textarea v-model="additional_information" name="additional_information"
              id="additional_information"></textarea>

          </div>

          <hr />

          <div class="plan-select">

            <a @click="prevProduct()"><i class="fa-solid fa-arrow-left me-2"></i>Précédent</a>

            <a @click="addCartProductBanner()"><i class="fa-solid fa-cart-shopping me-2"></i>Ajouter au panier</a>

          </div>

        </div>

      </div>

      <BannerComponent v-show="showSimulatedReturnData2" :margin="false" :top="true" />

      <div class="productsLoad loadingDiv" v-show="visible">
        <q-spinner-grid size="70px" color="info" />
      </div>

    </div>

  </div>

</template>

<script>

import { LocalStorage } from 'quasar';
import { defineComponent, onMounted, computed, ref } from 'vue'
import { useStore } from 'vuex'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import addDays from 'date-fns/addDays';
import moment from 'moment'
import axios from 'axios'
import { useQuasar } from 'quasar'
import BannerComponent from 'components/Banner.vue'

moment.locale('fr')

const showCart = ref(false),
  shoppingCart = ref(0),
  date = ref(''),
  dateS = ref(0),
  dateE = ref(0),
  markers = ref([]),
  loading = ref(true),
  disabledDates = ref([]),
  additional_information = ref('')

const arrayListBakery = ref(0),
  searchBox = ref(''),
  searchBoxShow = ref(false),
  loaderSearch = ref(false)

export default defineComponent({
  name: 'CartComponent',
  components: {
    VueDatePicker,
    BannerComponent,
  },
  setup () {
    const $q = useQuasar()
    const store = useStore()
    const visible = ref(false)
    const showSimulatedReturnData = ref(true),
      showSimulatedReturnData2 = ref(true),
      product2 = ref(false)

    const products = computed(() => {
      return store.state.products
    })

    const bakerysList = computed(() => {
      return store.state.bakerysList
    })

    const handleDate = (modelData) => {
      dateS.value = moment(modelData[0]).format("YYYY-MM-DD")
      dateE.value = moment(modelData[1]).format("YYYY-MM-DD")
    }

    onMounted(() => {
      store.dispatch('fetchBakeryList')
      store.dispatch('fetchProducts')
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
      handleDate,
      loaderSearch,
      showSearch () {
        if (searchBoxShow.value === false) searchBoxShow.value = true
        else searchBoxShow.value = false
      },
      searchBoxShow,
      searchBox,
      bakerysList,
      errorNotif (message = null) {
        $q.notify({
          type: 'error-form',
          message: message ? message : 'Une erreur est survenue dans le formulaire.'
        })
      },
      showNotifUpload (percentage) {

        const notif = $q.notify({
          group: false, // required to be updatable
          timeout: 0, // we want to be in control when it gets dismissed
          spinner: true,
          message: 'Téléchargement des fichiers...',
          caption: '0%',
          classes: 'loaderUpload'
        })

        // we simulate some progress here...
        const interval = setInterval(() => {
          percentage = Math.min(100, percentage + Math.floor(Math.random() * 22))

          // we update the dialog
          notif({
            caption: `${percentage} %`
          })

          // if we are done...
          if (percentage === 100) {
            notif({
              icon: 'done', // we add an icon
              spinner: false, // we reset the spinner setting so the icon can be displayed
              message: 'Téléchargement terminé !',
              timeout: 2500, // we will timeout it in 2.5s
              classes: 'loaderUpload'
            })
            clearInterval(interval)
            this.$router.push('/cart')
          }

        }, 500)
      },
      image: null,
      image2: null,
      additional_information,
      disabledDates,
      loading,
      dateS,
      dateE,
      markers,
      moment,
      date,
      nextProduct () {

        $([document.documentElement, document.body]).animate({
          scrollTop: $('#products').offset().top
        }, '200')

        this.showTextLoading(true);

        axios.get(process.env.WEBSITE + '/bakery-banner-events')
          .then((res) => {

            if (res.data.succes === true) {

              if (res.data.events.length >= 1) {

                res.data.events.forEach(element => {

                  var counter = moment(element.end).diff(moment(element.start).format('YYYY-MM-DD'), 'days')

                  for (let i = 0; i <= counter; i++) {

                    const date = moment(element.start);

                    markers.value.push({
                      date: date.add(i, "days").format("YYYY-MM-DD"),
                      type: 'dot',
                      color: '#' + element.color,
                      tooltip: [
                        { text: 'Déjà réservé', color: 'red' },
                      ],
                    })

                  }

                  for (let i = 0; i <= counter; i++) {
                    const dates = moment(element.start);
                    disabledDates.value.push(dates.add(i, "days").format("YYYY-MM-DD"))
                  }

                });

                setTimeout(() => {
                  loading.value = false
                }, 2500);

              } else {

                setTimeout(() => {
                  loading.value = false
                }, 2500);

              }

            }

          })

      },
      prevProduct () {

        $([document.documentElement, document.body]).animate({
          scrollTop: $('#products').offset().top
        }, '200')

        this.showTextLoading(false);
      },
      shoppingCart,
      showTextLoading (express) {
        visible.value = true
        $('.u-column1').fadeOut(300)
        showSimulatedReturnData.value = false
        showSimulatedReturnData2.value = false
        product2.value = false

        if (express === true) {
          setTimeout(() => {
            visible.value = false
            showSimulatedReturnData.value = false
            showSimulatedReturnData2.value = true
            product2.value = true
          }, 1500)
        }

        if (express === false) {
          setTimeout(() => {
            visible.value = false
            showSimulatedReturnData.value = true
            showSimulatedReturnData2.value = true
            product2.value = false
          }, 1500)
        }

        if (express === 'loading') {
          setTimeout(() => {
            visible.value = true
            showSimulatedReturnData.value = false
            showSimulatedReturnData2.value = false
            product2.value = false
          }, 1500)
        }
      },
      visible,
      showSimulatedReturnData,
      showSimulatedReturnData2,
      product2,
      products,
      showCart,
      addCart (id) {

        $([document.documentElement, document.body]).animate({
          scrollTop: $('#products').offset().top
        }, '200')

        var counter = this.products.length

        for (let i = 1; i < counter + 1; i++) {
          if (id !== i) {
            $('#product_' + i).removeClass('active');
            LocalStorage.setItem('shopping_cart', id)
            shoppingCart.value = id
          }
        }

        $('#product_' + id).addClass('active');

        LocalStorage.setItem('shopping_cart', id)
        LocalStorage.setItem('shopping_cart_qte', 1)
        shoppingCart.value = id

        LocalStorage.removeItem('additional_information')
        LocalStorage.removeItem('banner_date_start')
        LocalStorage.removeItem('banner_date_end')
        LocalStorage.removeItem('banner_name')
        LocalStorage.removeItem('banner_square_name')
        LocalStorage.removeItem('bakery_id_event')

        showCart.value = true

      },
      addCartProductBanner () {

        $([document.documentElement, document.body]).animate({
          scrollTop: $('#products').offset().top
        }, '200')

        if (date.value.length >= 1 && additional_information.value.length >= 1 && this.image !== 0 && this.image2 !== 0 && LocalStorage.hasItem('bakery_id_event')) {

          $(document).find('.error-form-banner').removeClass('error-form-banner')

          visible.value = true
          $('.u-column1').fadeOut(300)
          showSimulatedReturnData.value = false
          showSimulatedReturnData2.value = false
          product2.value = false

          const form_data = new FormData();

          form_data.append('file', this.image);
          form_data.append('file', this.image2);

          this.startLoading();

          axios({
            method: "POST",
            url: process.env.WEBSITE + '/add-banner',
            data: form_data,
            headers: {
              "Content-Type": "multipart/form-data"
            },
            onUploadProgress: (progressEvent) => {

              const totalLength = progressEvent.lengthComputable ? progressEvent.total : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');

              if (totalLength !== null) {
                this.progressData = Math.round((progressEvent.loaded * 100) / totalLength);

              }

            },
          })
            .then((res) => {

              if (res.data.succes === true) {

                LocalStorage.setItem('additional_information', additional_information.value)
                LocalStorage.setItem('banner_date_start', dateS.value)
                LocalStorage.setItem('banner_date_end', dateE.value)
                LocalStorage.setItem('banner_name', res.data.banner)
                LocalStorage.setItem('banner_square_name', res.data.banner_square)

              } else {
                this.errorNotif()
              }

            })
            .catch((error) => {
              this.errorNotif()
            })


        }

        if (date.value.length === 0) {
          $('.dp__main').addClass('error-form-banner')
        }

        if (additional_information.value.length === 0) {
          $('#additional_information').addClass('error-form-banner')
        }

        if (this.image !== 0) {
          $('.dropzone').addClass('error-form-banner')
        }

        if (this.image2 !== 0) {
          $('.dropzone2').addClass('error-form-banner')
        }

        if (!LocalStorage.hasItem('bakery_id_event')) {
          $('.li-list').addClass('error-form-banner')
        }

      }
    }
  },
  data () {

    return {
      loadingData: this.loading,
      progressData: this.progress,
      preview: null,
      preview2: null,
      formData: null,
      success: "",
    }
  },
  methods: {
    startLoading () {
      this.loadingData = true;
      this.progressData = 0;
      const incrementOrFinishLoading = () => {
        if (this.progressData < 100) {
          this.incProgress(10);
        } else {
          clearInterval(fauxProgress);
          this.finishLoading();
        }
      }
      this.showNotifUpload(this.progressData)
      const fauxProgress = setInterval(incrementOrFinishLoading, 100);

    },
    incProgress (step) {
      this.progressData += step;
    },
    finishLoading () {
      this.progressData = 100;
      setTimeout(() => {
        this.loadingData = false;
      }, this.finishedDelay);
    },
    search (search = null) {

      $(document).find('.clear').addClass('activate');

      if (this.searchBox.length >= 3) {
        loaderSearch.value = true
      }
      if (this.searchBox.length >= 3) {

        axios.get(process.env.WEBSITE + '/list-search-bakery/' + search.trim())
          .then((res) => {

            $('.searchbox-result-list ul').html('')

            if (res.data.searchAll.length != 0) {

              $.each(res.data.searchAll, function (index, bakery) {
                $('.searchbox-result-list ul').append('<li data-id="' + bakery.id + '" class="li-list list-bakerys"><div><img src="logo-list.png" /><p>' + bakery.title + '</p></div><p class="add-list"><a><i class="fa-solid fa-check text-success"></i></a></p></li>')
              })

            } else {

              $('.searchbox-result-list ul').html('<div class="error-search"><i class="fa fa-warning me-2 text-warning"></i>Aucune boulangerie n\'a été trouvé.</div>')

            }

          })
          .catch((error) => {
            console.log(error);
          })

      }

    },
    removeImage () {
      $('.removeImage').hide()
      $('.file-input').show()
      $('.preview').hide()
      this.image = 0
      $('.image-error').hide()
      $('.image-error').html('')
    },
    removeImage2 () {
      $('.removeImage2').hide()
      $('.file-input2').show()
      $('.preview2').hide()
      this.image2 = null
      $('.image2-error').hide()
      $('.image2-error').html('')
    },
    handleFileChange: function (event) {

      const file = event.files[0],
        ext = file.name.split('.').pop(),
        extValid = ['png', 'jpeg', 'jpg']

      if (event.files[0].size <= 1684688109387) {

        let reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = evt => {

          let img = new Image();

          img.onload = () => {

            if (extValid.indexOf(ext) !== -1) {

              // dimension de l'image
              if (img.width === 970 && img.height === 250) {

                this.image = file

                $('.removeImage').show()
                $('.file-input').hide()
                $('.preview').show()
                this.preview = URL.createObjectURL(file);

              } else {

                this.image = 0
                $('.image-error').show()
                $('.image-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher doit être au format 970 pixels par 260 pixels.')

              }

            } else {

              this.image = 0
              $('.image-error').show()
              $('.image-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher doit être de type image.')

            }

          }

          img.src = evt.target.result;

          $('.image-error').hide()
          $('.image-error').html('')

        }

        reader.onerror = evt => {
          console.error(evt);
        }

      } else {
        $('.removeImage').hide()
        this.image = 0
        $('.image-error').show()
        $('.image-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher est trop lourd ! Il ne doit pas dépasser 8 mo.')
      }

    },
    handleFileChange2: function (event) {

      const file = event.files[0],
        ext = file.name.split('.').pop(),
        extValid = ['png', 'jpeg', 'jpg']

      if (event.files[0].size <= 1684688109387) {

        let reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = evt => {

          let img = new Image();

          img.onload = () => {

            if (extValid.indexOf(ext) !== -1) {

              // dimension de l'image
              if (img.width === 300 && img.height === 250) {

                this.image2 = file

                $('.removeImage2').show()
                $('.file-input2').hide()
                $('.preview2').show()
                this.preview2 = URL.createObjectURL(file);

              } else {

                this.image2 = 0
                $('.image2-error').show()
                $('.image2-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher doit être au format 300 pixels par 250 pixels.')

              }

            } else {

              this.image2 = 0
              $('.image2-error').show()
              $('.image2-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher doit être de type image.')

            }

          }

          img.src = evt.target.result;

          $('.image2-error').hide()
          $('.image2-error').html('')

        }

        reader.onerror = evt => {
          console.error(evt);
        }

      } else {
        $('.removeImage2').hide()
        this.image2 = 0
        $('.image2-error').show()
        $('.image2-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher est trop lourd ! Il ne doit pas dépasser 8 mo.')
      }

    }
  },
  mounted () {

    const store = useStore()

    this.showTextLoading(false);

    $(document).on('click', '.li-list', function () {

      var id = $(this).data('id')

      LocalStorage.setItem('bakery_id_event', id)

      $('.li-list').removeClass('error-form-banner')
      $(".li-list").removeClass("active").removeClass('mark');
      $(".li-list").find('.add-list a i').addClass('fa-check').removeClass('fa-xmark').removeClass('text-danger')
      $(this).addClass("active").addClass('mark');
      $(this).find('.add-list a i').removeClass('fa-check').addClass('fa-xmark').addClass('text-danger');

    });

    $(document).on('click', '.clear', function (e) {

      searchBox.value = ''
      $(document).find('.clear').removeClass('activate')

      axios.get(process.env.WEBSITE + '/list-search-bakery-clear')
        .then((res) => {

          $('.searchbox-result-list ul').html('')

          $.each(res.data.searchAll, function (index, bakery) {
            $('.searchbox-result-list ul').append('<li data-id="' + bakery.id + '" class="li-list list-bakerys"><div><img src="logo-list.png" /><p>' + bakery.title + '</p></div><p class="add-list"><a><i class="fa-solid fa-check text-success"></i></a></p></li>')
          })

        })
        .catch((error) => {
          console.log(error);
        })

    })

    LocalStorage.removeItem('additional_information')
    LocalStorage.removeItem('banner_date_start')
    LocalStorage.removeItem('banner_date_end')
    LocalStorage.removeItem('banner_name')
    LocalStorage.removeItem('banner_square_name')
    LocalStorage.removeItem('bakery_id_event')

    date.value = ''
    additional_information.value = ''

    setTimeout(() => {

      if (LocalStorage.getItem('shopping_cart') >= 1) {
        showCart.value = true
        $('#product_' + LocalStorage.getItem('shopping_cart')).addClass('active');
        shoppingCart.value = LocalStorage.getItem('shopping_cart')
      } else {
        showCart.value = false
      }

    }, 500);

  },
})

</script>
