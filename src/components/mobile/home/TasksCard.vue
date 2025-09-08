<template>
  <div class="tasks-card mt-8">
    <div class="header">
      <div class="title">
        <v-icon size="20">fas fa-circle-info</v-icon>
        <h4>4 مهام لم تنجز</h4>
      </div>
      <v-btn variant="text" to="/auth/login">عرض المزيد</v-btn>
    </div>
    <div class="tasks my-1">
      <v-row class="pa-1">
        <v-col col="3" v-for="value in 4" :key="value">
          <v-sheet class="bg-white px-4" width="100%" height="85">
            <h4 class="w-100">المصفوفات</h4>
            <div class="time-and-type">
              <v-chip color="#C05AFF" size="small">رياضة 1</v-chip>
              <div class="time">
                <p>1d:3h</p>
              </div>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
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
.v-sheet {
  padding: 8px;
  border-radius: 15px;
}
.time-and-type {
  margin-top: 20px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 15px;
}
</style>
