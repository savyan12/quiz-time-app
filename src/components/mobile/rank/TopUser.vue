<template>
  <div class="top" :class="[{ 'not-number-1': !isNumberOne }]">
    <img v-if="isNumberOne" class="number-1" src="@/assets/images/1.svg" alt="#1" />
    <v-avatar size="80" color="white"> </v-avatar>
    <h6>احمد المسعي</h6>
    <v-sheet width="80" height="30">2,300 نقطة</v-sheet>
  </div>
</template>
<script setup>
defineProps({ isNumberOne: Boolean })
</script>
<style scoped>
.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  font-size: 22px;
  color: #ffffff;
}
.number-1 {
  position: absolute;
  top: -10px;
  z-index: 10;
}
.v-sheet {
  border-radius: 5px;
  font-size: 13px;
  text-align: center;
  padding: 5px;
  background: #9087e5;
  color: #ffffff;
}
.not-number-1 {
  font-size: 20px;
}
</style>
