<script setup>
import { useCandidateStore } from "../stores/candidate"
import LevelPlaceholder from "./LevelPlaceholder.vue";
import DisabledLevelPlaceholder from "./DisabledLevelPlaceholder.vue";
import Level1Icon from "./icons/Level1Icon.vue";
import Level2Icon from "./icons/Level2Icon.vue";
import Level3Icon from "./icons/Level3Icon.vue";
import Level4Icon from "./icons/Level4Icon.vue";

const candidate = useCandidateStore()
</script>

<template>
    <div class="grid grid-cols-2 grid-rows-2 gap-x-12 gap-y-4">
        <!-- Level 1 -->
        <LevelPlaceholder level="1" link="/level1">
            <Level1Icon />
        </LevelPlaceholder>

        <!-- Level 2 -->
        <DisabledLevelPlaceholder v-if="candidate.level < 2" level="2">
            <Level2Icon iconColor="#565565" />
        </DisabledLevelPlaceholder>

        <LevelPlaceholder v-else level="2" link="/level2">
            <Level2Icon iconColor="#67dfc4" />
        </LevelPlaceholder>

        <!-- Level 3 -->
        <DisabledLevelPlaceholder v-if="candidate.level < 3" level="3">
            <Level3Icon iconColor="#565565" />
        </DisabledLevelPlaceholder>

        <LevelPlaceholder v-else level="3" link="/level3">
            <Level3Icon iconColor="#67dfc4" />
        </LevelPlaceholder>

        <!-- Level 4 -->
        <DisabledLevelPlaceholder v-if="candidate.level < 4" level="4">
            <Level4Icon iconColor="#565565" />
        </DisabledLevelPlaceholder>

        <LevelPlaceholder v-else level="4" link="/level4">
            <Level4Icon iconColor="#67dfc4" />
        </LevelPlaceholder>

    </div>
</template>