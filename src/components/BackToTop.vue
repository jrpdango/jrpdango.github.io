<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { ArrowUp } from "@iconoir/vue";

const SCROLL_THRESHOLD = 300;
const sentinel = ref<HTMLElement | null>(null);
const visible = ref(false);
let observer: IntersectionObserver | undefined;

function scrollToTop() {
    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
}

onMounted(() => {
    if (!sentinel.value) return;

    observer = new IntersectionObserver(
        ([entry]) => {
            visible.value = !entry.isIntersecting;
        },
        { rootMargin: `${SCROLL_THRESHOLD}px 0px 0px 0px` },
    );
    observer.observe(sentinel.value);
});

onBeforeUnmount(() => {
    observer?.disconnect();
});
</script>

<template>
    <div ref="sentinel" class="top-sentinel" aria-hidden="true"></div>
    <Transition name="back-to-top">
        <button
            v-show="visible"
            type="button"
            class="back-to-top"
            aria-label="Back to top"
            @click="scrollToTop"
        >
            <ArrowUp :width="22" :height="22" />
        </button>
    </Transition>
</template>

<style scoped>
.top-sentinel {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    pointer-events: none;
}

.back-to-top {
    position: fixed;
    bottom: var(--spacing-sm);
    right: var(--spacing-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    padding: 0;
    border: 1px solid var(--border-color);
    border-radius: 999px;
    background-color: var(--accent-color);
    color: var(--accent-contrast);
    box-shadow: 0 2px 12px var(--bar-shadow-color);
    cursor: pointer;
    z-index: 99;
    transition:
        background-color 0.2s ease,
        transform 0.2s ease,
        opacity 0.2s ease;
}

.back-to-top:hover {
    background-color: var(--accent-color-hover);
    transform: translateY(-2px);
}

.back-to-top:focus-visible {
    outline: 2px solid var(--accent-color);
    outline-offset: 2px;
}

.back-to-top-enter-from,
.back-to-top-leave-to {
    opacity: 0;
    transform: translateY(8px);
}

@media (max-width: 768px) {
    .back-to-top {
        right: 12px;
        bottom: calc(
            var(--bottombar-height) + env(safe-area-inset-bottom, 0px) +
                var(--spacing-xs)
        );
    }
}

@media (prefers-reduced-motion: reduce) {
    .back-to-top {
        transition: none;
    }

    .back-to-top:hover {
        transform: none;
    }
}
</style>
