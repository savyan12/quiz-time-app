<template>
  <div class="libary">
    <div class="mobile-render" v-if="xs">
      <LibraryPage />
    </div>
  </div>
</template>
<script setup>
import LibraryPage from '@/components/mobile/library/libraryPage.vue'
import { useDisplay } from 'vuetify/lib/composables/display'
const { xs } = useDisplay()
</script>
