<template>
  <input
    class="user-input px-7"
    :value="modelValue"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
    :type="type"
  />
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
});

defineEmits(["update:modelValue"]);
</script>
<style scoped>
.user-input {
  direction: rtl;
  width: 100%;
  height: 60px;
  background: #f7f7f7;
  border-radius: 10px;
}
.user-input:focus {
  outline: none;
}
.user-input::placeholder {
  width: 100%;
  height: 100%;
}
</style>
