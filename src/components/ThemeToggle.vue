<script setup lang="ts">
import { computed } from "vue";
import moon from "@/assets/icons/crescent-moon.svg";
import sun from "@/assets/icons/sun.svg";
import { Theme, theme } from "../theme";

const themeIcon = computed(() => (theme.state === Theme.DARK ? moon : sun));
const themeLabel = computed(() =>
    theme.state === Theme.DARK ? "Switch to light mode" : "Switch to dark mode",
);

function toggleTheme() {
    if (theme.state === Theme.DARK) {
        document.documentElement.setAttribute("data-theme", "light");
        theme.state = Theme.LIGHT;
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        theme.state = Theme.DARK;
    }
}
</script>

<template>
    <button class="theme-toggle" @click="toggleTheme" :aria-label="themeLabel">
        <img :src="themeIcon" alt="Toggle theme" height="28" width="28" />
    </button>
</template>

<style scoped>
.theme-toggle {
    position: fixed;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    padding: 0;
    border: none;
    border-radius: 999px;
    background: none;
    color: inherit;
    cursor: pointer;
    opacity: 0.85;
    transition:
        opacity 0.2s ease-in-out,
        transform 0.2s ease-in-out,
        background-color 0.2s ease-in-out;
    z-index: 101;
}

.theme-toggle:hover {
    opacity: 1;
    transform: scale(1.08);
    background-color: var(--tech-badge-bg);
}

.theme-toggle:focus-visible {
    outline: 2px solid var(--accent-color);
    outline-offset: 2px;
}

@media (max-width: 768px) {
    .theme-toggle {
        top: auto;
        right: 12px;
        bottom: env(safe-area-inset-bottom, 0px);
        height: var(--bottombar-height);
    }
}
</style>
