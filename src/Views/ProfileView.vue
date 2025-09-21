<template>
  <div class="profile">
    <div class="mobile-render" v-if="xs">
      <ProfilePage />
    </div>
  </div>
</template>
<script setup>
import ProfilePage from '@/components/mobile/Profile/ProfilePage.vue'
import { useDisplay } from 'vuetify/lib/composables/display'
const { xs } = useDisplay()
</script>
