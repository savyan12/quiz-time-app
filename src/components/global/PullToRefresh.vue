<template>
  <div
    class="ptr-container"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @mousedown="onMouseDown"
    @mousemove="onMouseMove"
    @mouseup="onMouseUp"
    :style="{ transform: `translateY(${distance}px)` }"
  >
    <!-- الـ indicator -->
    <div class="ptr-indicator" v-show="loading || distance > 0">
      <v-progress-circular indeterminate color="primary" size="24" />
    </div>

    <!-- المحتوى -->
    <slot />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['refresh'])

const distance = ref(0)
const startY = ref(0)
const pulling = ref(false)
const loading = ref(false)
const threshold = 60

function onTouchStart(e) {
  if (window.scrollY > 0 || loading.value) return
  startY.value = e.touches[0].clientY
  pulling.value = true
}

function onTouchMove(e) {
  if (!pulling.value) return
  const delta = e.touches[0].clientY - startY.value
  if (delta > 0) {
    distance.value = delta / 2
    e.preventDefault()
  }
}

function onTouchEnd() {
  if (distance.value > threshold) {
    triggerRefresh()
  }
  distance.value = 0
  pulling.value = false
}

// Desktop
function onMouseDown(e) {
  if (window.scrollY > 0 || loading.value) return
  startY.value = e.clientY
  pulling.value = true
}
function onMouseMove(e) {
  if (!pulling.value) return
  const delta = e.clientY - startY.value
  if (delta > 0) distance.value = delta / 2
}
function onMouseUp() {
  if (distance.value > threshold) {
    triggerRefresh()
  }
  distance.value = 0
  pulling.value = false
}

function triggerRefresh() {
  loading.value = true
  emit('refresh', done)
}

function done() {
  // نثبت اللودينغ 1.5 ثانية باش يبان
  setTimeout(() => {
    loading.value = false
    distance.value = 0
  }, 1500)
}
</script>

<style scoped>
.ptr-container {
  min-height: 100vh;
  transition: transform 0.3s ease;
  overflow: hidden;
}
.ptr-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
}
</style>
