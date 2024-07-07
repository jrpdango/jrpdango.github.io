<script setup lang="ts">
import { Theme, theme } from '../theme';
import { computed } from 'vue';

const props = defineProps<{
    src: string,
    alt: string,
    srcDark?: string,
    height?: number,
    width?: number
}>();

const image = computed(() => {
    if(props.srcDark && theme.state === Theme.DARK) {
        return props.srcDark;
    } else {
        return props.src;
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