<script setup lang="ts">
import linkedinIcon from "@/assets/icons/linkedin-color.svg";
import githubIcon from "@/assets/icons/github-color.svg";
import emailIcon from "@/assets/icons/email.svg";
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
        justify-content: flex-start;
        gap: 1rem;
        padding-left: calc(env(safe-area-inset-left, 0px) + 12px);
        padding-right: calc(env(safe-area-inset-right, 0px) + 60px);
        padding-bottom: env(safe-area-inset-bottom, 0px);
        border-right: none;
        border-top: 1px solid var(--border-color);
        box-shadow: 0 -2px 16px var(--bar-shadow-color);
    }
}
</style>
