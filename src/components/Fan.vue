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
    <ThemedImage
        class="fan"
        :src="frames[frame]"
        alt=""
        :width="40"
        :height="40"
    />
</template>

<style scoped>
.fan {
    margin-top: auto;
    margin-bottom: auto;
    width: 40px;
    height: 40px;
    image-rendering: pixelated;
    flex: none;
}

@media (max-width: 768px) {
    .fan {
        width: 32px;
        height: 32px;
    }
}
</style>
