<template>
  <div class="welcome-page">
    <h1 class="title english-font">Quiz Time</h1>
    <div class="image">
      <img src="@/assets/images/Knowledge.png" alt="alt" width="240" />
    </div>
    <div class="welcome-message">
      <h2>مرحباً بك !</h2>
      <p>
        هذا هو تطبيق الإختبارات الاول من نوعه موجه لطلبة
        <span class="text-blue">كلية التقنية الإلكترونية</span> يوفر اختبارات شاملة لكل المواد
        الدراسية
      </p>
    </div>
    <div class="btn-conatiner">
      <v-btn class="login" elevation="0" to="/auth/login">تسجيل الدخول</v-btn>
      <v-btn class="bg-transparent" elevation="0" to="/auth/signup">تسجيل</v-btn>
    </div>
  </div>
</template>
<style scoped>
.welcome-page {
  direction: rtl;
  padding: 20px;
  width: 100%;
  min-height: 100vh;
  background-image: url('@/assets/background/welcome.png');
  background-size: 100% 100vh;
  margin-bottom: 10px;
  /* flex  */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.welcome-page .image {
  width: 60%;
  margin: 0 auto;
}
.welcome-page .image img {
  width: 100%;
}
.title {
  margin-top: 30px;
  font-weight: 900;
  font-size: 45px;
  background: linear-gradient(to right, #ffc233, #6cbc7f, #52c7db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.welcome-message {
  margin: 5px 0px;
  align-self: flex-start;
  text-align: start;
}
.welcome-message h2 {
  margin: 15px 0;
  font-weight: 900;
  background: linear-gradient(to right, #ffc233c2 10%, #6cbc7f 85%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.welcome-message p {
  font-size: 14px;
  line-height: 25px;
  width: 90%;
  color: #756f6f;
}
.welcome-message span {
  display: inline-block;
  margin: 0 2px;
  font-weight: bold;
}
.btn-conatiner {
  margin-top: 25%;
  width: 70%;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between;
}
.v-btn {
  width: 55%;
  height: 55px;
  font-weight: bold;
  font-size: 15px;
  border-radius: 8px;
}
.login {
  background: linear-gradient(to right, #ffc233, #a7d630, #52c7db);
  color: #ffffff;
}
</style>
