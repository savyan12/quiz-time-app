<template>
  <div class="welcome">
    <div class="mobile-render" v-if="xs">
      <HomePage />
    </div>
  </div>
</template>
<script setup>
import HomePage from '@/components/mobile/home/HomePage.vue'
import { useDisplay } from 'vuetify/lib/composables/display'
const { xs } = useDisplay()
</script>
