<template>
  <div class="signup">
    <div class="mobile-render" v-if="xs">
      <SignUpPage />
    </div>
  </div>
</template>
<script setup>
import SignUpPage from '@/components/mobile/Auth/SignUpPage.vue'
import { useDisplay } from 'vuetify/lib/composables/display'
const { xs } = useDisplay()
</script>
