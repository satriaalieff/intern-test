<script setup>
defineProps({
    level: String,
    link: String
})
</script>

<template>
    <router-link :to="link" class="flex flex-col items-center gap-0.5">
        <div class="hexagon bg-[#c9f3e9]">
            <slot></slot>
        </div>
        <p class="text-main font-semibold">Level {{ level }}</p>
    </router-link>
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