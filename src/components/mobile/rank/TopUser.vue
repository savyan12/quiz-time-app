<template>
  <div class="top">
    <img v-if="isNumberOne" class="number-1" src="@/assets/images/1.svg" alt="#1" />
    <v-avatar size="80" color="white"> </v-avatar>
    <h6 :class="[{ 'not-number-1': !isNumberOne }]">{{ userName }}</h6>
    <v-sheet width="70" height="30">{{ points }} نقطة</v-sheet>
  </div>
</template>
<script setup>
defineProps({
  isNumberOne: Boolean,
  userName: { type: String, requir: true },
  points: { type: Number, requir: true },
})
</script>
<style scoped>
.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
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
  font-size: 12px;
  text-align: center;
  padding: 5px;
  background: #9087e5;
  color: #ffffff;
}
h6 {
  font-size: 14px;
}

.not-number-1 {
  font-size: 13px;
}
</style>
