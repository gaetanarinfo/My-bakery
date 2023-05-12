<template>
  <HeaderComponent />

  <div class="p-404">

    <div class="container">

      <h1>404</h1>

      <h3>PAGE NON TROUVÉE</h3>

      <p>Nous recherchons votre page … mais nous ne la trouvons pas</p>

      <p>&nbsp;</p>

      <a class="btn btn-bakery btn-lg" href="/">Accueil</a>

      <div class="p-404-image"><img
          src="404.jpg" alt="Boulangerie"></div>

    </div>

  </div>
</template>

<script>
import { defineComponent } from 'vue'
import HeaderComponent from 'components/Header.vue'

export default defineComponent({
  name: '404',
  components: {
    HeaderComponent
  }
})
</script>
