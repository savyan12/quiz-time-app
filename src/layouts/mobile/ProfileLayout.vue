<template>
  <div class="layout">
    <v-sheet width="100%" height="28vh">
      <v-icon size="20" color="#ffffff">fas fa-chevron-left</v-icon>
    </v-sheet>
    <v-card class="user-card bg-white" width="90%" height="28vh" elevation="1">
      <div class="user-avatar">
        <v-avatar size="65" color="blue"
          ><img
            src="data:image/webp;base64,UklGRpQCAABXRUJQVlA4TIgCAAAvv8QvAV9gJmCSUYEY1Caep5eXNRS0kcI8BvZyjz9UoKBtGyYt+0H+m/8A/H8DyRgEAY3lhBgQbsNeAoTItoU2sRAL1YCDEAdoqAUstA7QgIUa/PMhn88rvI3ovxNEkiQpCgrW7pTee9XXB+an8Zm7K/zHf/zHf/yXaVhaOuKzVvzHf/zHf/x3e9U5I+Y//uM//gsoS3wV/2V1lvgq/uM//uM//otnrV8s//Ef/917/MZX5UeW+Cr+uwKaS9LUxfIf//Ef//FfguUY3/j22KzwH//xH//xXyKj+Ys9xPAf//Hfpd4UX8V/V2JDfFUmY95Vxo4I//Ef//Ef/+VJxu4K/2U/pv+2esXXRaZkiK9K0rzjq/iP/4LKXCmNsDYr/JdlmuKr+I//+O+MmuKr7vnmkrTL2vjwH//xH/9dI7ziq/gv3K2HmLTEEF/Ff/zHf1mgKb6K/3rVXBL+4z/+4z/+y8N0Vx4lWTsi/Md//Md//Md//Md/aDDEV/Ef/138PEvSrjfkPVbKsyRFHiXhP/7jP/67u3jHV/Ef//Ef//Ef/6Wrjjr8x3/8x3/8x3/8x3/8x3/8dxXwVyn8x3/8x3/8d5MXX89F5z/+4z/+4z/+4z/+4z/+478Q1oVT74kR8x//8R//8V/qZF9j2f0W+Y//+I//+C+HcIqmvl0+ccT8x3/8x3/8l02ptbKmvmNu/uM//uM//kvD/JWkEVOvdYv4j//4j//4777vDD0EvdbUP3HEGz4qnf/4j//4j//yJI+SfJek1jyrTX27bDjiIhvebv7jP/7jP/7LgNQ6zQ1Vm/p2qTXifak1df7jP/7jP/7LbdQ6ug21/k+ot/tD4T/+4z/+47+swgw="
            alt="user-avatar"
            width="100%"
        /></v-avatar>
        <!-- <button>تغيير الصورة</button> -->
        <slot name="avatar-btn"></slot>
      </div>
      <div class="user-name">
        <h3>سفيان الترهوني</h3>
        <v-icon color="blue" size="19">qt:qt-checkBadge</v-icon>
      </div>
      <div class="user-points">
        عدد النقاط <span class="points">{{ 2000 }}</span> نقطة
      </div>
    </v-card>
    <slot name="template"></slot>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const points = ref(2000)
</script>
<style scoped>
.layout {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #f5f5f5;
}
.layout .v-sheet {
  background: linear-gradient(to bottom, #12a6eb, #0d68aa);
  padding: 10px;
}
.layout .v-sheet .v-icon {
  margin: 15px 8px;
}

.layout .user-card {
  direction: rtl;
  position: absolute;
  top: 9%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 20px;
  padding: 20px;
}
.layout .user-card .user-name {
  margin-top: 9px;
  display: flex;
  align-items: center;
  gap: 5px;
}
.layout .user-card .user-points {
  margin-top: 15px;
  font-size: 13px;
}
.layout .user-card .user-points .points {
  font-weight: bold;
  color: #ffac5f;
}
.layout .user-card .user-avatar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
