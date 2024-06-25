<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';
import projects from '../data/projects.ts';
</script>

<template>
    <div class="personal-projects">
        <h3>Personal Projects</h3>
        <div v-for="project in projects">
            <ProjectCard :name="project.name" :description="project.description" />
        </div>
    </div>

    <div class="personal-projects">
        <h3>Work Projects</h3>
    </div>
</template>