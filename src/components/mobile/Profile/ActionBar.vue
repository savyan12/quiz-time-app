<template>
  <v-card class="action-bar" width="96%" height="60" :elevation="shadow ? 1 : 0">
    <div class="title">
      <v-icon size="18" color="#334155" v-if="icon">{{ icon }}</v-icon>
      <h5>{{ title }}</h5>
    </div>
    <div class="slot"><slot name="action"></slot></div>
  </v-card>
</template>
<script setup>
defineProps({
  icon: {
    type: String,
  },
  title: {
    type: String,
  },
  shadow: {
    type: Boolean,
    default: true,
  },
})
</script>
<style scoped>
.action-bar {
  direction: rtl;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  padding: 15px;
  color: #334155;
}
.action-bar:active {
  opacity: 0.6;
}
.action-bar .title {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
