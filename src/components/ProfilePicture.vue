<script setup>
import { useCandidateStore } from "../stores/candidate"
const candidate = useCandidateStore()
</script>

<template>
    <div class="absolute rounded-full w-28 h-28 bg-cover bg-center right-1/2 translate-x-1/2 -translate-y-[8.5rem]"
        :class="candidate.image">
    </div>
</template>