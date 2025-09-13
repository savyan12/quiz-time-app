<template>
  <v-navigation-drawer v-model="status">
    <v-sheet class="bg-white" width="100%" min-height="200" elevation="0">
      <v-avatar size="80">
        <img
          class="w-100"
          src="data:image/webp;base64,UklGRpQCAABXRUJQVlA4TIgCAAAvv8QvAV9gJmCSUYEY1Caep5eXNRS0kcI8BvZyjz9UoKBtGyYt+0H+m/8A/H8DyRgEAY3lhBgQbsNeAoTItoU2sRAL1YCDEAdoqAUstA7QgIUa/PMhn88rvI3ovxNEkiQpCgrW7pTee9XXB+an8Zm7K/zHf/zHf/yXaVhaOuKzVvzHf/zHf/x3e9U5I+Y//uM//gsoS3wV/2V1lvgq/uM//uM//otnrV8s//Ef/917/MZX5UeW+Cr+uwKaS9LUxfIf//Ef//FfguUY3/j22KzwH//xH//xXyKj+Ys9xPAf//Hfpd4UX8V/V2JDfFUmY95Vxo4I//Ef//Ef/+VJxu4K/2U/pv+2esXXRaZkiK9K0rzjq/iP/4LKXCmNsDYr/JdlmuKr+I//+O+MmuKr7vnmkrTL2vjwH//xH/9dI7ziq/gv3K2HmLTEEF/Ff/zHf1mgKb6K/3rVXBL+4z/+4z/+y8N0Vx4lWTsi/Md//Md//Md//Md/aDDEV/Ef/138PEvSrjfkPVbKsyRFHiXhP/7jP/67u3jHV/Ef//Ef//Ef/6Wrjjr8x3/8x3/8x3/8x3/8x3/8dxXwVyn8x3/8x3/8d5MXX89F5z/+4z/+4z/+4z/+4z/+478Q1oVT74kR8x//8R//8V/qZF9j2f0W+Y//+I//+C+HcIqmvl0+ccT8x3/8x3/8l02ptbKmvmNu/uM//uM//kvD/JWkEVOvdYv4j//4j//4777vDD0EvdbUP3HEGz4qnf/4j//4j//yJI+SfJek1jyrTX27bDjiIhvebv7jP/7jP/7LgNQ6zQ1Vm/p2qTXifak1df7jP/7jP/7LbdQ6ug21/k+ot/tD4T/+4z/+47+swgw="
          alt="avatar"
        />
      </v-avatar>
      <div class="text">
        <v-icon color="#49ADF4" size="20">qt:qt-checkBadge</v-icon>
        <h3>سفيان الترهوني</h3>
      </div>
    </v-sheet>
    <div class="list">
      <v-btn variant="text" v-for="(item, i) in items" :key="i">
        <div class="list-item">
          <v-icon :icon="item.icon" size="23" />
          <h4 v-text="item.text"></h4>
        </div>
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import { defineProps, ref, watch, defineEmits } from 'vue'

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:active'])
const status = ref(props.active)
const items = [
  { text: 'الرئيسية', icon: 'fas fa-home' },
  { text: 'الاقسام', icon: 'fas fa-list' },
  { text: 'المهام', icon: 'fas fa-book' },
  { text: 'الملف الشخصي', icon: 'fas fa-user' },
  { text: 'المواعيد', icon: 'fas fa-calendar ' },
  { text: 'انظم الى المساهمين', icon: 'fas fa-users-gear' },
  { text: 'سياسة الاستخدام', icon: 'fas fa-address-book' },
  { text: 'عن المطورين', icon: 'fas fa-code' },
]

watch(
  () => props.active,
  (newVal) => {
    status.value = newVal
  },
)

watch(status, (newVal) => {
  emit('update:active', newVal)
})
</script>
<style scoped>
.v-navigation-drawer {
  direction: ltr;
  background: linear-gradient(to bottom, #12a6ec, #0a639e);
}
.v-sheet {
  padding: 30px 13px;
}
.text {
  margin-top: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
}
.v-list {
  color: #ffffff !important;
}

.list {
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 20px;
  color: white;
}
.list .list-item {
  display: flex;
  align-items: center;
  gap: 25px;
}
</style>
