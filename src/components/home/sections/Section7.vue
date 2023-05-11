<template name="SectionHome7">
  <div id="contact" class="section fadeIn7 contact">

    <div class="background-p">

      <div class="pre-container">

        <div class="row">

          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">

            <div class="content">

              <div class="bloc-contact">

                <h4>NOS BUREAU EN FRANCE</h4>
                <h5>125 avenue Félix Geneslay 72100 Le Mans, France</h5>

                <p><i class="fa fa-envelope"></i><a href="mailto:contact@my-bakery.fr">contact@my-bakery.fr</a></p>

                <p><i class="fa fa-phone-square"></i>+33 6-15-75-93-02</p>

              </div>

            </div>

          </div>

          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">

            <form id="form-contact">

              <h3 class="text-center">Contactez nous</h3>

              <p class="text-center">Notre équipe est à votre écoute, pour toute demande concernant notre application, ou
                notre site internet.</p>

              <div class="form-group">
                <label>Prénom <sup>*</sup></label>
                <input class="form-control" name="firstname" type="text" placeholder="">
              </div>

              <div class="form-group">
                <label>Nom <sup>*</sup></label>
                <input class="form-control" name="lastname" type="text" placeholder="">
              </div>

              <div class="form-group">￼
                <label>Adresse email <sup>*</sup></label>
                <input class="form-control" name="email" type="email" placeholder="">
              </div>

              <div class="form-group">
                <label>Téléphone <sup>*</sup></label>
                <input class="form-control" name="phone" type="text" placeholder="">
              </div>

              <div class="form-group">
                <label>Sujet <sup>*</sup></label>
                <input class="form-control" name="sujet" type="text" placeholder="">
              </div>

              <div class="form-group">
                <label>Message <sup>*</sup></label>
                <textarea class="form-control" cols="6" rows="6" name="content" placeholder=""></textarea>
              </div>

              <div class="form-group submit">
                <button type="submit" class="btn btn-bakery">Valider</button>
              </div>

            </form>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SectionHome7',
  props: {}
})
</script>
