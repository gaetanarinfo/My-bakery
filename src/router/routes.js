
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
          title: localStorage.getItem('title'),
          metaTags: [
            {
              name: 'description',
              content: localStorage.getItem('description')
            },
            {
              property: 'og:title',
              content: localStorage.getItem('title')
            },
            {
              property: 'og:description',
              content: localStorage.getItem('description')
            },
            {
              property: 'og:url',
              content: localStorage.getItem('url')
            },
            {
              property: 'og:image',
              content: localStorage.getItem('image')
            },
            {
              property: 'twitter:title',
              content: localStorage.getItem('title')
            },
            {
              property: 'twitter:url',
              content: localStorage.getItem('url')
            },
            {
              property: 'twitter:description',
              content: localStorage.getItem('description')
            },
            {
              property: 'twitter:image',
              content: localStorage.getItem('image')
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
              content: localStorage.getItem('article-description')
            },
            {
              property: 'og:title',
              content: localStorage.getItem('article-title')
            },
            {
              property: 'og:description',
              content: localStorage.getItem('article-description')
            },
            {
              property: 'og:url',
              content: localStorage.getItem('article-url')
            },
            {
              property: 'og:image',
              content: localStorage.getItem('article-image')
            },
            {
              property: 'twitter:title',
              content: localStorage.getItem('article-title')
            },
            {
              property: 'twitter:url',
              content: localStorage.getItem('article-url')
            },
            {
              property: 'twitter:description',
              content: localStorage.getItem('article-description')
            },
            {
              property: 'twitter:image',
              content: localStorage.getItem('article-image')
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

