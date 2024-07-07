<script setup lang="ts">
import linkedinIcon from '/linkedin-color.svg';
import githubIcon from '/github-color.svg';
import ThemeSwitcher from './ThemeSwitcher.vue';
</script>

<template>
    <div class="header" ref="header">
        <ThemeSwitcher />
        <div class="top-row">
            <h1 class="my-name">Jasper Robert Pigason</h1>
        </div>
        <div class="social-links">
            <a href="https://www.linkedin.com/in/jasper-pigason-566148177/" target="_blank">
                <img :src="linkedinIcon" alt="LinkedIn" height="30" width="30" />
            </a>
            <a href="https://github.com/jrpdango" target="_blank">
                <img :src="githubIcon" alt="GitHub" height="30" width="30"/>
            </a>
        </div>
    </div>
</template>

<style scoped>
    .header {
        margin-left: 16px;
    }

    .my-name {
        margin-top: 40px;
        margin-bottom: 0;
        font-size: 1.75rem;
    }

    @media (min-width: 404px) {
        .my-name {
            font-size: 2rem;
        }
    }

    .top-row {
        display: flex;
        justify-content: space-between;
    }

    .theme-switcher {
        height: fit-content;
    }

    .social-links {
        height: 1.75rem;
        display: flex;
        margin: 0;
    }

    .social-links a {
        margin-right: 8px;
        transition: 0.2s ease-in-out;
    }

    .social-links a:hover {
        transform: scale(1.25);
    }
</style>
