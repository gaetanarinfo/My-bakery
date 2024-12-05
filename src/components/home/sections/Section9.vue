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

                <p class="button">

                  <a v-if="!isLoggedIn" @click="this.$router.push('/my-account');" class="btn btn-bakery">Ajouter ma
                    boulangerie</a>

                  <a v-if="isLoggedIn && user_subscription === false" @click="this.$router.push('/products');"
                    class="btn btn-bakery">Ajouter ma
                    boulangerie</a>

                  <a v-if="isLoggedIn && user_subscription === true" @click="this.$router.push('/add-bakery');"
                    class="btn btn-bakery">Ajouter ma
                    boulangerie</a>

                </p>

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
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'

const user_subscription = ref(false)

export default defineComponent({
  name: 'SectionHome9',
  data () {

    const store = useStore()

    const user = computed(() => {
      return store.state.stateUser.user
    })

    return {
      user,
      user_subscription,
      isLoggedIn: store.getters.isLoggedIn,
    }

  },
  mounted () {

    setTimeout(() => {

      if (this.user !== null) {

        axios.get(process.env.WEBSITE + '/user-profil/' + this.user.email)
          .then((res) => {

            if (res.status === 200) {

              // Static values
              user_subscription.value = res.data.subscription

            }

          })

      }

    }, 1500);

  }
})
</script>
