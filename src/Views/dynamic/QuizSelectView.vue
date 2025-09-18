<template>
  <div class="libary">
    <div class="mobile-render" v-if="xs">
      <QuizSelectPage />
    </div>
  </div>
</template>
<script setup>
import QuizSelectPage from '@/components/mobile/quizzes/QuizSelectPage.vue'
import { useDisplay } from 'vuetify/lib/composables/display'
const { xs } = useDisplay()
</script>
