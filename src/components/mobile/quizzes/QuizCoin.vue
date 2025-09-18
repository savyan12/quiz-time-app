<template>
  <div
    class="coin"
    :style="`
  background: ${bg};
  border-bottom: ${border} solid 6px;
  border-left: ${border} solid 1px;`"
    @click="sheet = !sheet"
  >
    <div class="coin-head">
      <v-icon class="coin-icon" color="#ffffff" size="34">fas fa-star</v-icon>
      <CoinHead class="svg" color="#ffffff6f" />
    </div>
  </div>
  <v-bottom-sheet v-model="sheet">
    <v-card class="quiz-info-card" height="50vh" elevation="0">
      <h1
        class="text-gradient primary-font"
        :style="`
      background: linear-gradient(to right, ${bg}, ${border});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      `"
      >
        جزئية النصفي
      </h1>
      <div class="points-container" elevation="2">
        <v-icon size="44" color="#FCC416">fas fa-bolt-lightning</v-icon>
        <h1 style="color: #fcc416">25</h1>
      </div>
      <div class="info w-100">
        <div class="item primary-font">
          <h4
            :style="`
      background: linear-gradient(to right, ${bg}, ${border});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      `"
          >
            عدد الاسئلة
          </h4>
          <v-icon :color="border">fas fa-clipboard-list</v-icon>
          <div
            :style="`
      background: linear-gradient(to right, ${bg}, ${border});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      `"
            style="display: flex; align-items: center; justify-content: center; gap: 1px"
          >
            <p>سؤال</p>
            <p>12</p>
          </div>
        </div>
        <div class="item primary-font">
          <h4
            :style="`
      background: linear-gradient(to right, ${bg}, ${border});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      `"
          >
            الوقت
          </h4>
          <v-icon :color="border">fas fa-clock</v-icon>
          <div
            :style="`
      background: linear-gradient(to right, ${bg}, ${border});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      `"
          >
            15 min
          </div>
        </div>
      </div>
      <v-btn
        class="btn-start w-100 primary-font"
        :style="`background: linear-gradient(to right, ${bg}, ${border});color: #ffffff;`"
        size="60px"
        style="border-radius: 15px"
        elevation="0"
        ><h2>بدء الاختبار</h2></v-btn
      >
    </v-card>
  </v-bottom-sheet>
</template>
<script setup>
import CoinHead from '@/components/icons/Coin-Head.vue'
import { ref } from 'vue'
const sheet = ref(false)
defineProps({
  bg: {
    type: String,
  },
  border: {
    type: String,
  },
})
</script>
<style scoped>
.coin {
  /* direction: rtl; */
  position: relative;
  margin: 10px 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.coin:active {
  border-bottom: none !important;
  border-left: none !important;
}

.coin .coin-head {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
}

.coin .coin-head .svg {
  width: 7.2rem;
  margin: 0 -7vw;
}
.coin .coin-head .coin-icon {
  position: absolute;
  top: 50%;
  left: 47%;
  transform: translate(-50%, -50%);
}
.quiz-info-card {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
}

.points-container {
  width: 41%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 15px;
  box-shadow: 0 2px 13px -3px rgba(97, 97, 97, 0.69);
}
.info {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;
}
.info .item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
</style>
