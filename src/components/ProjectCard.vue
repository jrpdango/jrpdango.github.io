<script setup lang="ts">
import ThemedImage from "./ThemedImage.vue";
import { ThemedImageSource, Tech } from "../types";

const props = defineProps<{
    name: string;
    description: string;
    thumbnail: ThemedImageSource;
    sourceCodeUrl?: string;
    demoUrl?: string;
    techsUsed?: Tech[];
    compact?: boolean;
}>();

const MAX_COMPACT_TECHS = 6;
const visibleTechs = props.compact
    ? (props.techsUsed ?? []).slice(0, MAX_COMPACT_TECHS)
    : (props.techsUsed ?? []);
const hiddenTechCount = props.compact
    ? Math.max(0, (props.techsUsed ?? []).length - MAX_COMPACT_TECHS)
    : 0;
</script>

<template>
    <div class="project-card" :class="{ compact }">
        <ThemedImage
            class="project-thumbnail"
            :src="thumbnail"
            alt="Project thumbnail"
            :height="compact ? 140 : 200"
        />
        <h2 class="project-name">{{ name }}</h2>
        <div class="urls">
            <div v-if="sourceCodeUrl" class="project-url">
                <ThemedImage
                    :src="{
                        forDark: '/source-code-dark.svg',
                        forLight: '/source-code-light.svg',
                    }"
                    alt="Source code"
                    :height="30"
                    :width="30"
                />
                &nbsp;
                <a :href="sourceCodeUrl" target="_blank">Source Code</a>
            </div>
            <span v-if="sourceCodeUrl && demoUrl" class="divider"
                >| &nbsp;</span
            >
            <div v-if="demoUrl" class="project-url">
                <ThemedImage
                    :src="{
                        forDark: '/demo-dark.svg',
                        forLight: '/demo-light.svg',
                    }"
                    alt="Live demo"
                    :height="30"
                    :width="30"
                />
                &nbsp;
                <a :href="demoUrl" target="_blank">Live Demo</a>
            </div>
        </div>
        <p class="project-description">{{ description }}</p>
        <div class="tech-used">
            <h4 class="section-label">Tech/Languages Used</h4>
            <div class="tech-list">
                <div v-for="tech in visibleTechs" class="tech">
                    <img
                        :height="compact ? 18 : 24"
                        :width="compact ? 18 : 24"
                        :src="`https://cdn.simpleicons.org/${tech.slug}`"
                        :alt="tech.name"
                        :title="tech.name"
                    />
                    <p v-if="!compact">{{ tech.name }}</p>
                </div>
                <span v-if="hiddenTechCount > 0" class="more-badge"
                    >+{{ hiddenTechCount }}</span
                >
            </div>
        </div>
    </div>
</template>

<style scoped>
.project-card {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: 10px;
    padding: 16px;
}

.project-thumbnail {
    object-fit: contain;
    max-width: 566px;
    width: 100%;
    align-self: center;
}

.project-name {
    margin: 12px 0 6px;
    font-size: 1.1rem;
}

.project-description {
    min-height: 72px;
    font-size: 0.9rem;
    opacity: 0.8;
}

.urls {
    display: flex;
    align-items: center;
    min-height: 36px;
    margin-bottom: 4px;
}

.project-url {
    display: flex;
    align-items: center;
    padding-right: 8px;
}

.section-label {
    margin: 0 0 8px;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    opacity: 0.5;
}

.tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    align-items: center;
}

.tech {
    display: flex;
    align-items: center;
    gap: 6px;
}

.tech p {
    margin: 0;
    font-size: 0.85rem;
}

.more-badge {
    font-size: 0.75rem;
    opacity: 0.55;
    padding: 2px 6px;
    border: 1px solid var(--border-color);
    border-radius: 4px;
}

/* Compact mode: icons in a tight row, no labels */
.compact .project-description {
    min-height: unset;
}

@media (max-width: 810px) {
    .urls {
        flex-direction: column;
        align-items: flex-start;
    }

    .divider {
        display: none;
    }
}
</style>
