<template>
  <div class="signup">
    <div class="mobile-render" v-if="xs">
      <StudentInfoPage />
    </div>
  </div>
</template>
<script setup>
import StudentInfoPage from '@/components/mobile/Auth/StudentInfoPage.vue'
import { useDisplay } from 'vuetify/lib/composables/display'
const { xs } = useDisplay()
</script>
