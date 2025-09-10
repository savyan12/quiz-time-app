<template>
  <div class="loginPage">
    <h1 class="secondary-font">تسجيل الدخول</h1>
    <p>مرحباً بعودتك,ليك وحشة</p>
    <form @submit.prevent="">
      <TextInput placeholder="رقم الهاتف" />
      <TextInput placeholder=" كلمة السر" type="password" />
      <span>هل نسيت كلمة السر ؟</span>
      <v-btn class="secondary-font" elevation="3" style="font-size: 20px" to="/home"
        >تسجيل الدخول</v-btn
      >
      <h4 class="my-2" @click="$router.push('/auth/signup')">إنشاء حساب جديد</h4>
      <div class="o-aurh-box">
        <p class="o-aurh-title">الاستمرار بإستخدام</p>
        <div class="box-btns">
          <v-btn elevation="0"><v-icon size="24">qt:qt-google</v-icon></v-btn>
          <v-btn elevation="0"><v-icon size="24">qt:qt-apple</v-icon></v-btn>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
import TextInput from '@/components/global/TextInput.vue'
</script>
<style scoped>
.loginPage {
  direction: rtl;
  padding: 5px;
  width: 100%;
  min-height: 100vh;
  background-image: url('@/assets/background/auth.png');
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  margin-top: 45px;
  font-size: 35px;
  background: linear-gradient(to left, #ffc233, #6cbc7f, #52c7db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
p {
  margin-top: 25px;
  color: #b6b4b4;
  font-size: 14px;
}
form {
  padding: 5px;
  margin-top: 60px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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
