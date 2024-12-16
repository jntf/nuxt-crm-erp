<template>
    <div>
        <h3 class="text-gray-900 font-semibold mb-4">Contact</h3>
        <ul class="space-y-2 text-gray-600">
            <li v-for="(info, index) in contactInfo" :key="index">
                {{ info }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const contactInfo = [
    'support@njiauto.com',
    '+33 1 23 45 67 89'
]
</script>