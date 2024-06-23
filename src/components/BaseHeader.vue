<script setup lang="ts">
import githubIcon from '/github-color.svg';
import linkedinIcon from '/linkedin-color.svg';
defineEmits(['themeChanged']);
</script>

<template>
    <div>
        <div class="top-row">
            <h2>Jasper Robert Pigason</h2>
            <button class="theme-switcher" @click="$emit('themeChanged')">Change theme</button>
        </div>
        
        <div class="social-links">
            <img :src="linkedinIcon" />
            <img :src="githubIcon" />
        </div>
    </div>
</template>

<style scoped>
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
