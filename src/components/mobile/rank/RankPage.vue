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
      <v-tabs-window class="mt-3" v-model="tab">
        <RankTab :tab="0" />
      </v-tabs-window>
      <UsersList :items="items" />
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import RankTabHeader from './RankTabHeader.vue'
import UserRank from './UserRank.vue'
import RankTab from './RankTab.vue'
import UsersList from './UsersList.vue'

const tab = ref(0)

async function load(done) {
  console.log('loading...')
  await new Promise((resolve) => setTimeout(resolve, 2000))
  console.log('load finish')
  done()
}
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
