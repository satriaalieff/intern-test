<script setup>
defineProps({
    iconColor: String,
})
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
        <path :fill="iconColor"
            d="M9 7v6h4v4h2V7h-2v4h-2V7zm3-5a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2" />
    </svg>
</template>