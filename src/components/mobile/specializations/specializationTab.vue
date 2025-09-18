<template>
  <v-window-item :value="tab">
    <div v-if="tab < 4">
      <div class="item" v-for="(item, i) in items" :key="i">
        <v-sheet @click="$emit('nextTab', i)">
          <h4>{{ itemKeyProp(item) }}</h4>
          <v-icon size="18">fas fa-chevron-left</v-icon></v-sheet
        >
        <hr v-if="i + 1 < items.length" />
      </div>
    </div>
    <v-card width="100%" elevation="0" v-else-if="tab === 4 && addMode">
      <v-item-group v-model="data" multiple>
        <div class="container">
          <v-item v-slot="{ isSelected, toggle }" v-for="(item, i) in items" :key="i" :value="item">
            <v-sheet class="subject-card" width="100%" height="80" elevation="1" @click="toggle">
              <v-avatar class="select-circle" size="17" :color="isSelected ? 'green' : 'white'">
                <v-icon size="10" color="white">fas fa-check</v-icon>
              </v-avatar>
              {{ itemKeyProp(item) }}
            </v-sheet>
          </v-item>
        </div>
      </v-item-group>
    </v-card>
    <v-card width="100%" elevation="0" v-else>
      <div class="container">
        <v-sheet
          class="subject-card"
          width="100%"
          height="80"
          v-for="(item, i) in items"
          :key="i"
          elevation="1"
          @click="$router.push({ name: 'selectQuiz', params: { id: i } })"
        >
          {{ itemKeyProp(item) }}
        </v-sheet>
      </div>
    </v-card>
  </v-window-item>
</template>
<script setup>
import { defineProps, defineEmits, ref } from 'vue'
const data = ref()
defineProps({
  tab: {
    type: Number,
    reqire: true,
  },
  items: {
    type: Array,
    reqire: true,
  },
  itemKeyProp: {
    type: Function,
    reqire: true,
  },
  addMode: {
    type: Boolean,
  },
})
defineEmits(['nextTab'])
</script>
<style lang="css" scoped>
.item hr {
  margin: 5px auto;
  background: #f5f5f5;
  width: 90%;
}
.item .v-sheet {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
}
.item .v-sheet:active {
  opacity: 0.7;
}
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  padding: 15px;
}
.container .subject-card {
  position: relative;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #473982;
  color: #ffffff;
  border-radius: 15px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
}
.select-circle {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
