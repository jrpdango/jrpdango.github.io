<script setup lang="ts">
import githubIcon from '/github-color.svg';

defineProps<{
    name: string,
    description: string,
    sourceCodeUrl?: string,
    demoUrl?: string,
    myRole?: string,
    difficulties?: string,
    solution?: string,
    techUsed?: string
}>();
</script>

<template>
    <div class="project-card">
        <img 
            src="https://cdn.myanimelist.net/images/characters/6/29652.jpg" 
            alt="Temp Image" 
            height="200"
            width="130"
        />
        <h4>{{ name }}</h4>
        <div class="urls">
            <div v-if="sourceCodeUrl" class="project-url">
                <img 
                    :src="githubIcon" 
                    height="30"
                    width="30"
                    alt="Source code URL" 
                />
                &nbsp;
                <a :href="sourceCodeUrl" target="_blank">Source Code</a>
            </div>
            <span v-if="sourceCodeUrl && demoUrl">| &nbsp;</span>
            <div v-if="demoUrl" class="project-url">
                <img 
                    :src="githubIcon" 
                    height="30"
                    width="30"
                    alt="Project URL" 
                />
                &nbsp;
                <a :href="demoUrl" target="_blank">Live Demo</a>
            </div>
        </div>
        <p>{{ description }}</p>
    </div>
</template>

<style scoped>
    .project-card {
        display: flex;
        flex-direction: column;
    }

    .urls {
        display: flex;
        align-items: center;
    }

    .project-url {
        display: flex;
        align-items: center;
        padding-right: 8px;
    }
</style>