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
          <v-card class="rounded-xl" width="100%" min-height="80" elevation="0" dir="rtl">
            <div class="text">
              <v-card-title> مهمة </v-card-title>
              <v-card-actions class="mx-2">
                <v-chip color="#F82B74" size="small">رياضة 1</v-chip>
                <div class="time">
                  <p :style="`color:#F82B74`">1d:3h</p>
                  <v-icon size="15" color="red">qt:qt-clock</v-icon>
                </div>
              </v-card-actions>
            </div>
            <div class="edits" v-if="0">
              <v-btn color="green" variant="plain" icon><v-icon>qt:qt-pen</v-icon></v-btn>
            </div>
            <div class="delete" v-else-if="0">
              <v-btn color="red" variant="plain" icon><v-icon>qt:qt-trashOutlined</v-icon></v-btn>
            </div>
          </v-card>
          <div class="actions">
            <v-btn color="#FF0000" size="50" variant="tonal" icon
              ><v-icon size="23">qt:qt-trash</v-icon></v-btn
            >
            <v-btn color="#0F8707" size="50" variant="tonal" icon
              ><v-icon size="25">qt:qt-circlePlus</v-icon></v-btn
            >
          </div>
        </v-container>
      </v-main>
    </v-layout>
  </div>
</template>
<script setup></script>
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
