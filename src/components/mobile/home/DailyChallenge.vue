<template>
  <v-sheet class="card mx-auto" width="95%" height="160" elevation="1">
    <img src="@/assets/images/quiz-time-cup.png" alt="cup" />
    <div class="container">
      <div class="text-box">
        <h2 class="title my-1">تحدي اليوم</h2>
        <p class="text">
          اكسب المزيد من النقاط عبر حل التحديات اليومية و تصدر ضمن افضل 50 طالب داخل التطبيق
        </p>
        <button class="btn">اختبر نفسك الان</button>
      </div>
    </div>
  </v-sheet>
</template>
<style scoped>
.card {
  padding: 10px;
  direction: rtl;
  position: relative;
  margin-top: 15px;
  background: #495eca;
  background-image: url('@/assets/background/card.png');
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.container {
  width: 60%;
  display: flex;
  z-index: 100;
  color: #ffffff;
  text-align: start;
}
.container .text-box .text {
  font-size: 12px;
}
.container .text-box .btn {
  margin: 10px;
  width: 95px;
  height: 35px;
  border-radius: 10px;
  background: #ffffff;
  color: #495eca;
  font-size: 12px;
}
.v-sheet img {
  width: 246px;
  position: absolute;
  top: -43%;
  left: -20%;
}
</style>
