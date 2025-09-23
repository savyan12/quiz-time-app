<template>
  <v-sheet class="card mx-auto" width="90%" height="153px">
    <img src="@/assets/images/cup.png" alt="cup" />
    <h2 class="title my-1">تحدي اليوم</h2>
    <p class="text">
      اكسب المزيد من النقاط عبر حل التحديات اليومية و تصدر ضمن افضل 50 طالب داخل التطبيق
    </p>
    <button class="btn">اختبر نفسك الان</button>
  </v-sheet>
</template>
<style scoped>
.card {
  padding: 5px;
  direction: rtl;
  position: relative;
  margin-top: 15px;
  background: #495eca;
  color: #ffffff;
  background-image: url('@/assets/background/card.png');
  background-repeat: no-repeat;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.title {
  font-size: 22px;
  font-weight: 700;
}
.text {
  font-size: 10px;
  width: 60%;
}
.btn {
  position: relative;
  top: 6%;
  right: 8%;
  width: 95px;
  height: 30px;
  border-radius: 10px;
  background: #ffffff;
  color: #495eca;
  font-size: 12px;
}
.btn:active {
  opacity: 0.7;
}
.v-sheet img {
  /* width: 45vw; */
  width: 180px;
  position: absolute;
  top: -39%;
  left: -8%;
  transform: rotate(-18deg);
}
</style>
