<template>
  <div class="tasks">
    <v-layout>
      <v-app-bar class="pa-1 py-2" elevation="0">
        <div class="container">
          <v-btn color="#0F172A" variant="text" icon to="/home"
            ><v-icon class="mt-1" size="20">fas fa-chevron-left</v-icon></v-btn
          >
          <h3>المهام</h3>
        </div>
      </v-app-bar>
      <v-main class="mt-10">
        <v-container>
          <SwipAction v-for="(task, i) in tasks" :key="task" :animate="i === 0">
            <template v-slot:item>
              <v-card class="px-1 mb-4" width="100%" min-height="80" elevation="0" dir="rtl">
                <div class="text">
                  <v-card-title> {{ task.title }} </v-card-title>
                  <v-card-actions class="mx-2">
                    <v-chip color="#12A6EC" size="small">{{ task.type }}</v-chip>
                    <div class="time">
                      <p :style="`color:#F82B74`">{{ task.time }}</p>
                      <v-icon size="15" color="red">qt:qt-clock</v-icon>
                    </div>
                  </v-card-actions>
                </div>
              </v-card>
            </template>
          </SwipAction>

          <div class="actions">
            <v-btn size="50" color="#ffffff" icon elevation="0"
              ><v-icon size="25" color="#0F8707">qt:qt-circlePlus</v-icon></v-btn
            >
          </div>
        </v-container>
      </v-main>
    </v-layout>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import SwipAction from '../global/SwipAction.vue'

const mode = ref(null)
const tasks = ref([
  {
    title: 'تسليم تقرير المهارات',
    type: 'مهارات',
    time: '2d:1h',
  },
  {
    title: 'تسليم تقرير المهارات',
    type: 'مهارات',
    time: '2d:1h',
  },
  {
    title: 'تسليم تقرير المهارات',
    type: 'مهارات',
    time: '2d:1h',
  },
  {
    title: 'تسليم تقرير المهارات',
    type: 'مهارات',
    time: '2d:1h',
  },
  {
    title: 'تسليم تقرير المهارات',
    type: 'مهارات',
    time: '2d:1h',
  },
  {
    title: 'تسليم تقرير المهارات',
    type: 'مهارات',
    time: '2d:1h',
  },
  {
    title: 'تسليم تقرير المهارات',
    type: 'مهارات',
    time: '2d:1h',
  },
  {
    title: 'تسليم واجب الإحصاء',
    type: 'إحصاء',
    time: '1d:5h',
  },
  {
    title: 'تقرير معمل إلكترونية 2',
    type: 'إلكترونية 2',
    time: '3d:2h',
  },
  {
    title: 'تنزيل linux',
    type: 'صيانة',
    time: '4d:6h',
  },
])
</script>
<style scoped>
.tasks {
  width: 100%;
  min-height: 100vh;
  background: #f5f5f5;
}
.container {
  margin-top: 24px;
  width: 100%;
  display: flex;
  align-items: center;
}
.container h3 {
  margin: 0 29%;
}
.time {
  display: flex;
  align-items: center;
  gap: 5px;
}
.actions {
  position: fixed;
  right: 18px;
  bottom: 15px;
  z-index: 100;
}
.v-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
}
</style>
