<template>
    <div class="max-w-3xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            {{ title }}
        </h1>
        <p class="text-xl text-indigo-50 mb-8">
            {{ subtitle }}
        </p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string
    subtitle: string
}>()
</script>