<template>
  <div class="select-quiz-page">
    <v-container>
      <QuizSelectHeader />
      <QuizzesList />
    </v-container>
  </div>
</template>
<script setup>
import QuizSelectHeader from './QuizSelectHeader.vue'
import QuizzesList from './QuizzesList.vue'
</script>
<style scoped>
.select-quiz-page {
  width: 100%;
  min-height: 100vh;
}
</style>
