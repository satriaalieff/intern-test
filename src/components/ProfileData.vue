<script setup>
import { useCandidateStore } from "../stores/candidate"
const candidate = useCandidateStore()
</script>

<template>
    <h2 class="font-semibold text-2xl">{{ candidate.name }}
        <span class="text-main">({{ candidate.score }} Poin)</span>
    </h2>
</template>