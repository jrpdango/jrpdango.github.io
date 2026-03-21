<script setup lang="ts">
import type { Component } from "vue";

defineProps<{
    href: string;
    label: string;
    icon?: Component;
    svgPath?: string;
}>();
</script>

<template>
    <a :href="href" target="_blank">
        <button>
            <component v-if="icon" :is="icon" :height="20" :width="20" />
            <svg
                v-else
                viewBox="0 0 24 24"
                :height="20"
                :width="20"
                fill="currentColor"
            >
                <path :d="svgPath" />
            </svg>
            {{ label }}
        </button>
    </a>
</template>

<style scoped>
a {
    text-decoration: none;
}

button {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    background-color: var(--card-body-bg);
    color: var(--color);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    font-size: 0.9rem;
    cursor: pointer;
    transition:
        background-color 0.2s ease,
        border-color 0.2s ease;
}

button:hover {
    background-color: var(--tech-badge-bg);
}
</style>
