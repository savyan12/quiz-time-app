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
          enterActive: '',
          leaveActive: '',
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
          enterActive: 'animate__animated animate__fadeInDown',
          leaveActive: 'animate__animated animate__fadeOutDown',
        },
      },
      component: () => import('../Views/HomeView.vue'),
    },
    {
      path: '/library',
      name: 'library',
      meta: {
        hideBottomNavigation: false,
        animation: {
          isAnimated: true,
          enterActive: 'animate__animated animate__fadeInDown',
          leaveActive: 'animate__animated animate__fadeOutDown',
        },
      },
      component: () => import('../Views/LibraryView.vue'),
    },
    {
      path: '/rank',
      name: 'rank',
      meta: {
        hideBottomNavigation: false,
        animation: {
          isAnimated: true,
          enterActive: 'animate__animated animate__fadeInDown',
          leaveActive: 'animate__animated animate__fadeOutDown',
        },
      },
      component: () => import('../Views/RankView.vue'),
    },
    {
      path: '/specializations',
      name: 'specializations',
      meta: {
        hideBottomNavigation: false,
        animation: {
          isAnimated: true,
          enterActive: 'animate__animated animate__fadeInDown',
          leaveActive: 'animate__animated animate__fadeOutDown',
        },
      },
      component: () => import('../Views/SpecializationsView.vue'),
    },
    {
      path: '/home/tasks',
      name: 'tasks',
      meta: {
        hideBottomNavigation: true,
        animation: {
          isAnimated: true,
          enterActive: 'animate__animated animate__fadeInUp',
          leaveActive: 'animate__animated animate__fadeOutUp',
        },
      },
      component: () => import('../Views/tools/TasksView.vue'),
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
