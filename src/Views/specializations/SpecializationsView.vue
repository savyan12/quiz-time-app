<template>
  <div class="specializations">
    <div class="mobile-render" v-if="xs">
      <SpecializationPage />
    </div>
  </div>
</template>
<script setup>
import SpecializationPage from '@/components/mobile/specializations/SpecializationPage.vue'
import { useDisplay } from 'vuetify/lib/composables/display'
const { xs } = useDisplay()
</script>
