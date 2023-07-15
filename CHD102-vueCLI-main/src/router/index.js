import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
// import AboutView from '@/views/AboutView.vue'
import User from '@/views/User/UserIndex.vue'
// import UserHome from '@/views/User/UserHome.vue'
// import UserProfile from '@/views/User/UserProfile.vue'
// import UserPosts from '@/views/User/UserPosts.vue'

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
    component: () => import(/* webpackChunkName: "about" */ '@/views/ProductView.vue')
  },
  {
    path: '/productDetail/:id',
    name: 'productDetail',
    component: () => import(/* webpackChunkName: "about" */ '@/views/ProductDetailView.vue')
  },
  {
    path: '/user/:username',
    // component: AboutView
    component: () => import(/* webpackChunkName: "about" */ '@/views/User/UserIndex.vue'),
    children: [
			{ 
				// /user/:username
				path: '', 
				component: UserHome
			},
      {
        // /user/:username/profile
        path: 'profile',
        component: UserProfile,
      },
      {
        // /user/:username/posts
        path: 'posts',
        component: UserPosts,
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routesUser
})

export default router
