<script setup lang="ts"></script>

<template>
    <div class="header">
        <h1 class="my-name">Jasper Robert Pigason</h1>
        <p class="my-description">
            I'm a full stack developer who enjoys dabbling in a little bit of
            everything. <br />
            If learning is pain, then I'm a masochist. I probably could've
            thought of a better metaphor, but you get it.
        </p>
    </div>
</template>

<style scoped>
.header {
    padding: var(--spacing-xl) var(--content-padding-x) var(--spacing-md);
}

.my-name {
    margin: 0 0 8px;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -0.5px;
}

.my-description {
    margin: 0;
    opacity: 0.65;
    font-size: 1rem;
}

@media (max-width: 768px) {
    .header {
        padding: var(--spacing-md) var(--content-padding-x-mobile)
            var(--spacing-sm);
    }

    .my-name {
        font-size: 1.6rem;
    }
}
</style>
