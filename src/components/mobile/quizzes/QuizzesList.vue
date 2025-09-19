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
      <transition
        enter-active-class="animate__animated animate__fadeInTopLeft"
        leave-active-class="animate__animated animate__fadeOutTopLeft"
      >
        <div class="tool-tip" :style="`--tooltip-bg: ${border};;`" v-show="toolTip">
          <h4>إرشادات</h4>
          <div class="my-4">
            <div class="row">
              <h5>يرمز إلى وجود منهج نصفي</h5>
              <v-icon size="20" color="#4FC7D9">fas fa-circle</v-icon>
            </div>
            <div class="row">
              <h5>يرمز إلى وجود منهج نهائي</h5>
              <v-icon size="20" color="#FFDC6E">fas fa-circle</v-icon>
            </div>
            <div class="row">
              <h5>يرمز إلى وجود اسئلة سنوات و مراجعة</h5>
              <v-icon size="20" color="#C6E672">fas fa-circle</v-icon>
            </div>
            <div class="row">
              <h5>يرمز إلى اسئلة و افكار مستوى وحش</h5>
              <v-icon size="20" color="#EA1C1C">fas fa-skull</v-icon>
            </div>
            <div class="row">
              <h5>ترمز إلى وجود أسئلة إمتحانات نهائية</h5>
              <v-icon size="20" color="#C6E672">fas fa-leaf</v-icon>
            </div>
          </div>
          <v-divider class="mx-auto my-3" :thickness="1" opacity="0.6" />
          <ul class="text-start" dir="rtl">
            <li>كل دائرة تحتوي على اختبار مختلف و مجموع نقاط مختلف</li>
            <li>
              يمكن تحصيل النقاط من المحاولة الأولى فقط من كل إختبار وعند إجراء الإختبار من جديد لا
              تحسب
            </li>
          </ul>
        </div>
      </transition>
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
  min-height: 35%;
  position: absolute;
  top: 14%;
  left: 10px;
  border-radius: 15px;
  padding: 15px;
  z-index: 100;
  text-align: end;
  color: #626262;
  background: #ffffff;
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
.row {
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
}
ul {
  padding: 0 14px;
}
ul li {
  margin: 6px 0;
  font-size: 13px;
}
</style>
