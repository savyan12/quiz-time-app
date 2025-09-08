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
          enterActive: 'animate__animated animate__slideInUp',
          leaveActive: 'animate__animated animate__slideOutDown',
        },
      },
      component: WelcomeView,
    },
  ],
})

export default router
