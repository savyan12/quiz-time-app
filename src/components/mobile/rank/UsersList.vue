<template>
  <div class="bottom-sheet" :style="{ height: sheetHeight + 'vh' }">
    <!-- الهاندل اللي نسحب منه -->
    <div class="drag-handle" @mousedown="startDrag" @touchstart="startDrag"></div>

    <!-- القائمة -->
    <div class="list-content">
      <div v-for="n in 20" :key="n" class="user-item">User {{ n }}</div>
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const sheetHeight = ref(28) // يبدأ بـ 20%
let startY = 0
let isDragging = false

function startDrag(e) {
  e.preventDefault()
  startY = e.touches ? e.touches[0].clientY : e.clientY
  isDragging = true

  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', stopDrag)
  document.addEventListener('touchmove', onDrag, { passive: false })
  document.addEventListener('touchend', stopDrag)

  // نمنع سكرول الصفحة فقط أثناء السحب من الهاندل
  document.body.style.overflow = 'hidden'
}

function onDrag(e) {
  if (!isDragging) return

  const clientY = e.touches ? e.touches[0].clientY : e.clientY
  const deltaY = startY - clientY

  if (deltaY > 50) {
    sheetHeight.value = 80
  } else if (deltaY < -50) {
    sheetHeight.value = 20
  }

  if (e.cancelable) e.preventDefault()
}

function stopDrag() {
  isDragging = false
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
  document.removeEventListener('touchmove', onDrag)
  document.removeEventListener('touchend', stopDrag)

  // نرجع سكرول الصفحة
  document.body.style.overflow = ''
}
</script>

<style scoped>
.bottom-sheet {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f6f6f9;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  transition: height 0.3s ease;
  display: flex;
  flex-direction: column;
  z-index: 100;
}

.drag-handle {
  width: 50px;
  height: 6px;
  background: #888;
  border-radius: 3px;
  margin: 10px auto;
  cursor: grab;
  flex-shrink: 0;
}

.list-content {
  flex: 1;
  overflow-y: auto; /* نخلي القائمة بس اللي تسكرول */
}

.user-item {
  padding: 15px;
  border-bottom: 1px solid #9e9e9e;
  color: #000;
}
</style>
