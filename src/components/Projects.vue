<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';
import projects from '../data/projects.ts';
</script>

<template>
    <h3>Personal Projects</h3>
    <div class="projects">
        <div v-for="project in projects" class="project">
            <ProjectCard :name="project.name" :description="project.description" />
        </div>
    </div>

    <h3>Work Projects</h3>
    <div class="projects">
        
    </div>
</template>

<style>
    .projects {
        margin: 32px 16px 32px 16px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 32px;
        justify-items: center;
    }

    @media (max-width: 810px) {
        .personal-projects {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>