<template>
  <div class="welcome">
    <div class="mobile-render" v-if="xs">
      <WelcomePage />
    </div>
  </div>
</template>
<script setup>
import WelcomePage from '@/components/mobile/welcomePage.vue'
import { useDisplay } from 'vuetify/lib/composables/display'
const { xs } = useDisplay()
</script>
