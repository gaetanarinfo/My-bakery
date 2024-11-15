import meta from '../utils/meta.js'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: '/blogs', component: () => import('pages/Blog.vue') },
      {
        path: '/bakerys', component: () => import('pages/Bakerys.vue'),
        meta: {
          title: 'Nos meilleures boulangeries sont ici',
          metaTags: [
            {
              name: 'description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My bakery.'
            },
            {
              property: 'og:title',
              content: 'Nos meilleures boulangeries sont ici'
            },
            {
              property: 'og:description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My bakery.'
            },
            {
              property: 'og:url',
              content: 'https://my-bakery.fr/#/bakerys'
            },
            {
              property: 'twitter:title',
              content: 'Nos meilleures boulangeries sont ici'
            },
            {
              property: 'twitter:url',
              content: 'https://my-bakery.fr/#/bakerys'
            },
            {
              property: 'twitter:description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My bakery.'
            }
          ]
        }
      },
      { path: '/cgu', component: () => import('pages/Cgu.vue') },
      { path: '/politique-confidentialite', component: () => import('pages/PolitiqueConfidentialite.vue') },
      { path: '/my-bakerys', component: () => import('pages/MyBakerys.vue') },
      {
        path: '/bakery/:url', component: () => import('pages/Bakery.vue'),
        meta: {
          title: 'Nos meilleures boulangeries sont ici',
          metaTags: [
            {
              name: 'description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My bakery.'
            },
            {
              property: 'og:title',
              content: 'Nos meilleures boulangeries sont ici'
            },
            {
              property: 'og:description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My bakery.'
            },
            {
              property: 'twitter:title',
              content: 'Nos meilleures boulangeries sont ici'
            },
            {
              property: 'twitter:description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My bakery.'
            }
          ]
        }
      },
      {
        path: '/blogs/:url', component: () => import('pages/Article.vue'),
        meta: {
          title: localStorage.getItem('article-title'),
          metaTags: [
            {
              name: 'description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My bakery.'
            },
            {
              property: 'og:title',
              content: 'Nos meilleures boulangeries sont ici'
            },
            {
              property: 'og:description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My bakery.'
            },
            {
              property: 'twitter:title',
              content: 'Nos meilleures boulangeries sont ici'
            },
            {
              property: 'twitter:description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My bakery.'
            }
          ]
        }
      },
      {
        path: '/add-bakery', component: () => import('pages/AddBakery.vue'),
        meta: {
          title: 'Ajouter une boulangerie',
          metaTags: [
            {
              name: 'description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My bakery.'
            },
            {
              property: 'og:title',
              content: 'Ajouter une boulangerie'
            },
            {
              property: 'og:description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My bakery.'
            },
            {
              property: 'og:url',
              content: 'https://my-bakery.fr/#/add-bakery'
            },
            {
              property: 'og:image',
              content: 'https://my-bakery.fr/boulanger.png'
            },
            {
              property: 'twitter:title',
              content: 'Ajouter une boulangerie'
            },
            {
              property: 'twitter:url',
              content: 'https://my-bakery.fr/#/add-bakery'
            },
            {
              property: 'twitter:description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My bakery.'
            },
            {
              property: 'twitter:image',
              content: 'https://my-bakery.fr/boulanger.png'
            }
          ]
        }
      },
      {
        path: '/my-account', component: () => import('pages/MyAccount.vue'),
        meta: {
          title: 'Mon compte',
          metaTags: [
            {
              name: 'description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My bakery.'
            },
            {
              property: 'og:title',
              content: 'Mon compte'
            },
            {
              property: 'og:description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My bakery.'
            },
            {
              property: 'og:url',
              content: 'https://my-bakery.fr/#/my-account'
            },
            {
              property: 'og:image',
              content: 'https://my-bakery.fr/boulanger.png'
            },
            {
              property: 'twitter:title',
              content: 'Mon compte'
            },
            {
              property: 'twitter:url',
              content: 'https://my-bakery.fr/#/my-account'
            },
            {
              property: 'twitter:description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My bakery.'
            },
            {
              property: 'twitter:image',
              content: 'https://my-bakery.fr/boulanger.png'
            }
          ]
        }
      },
      {
        path: '/my-account-profil', component: () => import('pages/MyAccountProfil.vue'),
        meta: {
          title: 'Gestion de mon compte',
          metaTags: [
            {
              name: 'description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My bakery.'
            },
          ]
        }
      },
      {
        path: '/activate-account/:token', component: () => import('pages/ActivateAccount.vue'),
      },
      {
        path: '/forgot-password/:token?', component: () => import('pages/ForgotPassword.vue'),
      },
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

