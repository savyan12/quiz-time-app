import WelcomeView from '@/Views/WelcomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      meta: {
        hideBottomNavigation: true,
        animation: {
          isAnimated: true,
          enterActive: 'animate__animated animate__zoomIn',
          leaveActive: 'animate__animated animate__zoomOut',
        },
      },
      component: WelcomeView,
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        hideBottomNavigation: false,
        animation: {
          isAnimated: true,
          enterActive: 'animate__animated animate__slideInUp',
          leaveActive: 'animate__animated animate__slideOutUp',
        },
      },
      component: () => import('../Views/HomeView.vue'),
    },
    {
      path: '/rank',
      name: 'rank',
      meta: {
        hideBottomNavigation: false,
        animation: {
          isAnimated: true,
          enterActive: 'animate__animated animate__slideInRight',
          leaveActive: 'animate__animated animate__slideOutLeft',
        },
      },
      component: () => import('../Views/RankView.vue'),
    },
    {
      path: '/auth/login',
      name: 'login',
      meta: {
        hideBottomNavigation: true,
        animation: {
          isAnimated: true,
          enterActive: 'animate__animated animate__slideInRight',
          leaveActive: 'animate__animated animate__slideOutLeft',
        },
      },
      component: () => import('../Views/auth/LoginView.vue'),
    },
    {
      path: '/auth/signup',
      name: 'signup',
      meta: {
        hideBottomNavigation: true,
        animation: {
          isAnimated: true,
          enterActive: 'animate__animated animate__slideInLeft',
          leaveActive: 'animate__animated animate__slideOutRight',
        },
      },
      component: () => import('../Views/auth/SignUpView.vue'),
    },
    {
      path: '/auth/info',
      name: 'userInfo',
      meta: {
        hideBottomNavigation: true,
        animation: {
          isAnimated: true,
          enterActive: 'animate__animated animate__slideInLeft',
          leaveActive: 'animate__animated animate__slideOutRight',
        },
      },
      component: () => import('../Views/auth/UserInfoView.vue'),
    },
  ],
})

export default router
