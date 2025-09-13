<template>
  <div class="rank">
    <div class="mobile-render" v-if="xs">
      <RankPage />
    </div>
  </div>
</template>
<script setup>
import RankPage from '@/components/mobile/rank/RankPage.vue'
import { useDisplay } from 'vuetify/lib/composables/display'
const { xs } = useDisplay()
</script>
