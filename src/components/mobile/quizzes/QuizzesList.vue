<template>
  <v-card class="list" elevation="0">
    <div class="quizzes-list">
      <div class="header-list" :style="`border-bottom: solid 3px ${border};`">
        <v-sheet
          class="header-list-title"
          :style="`background: ${bg};
          `"
          width="100%"
          height="100%"
        >
          <h3>كهربائية 2 - جزئية النصفي</h3>
          <h5>2 وحدة ,7 اختبارات</h5>
        </v-sheet>
        <button class="btn-list" :style="`background: ${bg};`">
          <v-icon size="20">qt:qt-book</v-icon>
        </button>
      </div>
    </div>
    <CoinsMap :bg="bg" :border="border" />
    <br />
  </v-card>
</template>

<script setup>
defineProps({
  bg: {
    type: String,
  },
  border: {
    type: String,
  },
})
import CoinsMap from './CoinsMap.vue'
</script>

<style scoped>
.list {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.quizzes-list {
  width: 100%;
  margin-top: 5vh;
  border-radius: 15px;
  overflow: hidden;
}
.quizzes-list .header-list {
  width: 100%;
  height: 9vh;
  direction: rtl;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-bottom: solid 3px #0d9fb5; */
  color: #ffffff;
}
.quizzes-list .header-list-title {
  color: #ffffff;
  padding: 9px;
}
.quizzes-list .btn-list {
  width: 24%;
  height: 100%;

  margin: 0 1px;
}
.quizzes-list .btn-list:active {
  opacity: 0.7;
}
</style>
