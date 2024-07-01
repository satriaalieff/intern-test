<script setup>
import { useCandidateStore } from "../stores/candidate"
import AppBar from '../components/AppBar.vue'
import ResultBar from '../components/ResultBar.vue'
import ReminderBar from '../components/ReminderBar.vue'
import LeaderBoard from '../components/LeaderBoard.vue'

const candidate = useCandidateStore()
</script>

<template>
    <div class="bg-main w-full flex flex-col">
        <AppBar class="px-3" />
        <ResultBar class="px-3" />

        <ReminderBar v-if="candidate.succeed" />

        <LeaderBoard class="px-3" />
    </div>
</template>