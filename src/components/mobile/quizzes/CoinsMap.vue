<template>
  <div class="coins-area" :style="{ minHeight: `${startTop + (coins.length - 1) * gap + 8}vh` }">
    <div v-for="(c, i) in coins" :key="`coin-${i}`" class="coin-wrap" :style="coinStyle(i)">
      <!-- keep QuizCoin as-is inside wrapper -->
      <QuizCoin :border="border" :bg="bg" />
    </div>
  </div>
</template>
<script setup>
defineProps({
  bg: {
    type: String,
  },
  border: {
    type: String,
  },
})

import QuizCoin from './QuizCoin.vue'

// constants you can tweak to match the image exactly:
const coins = Array.from({ length: 7 }) // number of coins
const amplitude = 18 // horizontal amplitude (vw). increase -> wider curve
const frequency = 0.9 // how quickly the wave oscillates (radians per index)
const phase = 0.4 // shifts the whole wave left/right (tune to start on right/left)
const gap = 14 // vertical gap between coins (vh)
const startTop = 6 // top offset from start of wrapper (vh)

const coinStyle = (i) => {
  // compute horizontal offset in vw using sine wave
  const offset = amplitude * Math.sin(i * frequency + phase)
  // return style object (left:50% + translateX to center + offset)
  return {
    position: 'absolute',
    left: '50%',
    top: `calc(${startTop}vh + ${i * gap}vh)`,
    transform: `translateX(calc(-50% + ${offset.toFixed(3)}vw))`,
    // optional: staggered entrance feel (can remove if unwanted)
    transition: `transform 520ms cubic-bezier(.2,.9,.2,1) ${i * 60}ms`,
    // ensure the wrapper doesn't collapse and centers the coin component
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '72px', // adjust to match QuizCoin size
    height: '72px',
  }
}
</script>
<style scoped>
/* coins area */
.coins-area {
  position: relative;
  width: 100%;
}

.coin-wrap {
  pointer-events: auto;
}
</style>
