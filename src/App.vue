<script setup lang="ts">
import { ref } from 'vue';
import BaseHeader from './components/BaseHeader.vue';
import Projects from './components/Projects.vue';

enum Theme {
  DARK = "dark",
  LIGHT = "light"
};

// Check preferred theme
const theme = ref(window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ? Theme.DARK : Theme.LIGHT);
document.documentElement.setAttribute('data-theme', theme.value);

function toggleTheme() {
  if(theme.value === Theme.DARK) {
    document.documentElement.setAttribute('data-theme', 'light');
    theme.value = Theme.LIGHT;
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    theme.value = Theme.DARK;
  }
}

</script>

<template>
  <BaseHeader @theme-changed="() => { toggleTheme() }" />
  <Projects />
</template>

<style scoped>
</style>
