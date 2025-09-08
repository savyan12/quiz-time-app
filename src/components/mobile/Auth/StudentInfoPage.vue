<template>
  <div class="info-page">
    <h1 class="welcome-text secondary-font">اهلاً وسهلاً</h1>
    <h2 class="welcome-text secondary-font">سفيان الترهوني</h2>
    <img class="w-50" src="@/assets/images/Student.png" alt="student" />
    <v-locale-provider rtl>
      <div class="select">
        <SelectItems label="القسم" color="#D5C049" bg-color="#F7F7F7" />
        <SelectItems
          style="margin-top: -10px"
          label="الفصل الدراسي"
          color="#D5C049"
          bg-color="#F7F7F7"
        />
      </div>
    </v-locale-provider>
    <v-btn class="secondary-font" style="font-size: 20px"> التالي</v-btn>
  </div>
</template>
<script setup>
import SelectItems from "@/components/global/SelectItems.vue";
</script>
<style scoped>
.info-page {
  direction: rtl;
  padding: 5px;
  width: 100%;
  min-height: 100vh;
  background-image: url("@/assets/background/auth.png");
  background-size: 100vw 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.info-page img,
h1 {
  margin-top: 50px;
}
.info-page h1 {
  color: #78ce8f;
}
.info-page h2 {
  color: #3ecaff;
  margin: 0 25px;
}
.info-page .welcome-text {
  align-self: flex-start;
  padding: 0 30px;
}
.select {
  width: 90%;
}
.v-btn {
  width: 60%;
  height: 50px;
  background: linear-gradient(to left, #6cbc7f, #86db9a);
  color: #ffffff;
  font-size: 15px;
  border-radius: 10px;
}
</style>
