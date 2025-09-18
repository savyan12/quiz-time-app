<template>
  <div class="select-quiz-page">
    <v-container>
      <QuizSelectHeader />
      <QuizzesList
        v-for="(quiz, i) in quizzes"
        :key="`quzi-${i}`"
        :bg="colors[i].bg"
        :border="colors[i].border"
        :data="quiz"
      />
      <br />
      <br />
    </v-container>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import QuizSelectHeader from './QuizSelectHeader.vue'
import QuizzesList from './QuizzesList.vue'
const colors = ref([
  { bg: '#4FC7D9', border: '#0D9FB5' },
  { bg: '#FFDC6E', border: '#CFA214' },
  { bg: '#C6E672', border: '#93CA07' },
])
const quizzes = ref([
  {
    title: 'كهربائية 2 - جزئية النصفي',
    quiz_list: [
      {
        name: 'التيار المتردد',
        icon: { name: 'fas fa-star' },
        total_time: 20,
        total_questions: 14,
      },
      {
        name: 'المقاومات في الدوائر',
        icon: { name: 'fas fa-star' },
        total_time: 15,
        total_questions: 12,
      },
      { name: 'المكثفات', icon: { name: 'fas fa-star' }, total_time: 25, total_questions: 18 },
      { name: 'أسئلة خارقة', icon: { name: 'fas fa-skull' }, total_time: 30, total_questions: 16 },
      { name: 'قانون أوم', icon: { name: 'fas fa-star' }, total_time: 10, total_questions: 8 },
      { name: 'تحليل الدوائر', icon: { name: 'fas fa-star' }, total_time: 35, total_questions: 20 },
      { name: 'أسئلة سنوات', icon: { name: 'fas fa-leaf' }, total_time: 18, total_questions: 11 },
    ],
  },
  {
    title: 'كهربائية 2 - جزئية النهائي',
    quiz_list: [
      { name: 'تحليل فورييه', icon: { name: 'fas fa-star' }, total_time: 25, total_questions: 15 },
      {
        name: 'التيار المتناوب ثلاثي الطور',
        icon: { name: 'fas fa-star' },
        total_time: 30,
        total_questions: 20,
      },
      { name: 'قدرة الدوائر', icon: { name: 'fas fa-star' }, total_time: 22, total_questions: 13 },
      { name: 'أسئلة خارقة', icon: { name: 'fas fa-skull' }, total_time: 28, total_questions: 18 },
      { name: 'الطور والفاز', icon: { name: 'fas fa-star' }, total_time: 26, total_questions: 14 },
      {
        name: 'الرنين الكهربائي',
        icon: { name: 'fas fa-star' },
        total_time: 18,
        total_questions: 12,
      },
      { name: 'أسئلة سنوات', icon: { name: 'fas fa-leaf' }, total_time: 35, total_questions: 21 },
    ],
  },
  {
    title: 'كهربائية 2 - أسئلة امتحانات',
    quiz_list: [
      { name: 'امتحان 2020', icon: { name: 'fas fa-leaf' }, total_time: 40, total_questions: 25 },
      { name: 'امتحان 2021', icon: { name: 'fas fa-skull' }, total_time: 45, total_questions: 30 },
      { name: 'امتحان 2022', icon: { name: 'fas fa-leaf' }, total_time: 35, total_questions: 20 },
      { name: 'امتحان 2023', icon: { name: 'fas fa-skull' }, total_time: 50, total_questions: 32 },
      {
        name: 'امتحان تجريبي - 1',
        icon: { name: 'fas fa-leaf' },
        total_time: 38,
        total_questions: 22,
      },
      {
        name: 'امتحان تجريبي - 2',
        icon: { name: 'fas fa-skull' },
        total_time: 42,
        total_questions: 28,
      },
      { name: 'امتحان شامل', icon: { name: 'fas fa-leaf' }, total_time: 60, total_questions: 40 },
    ],
  },
])
</script>
<style scoped>
.select-quiz-page {
  width: 100%;
  min-height: 100vh;
}
</style>
