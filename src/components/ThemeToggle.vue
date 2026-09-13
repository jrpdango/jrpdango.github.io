<script setup lang="ts">
import { computed } from "vue";
import moon from "@/assets/icons/crescent-moon.svg";
import sun from "@/assets/icons/sun.svg";
import { Theme, theme } from "../theme";

const isDark = computed({
    get: () => theme.state === Theme.DARK,
    set: (dark: boolean) => {
        const next = dark ? Theme.DARK : Theme.LIGHT;
        document.documentElement.setAttribute("data-theme", next);
        theme.state = next;
    },
});

const themeIcon = computed(() => (theme.state === Theme.DARK ? moon : sun));
const themeLabel = computed(() =>
    theme.state === Theme.DARK ? "Switch to light mode" : "Switch to dark mode",
);
</script>

<template>
    <button
        type="button"
        role="switch"
        class="theme-switch"
        :aria-checked="isDark"
        :aria-label="themeLabel"
        @click="isDark = !isDark"
    >
        <span class="track">
            <span class="knob">
                <img :src="themeIcon" alt="" width="18" height="18" />
            </span>
        </span>
    </button>
</template>

<style scoped>
.theme-switch {
    position: fixed;
    top: 10px;
    right: 10px;
    display: inline-block;
    width: 60px;
    height: 34px;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    z-index: 101;
}

.track {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 34px;
    transform: translateY(-50%);
    border-radius: 999px;
    background-color: var(--tech-badge-bg);
    border: 1px solid var(--border-color);
    transition:
        background-color 0.3s ease,
        border-color 0.3s ease;
}

.knob {
    position: absolute;
    top: 3px;
    left: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: var(--bg-color);
    border: 1px solid var(--border-color);
    box-shadow: 0 1px 3px var(--bar-shadow-color);
    transition: transform 0.3s ease;
}

.knob img {
    width: 18px;
    height: 18px;
}

.theme-switch:hover .track {
    border-color: var(--accent-color);
}

.theme-switch:focus-visible .track {
    outline: 2px solid var(--accent-color);
    outline-offset: 2px;
}

.theme-switch[aria-checked="true"] .knob {
    transform: translateX(26px);
}

@media (max-width: 768px) {
    .theme-switch {
        top: auto;
        right: 12px;
        bottom: env(safe-area-inset-bottom, 0px);
        height: var(--bottombar-height);
    }
}

@media (prefers-reduced-motion: reduce) {
    .track,
    .knob {
        transition: none;
    }
}
</style>
