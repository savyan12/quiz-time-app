<template>
  <div class="select-quiz-page">
    <v-container>
      <QuizSelectHeader />
      <QuizzesList bg="#4FC7D9" border="#0D9FB5" />
      <QuizzesList bg="#FFDC6E" border="#CFA214" />
      <QuizzesList bg="#C6E672" border="#93CA07" />
      <br />
      <br />
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
