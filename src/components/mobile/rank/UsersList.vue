<template>
  <!-- Overlay -->
  <div v-if="sheetHeight > 28" class="overlay" @click="closeSheet"></div>
  <!-- Bottom Sheet -->
  <div class="bottom-sheet" :style="{ height: sheetHeight + 'vh' }">
    <div class="drag-handle" @mousedown="startDrag" @touchstart="startDrag"></div>

    <div class="list-content">
      <v-infinite-scroll @load="load">
        <template v-for="(user, index) in users" :key="index">
          <div class="user-item" :class="[{ 'd-none': user.top < 4 }]">
            <div class="user">
              <v-avatar size="60">
                <img width="100%" :src="user.imageUrl" alt="user image" />
              </v-avatar>
              <div class="info">
                <h4>{{ user.firstName + ' ' + user.lastName }}</h4>
                <h5 class="points">{{ user.points }} نقطة</h5>
              </div>
            </div>
            <div class="rank">{{ user.rank }}</div>
          </div>
        </template>
      </v-infinite-scroll>
      <br /><br /><br />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const users = ref(
  Array.from({ length: 70 }, (_, i) => ({
    firstName: `First${i + 1}`,
    lastName: `Last${i + 1}`,
    imageUrl: `https://i.pravatar.cc/150?img=${(i % 70) + 1}`,
    points: 1000 - i * 3,
    rank: i + 1,
  })),
)

let count = 70

async function api() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newUsers = Array.from({ length: 10 }, (_, i) => ({
        firstName: `First${count + i + 1}`,
        lastName: `Last${count + i + 1}`,
        imageUrl: `https://i.pravatar.cc/150?img=${((count + i) % 70) + 1}`,
        points: 1000 - (count + i) * 3,
        rank: count + i + 1,
      }))
      resolve(newUsers)
    }, 1000)
  })
}

async function load({ done }) {
  const res = await api()
  users.value.push(...res)
  count += res.length
  done('ok')
}

const sheetHeight = ref(28)
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

  document.body.style.overflow = 'hidden'
}

function onDrag(e) {
  if (!isDragging) return

  const clientY = e.touches ? e.touches[0].clientY : e.clientY
  const deltaY = startY - clientY

  if (deltaY > 50) {
    sheetHeight.value = 80
  } else if (deltaY < -50) {
    sheetHeight.value = 28
  }

  if (e.cancelable) e.preventDefault()
}

function stopDrag() {
  isDragging = false
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
  document.removeEventListener('touchmove', onDrag)
  document.removeEventListener('touchend', stopDrag)

  document.body.style.overflow = ''
}

function closeSheet() {
  sheetHeight.value = 28
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
}

.bottom-sheet {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background: #f6f6f9;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  transition: height 0.3s ease;
  display: flex;
  flex-direction: column;
  z-index: 100;
  background: #f6f6f9;
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
  overflow-y: auto;
}

.user-item {
  width: 100%;
  height: 12vh;
  padding: 15px 25px;
  border-bottom: 2px solid #9e9e9e;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border-radius: 10px;
  margin-bottom: 5px;
}
.user-item .rank {
  width: 33px;
  height: 33px;
  border-radius: 50%;
  border: solid #858494 2px;
  color: #858494;
  display: flex;
  align-items: center;
  justify-content: center;
}
.user-item .user {
  display: flex;
  align-items: center;
  gap: 15px;
}
.user-item .points {
  color: #858494;
}
</style>
