<script setup>
defineProps({
    level: String
})
</script>

<template>
    <section class="container max-w-xl mx-auto py-3 px-4">
        <div class="bg-main w-full h-3 rounded-t-lg"></div>
        <div class="bg-white rounded-b-lg px-4 py-4 flex flex-col gap-2">
            <h2 class="font-semibold text-2xl">Level {{ level }}</h2>
            <p class=" text-red-500 font-semibold text-sm">* Menunjukkan Pertanyaan yang wajib diisi</p>
        </div>
    </section>
</template>