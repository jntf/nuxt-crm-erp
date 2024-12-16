<template>
    <div class="p-6 bg-primary-50 rounded-lg">
        <component :is="icon" class="w-12 h-12 text-tertiary-400 mb-4" />
        <h3 class="text-xl font-semibold mb-3">{{ title }}</h3>
        <p class="text-primary-600">{{ description }}</p>
    </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
    icon: Component
    title: string
    description: string
}>()
</script>