
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: '/blog', component: () => import('pages/Blog.vue') },
      { path: '/classement', component: () => import('pages/Classement.vue') },
      { path: '/cgu', component: () => import('pages/Cgu.vue') },
      { path: '/politique-confidentialite', component: () => import('pages/PolitiqueConfidentialite.vue') },
      { path: '/my-bakerys', component: () => import('pages/MyBakerys.vue') }
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
