<script setup lang="ts">
import { computed } from 'vue';
import moon from '/crescent-moon.svg';
import sun from '/sun.svg';
import { Theme, theme } from '../theme';
defineEmits(['themeChanged']);

const indicator = computed(() => {
    return theme.state === Theme.DARK ? moon : sun;
});
</script>

<template>
    <label class="theme-switch" for="switch">
        <input type="checkbox" id="switch" @click="$emit('themeChanged')" :checked="theme.state === Theme.DARK" />
        <div class="slider">
            <img :src="indicator" class="indicator" alt="moon" />
        </div>
    </label>
</template>

<style scoped>
   .theme-switch {
        display: inline-block;
        height: 34px;
        position: relative;
        width: 60px;
    } 

    .theme-switch input {
        display: none;
    }

    .slider {
        background-color:skyblue;
        background-image:
        radial-gradient(circle at 100% 150%, skyblue 24%, white 24%, white 28%, skyblue 28%, skyblue 36%, white 36%, white 40%, transparent 40%, transparent),
        radial-gradient(circle at 0    150%, skyblue 24%, white 24%, white 28%, skyblue 28%, skyblue 36%, white 36%, white 40%, transparent 40%, transparent),
        radial-gradient(circle at 50%  100%, white 10%, skyblue 10%, skyblue 23%, white 23%, white 30%, skyblue 30%, skyblue 43%, white 43%, white 50%, skyblue 50%, skyblue 63%, white 63%, white 71%, transparent 71%, transparent),
        radial-gradient(circle at 100% 50%, white 5%, skyblue 5%, skyblue 15%, white 15%, white 20%, skyblue 20%, skyblue 29%, white 29%, white 34%, skyblue 34%, skyblue 44%, white 44%, white 49%, transparent 49%, transparent),
        radial-gradient(circle at 0    50%, white 5%, skyblue 5%, skyblue 15%, white 15%, white 20%, skyblue 20%, skyblue 29%, white 29%, white 34%, skyblue 34%, skyblue 44%, white 44%, white 49%, transparent 49%, transparent);
        background-size: 50px 25px;
        background-position: 50px 100px;
        bottom: 0;
        cursor: pointer;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transition: .4s;
        border-radius: 34px;
    }

    .indicator {
        height: 26px;
        width: 26px;
        position: absolute;
        transition: .4s;
        top: 4px;
        left: 4px;
    }

    input:checked + .slider {
        background-color:black;
        background-image:
        radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 10px),
        radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 5px),
        radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 10px),
        radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 5px);
        background-size: 55px 55px, 40px 40px, 30px 30px, 20px 20px;
        background-position: 0 0, 45px 31px, 24px 50px, 24px 50px;
    }

    input:checked + div .indicator{
        transform: translateX(24px);
    }
</style>