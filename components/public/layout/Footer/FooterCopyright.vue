<template>
    <div class="mt-12 pt-8 border-t border-gray-200">
        <p class="text-center text-gray-600">
            © {{ currentYear }} NjiAuto. Tous droits réservés.
        </p>
    </div>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>