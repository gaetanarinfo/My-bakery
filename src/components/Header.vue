<template name="HeaderComponent">
  <header class="fadeIn">
    <nav class="navigation">

      <div class="hn-container">

        <div class="nav-left">

          <ul class="menu-left">

            <li class="menu-item"><a href="/" class="active" aria-current="page">Accueil</a></li>

            <li class="menu-item"><a href="#">À propos de nous</a></li>

            <li class="menu-item"><a href="#">Contact</a></li>

          </ul>

        </div>

        <div class="nav-center">
          <a href="" class="logo">
            <img src="logo-light.png" alt="My bakery">
          </a>
        </div>

        <div class="nav-right">

          <ul class="menu-right">

            <li class="menu-item"><a href="/" aria-current="page">Classement</a></li>

            <li class="menu-item"><a href="#">Blog</a></li>

            <li class="menu-item"><a href="#">Espace membre</a></li>

          </ul>

          <div class="actions">

            <a href="#"><i class="icono-search"></i></a>

          </div>

        </div>

      </div>

    </nav>

    <nav class="navigation-mobile">

      <div class="hn-container">

        <a class="logo" href="/">
          <img src="logo-light.png" alt="My bakery">
        </a>

        <ul id="menu-main-menu">

          <li class="menu-item">
            <a href="/" class="active" aria-current="page">Accueil</a>
          </li>

          <li class="menu-item">
            <a href="/" class="active" aria-current="page">À propos de nous</a>
          </li>

          <li class="menu-item">
            <a href="/" class="active" aria-current="page">Contact</a>
          </li>

          <li class="menu-item">
            <a href="/" class="active" aria-current="page">Classement</a>
          </li>

          <li class="menu-item">
            <a href="/" class="active" aria-current="page">Blog</a>
          </li>

          <li class="menu-item">
            <a href="/" class="active" aria-current="page">Espace membre</a>
          </li>

        </ul>

        <div class="menu-toggle"><span></span></div>

        <div class="actions">
          <a href="#"><i class="icono-search"></i></a>
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
