<template>
  <div class="coin" @click="overlay = !overlay">
    <div class="coin-head">
      <v-icon class="coin-icon" color="#ffffff" size="34">fas fa-star</v-icon>
      <CoinHead class="svg" color="#2ddffaee" />
    </div>
  </div>
  <v-overlay v-model="overlay">
    <v-card class="quiz-info-card" width="73vw" height="50vh" elevation="0">
      <h1 class="text-gradient primary-font">جزئية النصفي</h1>
      <v-sheet class="points-container" width="45%" height="28%" elevation="3" rounded="xl">
        <v-icon size="44" color="#FCC416">fas fa-bolt-lightning</v-icon>
        <h1 style="color: #fcc416">25</h1>
      </v-sheet>
      <div class="info w-100">
        <div class="item primary-font">
          <h4 class="text-gradient">عدد الاسئلة</h4>
          <v-icon color="#4fc7d9">fas fa-clipboard-list</v-icon>
          <h5 class="text-gradient"><span>سؤال</span> 12</h5>
        </div>
        <div class="item primary-font">
          <h4 class="text-gradient">الوقت</h4>
          <v-icon color="#4fc7d9">fas fa-clipboard-list</v-icon>
          <h5 class="text-gradient">15 min</h5>
        </div>
      </div>
      <v-btn
        class="btn-start w-100 primary-font"
        size="60px"
        style="border-radius: 15px"
        elevation="0"
        ><h2>بدء الاختبار</h2></v-btn
      >
    </v-card>
  </v-overlay>
</template>
<script setup>
import CoinHead from '@/components/icons/Coin-Head.vue'
import { ref } from 'vue'
const overlay = ref(false)
</script>
<style scoped>
.coin {
  /* direction: rtl; */
  position: relative;
  margin: 10px 0;
  width: 80px;
  height: 80px;
  background: #42c2d5;
  border-radius: 50%;
  border-bottom: #0d9fb5 solid 6px;
  border-left: #0d9fb5 solid 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.coin:active {
  border-bottom: none;
  border-left: none;
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
.v-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
}
.quiz-info-card {
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  border-radius: 20px;
}
.quiz-info-card .btn-start {
  background: linear-gradient(to right, #4fc7d9, #2a6973);
  color: #ffffff;
}
.points-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.text-gradient {
  background: linear-gradient(to right, #4fc7d9, #2a6973);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
