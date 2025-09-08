<template>
  <div class="Appointment">
    <div class="header">
      <div class="title">
        <h3>المواعيد</h3>
      </div>
      <v-btn variant="text" to="/auth/login">عرض المزيد</v-btn>
    </div>
    <v-card class="text-center text-white" width="100%" height="70" elevation="0">
      <div class="div1">
        <h4>كورس الكترونية 2</h4>
        <h6 class="my-1">م.وداد الفرجاني</h6>
      </div>
      <v-divider
        class="border-opacity-50"
        color="#ffffff"
        :thickness="3"
        vertical
        inset
      ></v-divider>
      <div class="div2">
        <div class="time my-1">
          <h4><span>2:00</span> م</h4>
          <v-icon size="18">fas fa-arrow-left</v-icon>
          <h4><span>4:00</span> م</h4>
        </div>
        <h6><v-icon size="12">qt:qt-clock</v-icon> متبقي ساعة ونصف</h6>
      </div>
    </v-card>
  </div>
</template>
<style scoped>
.Appointment {
  direction: rtl;
}
.header {
  margin: 10px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.v-card {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(to right, #ffc233, #6cbc7f);
  border-radius: 20px;
}
.div2 .time {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
