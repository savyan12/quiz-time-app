<template>
  <div class="tasks">
    <v-layout>
      <v-app-bar class="pa-1 py-2" elevation="0">
        <div class="container">
          <v-btn color="#0F172A" variant="text" icon to="/home"
            ><v-icon class="mt-1" size="20">fas fa-chevron-left</v-icon></v-btn
          >
          <h3>المهام</h3>
          <div v-if="mode != null">
            <v-icon size="20" @click="changeMoode(null)">fas fa-close</v-icon>
          </div>
        </div>
      </v-app-bar>
      <v-main class="mt-10">
        <v-container>
          <v-card
            class="rounded-xl px-1 mb-4"
            width="100%"
            min-height="80"
            v-for="task in tasks"
            :key="task"
            elevation="0"
            dir="rtl"
          >
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
            <div class="edits" v-if="mode === 'e'">
              <v-btn color="green" variant="plain" icon><v-icon>qt:qt-pen</v-icon></v-btn>
            </div>
            <div class="delete" v-else-if="mode === 'd'">
              <v-btn color="red" variant="plain" icon><v-icon>qt:qt-trashOutlined</v-icon></v-btn>
            </div>
          </v-card>
          <div class="actions">
            <v-btn color="#FF0000" size="50" variant="tonal" @click="changeMoode('d')" icon
              ><v-icon size="23">qt:qt-trash</v-icon></v-btn
            >
            <v-btn color="#0F8707" size="50" variant="tonal" @click="changeMoode('e')" icon
              ><v-icon size="25">qt:qt-circlePlus</v-icon></v-btn
            >
          </div>
        </v-container>
      </v-main>
    </v-layout>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const mode = ref(null)
const tasks = ref([
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
const changeMoode = (m) => {
  mode.value = m
}
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
  padding: 15px;
  position: fixed;
  bottom: 15px;
  left: 2px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.v-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
