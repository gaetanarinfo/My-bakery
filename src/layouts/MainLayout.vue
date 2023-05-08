<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-green-7 glossy text-white">

        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-icon size="sm" class="q-ml-sm">
          <img src="icons/favicon-128x128.png">
        </q-icon>

        <q-toolbar-title>
          My bakery
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Menu
        </q-item-label>

        <MenuLink v-for="link in menuLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import MenuLink from 'components/MenuLink.vue'

const linksList = [
  {
    title: 'Accueil',
    icon: 'fa-solid fa-home',
    link: '/'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    MenuLink
  },

  // eslint-disable-next-line space-before-function-paren
  setup() {
    const leftDrawerOpen = ref(false)

    return {
      menuLinks: linksList,
      leftDrawerOpen,
      // eslint-disable-next-line space-before-function-paren
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
