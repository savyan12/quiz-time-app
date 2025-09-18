<template>
  <v-card class="list" elevation="0">
    <div class="quizzes-list">
      <div class="header-list" :style="`border-bottom: solid 3px ${border};`">
        <v-sheet class="header-list-title" :style="`background: ${bg};`" width="100%" height="100%">
          <h3>{{ data.title }}</h3>
          <h5>{{ data.quiz_list.length }} اختبارات</h5>
        </v-sheet>
        <button class="btn-list" :style="`background: ${bg};`" @click="toolTip = !toolTip">
          <v-icon size="20">qt:qt-book</v-icon>
        </button>
      </div>
      <!-- Tooltip 
      :style="`--tooltip-bg: ${bg};`" 
      -->
      <div class="tool-tip" :style="`--tooltip-bg: ${bg};;`" v-show="toolTip">
        <span>هذا مثال للتولتيب</span>
      </div>
    </div>
    <CoinsMap :data="data.quiz_list" :bg="bg" :border="border" />
    <br />
  </v-card>
</template>

<script setup>
import { ref, defineProps } from 'vue'
defineProps({
  bg: String,
  border: String,
  data: {
    type: Object,
  },
})
import CoinsMap from './CoinsMap.vue'
const toolTip = ref(false)
</script>

<style scoped>
.list {
  position: relative;
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
  color: #ffffff;
}

.quizzes-list .header-list-title {
  color: #ffffff;
  padding: 10px 20px;
}

.quizzes-list .btn-list {
  width: 24%;
  height: 100%;
  margin: 0 1px;
}

.quizzes-list .btn-list:active {
  opacity: 0.7;
}

/* Tooltip */
.tool-tip {
  width: 90%;
  height: 30%;
  position: absolute;
  top: 14%;
  left: 10px;
  border-radius: 15px;
  padding: 15px;
  z-index: 100;
  text-align: end;
  background: var(--tooltip-bg);
  color: #ffffff;
  box-shadow: 0 2px 13px -3px rgba(97, 97, 97, 0.69);
}

/* السهم */
.tool-tip::after {
  content: '';
  position: absolute;
  top: -20px;
  left: 4%;
  transform: rotate(180deg);
  border-width: 10px;
  border-style: solid;
  border-color: var(--tooltip-bg) transparent transparent transparent;
}
</style>
