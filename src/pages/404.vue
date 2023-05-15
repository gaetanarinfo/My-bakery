<template>
  <HeaderComponent />

  <div class="p-404">

    <div class="container">

      <h1>404</h1>

      <h3>PAGE NON TROUVÉE</h3>

      <p>Nous recherchons votre page … mais nous ne la trouvons pas</p>

      <p>&nbsp;</p>

      <a class="btn btn-bakery btn-lg" href="/">Accueil</a>

      <div class="p-404-image"><img src="404.jpg" alt="Boulangerie"></div>

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
</style>

<script>
import { defineComponent } from 'vue'
import HeaderComponent from 'components/Header.vue'

export default defineComponent({
  name: '404',
  components: {
    HeaderComponent
  },
  mounted() {
    $('.header').addClass('h-bakery')
    $('body').removeClass('loading')
    $('.fadeIn').fadeIn(600)
    $('.fadeIn2').fadeIn(600)
    $('.fadeIn3').fadeIn(600)
    $('.fadeIn8').fadeIn(600)
  }
})
</script>
