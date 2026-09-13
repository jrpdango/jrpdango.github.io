<script setup lang="ts">
import { computed } from "vue";
import linkedinIcon from "@/assets/icons/linkedin-color.svg";
import githubIcon from "@/assets/icons/github-color.svg";
import emailIcon from "@/assets/icons/email.svg";
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
    <nav class="social-bar">
        <a
            href="https://github.com/jrpdango"
            target="_blank"
            aria-label="GitHub"
            class="bar-link"
        >
            <img :src="githubIcon" alt="GitHub" height="28" width="28" />
        </a>
        <a
            href="https://www.linkedin.com/in/jasper-pigason-566148177/"
            target="_blank"
            aria-label="LinkedIn"
            class="bar-link"
        >
            <img :src="linkedinIcon" alt="LinkedIn" height="28" width="28" />
        </a>
        <a
            href="mailto:jrpigason@gmail.com"
            aria-label="Email"
            class="bar-link"
        >
            <img :src="emailIcon" alt="Email" height="28" width="28" />
        </a>
        <button
            class="bar-link theme-toggle"
            @click="toggleTheme"
            :aria-label="themeLabel"
        >
            <img :src="themeIcon" alt="Toggle theme" height="28" width="28" />
        </button>
    </nav>
</template>

<style scoped>
.social-bar {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: var(--sidebar-width);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding-left: env(safe-area-inset-left, 0px);
    border-right: 1px solid var(--border-color);
    background-color: var(--bar-bg);
    box-shadow: 2px 0 16px var(--bar-shadow-color);
    z-index: 100;
}

.bar-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 999px;
    opacity: 0.85;
    transition:
        opacity 0.2s ease-in-out,
        transform 0.2s ease-in-out,
        background-color 0.2s ease-in-out;
}

.bar-link:hover {
    opacity: 1;
    transform: scale(1.08);
    background-color: var(--tech-badge-bg);
}

.bar-link:focus-visible {
    outline: 2px solid var(--accent-color);
    outline-offset: 2px;
}

.theme-toggle {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    color: inherit;
}

@media (max-width: 768px) {
    .social-bar {
        top: auto;
        bottom: 0;
        left: 0;
        height: calc(
            var(--bottombar-height) + env(safe-area-inset-bottom, 0px)
        );
        width: 100%;
        flex-direction: row;
        justify-content: center;
        gap: 2rem;
        padding-left: env(safe-area-inset-left, 0px);
        padding-right: env(safe-area-inset-right, 0px);
        padding-bottom: env(safe-area-inset-bottom, 0px);
        border-right: none;
        border-top: 1px solid var(--border-color);
        box-shadow: 0 -2px 16px var(--bar-shadow-color);
    }
}
</style>
