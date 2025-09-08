<template>
  <v-select
    class="mx-auto"
    variant="solo"
    :bg-color="bgColor"
    :color="color"
    :icon-color="color"
    :label="label"
    rounded="lg"
    :flat="true"
    :glow="true"
    :items="data"
    :item-props="itemsProps"
    @change="$emit('update:modelValue', $event.target.value)"
    :v-model="modelValue"
  ></v-select>
</template>
<style scoped></style>
<script setup>
import { defineProps, defineEmits } from "vue";
defineEmits(["update:modelValue"]);
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "title",
  },
  bgColor: {
    type: String,
    default: "#efeeef",
  },
  color: {
    type: String,
    default: "#efefef",
  },
  data: {
    type: Array,
    default: () => [{ text: "1" }, { text: "2" }, { text: "3" }],
  },
  itemsProps: {
    type: Function,
    default: (item) => {
      return { title: item.text };
    },
  },
});
</script>
