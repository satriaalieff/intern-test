<template>
    <div class="hexagon absolute right-2.5 bg-[#e1e1e1]">
        <img src="../../assets/crown.png" class="w-6">
    </div>
</template>

<style scoped>
.hexagon {
    width: 40px;
    height: 45px;
    margin: 0 10px;
    clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
}
</style>