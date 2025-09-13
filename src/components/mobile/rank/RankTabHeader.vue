<template>
  <v-item-group class="tabs" @change="$emit('modelValue', $event.target.value)" :v-model="tab">
    <v-item v-slot="{ isSelected, toggle }" :value="0">
      <v-sheet
        class="tab-card bg-transparent"
        :class="[{ 'active-tab': isSelected }]"
        width="120"
        height="40"
        rounded="lg"
        @click="toggle"
        >كل الاوقات</v-sheet
      >
    </v-item>
    <v-item v-slot="{ isSelected, toggle }" :value="1">
      <v-sheet
        class="tab-card bg-transparent"
        :class="[{ 'active-tab': isSelected }]"
        width="120"
        height="40"
        rounded="lg"
        @click="toggle"
        >الاسبوعي</v-sheet
      >
    </v-item>
  </v-item-group>
</template>
<script setup>
import { ref } from 'vue'

const tab = ref(0)
defineEmits(['modelValue'])
</script>
<style scoped>
.rank-page .tabs {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.tab-card {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff !important;
  font-weight: bold;
}
.active-tab {
  background: #24c9f3 !important;
}
</style>
