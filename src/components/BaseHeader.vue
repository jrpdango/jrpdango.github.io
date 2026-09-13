<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

import ThemedImage from "./ThemedImage.vue";
import { ThemedImageSource } from "../types";

import darkSouth from "@/assets/electric-fan/south.webp";
import darkSouthWest from "@/assets/electric-fan/south-west.webp";
import darkWest from "@/assets/electric-fan/west.webp";
import darkNorthWest from "@/assets/electric-fan/north-west.webp";
import darkNorth from "@/assets/electric-fan/north.webp";
import darkNorthEast from "@/assets/electric-fan/north-east.webp";
import darkEast from "@/assets/electric-fan/east.webp";
import darkSouthEast from "@/assets/electric-fan/south-east.webp";

import lightSouth from "@/assets/electric-fan-light/south.webp";
import lightSouthWest from "@/assets/electric-fan-light/south-west.webp";
import lightWest from "@/assets/electric-fan-light/west.webp";
import lightNorthWest from "@/assets/electric-fan-light/north-west.webp";
import lightNorth from "@/assets/electric-fan-light/north.webp";
import lightNorthEast from "@/assets/electric-fan-light/north-east.webp";
import lightEast from "@/assets/electric-fan-light/east.webp";
import lightSouthEast from "@/assets/electric-fan-light/south-east.webp";

const frames: ThemedImageSource[] = [
    { forDark: darkSouth, forLight: lightSouth },
    { forDark: darkSouthWest, forLight: lightSouthWest },
    { forDark: darkWest, forLight: lightWest },
    { forDark: darkNorthWest, forLight: lightNorthWest },
    { forDark: darkNorth, forLight: lightNorth },
    { forDark: darkNorthEast, forLight: lightNorthEast },
    { forDark: darkEast, forLight: lightEast },
    { forDark: darkSouthEast, forLight: lightSouthEast },
];

const frame = ref(0);
let timer: number | undefined;

onMounted(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    timer = window.setInterval(() => {
        frame.value = (frame.value + 1) % frames.length;
    }, 250);
});

onUnmounted(() => {
    window.clearInterval(timer);
});
</script>

<template>
    <div class="header">
        <div class="name-row">
            <h1 class="my-name">Jasper Robert Pigason</h1>
            <ThemedImage
                class="fan"
                :src="frames[frame]"
                alt=""
                :width="40"
                :height="40"
            />
        </div>
        <p class="my-description">
            I'm a full stack developer who enjoys dabbling in a little bit of
            everything. <br />
            If learning is pain, then I'm a masochist. I probably could've
            thought of a better metaphor, but you get it.
        </p>
        <a class="cta" href="mailto:jrpigason@gmail.com">Get in touch</a>
    </div>
</template>

<style scoped>
.header {
    padding: var(--spacing-xl) var(--content-padding-x) var(--spacing-md);
}

.name-row {
    display: flex;
    align-items: baseline;
    gap: 8px;
}

.fan {
    margin-top: auto;
    margin-bottom: auto;
    width: 40px;
    height: 40px;
    image-rendering: pixelated;
    flex: none;
}

.my-name {
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -0.5px;
}

.my-description {
    margin: 0;
    opacity: 0.65;
    font-size: 1rem;
}

.cta {
    display: inline-block;
    margin-top: var(--spacing-sm);
    padding: 10px 20px;
    background-color: var(--accent-color);
    color: var(--accent-contrast);
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    transition:
        background-color 0.2s ease,
        transform 0.2s ease;
}

.cta:hover {
    background-color: var(--accent-color-hover);
    transform: translateY(-2px);
}

.cta:focus-visible {
    outline: 2px solid var(--accent-color);
    outline-offset: 2px;
}

@media (max-width: 768px) {
    .header {
        padding: var(--spacing-md) var(--content-padding-x-mobile)
            var(--spacing-sm);
    }

    .fan {
        width: 32px;
        height: 32px;
    }

    .my-name {
        font-size: 1.6rem;
    }
}
</style>
