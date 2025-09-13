<template>
  <v-app-bar elevation="0">
    <div class="container">
      <v-btn variant="text" :ripple="false" icon @click="$emit('go-back')"
        ><v-icon class="" size="20" v-show="tab != 1">fas fa-chevron-left</v-icon></v-btn
      >
      <h3>{{ title }}</h3>
      <v-btn :ripple="false" icon @click="$emit('change-mode')"
        ><v-icon class="mx-2" size="22" v-show="addMode">fas fa-close</v-icon></v-btn
      >
    </div>
  </v-app-bar>
</template>
<script setup>
defineProps({
  tab: {
    type: Number,
    require: true,
  },
  title: {
    type: String,
  },
  addMode: {
    type: Boolean,
  },
})
defineEmits(['go-back', 'change-mode'])
</script>

<style scoped>
.v-app-bar {
  width: 100% !important;
  height: 11% !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  margin-top: 18px;
  padding: 5px 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.container h3 {
  text-wrap: nowrap;
}
</style>
