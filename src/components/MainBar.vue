<script setup>
import LevelRemainingTimer from './LevelRemainingTimer.vue'
import LevelOptions from './LevelOptions.vue'
import ProfilePicture from './ProfilePicture.vue';
import ProfileData from './ProfileData.vue';
</script>

<template>
    <div class="flex">
        <div
            class="container max-w-xl mx-auto font-secondary bg-white mt-48 m-auto rounded-l-[3rem] rounded-t-[3rem] flex flex-col py-14 px-3 items-center gap-5">

            <ProfilePicture />
            <ProfileData />
            <LevelRemainingTimer />
            <LevelOptions />
        </div>
    </div>
</template>