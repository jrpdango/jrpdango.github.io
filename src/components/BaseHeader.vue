<script setup lang="ts">
import linkedinIcon from '/linkedin-color.svg';
import ThemeSwitcher from './ThemeSwitcher.vue';
import { Theme, theme } from '../theme';

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
    <div class="header" ref="header">
        <ThemeSwitcher  @theme-changed="toggleTheme"/>
        <div class="top-row">
            <h1 class="my-name">Jasper Robert Pigason</h1>
        </div>
        <div class="social-links">
            <img :src="linkedinIcon" />
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

    .social-links img {
        margin-right: 8px;
    }
</style>
