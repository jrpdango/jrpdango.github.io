<script setup lang="ts">
import { computed } from "vue";
import linkedinIcon from "/linkedin-color.svg";
import githubIcon from "/github-color.svg";
import emailIcon from "/email.svg";
import moon from "/crescent-moon.svg";
import sun from "/sun.svg";
import { Theme, theme } from "../theme";

const themeIcon = computed(() => (theme.state === Theme.DARK ? moon : sun));
const themeLabel = computed(() =>
    theme.state === Theme.DARK ? "Switch to light mode" : "Switch to dark mode"
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
            <img :src="githubIcon" alt="GitHub" height="26" width="26" />
        </a>
        <a
            href="https://www.linkedin.com/in/jasper-pigason-566148177/"
            target="_blank"
            aria-label="LinkedIn"
            class="bar-link"
        >
            <img :src="linkedinIcon" alt="LinkedIn" height="26" width="26" />
        </a>
        <a
            href="mailto:jrpigason@gmail.com"
            aria-label="Email"
            class="bar-link"
        >
            <img :src="emailIcon" alt="Email" height="26" width="26" />
        </a>
        <button
            class="bar-link theme-toggle"
            @click="toggleTheme"
            :aria-label="themeLabel"
        >
            <img :src="themeIcon" alt="Toggle theme" height="26" width="26" />
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
    border-right: 1px solid var(--border-color);
    background-color: var(--bg-color);
    z-index: 100;
}

.bar-link {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
    transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
}

.bar-link:hover {
    opacity: 1;
    transform: scale(1.2);
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
        height: var(--bottombar-height);
        width: 100%;
        flex-direction: row;
        justify-content: center;
        gap: 2rem;
        border-right: none;
        border-top: 1px solid var(--border-color);
    }
}
</style>
