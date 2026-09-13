<script setup lang="ts">
import Fan from "./Fan.vue";
</script>

<template>
    <div class="header">
        <div class="name-row">
            <h1 class="my-name">Jasper Robert Pigason</h1>
            <Fan />
        </div>
        <p class="my-description">
            I'm a full stack developer who enjoys dabbling in a little bit of
            everything. <br />
            If learning is pain, then I'm a masochist. I probably could've
            thought of a better metaphor, but you get it.
        </p>
        <a class="cta" href="mailto:jrpigason@gmail.com">Get in touch</a>
    </div>
</template>

<style scoped>
.header {
    padding: var(--spacing-xl) var(--content-padding-x) var(--spacing-md);
}

.name-row {
    display: flex;
    align-items: baseline;
    gap: 8px;
}

.my-name {
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: -0.5px;
}

.my-description {
    margin: 0;
    opacity: 0.65;
    font-size: 1rem;
}

.cta {
    display: inline-block;
    margin-top: var(--spacing-sm);
    padding: 10px 20px;
    background-color: var(--accent-color);
    color: var(--accent-contrast);
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    transition:
        background-color 0.2s ease,
        transform 0.2s ease;
}

.cta:hover {
    background-color: var(--accent-color-hover);
    transform: translateY(-2px);
}

.cta:focus-visible {
    outline: 2px solid var(--accent-color);
    outline-offset: 2px;
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
