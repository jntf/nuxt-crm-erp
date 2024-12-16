<template>
    <NuxtLink :to="path" class="text-gray-700 hover:text-primary-600 transition-colors duration-200">
        {{ label }}
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
    label: string
    path: string
}>()
</script>