<template>
  <div class="Activieties">
    <div class="header">
      <div class="title">
        <h4>اخر النشاطات</h4>
      </div>
      <v-btn variant="text" to="/auth/login">عرض المزيد</v-btn>
    </div>
    <v-card class="text-center text-white my-2" width="100%" height="60" elevation="0">
      <h3>رياضة 1</h3>
      <h4 class="text-yellow">ساعة ونصف</h4>
      <h3 style="display: flex; align-items: center; gap: 5px">
        <span class="text-yellow" style="font-size: 13px">نقطة</span> <span>25</span>
      </h3>
    </v-card>
  </div>
</template>
<style scoped>
.Activieties {
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
  background: linear-gradient(to left, #8a4bd3, #548ad8);
  border-radius: 20px;
}
</style>
