<template>
  <div class="profile-page">
    <ProfileLayout>
      <template v-slot:avatar-btn>
        <button class="button">تغيير الصورة</button>
      </template>
      <template v-slot:template>
        <br />
        <v-container class="mt-15">
          <ActionBar icon="fas fa-paper-plane" title="معرف التيليجرام">
            <template v-slot:action>
              <div class="add-item">
                <v-icon size="12">fas fa-plus</v-icon>
                <h6>اضافة</h6>
              </div>
            </template>
          </ActionBar>
          <v-card class="mt-4 mx-auto" width="95%" style="border-radius: 10px">
            <ActionBar title="رقم القيد" :shadow="false">
              <template v-slot:action>
                <div class="add-item">
                  <v-icon size="12">fas fa-plus</v-icon>
                  <h6>اضافة</h6>
                </div>
              </template>
            </ActionBar>
            <v-divider class="mx-auto" :thickness="2" opacity="0.3"></v-divider>
            <ActionBar title="القسم" :shadow="false">
              <template v-slot:action>
                <h5 class="text-black">الحساب الالي</h5>
              </template>
            </ActionBar>
          </v-card>
          <ActionBar class="mt-3" icon="fas fa-user" title="المعلومات الشخصية">
            <template v-slot:action>
              <v-icon size="18">fas fa-chevron-left</v-icon>
            </template>
          </ActionBar>
          <ActionBar class="mt-3" icon="fas fa-address-book" title="سياسة الاستخدام">
            <template v-slot:action>
              <v-icon size="18">fas fa-chevron-left</v-icon>
            </template>
          </ActionBar>
          <v-card class="mt-3 mb-15 mx-auto" width="95%" style="border-radius: 10px">
            <ActionBar class="text-red" title="حذف الحساب" :shadow="false">
              <template v-slot:action>
                <v-icon size="19">fas fas fa-user-minus</v-icon>
              </template>
            </ActionBar>
            <v-divider class="mx-auto" :thickness="2" opacity="0.3"></v-divider>
            <ActionBar title="تسجيل الخروج" :shadow="false">
              <template v-slot:action>
                <v-icon size="19">fas fa-right-from-bracket</v-icon>
              </template>
            </ActionBar>
          </v-card>
          <br />
        </v-container>
      </template>
    </ProfileLayout>
  </div>
</template>
<script setup>
import ProfileLayout from '@/layouts/mobile/ProfileLayout.vue'
import ActionBar from './ActionBar.vue'
</script>
<style scoped>
.button {
  width: 100px;
  height: 40px;
  border: solid 2px #bbb6b6;
  color: #464545;
  border-radius: 8px;
}
.button:active {
  color: #222222;
  border: solid 2px #8b8a8a;
}
.add-item {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 5px;
}
</style>
