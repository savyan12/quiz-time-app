<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="82" height="65" viewBox="0 0 78 61" fill="none">
    <path d="M54 5L18 43.5L0.5 23L25 0L54 5Z" :fill="color" />
    <path d="M68 5L25 52L39.5 61L77.5 20L68 5Z" :fill="color" />
  </svg>
</template>
<script setup>
defineProps({
  color: { type: String },
})
</script>
