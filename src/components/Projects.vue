<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';
import projects from '../data/projects.ts';

function projectsByType(type: string) {
    return projects.filter((project) => project.type === type);
}

</script>

<template>
    <h2 class="projects-title">Personal Projects</h2>
    <div class="projects">
        <div v-for="project in projectsByType('personal')" class="project">
            <ProjectCard 
                :name="project.name" 
                :description="project.description"
                :thumbnail="project.thumbnail" 
                :source-code-url="project.sourceCodeUrl"
                :demo-url="project.demoUrl"
                :techs-used="project.techsUsed"
            />
        </div>
    </div>
</template>

<style>
    .projects-title {
        margin-bottom: 8px;
        margin-left: 16px;
    }
    
    .projects {
        margin: 0 16px 32px 16px;
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        column-gap: 32px;
        row-gap: 4px;
        justify-items: center;
    }

    .project {
        display: grid;
        grid-row: span 5;
        grid-template-rows: subgrid;
    }

    @media (min-width: 768px) {
        .projects {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: 1300px) {
        .projects {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>