<template>
  <div class="tasks-card mt-8">
    <div class="header">
      <div class="title px-2">
        <v-icon color="red" size="20">qt:qt-circleInfo</v-icon>
        <h3>4 مهام لم تنجز</h3>
      </div>
      <v-btn variant="text" to="/home/tasks">عرض المزيد</v-btn>
    </div>
    <v-row class="my-1">
      <v-col cols="6" v-for="task in tasks" :key="task">
        <v-card elevation="0">
          <v-card-title style="font-size: 15px">{{ task.title }} </v-card-title>
          <div class="time-and-type">
            <v-chip color="#F82B74" size="small">{{ task.type }}</v-chip>
            <div class="time">
              <p>{{ task.time }}</p>
              <v-icon size="15" color="red">qt:qt-clock</v-icon>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
import { ref } from 'vue'

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
</script>
<style scoped>
.tasks-card {
  direction: rtl;
}
.tasks-card .v-btn {
  color: #2c3e50;
  font-size: 13px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title {
  display: flex;
  align-items: center;
  gap: 8px;
}
.v-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 9px 3px !important;
  height: 100px;
  border-radius: 20px;
}
.v-card .time-and-type {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
}
.v-card .time-and-type .time {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 5px;
}
</style>
