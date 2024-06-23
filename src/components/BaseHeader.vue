<script setup lang="ts">
defineEmits(['themeChanged']);
</script>

<template>
    <div>
        <h3>Jasper Robert Pigason</h3>
        <button @click="$emit('themeChanged')">Change theme</button>
        <div class="social-links">
            hello
        </div>
    </div>
</template>

<style scoped>
    .social-links {
        display: flex;
    }
</style>
