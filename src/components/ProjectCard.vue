<script setup lang="ts">
import githubIcon from '/github-color.svg';
import ThemedImage from './ThemedImage.vue';
import { ThemedImageSource, Tech } from '../types';

defineProps<{
    name: string,
    description: string,
    thumbnail: ThemedImageSource,
    sourceCodeUrl?: string,
    demoUrl?: string,
    myRole?: string,
    difficulties?: string,
    solution?: string,
    techsUsed?: Tech[]
}>();

</script>

<template>
    <div class="project-card">
        <ThemedImage 
            class="project-thumbnail"
            :src="thumbnail" 
            alt="Source code URL"
            :height="200"
        />
        <h4>{{ name }}</h4>
        <div class="urls">
            <div v-if="sourceCodeUrl" class="project-url">
                <ThemedImage 
                    :src="{
                        forDark: '/source-code-dark.svg',
                        forLight: '/source-code-light.svg'
                    }" 
                    alt="Source code URL"
                    :height="30"
                    :width="30"
                />
                &nbsp;
                <a :href="sourceCodeUrl" target="_blank">Source Code</a>
            </div>
            <span v-if="sourceCodeUrl && demoUrl" class="divider">| &nbsp;</span>
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
        <div class="tech-used">
            <h5 class="section-title">Tech/Languages I Used</h5>
            <div v-for="tech in techsUsed" class="tech">
                <img height="24" width="24" :src="`https://cdn.simpleicons.org/${tech.slug}`" />
                <p>{{ tech.name }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .project-card {
        display: flex;
        flex-direction: column;
        border: 2px solid var(--border-color);
        border-radius: 8px;
        padding: 16px;
    }

    .project-thumbnail {
        object-fit: contain;
        max-width: 566px;
        width: 100%;
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

    .section-title {
        margin-bottom: 8px;
    }

    .tech {
        display: flex;
        align-items: center;
    }

    .tech img {
        margin-right: 8px;
    }

    .tech p {
        margin: 4px;
    }

    @media (max-width: 810px) {
        .urls {
            flex-direction: column;
        }

        .project-url {
            align-self: start;
        }

        .divider {
            display: none;
        }
    }
</style>