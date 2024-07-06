<script setup lang="ts">
import BaseHeader from './components/BaseHeader.vue';
import Projects from './components/Projects.vue';
import { theme } from './theme';

enum Theme {
  DARK = "dark",
  LIGHT = "light"
};

// Check preferred theme
theme.state = window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ? Theme.DARK : Theme.LIGHT;
document.documentElement.setAttribute('data-theme', theme.state);

function toggleTheme() {
  if(theme.state === Theme.DARK) {
    document.documentElement.setAttribute('data-theme', 'light');
    theme.state = Theme.LIGHT;
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    theme.state = Theme.DARK;
  }
}

</script>

<template>
  <BaseHeader @theme-changed="() => { toggleTheme() }" />
  <Projects />
</template>

<style scoped>
</style>
