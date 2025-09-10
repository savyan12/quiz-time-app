<template>
  <div class="tasks">
    <div class="mobile-render" v-if="xs">
      <TasksPage />
    </div>
  </div>
</template>
<script setup>
import TasksPage from '@/components/tools/TasksPage.vue'
import { useDisplay } from 'vuetify/lib/composables/display'
const { xs } = useDisplay()
</script>
