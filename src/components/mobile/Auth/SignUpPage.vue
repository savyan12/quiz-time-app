<template>
  <div class="signup-page">
    <h1 class="secondary-font">إنشاء حساب</h1>
    <p>ابدأ مغامرتك معنا – كل شيء مميز يبدأ من هنا</p>
    <form @submit.prevent="">
      <TextInput placeholder=" الاسم الثلاثي" />
      <TextInput placeholder="رقم الهاتف" />
      <TextInput placeholder=" كلمة السر" type="password" />
      <TextInput placeholder=" تأكيد كلمة السر" type="password" />
      <span>هل نسيت كلمة السر ؟</span>
      <v-btn class="secondary-font" elevation="3" style="font-size: 20px">
        إنشاء حساب
      </v-btn>
      <h4 class="my-1" @click="$router.push('/auth/login')">عندك حساب ؟</h4>
      <div class="o-aurh-box">
        <p class="o-aurh-title">الاستمرار بإستخدام</p>
        <div class="box-btns">
          <v-btn elevation="0"><v-icon size="24">qt:qt-google</v-icon></v-btn>
          <v-btn elevation="0"><v-icon size="24">qt:qt-facebook</v-icon></v-btn>
          <v-btn elevation="0"><v-icon size="24">qt:qt-apple</v-icon></v-btn>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
import TextInput from "@/components/global/TextInput.vue";
</script>
<style scoped>
.signup-page {
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
h1 {
  margin-top: 90px;
  font-size: 35px;
  background: linear-gradient(to left, #ffc233, #6cbc7f, #52c7db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
p {
  color: #b6b4b4;
  font-size: 13px;
}
form {
  padding: 5px;
  margin-top: 5px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}
form span {
  padding: 0 10px;
  font-size: 12px;
  align-self: flex-start;
  color: #b6b4b4;
}
form .v-btn {
  width: 90%;
  height: 45px;
  border-radius: 10px;
  color: #ffffff;
  background: linear-gradient(to left, #ffc233, #6cbc7f, #52c7db);
}
form .o-aurh-box {
  margin-top: -20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
form .o-aurh-box .o-aurh-title {
  margin-top: 15px;
  font-size: 14px;
  font-weight: bold;
  background: linear-gradient(to left, #ffc233, #6cbc7f, #52c7db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
form .o-aurh-box .box-btns {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 10px;
}
form .o-aurh-box .box-btns .v-btn {
  width: 80px;
  height: 50px;
  margin-top: 15px;
  background: #ececec;
  color: black;
}
</style>
