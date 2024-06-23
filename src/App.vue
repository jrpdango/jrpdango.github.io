<script setup lang="ts">
import { ref } from 'vue';
import BaseHeader from './components/BaseHeader.vue';

enum Theme {
  DARK,
  LIGHT
}

// Check preferred theme
const theme = ref(window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ? Theme.DARK : Theme.LIGHT);


</script>

<template>
  <BaseHeader />
</template>

<style scoped>
</style>
