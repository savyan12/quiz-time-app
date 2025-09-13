<template>
  <v-locale-provider rtl>
    <v-card class="mx-auto" color="surface-light" max-width="100%" height="40">
      <v-text-field
        class="search"
        bg-color="#ffffff"
        color="#495eca"
        label="... بحث"
        hide-details
        single-line
        @click:append-inner=""
      >
        <template #append-inner>
          <v-icon size="20">fas fa-search</v-icon>
        </template>
      </v-text-field>
      <v-divider vertical :thickness="2"></v-divider>
      <v-btn class="filter-btn" elevation="0">
        <v-icon size="18" color="#64748B">fas fa-sliders</v-icon>
      </v-btn>
    </v-card>
  </v-locale-provider>
</template>
<style scoped>
.v-card {
  width: 95%;
  margin: 10px auto;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 7px;
}
.v-card .search {
  width: 100%;
  height: auto;
}
.v-card .filter-btn {
  width: 18%;
  height: 40px !important;
}
</style>
