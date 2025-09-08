<template>
  <div class="login">
    <div class="mobile-render" v-if="xs">
      <LoginPage />
    </div>
  </div>
</template>
<script setup>
import LoginPage from '@/components/mobile/Auth/LoginPage.vue'
import { useDisplay } from 'vuetify/lib/composables/display'
const { xs } = useDisplay()
</script>
