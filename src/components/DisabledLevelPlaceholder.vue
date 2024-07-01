<script setup>
import LockedIcon from './icons/LockedIcon.vue'

defineProps({
    level: String
})
</script>

<template>
    <div class="flex flex-col items-center gap-0.5">
        <div class="hexagon bg-[#747383]">
            <slot></slot>
            <LockedIcon />
        </div>
        <p class="font-medium text-stone-400">Level {{ level }}</p>
    </div>
</template>

<style scoped>
.hexagon {
    position: relative;
    width: 80px;
    height: 90px;
    margin: 0 10px;
    clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
}
</style>