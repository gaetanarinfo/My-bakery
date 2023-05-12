<template name="HeaderComponent">
  <div class="searchbox">

    <div class="searchbox-remove">
      <i class="fa fa-remove"></i>
    </div>

    <div class="container">

      <header>

        <p>Entrer un mot clé :</p>

        <form id="search-header-product">

          <input type="text" class="form-control">

          <button type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>

        </form>

      </header>

      <div class="searchbox-result"></div>

      <footer class="text-center"></footer>

    </div>

  </div>

  <header class="fadeIn header">
    <nav class="navigation">

      <div class="hn-container">

        <div class="nav-left">

          <ul class="menu-left">
            <li class="menu-item"><a href="/" v-bind:class="this.$route.path === '/' ? 'active' : ''" aria-current="page">Accueil</a></li>

            <li class="menu-item"><a role="button" v-bind:class="this.$route.path === '/' ? 'scroll-click' : 'scroll-click-s'" data-scroll="a-propos">À propos de nous</a></li>

            <li class="menu-item"><a :href="this.$route.path !== '/' ? '#/contact' : ''" class="scroll-click" v-bind:class="this.$route.path === '/contact' ? 'active' : ''" data-scroll="contact">Contact</a></li>

          </ul>

        </div>

        <div class="nav-center">
          <a href="" class="logo">
            <img src="logo-light.png" alt="My bakery - classement des meilleurs boulangerie de France">
          </a>
        </div>

        <div class="nav-right">

          <ul class="menu-right">

            <li class="menu-item"><a :href="this.$route.path !== '/' ? '#/classement  ' : ''" v-bind:class="this.$route.path === '/classement' ? 'active' : ''" class="scroll-click" data-scroll="classement">Classement</a></li>

            <li class="menu-item"><a :href="this.$route.path !== '/' ? '#/blog' : ''" v-bind:class="this.$route.path === '/blog' ? 'active' : ''"  class="scroll-click" data-scroll="blog">Blog</a></li>

            <li class="menu-item"><a :href="this.$route.path !== '/' ? '#/login' : ''" v-bind:class="this.$route.path === '/login' ? 'active' : ''" >Espace membre</a></li>

          </ul>

          <div class="actions">

            <a href="#" class="search-btn"><i class="icono-search"></i></a>

          </div>

        </div>

      </div>

    </nav>

    <nav class="navigation-mobile">

      <div class="hn-container">

        <a class="logo" href="/">
          <img src="logo-light.png" alt="My bakery - classement des meilleurs boulangerie de France">
        </a>

        <ul id="menu-main-menu">

          <li class="menu-item">
            <a href="/" class="active" aria-current="page">Accueil</a>
          </li>

          <li class="menu-item">
            <a href="#" class="scroll-click" data-scroll="a-propos">À propos de nous</a>
          </li>

          <li class="menu-item">
            <a href="#" class="scroll-click" data-scroll="contact">Contact</a>
          </li>

          <li class="menu-item">
            <a href="#" class="scroll-click" data-scroll="classement">Classement</a>
          </li>

          <li class="menu-item">
            <a href="#" class="scroll-click" data-scroll="blog">Blog</a>
          </li>

          <li class="menu-item">
            <a href="#">Espace membre</a>
          </li>

        </ul>

        <div class="menu-toggle"><span></span></div>

        <div class="actions">
          <a href="#" class="search-btn"><i class="icono-search"></i></a>
        </div>

      </div>

    </nav>

  </header>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderComponent',
  props: {}
})
</script>
