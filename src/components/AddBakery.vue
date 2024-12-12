<template name="AddBakeryComponent">
  <div class="background fadeIn2 bb background1">

    <div class="content">

      <h1>Ajouter une boulangerie</h1>

      <div class="b-breadcrumb">

        <div class="b-breadcrumb">

          <ol class="breadcrumb">

            <li><a @click="this.$router.push('/')">Accueil</a></li>

            <li class="before"><a role="button" @click="this.$router.push('/bakerys')">Boulangeries</a></li>

            <li class="active">Ajouter une boulangerie</li>

          </ol>

        </div>

      </div>

    </div>

  </div>

  <div class="page-add-bakery bakery-single bakery-add section fadeIn3">

    <div class="container clear">

      <div class="bakery-detail" v-show="showSimulatedReturnData">

        <div class="bakery">

          <div class="row">

            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">

              <div class="thumbnail">

                <div class="slick-slider">

                  <label for="image">
                    <img id="showImg" :src="imageSrc">
                    <input type="file" accept="image/*" name="image" id="image" @change="setImage">
                  </label>

                </div>

                <div class="removeImage text-center mt-4"><a @click="removeImage" class="btn btn-danger">Supprimer
                    l'image</a></div>

                <div class="error-text image-error"></div>

              </div>

            </div>

            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">

              <div class="info">
                <div>
                  <p>
                    <input v-model="addName" type="text" class="form-control" id="addName" name="addName"
                      placeholder="Nom de la boulangerie*">
                  </p>
                  <p class="error-text addName_error"></p>
                </div>

                <div>
                  <p>
                    <input v-model="addWebsite" type="text" class="form-control" id="addWebsite" name="addWebsite"
                      placeholder="Site internet de la boulangerie">
                  </p>
                  <p class="error-text addWebsite_error"></p>
                </div>

                <div class="position-relative">

                  <p>
                    <input v-model="addAdresse" @keyup="getAdresseApi(addAdresse)" type="text" class="form-control"
                      id="addAdresse" name="addAdresse" placeholder="Adresse de la boulangerie*">
                  </p>

                  <div class="search-place">
                    <ul></ul>
                  </div>

                  <p class="error-text addAdresse_error"></p>

                </div>

                <div>
                  <p>
                    <input v-model="addPhone" pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" type="text"
                      class="form-control" id="addPhone" name="addPhone" placeholder="Téléphone de la boulangerie*">
                  </p>
                  <p class="error-text addPhone_error"></p>
                </div>

                <div>
                  <p class="d-flex special-select">
                    <label for="">Accès handicapé* :</label>
                    <select v-model="addHandicap" class="form-select mt-2 select-bakery" name="addHandicap"
                      id="addHandicap">
                      <option value="" selected disabled></option>
                      <option value="1">Oui</option>
                      <option value="0">Non</option>
                    </select>
                  </p>
                  <p class="error-text addHandicap_error"></p>
                </div>

                <div>
                  <p class="d-flex special-select">
                    <label for="">Livraison* :</label>
                    <select v-model="addLivraison" class="form-select mt-2 select-bakery" name="addLivraison"
                      id="addLivraison">
                      <option value="" selected disabled></option>
                      <option value="1">Oui</option>
                      <option value="0">Non</option>
                    </select>
                  </p>
                  <p class="error-text addLivraison_error"></p>
                </div>

                <div>
                  <p class="d-flex special-select">
                    <label for="">Restauration sur place* :</label>
                    <select v-model="addRestauration" class="form-select mt-2 select-bakery" name="addRestauration"
                      id="addRestauration">
                      <option value="" selected disabled></option>
                      <option value="1">Oui</option>
                      <option value="0">Non</option>
                    </select>
                  </p>
                  <p class="error-text addRestauration_error"></p>
                </div>

                <div>
                  <p>
                    <input v-model="addNote" pattern="[0-5]{1} [0-9]{1}" type="text" class="form-control" id="addNote"
                      name="addNote" placeholder="Note google de la boulangerie* Ex: 3.5">
                  </p>
                  <p class="error-text addNote_error"></p>
                </div>

                <div>
                  <p>
                    <input v-model="addTotalNote" type="number" class="form-control" id="addTotalNote"
                      name="addTotalNote" placeholder="Total des personnes qui ont noté la boulangerie">
                  </p>
                  <p class="error-text addTotalNote_error"></p>
                </div>

                <div class="short-desc">

                  <textarea v-model="addSmallContent" class="form-control" maxlength="200" rows="6" id="addSmallContent"
                    name="addSmallContent" placeholder="Petite description*" @keyup="verifLengthArea"></textarea>
                  <p class="error-text addSmallContent_error"></p>
                  <p class="limite-text text-end mt-1"><b><span>0</span> / 200</b></p>

                </div>

              </div>

            </div>

          </div>

          <div class="bakery-content">

            <ul class="tab-list" role="tablist">

              <li class="active" id="btn_description">
                <a aria-controls="tab_description" role="tab" data-toggle="tab" aria-expanded="true">Description</a>
              </li>

              <li class="" id="btn_hours">
                <a aria-controls="tab_hours" role="tab" data-toggle="tab" aria-expanded="false">Horaire d'ouverture</a>
              </li>

              <li class="" id="btn_others">
                <a aria-controls="tab_others" role="tab" data-toggle="tab" aria-expanded="false">Ajouter plus de
                  photo</a>
              </li>

            </ul>

          </div>

          <div class="tab-content">

            <div class="tab-pane active" role="tabpanel" id="tab_description">

              <textarea v-model="addDesc" class="form-control" rows="20" id="addDesc" name="addDesc"
                placeholder="Description de la boulangerie*"></textarea>
              <p class="error-text addDesc_error"></p>

            </div>

            <div class="tab-pane" role="tabpanel" id="tab_hours">

              <div id="reviews">

                <div id="review-form-rapper">

                  <div class="bs-bakery-review">

                    <div class="row">

                      <div class="bs-form-bakery-review">

                        <p class="text-center text-danger"><i class="fa-solid fa-exclamation me-2"></i><b>Si la
                            boulangerie est fermé écrire Fermé*</b></p>

                        <div class="col-xs-12">

                          <ul class="bakeryHour bakeryHourS">

                            <li>
                              <label for="">Lundi</label>
                              <input v-model="addHours1" class="form-control border-hours" type="text" id="addHours1"
                                name="addHours1" placeholder="09:30 à 12:30 et de 14:00 à 20:30">
                            </li>

                            <li>
                              <label for="">Mardi</label>
                              <input v-model="addHours2" class="form-control border-hours" type="text" id="addHours2"
                                name="addHours2" placeholder="09:30 à 12:30 et de 14:00 à 20:30">
                            </li>

                            <li>
                              <label for="">Mercredi</label>
                              <input v-model="addHours3" class="form-control border-hours" type="text" id="addHours3"
                                name="addHours3" placeholder="09:30 à 12:30 et de 14:00 à 20:30">
                            </li>

                            <li>
                              <label for="">Jeudi</label>
                              <input v-model="addHours4" class="form-control border-hours" type="text" id="addHours4"
                                name="addHours4" placeholder="09:30 à 12:30 et de 14:00 à 20:30">
                            </li>

                            <li>
                              <label for="">Vendredi</label>
                              <input v-model="addHours5" class="form-control border-hours" type="text" id="addHours5"
                                name="addHours5" placeholder="09:30 à 12:30 et de 14:00 à 20:30">
                            </li>

                            <li>
                              <label for="">Samedi</label>
                              <input v-model="addHours6" class="form-control border-hours" type="text" id="addHours6"
                                name="addHours6" placeholder="09:30 à 12:30 et de 14:00 à 20:30">
                            </li>

                            <li>
                              <label for="">Dimanche</label>
                              <input v-model="addHours7" class="form-control border-hours" type="text" id="addHours7"
                                name="addHours7" placeholder="09:30 à 12:30 et de 14:00 à 20:30">
                            </li>

                          </ul>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div class="tab-pane" role="tabpanel" id="tab_others_image">

              <div class="grid-images-others">

                <div class="thumbnail">

                  <div class="slick-slider">
                    <label for="image2">
                      <img id="showImg2" :src="imageSrc2"><input @change="setImage2" type="file" accept="image/*"
                        name="image2" id="image2"></label>
                  </div>

                  <div class="removeImage2 text-center mt-4" @click="removeImage2"><a class="btn btn-danger">Supprimer
                      l'image</a></div>
                  <div class="error-text image2-error"></div>

                </div>

                <div class="thumbnail">

                  <div class="slick-slider">
                    <label for="image3">
                      <img id="showImg3" :src="imageSrc3"><input @change="setImage3" type="file" accept="image/*"
                        name="image3" id="image3"></label>
                  </div>

                  <div class="removeImage3 text-center mt-4" @click="removeImage3"><a class="btn btn-danger">Supprimer
                      l'image</a></div>
                  <div class="error-text image3-error"></div>

                </div>

                <div class="thumbnail">

                  <div class="slick-slider">
                    <label for="image4">
                      <img id="showImg4" :src="imageSrc4"><input @change="setImage4" type="file" accept="image/*"
                        name="image4" id="image4"></label>
                  </div>

                  <div class="removeImage4 text-center mt-4" @click="removeImage4"><a class="btn btn-danger">Supprimer
                      l'image</a></div>
                  <div class="error-text image4-error"></div>

                </div>

              </div>

            </div>

          </div>

          <div class="mt-5 text-center">
            <button type="submit" id="submit_bakery" v-bind:class="submit !== false ? '' : 'disabled'"
              @click="submitBakery" class="btn btn-bakery">Ajouter la boulangerie</button>
          </div>

        </div>

      </div>

      <div class="loadingDiv" v-show="visible">
        <q-spinner-grid size="70px" color="info" />
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

.page-add-bakery.section,
.page-add-bakery .section {
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
</style>

<script>
import { defineComponent, onMounted, computed, ref } from 'vue'
import { useQuasar, SessionStorage, Cookies } from 'quasar'
import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import moment from 'moment'
import axios from 'axios'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router';

moment.locale('fr')

export default defineComponent({
  name: 'AddBakeryComponent',
  components: {
  },
  setup () {

    const visible = ref(true)
    const showSimulatedReturnData = ref(false)
    const $q = useQuasar()
    const FormData = require('form-data');
    const store = useStore()
    const router = useRouter()

    const searchPlace = computed(() => {
      return store.state.searchPlace
    })

    if (SessionStorage.getItem('token') !== null) {

      axios.get(process.env.WEBSITE + '/user-profil/' + SessionStorage.getItem('email'))
        .then((res) => {

          if (res.status === 200) {

            // Static values
            if (res.data.subscription === false) {
              router.push('/')
            }

            setTimeout(() => {
              visible.value = false
              showSimulatedReturnData.value = true
            }, 1500)

          }

        })

    } else {
      router.push('/')
    }

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
      searchPlace,
      Cookies: Cookies,
      visible,
      FormData: FormData,
      moment: moment,
      showSimulatedReturnData,
      getAdresseApi (value) {

        if (value.length >= 2) {

          $('.search-place').fadeIn(200)

          $('.search-place ul').html('<div style="position: relative;display: flex;width: 100%;align-items: center;justify-content: center;"><svg class="q-spinner text-warning" width="20px" height="20px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-20,-20)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="90 50 50" to="0 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g><g transform="translate(20,20) rotate(15 50 50)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="90 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g></svg></div>')

          setTimeout(() => {

            $('.search-place ul').html('')

            store.dispatch('fetchSearchPlace', {
              search: value.trim()
            })

            if (this.searchPlace.length >= 1) {
              this.searchPlace.forEach(element => {
                $('.search-place ul').append('<li class="place-clic" data-adresse="' + element.formatted + '" data-pays="' + element.country + '" data-pays_code="' + element.country_code + '" data-departement="' + element.county + '" data-ville="' + element.city + '" data-postcode="' + element.postcode + '" data-department_code="' + element.department_COG + '"><i class="fa-solid fa-location-dot me-2"></i>' + element.formatted + '</li>')
              });
            } else {
              $('.search-place ul').html('<li>Il n\'y a aucun résultat correspondant à votre recherche !</li>')
              this.searchPlace = []
            }

          }, 2000);

        } else {
          $('.search-place').fadeOut(200)
          this.searchPlace = []
        }

      },
      showNotif () {
        $q.notify({
          type: 'success-form',
          message: 'La boulangerie que vous avez ajouté est en cours de vérification. Elle apparaîtra quand notre équipe la vérifiera.'
        })
      },
      errorNotif (message = null) {
        $q.notify({
          type: 'error-form',
          message: message ? message : 'Une erreur est survenue dans le formulaire.'
        })
      }
    }
  },
  data () {

    $(document).on('change', '#image', function (e) {

      if ($('#addAdresse').val().length >= 2
        && $('#addName').val().length >= 2
        && $('#image').val().length >= 2
        && $('#addPhone').val().length >= 2
        && $('#addSmallContent').val().length >= 2
        && $('#addDesc').val().length >= 2
        && $('#addHours1').val().length >= 2
        && $('#addHours2').val().length >= 2
        && $('#addHours3').val().length >= 2
        && $('#addHours4').val().length >= 2
        && $('#addHours5').val().length >= 2
        && $('#addHours6').val().length >= 2
        && $('#addHours7').val().length >= 2) {
        $('#submit_bakery').removeClass('disabled')
      } else {
        $('#submit_bakery').addClass('disabled')
      }

    })

    $(document).on('keyup', '.bakery-single', function (e) {

      if ($('#addAdresse').val().length >= 2
        && $('#addName').val().length >= 2
        && $('#image').val().length >= 2
        && $('#addPhone').val().length >= 2
        && $('#addNote').val().length >= 2
        && $('#addTotalNote').val().length >= 2
        && $('#addSmallContent').val().length >= 2
        && $('#addDesc').val().length >= 2
        && $('#addHours1').val().length >= 2
        && $('#addHours2').val().length >= 2
        && $('#addHours3').val().length >= 2
        && $('#addHours4').val().length >= 2
        && $('#addHours5').val().length >= 2
        && $('#addHours6').val().length >= 2
        && $('#addHours7').val().length >= 2) {
        $('#submit_bakery').removeClass('disabled')
      } else {
        $('#submit_bakery').addClass('disabled')
      }

    })

    return {
      v$: useValidate(),
      submit: false,
      image: null,
      image2: null,
      image3: null,
      image4: null,
      addName: null,
      addWebsite: null,
      addAdresse: null,
      addPhone: null,
      addHandicap: null,
      addLivraison: null,
      addRestauration: null,
      addNote: null,
      addTotalNote: null,
      addSmallContent: null,
      addDesc: null,
      addHours1: null,
      addHours2: null,
      addHours3: null,
      addHours4: null,
      addHours5: null,
      addHours6: null,
      addHours7: null,
      imageSrc: 'bakerys/add-bakery.jpg',
      imageSrc2: 'bakerys/add-bakery.jpg',
      imageSrc3: 'bakerys/add-bakery.jpg',
      imageSrc4: 'bakerys/add-bakery.jpg',
      pays: null,
      pays_code: null,
      departement: null,
      ville: null,
      postcode: null,
      department_code: null,
    }
  },
  methods: {
    verifLengthArea (e) {
      if (this.addSmallContent.length <= 200) $('.limite-text span').html(this.addSmallContent.length)
    },
    removeImage () {
      $('.removeImage').hide()
      this.imageSrc = 'bakerys/add-bakery.jpg'
      this.image = null
      $('.image-error').hide()
      $('.image-error').html('')
    },
    removeImage2 () {
      $('.removeImage2').hide()
      this.imageSrc2 = 'bakerys/add-bakery.jpg'
      this.image2 = null
      $('.image-error2').hide()
      $('.image-error2').html('')
    },
    removeImage3 () {
      $('.removeImage3').hide()
      this.imageSrc3 = 'bakerys/add-bakery.jpg'
      this.image3 = null
      $('.image-error3').hide()
      $('.image-error3').html('')
    },
    removeImage4 () {
      $('.removeImage4').hide()
      this.imageSrc4 = 'bakerys/add-bakery.jpg'
      this.image4 = null
      $('.image-error4').hide()
      $('.image-error4').html('')
    },
    setImage (e) {
      const file = e.target.files[0],
        ext = file.name.split('.').pop(),
        extValid = ['png', 'jpeg', 'jpg']

      if (e.target.files[0].size <= 1684688109387) {

        let reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = evt => {

          let img = new Image();

          img.onload = () => {

            if (extValid.indexOf(ext) !== -1) {

              // dimension de l'image
              if (img.width <= 1920 && img.height <= 1080) {

                this.image = file
                this.imageSrc = URL.createObjectURL(file);
                $('.removeImage').show()

              } else {

                $('.removeImage').hide()
                this.imageSrc = 'bakerys/add-bakery.jpg'
                this.image = null
                $('.image-error').show()
                $('.image-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher ne doit pas dépasser 1920 pixels par 1080 pixels.')

              }

            } else {

              $('.removeImage').hide()
              this.imageSrc = 'bakerys/add-bakery.jpg'
              this.image = null
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
        this.image = null
        $('.image-error').show()
        $('.image-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher est trop lourd ! Il ne doit pas dépasser 8 mo.')
      }
    },
    setImage2 (e) {
      const file = e.target.files[0],
        ext = file.name.split('.').pop(),
        extValid = ['png', 'jpeg', 'jpg']

      console.log(ext);

      if (e.target.files[0].size <= 1684688109387) {

        let reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = evt => {

          let img = new Image();

          img.onload = () => {

            if (img.width <= 1920 && img.height <= 1080) {

              if (extValid.indexOf(ext, 0) === 0) {

                this.image2 = file
                this.imageSrc2 = URL.createObjectURL(file);
                $('.removeImage2').show()

              } else {

                $('.removeImage2').hide()
                this.imageSrc2 = 'bakerys/add-bakery.jpg'
                this.image2 = null
                $('.image2-error').show()
                $('.image2-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher doit être de type image.')

              }

            } else {
              $('.removeImage2').hide()
              this.imageSrc2 = 'bakerys/add-bakery.jpg'
              this.image2 = null
              $('.image2-error').show()
              $('.image2-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher ne doit pas dépasser 1920 pixels par 1080 pixels.')
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
        this.image = null
        $('.image2-error').show()
        $('.image2-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher est trop lourd ! Il ne doit pas dépasser 8 mo.')
      }
    },
    setImage3 (e) {
      const file = e.target.files[0],
        ext = file.name.split('.').pop(),
        extValid = ['png', 'jpeg', 'jpg']

      if (e.target.files[0].size <= 1684688109387) {

        let reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = evt => {

          let img = new Image();

          img.onload = () => {

            if (img.width <= 1920 && img.height <= 1080) {

              if (extValid.indexOf(ext, 0) === 0) {

                this.image3 = file
                this.imageSrc3 = URL.createObjectURL(file);
                $('.removeImage3').show()

              } else {

                $('.removeImage3').hide()
                this.imageSrc3 = 'bakerys/add-bakery.jpg'
                this.image3 = null
                $('.image3-error').show()
                $('.image3-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher doit être de type image.')

              }

            } else {
              $('.removeImage3').hide()
              this.imageSrc3 = 'bakerys/add-bakery.jpg'
              this.image3 = null
              $('.image3-error').show()
              $('.image3-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher ne doit pas dépasser 1920 pixels par 1080 pixels.')
            }

          }

          img.src = evt.target.result;

          $('.image3-error').hide()
          $('.image3-error').html('')

        }

        reader.onerror = evt => {
          console.error(evt);
        }

      } else {
        $('.removeImage3').hide()
        this.image = null
        $('.image3-error').show()
        $('.image3-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher est trop lourd ! Il ne doit pas dépasser 8 mo.')
      }
    },
    setImage4 (e) {
      const file = e.target.files[0],
        ext = file.name.split('.').pop(),
        extValid = ['png', 'jpeg', 'jpg']

      if (e.target.files[0].size <= 1684688109387) {

        let reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = evt => {

          let img = new Image();

          img.onload = () => {

            if (img.width <= 1920 && img.height <= 1080) {

              if (extValid.indexOf(ext, 0) === 0) {

                this.image4 = file
                this.imageSrc4 = URL.createObjectURL(file);
                $('.removeImage4').show()

              } else {

                $('.removeImage4').hide()
                this.imageSrc4 = 'bakerys/add-bakery.jpg'
                this.image4 = null
                $('.image4-error').show()
                $('.image4-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher doit être de type image.')

              }

            } else {
              $('.removeImage4').hide()
              this.imageSrc4 = 'bakerys/add-bakery.jpg'
              this.image4 = null
              $('.image4-error').show()
              $('.image4-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher ne doit pas dépasser 1920 pixels par 1080 pixels.')
            }

          }

          img.src = evt.target.result;

          $('.image4-error').hide()
          $('.image4-error').html('')

        }

        reader.onerror = evt => {
          console.error(evt);
        }

      } else {
        $('.removeImage4').hide()
        this.image = null
        $('.image4-error').show()
        $('.image4-error').html('<i class="fa-solid fa-xmark me-1"></i>Votre ficher est trop lourd ! Il ne doit pas dépasser 8 mo.')
      }
    },
    submitBakery (e) {

      e.preventDefault();

      this.visible = true
      this.showSimulatedReturnData = false

      this.v$.$validate() // checks all inputs

      if (!this.v$.$error) {

        $([document.documentElement, document.body]).animate({
          scrollTop: $('.page-add-bakery').offset().top
        }, '200')

        fetch('https://api.ipify.org?format=json')
          .then(x => x.json())
          .then(({ ip }) => {

            const config = {
              headers: {
                "content-type": "multipart/form-data"
              }
            };

            const form_data = new FormData();

            form_data.append('file', this.image);
            form_data.append('file', this.image2);
            form_data.append('file', this.image3);
            form_data.append('file', this.image4);
            form_data.append("addName", this.addName);
            form_data.append("addAdresse", this.addAdresse);
            form_data.append("addPhone", this.addPhone);
            form_data.append("addWebsite", this.addWebsite);
            form_data.append("addHandicap", this.addHandicap);
            form_data.append("addLivraison", this.addLivraison);
            form_data.append("addRestauration", this.addRestauration);
            form_data.append("addNote", this.addNote);
            form_data.append("addTotalNote", this.addTotalNote);
            form_data.append("addSmallContent", this.addSmallContent);
            form_data.append("addDesc", this.addDesc);
            form_data.append("addHours1", this.addHours1);
            form_data.append("addHours2", this.addHours2);
            form_data.append("addHours3", this.addHours3);
            form_data.append("addHours4", this.addHours4);
            form_data.append("addHours5", this.addHours5);
            form_data.append("addHours6", this.addHours6);
            form_data.append("addHours7", this.addHours7);
            form_data.append("ip", ip);

            form_data.append("pays", this.pays);
            form_data.append("pays_code", this.pays_code);
            form_data.append("departement", this.ville);
            form_data.append("ville", this.postcode);
            form_data.append("postcode", this.department_code);
            form_data.append("department_code", this.department_code);

            axios({
              method: "POST",
              url: process.env.WEBSITE + '/add-bakery',
              data: form_data,
              headers: {
                "Content-Type": "multipart/form-data"
              }
            })
              .then((res) => {

                if (res.data.success === true) {

                  this.showNotif()

                  $(document).find('.error-text').text('')
                  $(document).find('.error-text').removeAttr()
                  $('.bakery-single').find('input').val('')
                  $('.bakery-single').find('textarea').val('')
                  this.submit = false
                  $('#submit_bakery').addClass('disabled')

                  this.image = null
                  this.image2 = null
                  this.image3 = null
                  this.image4 = null
                  this.addName = null
                  this.addAdresse = null
                  this.addPhone = null
                  this.addWebsite = null
                  this.addHandicap = null
                  this.addLivraison = null
                  this.addRestauration = null
                  this.addNote = null
                  this.addTotalNote = null
                  this.addSmallContent = null
                  this.addDesc = null
                  this.addHours1 = null
                  this.addHours2 = null
                  this.addHours3 = null
                  this.addHours4 = null
                  this.addHours5 = null
                  this.addHours6 = null
                  this.addHours7 = null

                  this.imageSrc = 'bakerys/add-bakery.jpg'
                  this.imageSrc2 = 'bakerys/add-bakery.jpg'
                  this.imageSrc3 = 'bakerys/add-bakery.jpg'
                  this.imageSrc4 = 'bakerys/add-bakery.jpg'

                  this.pays = null
                  this.pays_code = null
                  this.departement = null
                  this.ville = null
                  this.postcode = null
                  this.department_code = null

                  $('.removeImage').hide()
                  $('.removeImage2').hide()
                  $('.removeImage3').hide()
                  $('.removeImage4').hide()

                  this.visible = false
                  this.showSimulatedReturnData = true

                } else {
                  this.errorNotif()
                }

              })
              .catch((error) => {
                this.errorNotif()
              })

          })

      } else {

        this.submit = false

        if (this.addAdresse
          && this.addName
          && this.addPhone
          && this.addHandicap
          && this.addLivraison
          && this.addRestauration
          && this.addNote
          && this.addTotalNote
          && this.addSmallContent
          && this.addDesc
          && this.image
          && this.addHours1
          && this.addHours2
          && this.addHours3
          && this.addHours4
          && this.addHours5
          && this.addHours6
          && this.addHours7) {

          this.submit = true

          return true
        }

        if (!this.addName) {
          $('.' + 'addName' + '_error').attr('style', 'display: block')
          $('.' + 'addName' + '_error').text("Le champs nom est obligatoire !");
        } else {
          $('.' + 'addName' + '_error').removeAttr()
          $('.' + 'addName' + '_error').text("");
        }

        if (!this.image) {
          $('.' + 'image' + '-error').attr('style', 'display: block')
          $('.' + 'image' + '-error').text("Vous devez importer une image !");
        } else {
          $('.' + 'image' + '-error').removeAttr()
          $('.' + 'image' + '-error').text("");
        }

        if (!this.addAdresse) {
          $('.' + 'addAdresse' + '_error').attr('style', 'display: block')
          $('.' + 'addAdresse' + '_error').text("Le champs adresse est obligatoire !");
        } else {
          $('.' + 'addAdresse' + '_error').removeAttr()
          $('.' + 'addAdresse' + '_error').text("");
        }

        if (!this.addPhone) {
          $('.' + 'addPhone' + '_error').attr('style', 'display: block')
          $('.' + 'addPhone' + '_error').text("Le champs téléphone est obligatoire !");
        } else {
          $('.' + 'addPhone' + '_error').removeAttr()
          $('.' + 'addPhone' + '_error').text("");
        }

        if (!this.addHandicap) {
          $('.' + 'addHandicap' + '_error').attr('style', 'display: block')
          $('.' + 'addHandicap' + '_error').text("Le champs handicap est obligatoire !");
        } else {
          $('.' + 'addHandicap' + '_error').removeAttr()
          $('.' + 'addHandicap' + '_error').text("");
        }

        if (!this.addLivraison) {
          $('.' + 'addLivraison' + '_error').attr('style', 'display: block')
          $('.' + 'addLivraison' + '_error').text("Le champs livraison est obligatoire !");
        } else {
          $('.' + 'addLivraison' + '_error').removeAttr()
          $('.' + 'addLivraison' + '_error').text("");
        }

        if (!this.addRestauration) {
          $('.' + 'addRestauration' + '_error').attr('style', 'display: block')
          $('.' + 'addRestauration' + '_error').text("Le champs restauration sur place est obligatoire !");
        } else {
          $('.' + 'addRestauration' + '_error').removeAttr()
          $('.' + 'addRestauration' + '_error').text("");
        }

        if (!this.addNote) {
          $('.' + 'addNote' + '_error').attr('style', 'display: block')
          $('.' + 'addNote' + '_error').text("Le champs note est obligatoire !");
        } else {
          $('.' + 'addNote' + '_error').removeAttr()
          $('.' + 'addNote' + '_error').text("");
        }

        if (!this.addTotalNote) {
          $('.' + 'addTotalNote' + '_error').attr('style', 'display: block')
          $('.' + 'addTotalNote' + '_error').text("Le champs total note est obligatoire !");
        } else {
          $('.' + 'addTotalNote' + '_error').removeAttr()
          $('.' + 'addTotalNote' + '_error').text("");
        }

        if (!this.addSmallContent) {
          $('.' + 'addSmallContent' + '_error').attr('style', 'display: block')
          $('.' + 'addSmallContent' + '_error').text("Le champs description est obligatoire !");
        } else {
          $('.' + 'addSmallContent' + '_error').removeAttr()
          $('.' + 'addSmallContent' + '_error').text("");
        }

        if (!this.addDesc) {
          $('.' + 'addDesc' + '_error').attr('style', 'display: block')
          $('.' + 'addDesc' + '_error').text("Le champs description est obligatoire !");
        } else {
          $('.' + 'addDesc' + '_error').removeAttr()
          $('.' + 'addDesc' + '_error').text("");
        }

        for (let i = 1; i <= 7; i++) {

          if (!this.addHours[i]) {
            $('.' + 'addHours' + [i] + '_error').attr('style', 'display: block')
            $('.' + 'addHours' + [i] + '_error').text("Le champs horaire d'ouverture est obligatoire !");
          } else {
            $('.' + 'addHours' + [i] + '_error').removeAttr()
            $('.' + 'addHours' + [i] + '_error').text("");
          }

        }

      }

    },
  },
  validations () {
    return {
      addName: { required },
      addAdresse: { required },
      addPhone: { required },
      addHandicap: { required },
      addLivraison: { required },
      addRestauration: { required },
      addNote: { required },
      addTotalNote: { required },
      addSmallContent: { required },
      addDesc: { required },
      addHours1: { required },
      addHours2: { required },
      addHours3: { required },
      addHours4: { required },
      addHours5: { required },
      addHours6: { required },
      addHours7: { required }
    }
  },
  mounted () {

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

      $('#btn_description').on('click', function (e) {

        e.preventDefault()

        $(this).addClass('active')
        $('#tab_description').addClass('active')

        $('#btn_reviews').removeClass('active')
        $('#tab_reviews').removeClass('active')
        $('#btn_hours').removeClass('active')
        $('#tab_hours').removeClass('active')
        $('#btn_others').removeClass('active')
        $('#tab_others_image').removeClass('active')

      })

      $('#btn_reviews').on('click', function (e) {

        e.preventDefault()

        $(this).addClass('active')
        $('#tab_reviews').addClass('active')

        $('#btn_description').removeClass('active')
        $('#tab_description').removeClass('active')
        $('#btn_hours').removeClass('active')
        $('#tab_hours').removeClass('active')
        $('#btn_other').removeClass('active')
        $('#tab_others_image').removeClass('active')
      })

      $('#btn_hours').on('click', function (e) {

        e.preventDefault()

        $(this).addClass('active')
        $('#tab_hours').addClass('active')

        $('#btn_description').removeClass('active')
        $('#tab_description').removeClass('active')
        $('#btn_reviews').removeClass('active')
        $('#tab_reviews').removeClass('active')
        $('#btn_others').removeClass('active')
        $('#tab_others_image').removeClass('active')

      })

      $('#btn_others').on('click', function (e) {

        e.preventDefault()

        $(this).addClass('active')
        $('#tab_others_image').addClass('active')

        $('#btn_description').removeClass('active')
        $('#tab_description').removeClass('active')
        $('#btn_reviews').removeClass('active')
        $('#tab_reviews').removeClass('active')
        $('#btn_hours').removeClass('active')
        $('#tab_hours').removeClass('active')

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

    function autoFormatNoteNumber (ref) {
      try {
        let noteNumberString = ref.value
        var cleaned = ("" + noteNumberString).replace(/\D/g, "");
        var match = cleaned.match(/^(\d{0,1})?(\d{0,1})?/);
        return [match[1] ? "" : "",
        match[1],
        match[2] ? "." : "",
        match[2]].join("")

      } catch (err) {
        return "";
      }
    }

    $(document).on('click', '.place-clic', function (e) {

      e.preventDefault();

      var adresse = $(this).data('adresse'),
        pays = $(this).data('pays'),
        pays_code = $(this).data('pays_code'),
        departement = $(this).data('departement'),
        ville = $(this).data('ville'),
        postcode = $(this).data('postcode'),
        department_code = $(this).data('department_code')

      this.addAdresse = adresse
      this.pays = pays
      this.pays_code = pays_code
      this.departement = departement
      this.ville = ville
      this.postcode = postcode
      this.department_code = department_code

      $('#addAdresse').val(adresse)

      $('.search-place').fadeOut(200)

      setTimeout(() => {
        $('.search-place ul').html('')
        this.searchPlace = []
      }, 300);

    })

  }
})
</script>
