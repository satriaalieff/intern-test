<script setup>
import { onBeforeMount } from "vue";
import { useCandidateStore } from "../stores/candidate"
import { players } from "@/data/players";
import CircleIcon from "./icons/CircleIcon.vue";
import FilledCircleIcon from "./icons/FilledCircleIcon.vue";
import GoldCrown from "./icons/GoldCrown.vue";
import SilverCrown from "./icons/SilverCrown.vue";
import BronzeCrown from "./icons/BronzeCrown.vue";
import PlayerCard from "./PlayerCard.vue";

const candidate = useCandidateStore()
let topPlayers = []

onBeforeMount(() => {
    let playerIndex = players.findIndex(user => user.name === candidate.name)
    if (playerIndex >= 0) {
        players.splice(playerIndex, 1, { name: candidate.name, score: candidate.score, image: candidate.image })
    }
    else {
        players.push({ name: candidate.name, score: candidate.score, image: candidate.image })
    }

    players.sort((a, b) => b.score - a.score);
    topPlayers = players.slice(0, 3)

    candidate.rank = players.findIndex(user => user.name === candidate.name) + 1
})

const isUser = (params) => {
    if (params.name === candidate.name) return true
}
</script>

<template>
    <div class="container max-w-xl mx-auto font-secondary px-5 w-full mt-14 pb-10">
        <div class="flex justify-center gap-0.5 items-center mb-4 -mx-2">
            <h2 class="text-white text-3xl font-normal">Leaderboard - Final</h2>

            <CircleIcon />
            <CircleIcon />
            <CircleIcon />
            <CircleIcon />
            <FilledCircleIcon />
        </div>
        <div class="flex flex-col gap-4">
            <!-- Gold -->
            <PlayerCard :class="[isUser(topPlayers[0]) ? 'bg-[#fcff5a]' : 'bg-white']" rank="1"
                :name="topPlayers[0].name" :score="topPlayers[0].score">
                <div class="w-16 h-16 rounded-full bg-cover bg-center" :class="topPlayers[0].image"></div>
                <GoldCrown />
            </PlayerCard>

            <!-- Silver -->
            <PlayerCard :class="[isUser(topPlayers[1]) ? 'bg-[#fcff5a]' : 'bg-white']" rank="2"
                :name="topPlayers[1].name" :score="topPlayers[1].score">
                <div class="w-16 h-16 rounded-full bg-cover bg-center" :class="topPlayers[1].image"></div>
                <SilverCrown />
            </PlayerCard>

            <!-- Bronze -->
            <PlayerCard :class="[isUser(topPlayers[2]) ? 'bg-[#fcff5a]' : 'bg-white']" rank="3"
                :name="topPlayers[2].name" :score="topPlayers[2].score">
                <div class="w-16 h-16 rounded-full bg-cover bg-center" :class="topPlayers[2].image"></div>
                <BronzeCrown />
            </PlayerCard>

            <!--  -->
            <section v-for="(player, index) in players.slice(3)" :key="index"
                class="relative flex w-full rounded-2xl py-4 px-5 items-center gap-5"
                :class="[isUser(player) ? 'bg-[#fcff5a]' : 'bg-white']">
                <div class="flex rounded-full w-6 h-6 outline outline-neutral-300">
                    <span class="m-auto text-neutral-400 text-sm font-semibold">{{ index + 4 }}</span>
                </div>

                <div class="w-16 h-16 rounded-full bg-cover bg-center" :class="player.image"></div>

                <div class="flex-grow">
                    <h3 class="font-semibold mb-1">{{ player.name }}</h3>
                    <p class="text-neutral-400 text-sm font-normal">{{ player.score }} Points</p>
                </div>
            </section>
        </div>
    </div>
</template>
