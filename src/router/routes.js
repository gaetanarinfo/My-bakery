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
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My Bakery.'
            },
            {
              property: 'og:title',
              content: 'Nos meilleures boulangeries sont ici'
            },
            {
              property: 'og:description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My Bakery.'
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
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My Bakery.'
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
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My Bakery.'
            },
            {
              property: 'og:title',
              content: 'Nos meilleures boulangeries sont ici'
            },
            {
              property: 'og:description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My Bakery.'
            },
            {
              property: 'twitter:title',
              content: 'Nos meilleures boulangeries sont ici'
            },
            {
              property: 'twitter:description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My Bakery.'
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
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My Bakery.'
            },
            {
              property: 'og:title',
              content: 'Nos meilleures boulangeries sont ici'
            },
            {
              property: 'og:description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My Bakery.'
            },
            {
              property: 'twitter:title',
              content: 'Nos meilleures boulangeries sont ici'
            },
            {
              property: 'twitter:description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My Bakery.'
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
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My Bakery.'
            },
            {
              property: 'og:title',
              content: 'Ajouter une boulangerie'
            },
            {
              property: 'og:description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My Bakery.'
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
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My Bakery.'
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
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My Bakery.'
            },
            {
              property: 'og:title',
              content: 'Mon compte'
            },
            {
              property: 'og:description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My Bakery.'
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
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My Bakery.'
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
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My Bakery.'
            },
          ]
        }
      },
      {
        path: '/my-account-profil/:year', component: () => import('pages/MyAccountProfil.vue'),
        meta: {
          title: 'Gestion de mon compte',
          metaTags: [
            {
              name: 'description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My Bakery.'
            },
          ]
        }
      },
      {
        path: '/bakerys-region/:region', component: () => import('pages/BakerysRegion.vue'),
        meta: {
          title: 'Boulangeries par région',
          metaTags: [
            {
              name: 'description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My Bakery.'
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
      {
        path: '/cart', component: () => import('pages/Cart.vue'),
        meta: {
          title: 'Mon panier',
          metaTags: [
            {
              name: 'description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My Bakery.'
            },
          ]
        }
      },
      {
        path: '/products', component: () => import('pages/Products.vue'),
        meta: {
          title: 'Nos produits',
          metaTags: [
            {
              name: 'description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My Bakery.'
            },
          ]
        }
      },
      {
        path: '/credits/:id', component: () => import('pages/Credits.vue'),
        meta: {
          title: 'Échanger mes crédits',
          metaTags: [
            {
              name: 'description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My Bakery.'
            },
          ]
        }
      },
      {
        path: '/cart/paiement/succes/:paymentId', component: () => import('src/pages/PaiementSucces.vue'),
        meta: {
          title: 'Statut de votre commande',
          metaTags: [
            {
              name: 'description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My Bakery.'
            },
          ]
        }
      },
      {
        path: '/cart/paiement/cancel/:paymentId', component: () => import('src/pages/PaiementCancel.vue'),
        meta: {
          title: 'Annulation de votre commande',
          metaTags: [
            {
              name: 'description',
              content: 'Retrouvez toutes les meilleures boulangeries en France sur My Bakery.'
            },
          ]
        }
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

