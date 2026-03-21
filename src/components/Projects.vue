<script setup lang="ts">
import ProjectCard from "./ProjectCard.vue";
import projects from "../data/projects.ts";

const professionalProjects = projects.filter((p) => p.type === "professional");
const personalProjects = projects.filter((p) => p.type === "personal");
</script>

<template>
    <div class="projects-wrapper">
        <template v-if="professionalProjects.length > 0">
            <h2 class="section-title">Professional Projects</h2>
            <div class="projects">
                <div v-for="project in professionalProjects" class="project">
                    <ProjectCard
                        :name="project.name"
                        :description="project.description"
                        :thumbnail="project.thumbnail"
                        :has-blurred-background="project.hasBlurredBackground"
                        :urls="project.urls"
                        :techs-used="project.techsUsed"
                    />
                </div>
            </div>
        </template>

        <h2 class="section-title">Personal Projects</h2>
        <div class="projects">
            <div v-for="project in personalProjects" class="project">
                <ProjectCard
                    :name="project.name"
                    :description="project.description"
                    :thumbnail="project.thumbnail"
                    :has-blurred-background="project.hasBlurredBackground"
                    :urls="project.urls"
                    :techs-used="project.techsUsed"
                />
            </div>
        </div>
    </div>
</template>

<style>
.projects-wrapper {
    padding: 0 var(--content-padding-x) var(--spacing-xl);
}

.section-title {
    margin: 0 0 var(--spacing-xs);
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    opacity: 0.45;
}

.section-title + .section-title {
    margin-top: var(--spacing-lg);
}

.projects {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 24px;
    row-gap: 4px;
    margin-bottom: var(--spacing-lg);
}

.project {
    display: grid;
    grid-row: span 5;
    grid-template-rows: subgrid;
}

@media (max-width: 768px) {
    .projects-wrapper {
        padding: 0 var(--content-padding-x-mobile) var(--spacing-xl);
    }
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
