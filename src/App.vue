<template>
  <BottomNavigation />
  <router-view v-slot="{ Component, route }">
    <transition
      name="page"
      :enter-active-class="route.meta.animation.enterActive || 'animate__animated animate__fadeIn'"
      :leave-active-class="route.meta.animation.leaveActive || 'animate__animated animate__fadeOut'"
      mode="out-in"
    >
      <component :is="Component" :key="route.fullPath" />
    </transition>
  </router-view>
</template>
<script setup>
import BottomNavigation from './components/global/BottomNavigation.vue'
</script>
<style>
* {
  -webkit-user-select: none; /* Safari, iOS */
  -ms-user-select: none; /* IE/Edge */
  user-select: none; /* Standard */
}
input,
textarea {
  -webkit-user-select: text;
  -ms-user-select: text;
  user-select: text;
}

/* fonts */
/* Almarai */
@font-face {
  font-family: 'Almarai';
  src: url('@/assets/fonts/Almarai/Almarai-Regular.ttf');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Almarai';
  src: url('@/assets/fonts/Almarai/Almarai-Bold.ttf');
  font-weight: Bold;
  font-style: normal;
}
@font-face {
  font-family: 'Almarai';
  src: url('@/assets/fonts/Almarai/Almarai-ExtraBold.ttf');
  font-weight: 900;
  font-style: normal;
}
/* TheYearofHandicrafts */
@font-face {
  font-family: 'TheYearofHandicrafts';
  src: url('@/assets/fonts/TheYearofHandicrafts/TheYearofHandicrafts-Regular.otf');
  font-weight: 400;
  font-style: normal;
}
/* Nunito */
@font-face {
  font-family: 'Nunito';
  src: url('@/assets/fonts/Nunito/Nunito-Regular.ttf');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Nunito';
  src: url('@/assets/fonts/Nunito/Nunito-Bold.ttf');
  font-weight: Bold;
  font-style: normal;
}
@font-face {
  font-family: 'Nunito';
  src: url('@/assets/fonts/Nunito/Nunito-ExtraBold.ttf');
  font-weight: 900;
  font-style: normal;
}

/* css */
.primary-font {
  font-family: 'Almarai' !important;
}
.secondary-font {
  font-family: 'TheYearofHandicrafts';
}
.english-font {
  font-family: 'Nunito' !important;
}
* {
  padding: 0;
  margin: 0;
}
#app {
  position: relative;
  color: #2c3e50;
  width: 100%;
  min-height: 100vh;
  font-family: 'Almarai';
}

/*Animation duration */

.animate__animated {
  --animate-duration: 0.4s;
}
</style>
