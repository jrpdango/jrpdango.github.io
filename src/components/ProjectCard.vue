<script setup lang="ts">
import ThemedImage from "./ThemedImage.vue";
import IconLinkButton from "./IconLinkButton.vue";
import { ThemedImageSource, ProjectUrl, SimpleIcon } from "../types";
import { computed } from "vue";

const props = defineProps<{
    name: string;
    description: string;
    thumbnail: ThemedImageSource;
    hasBlurredBackground?: boolean;
    urls?: ProjectUrl[];
    techsUsed?: SimpleIcon[];
}>();

const showBlur = computed(() => props.hasBlurredBackground !== false);
</script>

<template>
    <div class="project-card">
        <div class="thumbnail-wrapper">
            <ThemedImage
                v-if="showBlur"
                class="thumbnail-bg"
                :src="thumbnail"
                alt=""
            />
            <ThemedImage
                class="thumbnail-img"
                :src="thumbnail"
                alt="Project thumbnail"
            />
        </div>
        <div class="card-body">
            <h2 class="project-name">{{ name }}</h2>
            <div class="urls">
                <IconLinkButton
                    v-for="url in urls ?? []"
                    :key="url.href"
                    :href="url.href"
                    :label="url.label"
                    :icon="url.icon"
                    :svgPath="url.svgPath"
                />
            </div>
            <p class="project-description">{{ description }}</p>
            <div class="tech-list">
                <div v-for="tech in techsUsed ?? []" class="tech">
                    <img
                        :height="18"
                        :width="18"
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
    border-radius: var(--card-radius);
    overflow: hidden;
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;
}

.project-card:hover {
    transform: translateY(var(--card-hover-translate));
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
}

.thumbnail-wrapper {
    position: relative;
    overflow: hidden;
    aspect-ratio: var(--thumbnail-aspect-ratio);
}

.thumbnail-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(var(--thumbnail-blur)) brightness(var(--thumbnail-brightness));
    transform: scale(var(--thumbnail-blur-scale));
}

.thumbnail-img {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.card-body {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: var(--spacing-xs);
    background-color: var(--card-body-bg);
}

.project-name {
    margin: 0 0 6px;
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
    gap: 8px;
    min-height: 36px;
    margin-bottom: 4px;
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
    background: var(--tech-badge-bg);
    border-radius: 999px;
    padding: 3px 10px 3px 6px;
}

.tech p {
    margin: 0;
    font-size: 0.8rem;
}

@media (max-width: 810px) {
    .urls {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>
