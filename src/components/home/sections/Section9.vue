<template name="SectionHome9">

  <div class="section fadeIn5 ratings">

    <div class="background-p">

      
    </div>

  </div>

  <div id="bakery-add" class="section fadeIn10">

    <div class="column-inner">

      <div class="wrapper">

        <div class="site-features">

          <div class="container">

            <div class="bloc container">

              <div class="hp-container">

                <div class="section text-center">

                  <h2 class="title">Vous ne trouvez pas votre boulangerie ?</h2>

                  <p class="description"></p>

                  <div>
                    <img class="delicious" src="floral.png" alt="Delicieux">
                  </div>

                </div>

              </div>

            </div>


            <div class="row">

              <div class="col-lg-6">

                <p>“Si votre boulangerie ne figure pas sur My Bakery, il vous reste donc une option que vous pouvez
                  envisager”
                </p>

                <p class="button"><a @click="this.$router.push('/add-bakery');" class="btn btn-bakery">Ajouter ma
                    boulangerie</a></p>

                <small>Gaëtan Seigneur - Développeur pour My bakery</small>

                <p class="signature">
                  <img src="signature.png" width="129" alt="Dev72" />
                </p>

              </div>

              <div class="col-lg-6">

                <img src="listed.png" alt="Vous ne trouvez pas votre boulangerie ?">

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SectionHome9',
  setup () {

  }
})
</script>
