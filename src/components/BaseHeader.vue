<script setup lang="ts">
import githubIcon from '/github-color.svg';
import linkedinIcon from '/linkedin-color.svg';
import ThemeSwitcher from './ThemeSwitcher.vue';
import { theme } from '../theme';

enum Theme {
  DARK = "dark",
  LIGHT = "light"
};

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
        <div class="top-row">
            <h2 class="my-name">Jasper Robert Pigason</h2>
            <!-- <button class="theme-switcher" >Change theme</button> -->
            <ThemeSwitcher  @theme-changed="toggleTheme"/>
        </div>
        
        <div class="social-links">
            <img :src="linkedinIcon" />
            <img :src="githubIcon" />
        </div>
    </div>
</template>

<style scoped>
    .header {
        margin-left: 16px;
    }

    .my-name {
        margin-top: 24px;
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
