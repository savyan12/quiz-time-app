<template>
  <div class="container">
    <v-layout>
      <NavigationDrawer
        :active="active"
        @update:active="
          (value) => {
            active = value
          }
        "
      />
    </v-layout>
    <div class="nav-bar">
      <v-avatar size="50" color="blue">
        <img
          class="w-100"
          src="data:image/webp;base64,UklGRpQCAABXRUJQVlA4TIgCAAAvv8QvAV9gJmCSUYEY1Caep5eXNRS0kcI8BvZyjz9UoKBtGyYt+0H+m/8A/H8DyRgEAY3lhBgQbsNeAoTItoU2sRAL1YCDEAdoqAUstA7QgIUa/PMhn88rvI3ovxNEkiQpCgrW7pTee9XXB+an8Zm7K/zHf/zHf/yXaVhaOuKzVvzHf/zHf/x3e9U5I+Y//uM//gsoS3wV/2V1lvgq/uM//uM//otnrV8s//Ef/917/MZX5UeW+Cr+uwKaS9LUxfIf//Ef//FfguUY3/j22KzwH//xH//xXyKj+Ys9xPAf//Hfpd4UX8V/V2JDfFUmY95Vxo4I//Ef//Ef/+VJxu4K/2U/pv+2esXXRaZkiK9K0rzjq/iP/4LKXCmNsDYr/JdlmuKr+I//+O+MmuKr7vnmkrTL2vjwH//xH/9dI7ziq/gv3K2HmLTEEF/Ff/zHf1mgKb6K/3rVXBL+4z/+4z/+y8N0Vx4lWTsi/Md//Md//Md//Md/aDDEV/Ef/138PEvSrjfkPVbKsyRFHiXhP/7jP/67u3jHV/Ef//Ef//Ef/6Wrjjr8x3/8x3/8x3/8x3/8x3/8dxXwVyn8x3/8x3/8d5MXX89F5z/+4z/+4z/+4z/+4z/+478Q1oVT74kR8x//8R//8V/qZF9j2f0W+Y//+I//+C+HcIqmvl0+ccT8x3/8x3/8l02ptbKmvmNu/uM//uM//kvD/JWkEVOvdYv4j//4j//4777vDD0EvdbUP3HEGz4qnf/4j//4j//yJI+SfJek1jyrTX27bDjiIhvebv7jP/7jP/7LgNQ6zQ1Vm/p2qTXifak1df7jP/7jP/7LbdQ6ug21/k+ot/tD4T/+4z/+47+swgw="
          alt="avatar"
        />
      </v-avatar>
      <div class="actions">
        <v-btn icon elevation="0" @click="active = true" variant="text">
          <v-icon size="25">qt:qt-menu</v-icon>
        </v-btn>
        <v-btn icon elevation="0" variant="text">
          <v-icon size="26">qt:qt-bell</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="welcome-message">
      <div class="text">
        <p>مرحباً سفيان</p>
        <v-icon color="#49ADF4" size="18">qt:qt-checkBadge</v-icon>
      </div>
      <p class="message">
        لديك <span>4 مهام </span>
        لم تنجزها بعد هذا الاسبوع
      </p>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import NavigationDrawer from './NavigationDrawer.vue'
const active = ref(false)
</script>
<style scoped>
.container {
  direction: rtl;
}
.nav-bar {
  margin-top: 10px;
  padding: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-bar .actions {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 5px;
}
.welcome-message {
  margin-top: 15px;
}
.welcome-message .text {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: bold;
}
.welcome-message .message {
  font-size: 14px;
}
.welcome-message .message span {
  color: red;
}
</style>
