<script setup>
defineProps({
    rank: String,
    name: String,
    score: Number
})
</script>

<template>
    <section class="relative flex w-full rounded-2xl py-4 px-5 items-center gap-5">
        <div class="flex rounded-full w-6 h-6 outline outline-neutral-300">
            <span class="m-auto text-neutral-400 text-sm font-semibold">{{ rank }}</span>
        </div>

        <slot></slot>

        <div class="flex-grow mr-12">
            <h3 class="font-semibold mb-1">{{ name }}</h3>
            <p class="text-neutral-400 text-sm font-normal">{{ score }} Points</p>
        </div>
        <GoldCrown />
    </section>
</template>