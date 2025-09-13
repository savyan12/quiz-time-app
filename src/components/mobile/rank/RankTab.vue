<template>
  <v-tabs-window-item class="tab" :value="tab">
    <div class="top-3">
      <TopUser class="rank-3" :isNumberOne="false" />
      <TopUser class="rank-1" :isNumberOne="true" />
      <TopUser class="rank-2" :isNumberOne="false" />
    </div>
    <img class="stage-top-3" src="@/assets/images/top3.svg" alt="stage for top 3" />
  </v-tabs-window-item>
</template>
<script setup>
import TopUser from './TopUser.vue'

defineProps({
  tab: { type: Number, requir: true },
})
</script>
<style scoped>
.tab {
  width: 100%;
  min-height: 50vh;
  margin: 40px 0;
}
.stage-top-3 {
  position: relative;
  top: 15vh;
  width: 90%;
  right: 5%;
}
.top-3 {
  padding: 0 5%;
  width: 100%;
  position: absolute;
  top: 3%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 100;
}
.top-3 .rank-3 {
  position: relative;
  top: 8vh;
}
.top-3 .rank-2 {
  position: relative;
  top: 4vh;
}
</style>
