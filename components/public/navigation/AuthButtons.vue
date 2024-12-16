<template>
    <div class="flex items-center space-x-4">
        <button @click="$emit('open-login')"
            class="px-4 py-2 rounded-md border border-accent-700 hover:text-white hover:bg-accent-700 transition-colors duration-200">
            <UserIcon class="w-6 h-6 inline-block" /><span>Espace Client</span>

        </button>
    </div>
</template>

<script setup lang="ts">
// Import user icon
import { UserIcon } from '@heroicons/vue/24/outline'

defineEmits<{
    (e: 'open-login'): void
    (e: 'open-register'): void
}>()
</script>