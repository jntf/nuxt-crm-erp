<template>
    <div>
        <h3 class="text-gray-900 font-semibold mb-4">{{ title }}</h3>
        <ul class="space-y-2">
            <li v-for="link in links" :key="link.path">
                <NuxtLink :to="link.path" class="text-gray-600 hover:text-gray-900">
                    {{ link.name }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
interface Link {
    name: string
    path: string
}

defineProps<{
    title: string
    links: Link[]
}>()
</script>