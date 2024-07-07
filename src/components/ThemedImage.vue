<script setup lang="ts">
import { Theme, theme } from '../theme';
import { computed } from 'vue';
import { ThemedImageSource } from '../types';

const props = defineProps<{
    src: ThemedImageSource,
    alt: string,
    height?: number,
    width?: number
}>();

const image = computed(() => {
    if(props.src.forLight && theme.state === Theme.LIGHT) {
        return props.src.forLight;
    } else {
        return props.src.forDark;
    }
});

</script>

<template>
    <img 
        :src="image" 
        :alt="alt" 
        :height="height" 
        :width="width" 
    />
</template>