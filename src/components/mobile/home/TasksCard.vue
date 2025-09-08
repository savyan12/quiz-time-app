<template>
  <div class="tasks-card mt-8">
    <div class="header">
      <div class="title">
        <v-icon size="20">fas fa-circle-info</v-icon>
        <h4>4 مهام لم تنجز</h4>
      </div>
      <v-btn variant="text" to="/auth/login">عرض المزيد</v-btn>
    </div>
    <v-row class="my-1">
      <v-col cols="6" v-for="value in 4" :key="value">
        <v-card elevation="0">
          <v-card-title style="font-size: 15px">كلام كلام كلام بللاللابللب</v-card-title>
          <div class="time-and-type">
            <v-chip color="#F82B74" size="small">رياضة 1</v-chip>
            <div class="time">
              <p>1d:3h</p>
              <v-icon size="15" color="red">qt:qt-clock</v-icon>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
const titleModify = (title) => {
  return title.split(' ', 2).join('  ') + ' ...'
}
</script>
<style scoped>
.tasks-card {
  direction: rtl;
}
.tasks-card .v-btn {
  color: #2c3e50;
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
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
