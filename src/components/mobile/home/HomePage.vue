<template>
  <div class="home-page mb-15">
    <v-container>
      <!-- nav -->
      <NavBar />
      <!--Daily challenge -->
      <DailyChallenge />
      <!-- tasks -->
      <tasksCard />
      <!-- student bag -->
      <StudentBag />
      <!-- Appointments -->
      <AppointmentsCard />
      <!-- Last activites -->
      <LatestActivities />
    </v-container>
  </div>
</template>
<script setup>
import NavBar from './NavBar.vue'
import DailyChallenge from './DailyChallenge.vue'
import tasksCard from './TasksCard.vue'
import AppointmentsCard from './AppointmentsCard.vue'
import LatestActivities from './LatestActivities.vue'
import StudentBag from './StudentBag.vue'
</script>
<style scoped>
.home-page {
  width: 100%;
  min-height: 100vh;
  background: #f6f6f9;
}
</style>
