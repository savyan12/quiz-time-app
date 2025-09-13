<template>
  <div class="rank-page">
    <v-container style="direction: rtl">
      <div class="header">
        <h3>قائمة المتصدرين</h3>
      </div>
      <RankTabHeader v-model="tab" />
      <!-- user rank -->
      <UserRank />
      <!-- top -->
      <v-tabs-window class="mt-15" v-model="tab">
        <RankTab :tab="0" />
      </v-tabs-window>
    </v-container>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import RankTabHeader from './RankTabHeader.vue'
import UserRank from './UserRank.vue'
import RankTab from './RankTab.vue'

const tab = ref(0)
</script>
<style scoped>
.rank-page {
  width: 100%;
  min-height: 100vh;
  background: #0c5b9c;
  background-image: url('@/assets/background/rank.svg');
  background-size: 100%;
}
.rank-page .header {
  margin-top: 25px;
  margin-right: 15px;
  color: white;
}
</style>
