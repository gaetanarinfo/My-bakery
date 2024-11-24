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

      <div class="row gutters-sm">

        <div class="snip1265">

          <div :id="'product_' + product.id" v-for="product in products" v-bind:key="product.id"
            :class="(product.ahead === 1) ? 'plan featured' : 'plan'">

            <header>

              <i :class="product.image"></i>

              <h4 class="plan-title">
                {{ product.title }}
              </h4>

              <div class="plan-cost"><span class="plan-price">{{ product.price, '.', ',' }} HT €</span></div>

            </header>

            <ul class="plan-features" v-html="product.content"></ul>

            <div class="plan-select"><a @click="addCart(product.id)">Ajouter au panier</a></div>

          </div>

        </div>

        <div class="snip1265 showCart" v-show="showCart">

          <div class="plan">

            <div class="plan-select">
              <a @click="this.$router.push('/cart');"><i class="fa-solid fa-cart-shopping me-2"></i>Voir le panier</a>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</template>


<script>

import { LocalStorage } from 'quasar';
import { defineComponent, onMounted, computed, ref } from 'vue'
import { useStore } from 'vuex'

const showCart = ref(false)

export default defineComponent({
  name: 'CartComponent',
  setup () {
    const store = useStore()

    const products = computed(() => {
      return store.state.products
    })

    onMounted(() => {
      store.dispatch('fetchProducts')
    })

    return {
      products,
      showCart,
      addCart (id) {

        var counter = this.products.length

        for (let i = 1; i < counter + 1; i++) {
          if (id !== i) {
            $('#product_' + i).removeClass('active');
            LocalStorage.setItem('shopping_cart', id)
          }
        }

        $('#product_' + id).addClass('active');
        LocalStorage.setItem('shopping_cart', id)
        LocalStorage.setItem('shopping_cart_qte', 1)

        showCart.value = true

      }
    }
  },
  data () {

    return {

    }
  },
  mounted () {

    setTimeout(() => {
      if (LocalStorage.getItem('shopping_cart') >= 1) {
        showCart.value = true
        console.log($('#product_' + LocalStorage.getItem('shopping_cart')));
        $('#product_' + LocalStorage.getItem('shopping_cart')).addClass('active');
      } else {
        showCart.value = false
      }
    }, 500);

  },
})

</script>
