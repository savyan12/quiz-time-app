<template>
  <v-sheet
    class="bottom-navigation animate__animated animate__slideInUp d-md-none"
    color="white"
    elevation="1"
  >
    <button
      v-for="(page, index) in pages"
      :key="index"
      class="btn"
      :class="{
        'active-btn': value === index,
        'animate__animated animate__pulse': animatedIndex === index,
      }"
      @click="navigateTo(page.value, index)"
    >
      <v-icon>{{ page.icon }}</v-icon>
      <span>{{ page.text }}</span>
    </button>
  </v-sheet>
</template>

<style scoped>
.bottom-navigation {
  padding: 10px;
  width: 95%;
  height: 60px;
  border-radius: 25px;
  position: fixed;
  bottom: 10px;
  left: 2.5%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
}
.bottom-navigation .btn {
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  color: #302b2b;
  transition: color 0.3s;
}

.bottom-navigation .btn.active-btn {
  color: #4082df;
}

.bottom-navigation .btn span {
  font-size: 12px;
  margin-top: 4px;
}
</style>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const pages = ref([
  { value: 'categories', icon: 'fas fa-bars', text: 'الأقسام' },
  { value: 'rank', icon: 'fas fa-trophy', text: 'الصدارة' },
  { value: 'home', icon: 'fas fa-home', text: 'الرئيسية' },
  { value: 'library', icon: 'fas fa-book', text: 'المكتبة' },
  { value: 'profile', icon: 'fas fa-user-graduate', text: 'ملفي' },
])

const route = useRoute()
const router = useRouter()
const value = ref(0)

const animatedIndex = ref(null)

const navigateTo = (routeName, index) => {
  animatedIndex.value = index
  router.push({ name: routeName })

  value.value = index
  setTimeout(() => {
    animatedIndex.value = null
  }, 1000)
}

watch(
  () => route.name,
  (toName) => {
    const pageIndex = pages.value.findIndex((p) => p.value === toName)
    if (pageIndex !== -1) {
      value.value = pageIndex
    } else {
      value.value = null
    }
  },
  { immediate: true },
)
</script>
