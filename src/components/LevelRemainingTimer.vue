<script setup>
import { useCandidateStore } from "../stores/candidate"
import CountdownIcon from "./icons/CountdownIcon.vue";
import CountdownTimer from "./CountdownTimer.vue";

const candidate = useCandidateStore()
</script>

<template>
    <div class="w-full bg-warning rounded-3xl py-4 px-7 flex flex-col gap-2 mb-5">
        <h3 class="text-[#bd7782] font-bold">Level {{ candidate.level }}</h3>
        <div class="flex gap-3 items-center">
            <CountdownIcon />
            <CountdownTimer />
        </div>
    </div>
</template>