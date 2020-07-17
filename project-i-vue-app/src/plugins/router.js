import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      alias: '/document',
      name: 'document-list',
      component: () => import('../views/DocumentList'),
    },
    {
      path: '/document-add',
      name: 'document-add',
      component: () => import('../views/DocumentAdd'),
    },
    {
      path: '/document/:documentId',
      name: 'document-detail',
      component: () => import('../views/DocumentDetail'),
    },
    {
      path: '/document/:documentId/pallet-load-add',
      name: 'pallet-load-add',
      component: () => import('../views/PalletLoadAdd'),
    },
    {
      path: '/document/:documentId/pallet-add',
      name: 'pallet-add',
      component: () => import('../views/PalletAdd'),
    },
    {
      path: '/document/:documentId/pallet/:palletId',
      name: 'pallet-detail',
      component: () => import('../views/PalletDetail'),
    },
    {
      path: '/document/:documentId/basket-unload-add',
      name: 'basket-unload-add',
      component: () => import('../views/BasketUnloadAdd'),
    },
    {
      path: '/document/:documentId/basket-add',
      name: 'basket-add',
      component: () => import('../views/BasketAdd'),
    },
    {
      path: '/document/:documentId/basket/:basketId',
      name: 'basket-detail',
      component: () => import('../views/BasketDetail'),
    },
    {
      path: '/bongkar-basket',
      name: 'bongkar-basket',
      component: () => import('../components/BongkarBasket'),
    },
    {
      path: '/muat-pallet',
      name: 'muat-pallet',
      component: () => import('../components/MuatPallet'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/Login'),
    },
  ],
})