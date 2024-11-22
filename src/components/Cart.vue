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

      <div class="row gutters-sm">

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
                      {{ product.title }}</a>
                  </td>

                  <td>{{ product.price }} €</td>

                  <td>
                    <div class="form-group--number">
                      <button class="minus" @click="removeQuantityProduct(product.price)"><span><i
                            class="fa fa-minus"></i></span></button>
                      <input class="form-control" disabled type="text" :value="shopping_cart_qte">
                      <button class="plus" @click="addQuantityProduct(product.price)"><span><i
                            class="fa fa-plus"></i></span></button>
                    </div>
                  </td>

                  <td><strong id="priceTotalProduct">{{ shopping_total_ht }} €</strong></td>

                  <td>
                    <div @click="removeProduct(product.id)" class="ps-remove"></div>
                  </td>

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

    </div>

  </div>

</template>

<script>

import { LocalStorage } from 'quasar';
import { defineComponent, ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'

const shopping_total_ht = ref(LocalStorage.getItem('shopping_total_ht')),
  shopping_total_ttc = ref(LocalStorage.getItem('shopping_total_ttc')),
  shopping_cart_qte = ref(LocalStorage.getItem('shopping_cart_qte'))

export default defineComponent({
  name: 'CartComponent',
  setup () {

    const store = useStore()

    const products_cart = computed(() => {
      return store.state.products_cart
    })

    const user = computed(() => {
      return store.state.stateUser.user
    })

    store.dispatch('fetchProductsCart', { 'cart': LocalStorage.getItem('shopping_cart') })

    return {
      user,
      createPaiement () {

        if (sessionStorage.getItem('token') !== null) {
          store.dispatch('setInsertCommandeClient', { 'user_id': this.user.id, 'product_id': LocalStorage.getItem('shopping_cart'), 'status': '1', 'qte': LocalStorage.getItem('shopping_cart_qte'), 'total_ht' : LocalStorage.getItem('shopping_total_ht'), 'total_ttc' : LocalStorage.getItem('shopping_total_ttc') })
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
      addQuantityProduct (price) {

        var qte = shopping_cart_qte.value + 1

        if (qte <= 10) {

          LocalStorage.setItem('shopping_cart_qte', qte)

          LocalStorage.setItem('shopping_total_ht', (Number(price) * qte).toFixed(2))
          LocalStorage.setItem('shopping_total_ttc', (Number(LocalStorage.getItem('shopping_total_ht')) + Number(LocalStorage.getItem('shopping_total_ht')) * 20 / 100).toFixed(2))

          shopping_total_ht.value = LocalStorage.getItem('shopping_total_ht')
          shopping_total_ttc.value = LocalStorage.getItem('shopping_total_ttc')
          shopping_cart_qte.value = LocalStorage.getItem('shopping_cart_qte')

          $('#priceTotalProduct').text(LocalStorage.getItem('shopping_total_ht') + ' €')

        }

      },
      removeQuantityProduct (price) {

        var qte = shopping_cart_qte.value - 1

        if (qte >= 1) {

          LocalStorage.setItem('shopping_cart_qte', qte)

          LocalStorage.setItem('shopping_total_ht', (Number(price) * qte).toFixed(2))
          LocalStorage.setItem('shopping_total_ttc', (Number(LocalStorage.getItem('shopping_total_ht')) + Number(LocalStorage.getItem('shopping_total_ht')) * 20 / 100).toFixed(2))

          shopping_total_ht.value = LocalStorage.getItem('shopping_total_ht')
          shopping_total_ttc.value = LocalStorage.getItem('shopping_total_ttc')
          shopping_cart_qte.value = LocalStorage.getItem('shopping_cart_qte')

          $('#priceTotalProduct').text(LocalStorage.getItem('shopping_total_ht') + ' €')
        } else {

          LocalStorage.removeItem('shopping_total_ht')
          LocalStorage.removeItem('shopping_total_ttc')
          LocalStorage.removeItem('shopping_cart_qte')
          LocalStorage.removeItem('shopping_cart')

          location.reload()

        }

      },
      removeProduct (productId) {

        LocalStorage.removeItem('shopping_total_ht')
        LocalStorage.removeItem('shopping_total_ttc')
        LocalStorage.removeItem('shopping_cart_qte')
        LocalStorage.removeItem('shopping_cart')

        location.reload()

      }
    }
  },
  mounted () {

    setTimeout(() => {

      var qte = LocalStorage.getItem('shopping_cart_qte')

      var str = this.products_cart[0].price * qte,
        TTC = parseFloat(str + ((str * 20 / 100))).toFixed(2)

      LocalStorage.setItem('shopping_total_ht', (str).toFixed(2))
      LocalStorage.setItem('shopping_total_ttc', TTC)

      shopping_total_ht.value = LocalStorage.getItem('shopping_total_ht')
      shopping_total_ttc.value = LocalStorage.getItem('shopping_total_ttc')
      shopping_cart_qte.value = LocalStorage.getItem('shopping_cart_qte')

    }, 300);
  }
})

</script>
