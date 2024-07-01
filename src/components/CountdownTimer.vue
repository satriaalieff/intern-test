<template>
    <vue-countdown :time="24 * 60 * 60 * 1000" v-slot="{ hours, minutes, seconds }"
        class="text-[#89313f] text-lg font-bold">
        Berakhir dalam {{ hours }} : {{ minutes }} : {{ seconds }}
    </vue-countdown>
</template>