<script setup>
import { useCandidateStore } from "../stores/candidate"
import ProfileData from "./ProfileData.vue";
import ProfilePicture from "./ProfilePicture.vue";
import TrophyIcon from "./icons/TrophyIcon.vue";

const candidate = useCandidateStore()

const messageHeader = candidate.succeed ? 'Selamat, Anda' : 'Mohon Maaf, Anda'
const messageBody = candidate.succeed ? 'Diterima Kerja' : 'Belum Diterima Kerja'
</script>

<template>
    <div class="flex">
        <div
            class="container max-w-xl mx-auto font-secondary bg-white mt-48 m-auto rounded-l-[3rem] rounded-t-[3rem] flex flex-col py-14 px-3 items-center gap-7">
            <ProfilePicture />
            <ProfileData />

            <div class="flex flex-col justify-center items-center">
                <TrophyIcon />
                <h3 class="text-center font-medium text-2xl">Ranking {{ candidate.rank }}</h3>
            </div>

            <div class="text-xl font-semibold text-center">
                <p>{{ messageHeader }}</p>
                <p class="text-main">{{ messageBody }}</p>
            </div>
        </div>
    </div>
</template>