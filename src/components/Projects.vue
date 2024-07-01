<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';
import projects from '../data/projects.ts';

function projectsByType(type: string) {
    return projects.filter((project) => project.type === type);
}

</script>

<template>
    <h3>Personal Projects</h3>
    <div class="projects">
        <div v-for="project in projectsByType('personal')" class="project">
            <ProjectCard 
                :name="project.name" 
                :description="project.description" 
                :source-code-url="project.sourceCodeUrl"
                :demo-url="project.demoUrl"
            />
        </div>
    </div>

    <h3>Work Projects</h3>
    <div class="projects">
        <div v-for="project in projectsByType('work')" class="project">
            <ProjectCard 
                :name="project.name" 
                :description="project.description" 
                :source-code-url="project.sourceCodeUrl"
                :demo-url="project.demoUrl"
            />
        </div>
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
        .projects {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>