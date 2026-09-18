<script setup lang="ts">
import BackToTop from "./components/BackToTop.vue";
import BaseHeader from "./components/BaseHeader.vue";
import Projects from "./components/Projects.vue";
import SocialBar from "./components/SocialBar.vue";
import ThemeToggle from "./components/ThemeToggle.vue";
import { Theme, theme } from "./theme";

// Check preferred theme
theme.state = window?.matchMedia?.("(prefers-color-scheme:dark)")?.matches
    ? Theme.DARK
    : Theme.LIGHT;
document.documentElement.setAttribute("data-theme", theme.state);
</script>

<template>
    <SocialBar />
    <ThemeToggle />
    <div class="main-content">
        <BaseHeader />
        <Projects />
    </div>
    <BackToTop />
</template>

<style scoped>
.main-content {
    margin-left: var(--sidebar-width);
}

@media (max-width: 768px) {
    .main-content {
        margin-left: 0;
        padding-bottom: calc(
            var(--bottombar-height) + env(safe-area-inset-bottom, 0px)
        );
    }
}
</style>
