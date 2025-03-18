import meta from '../utils/meta.js'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Home.vue') },
      { path: '/#', component: () => import('pages/Home.vue') },
      { path: '/blogs-bakerys', component: () => import('pages/Blog.vue') },
      { path: '/bakerys-pastry', component: () => import('pages/Bakerys.vue') },
      { path: '/cgu', component: () => import('pages/Cgu.vue') },
      { path: '/cgv', component: () => import('pages/Cgv.vue') },
      { path: '/politique-confidentialite', component: () => import('pages/PolitiqueConfidentialite.vue') },
      { path: '/my-bakerys', component: () => import('pages/MyBakerys.vue') },
      { path: '/bakery/:url', component: () => import('pages/Bakery.vue') },
      { path: '/article/:url', component: () => import('pages/Article.vue') },
      { path: '/add-bakery', component: () => import('pages/AddBakery.vue') },
      { path: '/my-account', component: () => import('pages/MyAccount.vue') },
      { path: '/my-account/:token', component: () => import('pages/MyAccount.vue') },
      { path: '/my-account-profil', component: () => import('pages/MyAccountProfil.vue') },
      { path: '/my-account-profil/:year', component: () => import('pages/MyAccountProfil.vue') },
      { path: '/bakerys-city/:ville/:id', component: () => import('pages/BakerysCity.vue') },
      { path: '/activate-account/:token', component: () => import('pages/ActivateAccount.vue') },
      { path: '/forgot-password/:token?', component: () => import('pages/ForgotPassword.vue') },
      { path: '/cart', component: () => import('pages/Cart.vue') },
      { path: '/products', component: () => import('pages/Products.vue') },
      { path: '/credits/:id', component: () => import('pages/Credits.vue') },
      { path: '/cart/paiement/succes', component: () => import('src/pages/PaiementSucces.vue') },
      { path: '/cart/paiement/cancel', component: () => import('src/pages/PaiementCancel.vue') },
      { path: '/application', component: () => import('src/pages/Application.vue') },
      { path: '/newsletter-unsubscribe/:id',  component: () => import('src/pages/Newsletter.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/404.vue')
  }
]

export default routes

