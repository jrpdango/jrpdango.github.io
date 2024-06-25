<script setup lang="ts">
defineProps<{
    name: string,
    description: string
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
        <p>{{ description }}</p>
    </div>
</template>

<style scoped>
    .project-card {
        display: flex;
        flex-direction: column;
    }
</style>