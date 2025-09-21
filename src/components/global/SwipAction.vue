<template>
  <div class="swipe-wrapper">
    <!-- أزرار ورا الكارد -->
    <div class="swipe-actions">
      <button class="delete-btn" @click="deleteItem">
        <v-icon>fas fa-trash</v-icon>
      </button>
      <button class="edit-btn" @click="editItem">
        <v-icon>fas fa-pen</v-icon>
      </button>
    </div>

    <!-- الكارد -->
    <div
      class="swipe-card"
      v-touch="touchHandlers"
      :style="{ transform: `translateX(${offset}px)` }"
    >
      <slot name="item"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  animate: {
    type: Boolean,
    default: false,
  },
})

const offset = ref(0)

// لما يسحب المستخدم
const touchHandlers = {
  left: () => {
    offset.value = -80 // يسار → زر الحذف
  },
  right: () => {
    offset.value = 80 // يمين → زر التعديل
  },
  end: () => {
    // يرجع للوضع الطبيعي
    setTimeout(() => {
      offset.value = 0
    }, 1000)
  },
}

function deleteItem() {
  alert('Item deleted!')
}

function editItem() {
  alert('Edit clicked!')
}

// لو animate = true → نعمل حركة أول ما يركب الكومبوننت
onMounted(() => {
  if (props.animate) {
    setTimeout(() => {
      offset.value = -40 // يتحرك شوية يمين
      setTimeout(() => {
        offset.value = 0 // يرجع
      }, 800)
    }, 500) // تأخير بسيط بعد تحميل الصفحة
  }
})
</script>

<style scoped>
.swipe-wrapper {
  position: relative;
  overflow: hidden;
  margin-bottom: 12px;
}

.swipe-actions {
  position: absolute;
  inset: 0;
  top: -12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
}

.delete-btn {
  width: 65px;
  height: 85px;
  color: #ffffff;
  background: #f03838;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  z-index: 1;
}

.edit-btn {
  width: 65px;
  height: 85px;
  color: #ffffff;
  background: #ffa361;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  z-index: 1;
}

.swipe-card {
  position: relative;
  transition: transform 0.3s ease;
  z-index: 2;
}
</style>
