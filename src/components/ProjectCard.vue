<script setup lang="ts">
import ThemedImage from "./ThemedImage.vue";
import { ThemedImageSource, SimpleIcon } from "../types";
import { computed } from "vue";

const props = defineProps<{
    name: string;
    description: string;
    thumbnail: ThemedImageSource;
    sourceCodeUrl?: string;
    demoUrl?: string;
    liveSiteUrl?: string;
    techsUsed?: SimpleIcon[];
}>();

const urls = computed(() => {
    const result: {
        label: string;
        href: string;
        icon?: { forDark: string; forLight: string };
        alt?: string;
    }[] = [];
    if (props.sourceCodeUrl)
        result.push({
            label: "Source Code",
            href: props.sourceCodeUrl,
            icon: {
                forDark: "/source-code-dark.svg",
                forLight: "/source-code-light.svg",
            },
            alt: "Source code",
        });
    if (props.demoUrl)
        result.push({
            label: "Live Demo",
            href: props.demoUrl,
            icon: { forDark: "/demo-dark.svg", forLight: "/demo-light.svg" },
            alt: "Live demo",
        });
    if (props.liveSiteUrl)
        result.push({
            label: "Visit Site",
            href: props.liveSiteUrl,
            icon: { forDark: "/globe-dark.svg", forLight: "/globe-light.svg" },
            alt: "Visit Site",
        });
    return result;
});
</script>

<template>
    <div class="project-card">
        <ThemedImage
            class="project-thumbnail"
            :src="thumbnail"
            alt="Project thumbnail"
            :height="200"
        />
        <h2 class="project-name">{{ name }}</h2>
        <div class="urls">
            <template v-for="(url, index) in urls" :key="url.href">
                <div v-if="index > 0" class="divider">| &nbsp;</div>
                <div class="project-url">
                    <ThemedImage
                        v-if="url.icon"
                        :src="url.icon"
                        :alt="url.alt || ''"
                        :height="30"
                        :width="30"
                    />&nbsp;<a :href="url.href" target="_blank">{{
                        url.label
                    }}</a>
                </div>
            </template>
        </div>
        <p class="project-description">{{ description }}</p>
        <div class="tech-used">
            <h4 class="section-label">Tech/Languages Used</h4>
            <div class="tech-list">
                <div v-for="tech in techsUsed ?? []" class="tech">
                    <img
                        :height="24"
                        :width="24"
                        :src="`https://cdn.simpleicons.org/${tech.slug}`"
                        :alt="tech.title"
                        :title="tech.title"
                    />
                    <p>{{ tech.title }}</p>
                </div>
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
