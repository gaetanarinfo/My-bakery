<template name="AddBakeryComponent">
  <div class="background fadeIn2 bb background1">

    <div class="content">

      <h1>Ajouter une boulangerie</h1>

      <div class="b-breadcrumb">

        <div class="b-breadcrumb">

          <ol class="breadcrumb">

            <li><a href="/">Accueil</a></li>

            <li class="before"><a role="button" @click="this.$router.push('/bakerys')">Boulangeries</a></li>

            <li class="active">Ajouter une boulangerie</li>

          </ol>

        </div>

      </div>

    </div>

  </div>

  <div class="bakery-single bakery-add section fadeIn3">

    <div class="container">

      <div class="bakery-detail">

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

                <div>
                  <p>
                    <input v-model="addAdresse" type="text" class="form-control" id="addAdresse" name="addAdresse"
                      placeholder="Adresse de la boulangerie*">
                  </p>
                  <p class="error-text addAdresse_error"></p>
                </div>

                <div>
                  <p>
                    <input v-model="addPhone" type="text" class="form-control" id="addPhone" name="addPhone"
                      placeholder="Téléphone de la boulangerie*">
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
import { useQuasar } from 'quasar'
import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import moment from 'moment'
import { ref } from 'vue'
import { Cookies } from 'quasar'
import axios from 'axios'

moment.locale('fr')

export default defineComponent({
  name: 'AddBakeryComponent',
  components: {
  },
  setup () {
    const visible = ref(false)
    const showSimulatedReturnData = ref(true)
    const $q = useQuasar()
    const FormData = require('form-data');

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
      showTextLoading () {
        visible.value = true
        showSimulatedReturnData.value = true

        setTimeout(() => {
          visible.value = false
          showSimulatedReturnData.value = true
        }, 1500)
      },
      Cookies: Cookies,
      visible,
      FormData: FormData,
      moment: moment,
      showSimulatedReturnData,
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
      addName: null,
      addWebsite: null,
      addAdresse: null,
      addPhone: null,
      addHandicap: null,
      addLivraison: null,
      addRestauration: null,
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
      imageSrc4: 'bakerys/add-bakery.jpg'
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

      this.v$.$validate() // checks all inputs

      if (!this.v$.$error) {

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
        form_data.append("addSmallContent", this.addSmallContent);
        form_data.append("addDesc", this.addDesc);
        form_data.append("addHours1", this.addHours1);
        form_data.append("addHours2", this.addHours2);
        form_data.append("addHours3", this.addHours3);
        form_data.append("addHours4", this.addHours4);
        form_data.append("addHours5", this.addHours5);
        form_data.append("addHours6", this.addHours6);
        form_data.append("addHours7", this.addHours7);

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

              setTimeout(() => {
                $(document).find('.error-text').text('')
                $(document).find('.error-text').removeAttr()
                $('.bakery-single').find('input').val('')
                $('.bakery-single').find('textarea').val('')
                this.submit = false
                $('#submit_bakery').addClass('disabled')

                this.firstname = null
                this.lastname = null
                this.email = null
                this.phone = null
                this.sujet = null
                this.content = null

              }, 3500);

            } else {
              this.errorNotif()
            }

          })
          .catch((error) => {
            this.errorNotif()
          })

      } else {

        this.submit = false

        if (this.addAdresse
          && this.addName
          && this.addPhone
          && this.addHandicap
          && this.addLivraison
          && this.addRestauration
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

  }
})
</script>
