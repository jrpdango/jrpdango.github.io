<script setup lang="ts">
import BaseHeader from "./components/BaseHeader.vue";
import Projects from "./components/Projects.vue";
import SocialBar from "./components/SocialBar.vue";
import { Theme, theme } from "./theme";

// Check preferred theme
theme.state = window?.matchMedia?.("(prefers-color-scheme:dark)")?.matches
    ? Theme.DARK
    : Theme.LIGHT;
document.documentElement.setAttribute("data-theme", theme.state);
</script>

<template>
    <SocialBar />
    <div class="main-content">
        <BaseHeader />
        <Projects />
    </div>
</template>

<style scoped>
.main-content {
    margin-left: var(--sidebar-width);
}

@media (max-width: 768px) {
    .main-content {
        margin-left: 0;
        padding-bottom: var(--bottombar-height);
    }
}
</style>
