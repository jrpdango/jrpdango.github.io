<script setup lang="ts">
import BaseHeader from './components/BaseHeader.vue';
import Projects from './components/Projects.vue';
import { Theme, theme } from './theme';

// Check preferred theme
theme.state = window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ? Theme.DARK : Theme.LIGHT;
document.documentElement.setAttribute('data-theme', theme.state);
</script>

<template>
  <BaseHeader />
  <Projects />
</template>

<style scoped>
</style>
