<template name="SectionHome7">
  <div id="contact" class="section contact">

    <div class="background-p">

      <div class="pre-container">

        <div class="row">

          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 home-section">

            <div class="content">

              <div class="bloc-contact">

                <h4>NOS BUREAUX EN FRANCE</h4>
                <h5>125 avenue Félix Geneslay 72100 Le Mans, France</h5>

                <p><i class="fa fa-envelope"></i><a href="mailto:contact@my-bakery.fr">contact@my-bakery.fr</a></p>

                <p><i class="fa fa-phone-square"></i>+33 6-50-55-87-31</p>

              </div>

            </div>

          </div>

          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 home-section">

            <form id="form-contact">

              <h3 class="text-center">Contactez nous</h3>

              <p class="text-center">Notre équipe est à votre écoute, pour toute demande concernant notre application,
                ou
                notre site internet.</p>

              <div class="form-group">
                <label>Prénom <sup>*</sup></label>
                <input v-model="firstname" class="form-control" name="firstname" id="firstname" type="text"
                  placeholder="">
                <span class="error-text firstname_error"></span>
              </div>

              <div class="form-group">
                <label>Nom <sup>*</sup></label>
                <input v-model="lastname" class="form-control" name="lastname" id="lastname" type="text" placeholder="">
                <span class="error-text lastname_error"></span>
              </div>

              <div class="form-group">
                <label>Adresse email <sup>*</sup></label>
                <input v-model="email" class="form-control" name="email" id="email" type="email" placeholder="">
                <span class="error-text email_error"></span>
              </div>

              <div class="form-group">
                <label>Téléphone <sup>*</sup></label>
                <input v-model="phone" class="form-control" name="phone" id="phone" type="text" placeholder="">
                <span class="error-text phone_error"></span>
              </div>

              <div class="form-group">
                <label>Sujet <sup>*</sup></label>
                <input v-model="sujet" class="form-control" name="sujet" id="sujet" type="text" placeholder="">
                <span class="error-text sujet_error"></span>
              </div>

              <div class="form-group">
                <label>Message <sup>*</sup></label>
                <textarea v-model="content" class="form-control" cols="6" rows="6" id="content" name="content"
                  placeholder=""></textarea>
                <span class="error-text content_error"></span>
              </div>

              <div class="form-group">
                <label class="recaptcha-label">Code recaptcha : <span class="code">{{ code }}</span></label><br>
                <label>Code <sup>*</sup></label>
                <input type="text" v-model="captcha" class="form-control" name="captcha" id="captcha" placeholder="">
                <span class="error-text code_error"></span>
              </div>

              <div class="form-group submit">
                <button id="submit_contact" @click="submitContact" type="submit" class="btn btn-bakery">Valider</button>
              </div>

            </form>

            <q-inner-loading :showing="visible" />

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
import { defineComponent } from 'vue'
import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import $ from 'jquery'
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'SectionHome7',
  setup () {

    const $q = useQuasar()
    const visible = ref(false)
    const showSimulatedReturnData = ref(true)
    const code = ref(null)

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
      code,
      visible,
      showSimulatedReturnData,
      showTextLoading () {
        visible.value = true
        showSimulatedReturnData.value = false

        setTimeout(() => {
          visible.value = false
          showSimulatedReturnData.value = true
        }, 3000)
      },
      showNotif () {
        $q.notify({
          type: 'success-form',
          message: 'Votre demande de contact nous a été envoyé.'
        })
      },
      errorNotif () {
        $q.notify({
          type: 'error-form',
          message: 'Une erreur est survenue dans le formulaire.'
        })
      }
    }
  },
  data () {

    return {
      v$: useValidate(),
      firstname: null,
      lastname: null,
      email: null,
      phone: null,
      sujet: null,
      content: null,
      captcha: null
    }
  },
  methods: {
    submitContact (e) {

      e.preventDefault();

      this.v$.$validate() // checks all inputs

      let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
      let valid = reg.test(this.email)

      if (valid && !this.v$.$error && this.code === this.captcha) {

        $('#submit_contact').addClass('disabled')

        $(document).find('.error-text').text('')
        $(document).find('.error-text').removeAttr()

        axios.post(process.env.WEBSITE + '/contact', { 'firstname': this.firstname, 'lastname': this.lastname, 'email': this.email, 'phone': this.phone, 'sujet': this.sujet, 'content': this.content })
          .then((res) => {

            this.firstname = null
            this.lastname = null
            this.email = null
            this.phone = null
            this.sujet = null
            this.content = null
            this.captcha = null
            this.code = this.gencode(8)

            if (res.data.success === true) {

              this.showNotif()

              setTimeout(() => {
                $('#submit_contact').removeClass('disabled')
              }, 2500);

            } else {
              this.errorNotif()
              $('#submit_contact').removeClass('disabled')
            }

          })
          .catch((error) => {
            this.errorNotif()
            $('#submit_contact').removeClass('disabled')
          })

      } else {

        if (!this.firstname) {
          $('.' + 'firstname' + '_error').attr('style', 'display: block')
          $('.' + 'firstname' + '_error').text("Le champs prénom est obligatoire !");
        } else {
          $('.' + 'firstname' + '_error').removeAttr()
          $('.' + 'firstname' + '_error').text("");
        }

        if (!this.lastname) {
          $('.' + 'lastname' + '_error').attr('style', 'display: block')
          $('.' + 'lastname' + '_error').text("Le champs nom est obligatoire !");
        } else {
          $('.' + 'lastname' + '_error').removeAttr()
          $('.' + 'lastname' + '_error').text("");
        }

        if (!this.email) {
          $('.' + 'email' + '_error').attr('style', 'display: block')
          $('.' + 'email' + '_error').text("Le champs adresse email est obligatoire !");
        } else {
          $('.' + 'email' + '_error').removeAttr()
          $('.' + 'email' + '_error').text("");
        }

        if (!this.phone) {
          $('.' + 'phone' + '_error').attr('style', 'display: block')
          $('.' + 'phone' + '_error').text("Le champs téléphone est obligatoire !");
        } else {
          $('.' + 'phone' + '_error').removeAttr()
          $('.' + 'phone' + '_error').text("");
        }

        if (!this.sujet) {
          $('.' + 'sujet' + '_error').attr('style', 'display: block')
          $('.' + 'sujet' + '_error').text("Le champs sujet est obligatoire !");
        } else {
          $('.' + 'sujet' + '_error').removeAttr()
          $('.' + 'sujet' + '_error').text("");
        }

        if (!this.content) {
          $('.' + 'content' + '_error').attr('style', 'display: block')
          $('.' + 'content' + '_error').text("Le champs message est obligatoire !");
        } else {
          $('.' + 'content' + '_error').removeAttr()
          $('.' + 'content' + '_error').text("");
        }

        if (!valid) {
          $('.' + 'email' + '_error').attr('style', 'display: block')
          $('.' + 'email' + '_error').text("Le champs adresse email n'est pas valide !");
        }

        if (this.code !== this.captcha) {
          $('.' + 'code' + '_error').attr('style', 'display: block')
          $('.' + 'code' + '_error').text("Le code n'est pas bon !");
        } else {
          $('.' + 'code' + '_error').removeAttr()
          $('.' + 'code' + '_error').text("");
        }

      }
    },
    gencode (length) {
      var result = "";
      var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      var numbers = "0123456789"
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    },
  },
  validations () {
    return {
      firstname: { required },
      lastname: { required },
      email: { required },
      phone: { required },
      sujet: { required },
      content: { required },
      captcha: { required }
    }
  },
  mounted () {

    this.code = this.gencode(8);

  }
})
</script>
