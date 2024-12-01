<template name="CartComponent">

  <div class="background fadeIn2 bb background5">

    <div class="content">

      <h1>Panier</h1>

      <div class="b-breadcrumb">

        <div class="b-breadcrumb">

          <ol class="breadcrumb">

            <li><a href="/">Accueil</a></li>

            <li class="active">Panier</li>

          </ol>

        </div>

      </div>

    </div>

  </div>

  <div id="cart" class="section fadeIn3">

    <div class="container">

      <div class="u-column1 row gutters-sm" v-show="showSimulatedReturnData">

        <div v-if="shopping_cart" class="ps-cart-listing">

          <div class="table-responsive">

            <table class="table ps-table ps-table--listing">

              <thead>

                <tr>
                  <th>Tous les produits</th>
                  <th>Prix</th>
                  <th>Quantité</th>
                  <th>Total</th>
                  <th></th>
                </tr>

              </thead>

              <tbody>

                <tr v-for="product in products_cart">

                  <td>
                    <a class="ps-product--table">
                      <i :class="'me-3 ' + product.image"></i>
                      <strong>{{ product.title }}</strong></a>
                  </td>

                  <td>{{ product.price }} €</td>

                  <td>
                    <div class="form-group--number">
                      <button class="minus" @click="removeQuantityProduct(product.price)"><span><i
                            class="fa fa-minus"></i></span></button>
                      <input class="form-control" disabled type="text" :value="shopping_cart_qte">
                      <button class="plus disabled" @click="addQuantityProduct(product.price)"><span><i
                            class="fa fa-plus"></i></span></button>
                    </div>
                  </td>

                  <td><strong id="priceTotalProduct">{{ shopping_total_ht }} €</strong></td>

                  <td>
                    <div @click="removeProduct(product.id)" class="ps-remove"></div>
                  </td>

                </tr>

                <tr v-if="verifBanner">

                  <td>
                    <a class="ps-product--table">
                      <i :class="'me-3 ' + 'ion-ios-color-wand-outline'"></i>
                      <strong>Jours supplèmentaire bannière</strong></a>

                  </td>
                  <td>{{ (Number(moment(dateE).diff(moment(dateS), "days")) + 1 - 7) *
                    parseFloat(0.25).toFixed(2) }} €</td>
                  <td>
                    <div class="form-group--number">
                      <button class="minus disabled"><span><i class="fa fa-minus"></i></span></button>
                      <input class="form-control" disabled type="text" :value="shopping_cart_qte">
                      <button class="plus disabled"><span><i class="fa fa-plus"></i></span></button>
                    </div>
                  </td>
                  <td><strong id="priceTotalProduct">{{ shopping_total_ht }} €</strong></td>
                  <td></td>

                </tr>

              </tbody>

            </table>

          </div>

          <div class="ps-cart__actions">

            <div class="ps-cart__promotion">

              <div class="form-group">

                <div class="ps-form--icon"><i class="fa fa-angle-right"></i>
                  <input class="form-control" type="text" placeholder="Code promotionnel">
                  <p class="codePromo">Pensez à appliquer le code avant votre achat !</p>
                </div>

              </div>

              <div class="form-group">
                <button @click="this.$router.push('/products')" class="ps-btn ps-btn--gray">Continuer vos
                  achats</button>
              </div>

            </div>

            <div class="ps-cart__total">
              <h3 class="mb-1">Prix ​​total HT : <span> {{ shopping_total_ht }} €</span>
              </h3>
              <h3>Prix ​​total TTC <span class="tva">TVA 20%</span> : <span> {{ shopping_total_ttc }} €</span></h3><a
                class="ps-btn" @click="createPaiement()">Passer à la
                caisse</a>

              <!-- PayPal Logo -->
              <img src="https://www.paypalobjects.com/webstatic/mktg/logo-center/logo_paypal_moyens_paiement_fr.jpg"
                alt="PayPal Acceptance Mark" />
            </div>

          </div>

        </div>

        <div class="cartEmpty" v-else>

          <img src="bakerys/large-5.jpg" alt="My Bakery">

          <h3>Votre panier semble vide</h3>

          <p>Avec My Bakery, vous pouvez commander à tout moment,<br class="br-no" /> notre service technique vous
            livrera vos produits
            dans les plus brefs délais.</p>

          <a class="ps-btn" href="#/">Retour à l'accueil</a>

        </div>

      </div>

      <div class="cartLoad loadingDiv" v-show="visible">
        <q-spinner-grid size="70px" color="info" />
      </div>

    </div>

  </div>

</template>

<script>

import { LocalStorage } from 'quasar';
import { defineComponent, ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import moment from 'moment'

moment.locale('fr')

const shopping_total_ht = ref(LocalStorage.getItem('shopping_total_ht')),
  shopping_total_ttc = ref(LocalStorage.getItem('shopping_total_ttc')),
  shopping_cart_qte = ref(LocalStorage.getItem('shopping_cart_qte'))

var verifBanner = ref(false),
  dateS = null,
  dateE = null

export default defineComponent({
  name: 'CartComponent',
  setup () {

    const store = useStore()
    const showSimulatedReturnData = ref(true)
    const visible = ref(false)

    const products_cart = computed(() => {
      return store.state.products_cart
    })

    const user = computed(() => {
      return store.state.stateUser.user
    })

    if (LocalStorage.hasItem('shopping_cart')) {
      store.dispatch('fetchProductsCart', { 'cart': LocalStorage.getItem('shopping_cart') })
    }

    verifBanner = (LocalStorage.hasItem('banner_date_start')) ? true : false
    dateS = LocalStorage.getItem('banner_date_start')
    dateE = LocalStorage.getItem('banner_date_end')

    return {
      dateS,
      dateE,
      verifBanner,
      moment,
      showTextLoading (duration, express = null) {
        visible.value = true
        $('.u-column1').fadeOut(300)
        showSimulatedReturnData.value = false

        if (express === null) {
          setTimeout(() => {
            visible.value = false
            showSimulatedReturnData.value = true
          }, duration)
        }
      },
      user,
      createPaiement () {

        if (sessionStorage.getItem('token') !== null) {

          $([document.documentElement, document.body]).animate({
            scrollTop: $('#cart').offset().top
          }, '200')

          this.showTextLoading(3000)
          store.dispatch('setInsertCommandeClient', {
            'user_id': this.user.id,
            'product_id': LocalStorage.getItem('shopping_cart'),
            'status': '1',
            'qte': LocalStorage.getItem('shopping_cart_qte'),
            'total_ht': LocalStorage.getItem('shopping_total_ht'),
            'total_ttc': LocalStorage.getItem('shopping_total_ttc'),
            'dateStart': (LocalStorage.hasItem('banner_date_start')) ? LocalStorage.getItem('banner_date_start') : null,
            'dateEnd': (LocalStorage.hasItem('banner_date_end')) ? LocalStorage.getItem('banner_date_end') : null,
            'additional_information': (LocalStorage.hasItem('additional_information')) ? LocalStorage.getItem('additional_information') : null,
            'banner_name': (LocalStorage.hasItem('banner_name')) ? LocalStorage.getItem('banner_name') : null,
            'bakery_id_event': (LocalStorage.hasItem('bakery_id_event')) ? LocalStorage.getItem('bakery_id_event') : null,
          })
        } else {
          LocalStorage.setItem('prev_url', '/cart')
          this.$router.push('/my-account')
        }

      },
      shopping_cart: LocalStorage.getItem('shopping_cart'),
      shopping_total_ht,
      shopping_total_ttc,
      shopping_cart_qte,
      products_cart,
      visible,
      showSimulatedReturnData,
      addQuantityProduct (price) {
      },
      removeQuantityProduct (price) {

        var qte = shopping_cart_qte.value - 1

        if (qte >= 1) {

        } else {

          LocalStorage.removeItem('shopping_total_ht')
          LocalStorage.removeItem('shopping_total_ttc')
          LocalStorage.removeItem('shopping_cart_qte')
          LocalStorage.removeItem('shopping_cart')
          LocalStorage.removeItem('additional_information')
          LocalStorage.removeItem('banner_date_start')
          LocalStorage.removeItem('banner_date_end')
          LocalStorage.removeItem('banner_name')
          LocalStorage.removeItem('bakery_id_event')

          location.reload()

        }

      },
      removeProduct (productId) {

        LocalStorage.removeItem('shopping_total_ht')
        LocalStorage.removeItem('shopping_total_ttc')
        LocalStorage.removeItem('shopping_cart_qte')
        LocalStorage.removeItem('shopping_cart')
        LocalStorage.removeItem('additional_information')
        LocalStorage.removeItem('banner_date_start')
        LocalStorage.removeItem('banner_date_end')
        LocalStorage.removeItem('banner_name')
        LocalStorage.removeItem('bakery_id_event')

        location.reload()

      }
    }
  },
  mounted () {

    this.showTextLoading(1500)

    setTimeout(() => {

      if (LocalStorage.hasItem('shopping_cart')) {

        var dateS = LocalStorage.getItem('banner_date_start'),
          dateE = LocalStorage.getItem('banner_date_end'),
          day_supplement = (Number(moment(dateE).diff(moment(dateS), "days")) + 1 - 7) *
            parseFloat(0.25).toFixed(2)

        var price = 0

        if (LocalStorage.hasItem('banner_date_start')) {
          price = Number(this.products_cart[0].price) + (day_supplement)
          day_supplement = (day_supplement + day_supplement * 20 / 100)
        } else {
          price = Number(this.products_cart[0].price)

        }

        var total = (price + price * 20 / 100).toFixed(2)

        var str = price,
          TTC = total

        LocalStorage.setItem('shopping_total_ht', (str).toFixed(2))
        LocalStorage.setItem('shopping_total_ttc', TTC)

        shopping_total_ht.value = LocalStorage.getItem('shopping_total_ht')
        shopping_total_ttc.value = LocalStorage.getItem('shopping_total_ttc')
        shopping_cart_qte.value = LocalStorage.getItem('shopping_cart_qte')

      }

    }, 300);
  }
})

</script>
