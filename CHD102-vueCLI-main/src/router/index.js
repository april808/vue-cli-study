import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
// import AboutView from '@/views/AboutView.vue'

const routesUser = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // component: AboutView
    component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import(/* webpackChunkName: "products" */ '@/views/ProductView.vue')
  },
  {
    path: '/productDetail/:id',
    name: 'productDetail',
    component: () => import(/* webpackChunkName: "productDetail" */ '@/views/ProductDetailView.vue')
  },
  {
    path: '/productModify/:id',
    name: 'ProductModify',
    component: () => import(/* webpackChunkName: "ProductModify" */ '@/views/ProductModifyView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/LoginView.vue')
  },
  {
    path: '/weather',
    name: 'weather',
    component: () => import(/* webpackChunkName: "weather" */ '@/views/WeatherView.vue')
  },
  {
    path: '/weatherMap',
    name: 'weatherMap',
    component: () => import(/* webpackChunkName: "weatherMap" */ '@/views/WeatherMapView.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/User/UserIndex.vue'),
    children: [
      // {
      //   path: '',
      //   component: () => import('@/views/User/UserLink.vue'),
      // },
      // {
      //   path: '/user/info',
      //   component: () => import('@/views/User/UserInfo.vue'),
      // },
      // {
      //   path: '/user/order',
      //   component: () => import('@/views/User/UserOrder.vue'),
      // }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routesUser,
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
		// 始终滚动到顶部
    return { top: 0 }
  }
})

export default router
