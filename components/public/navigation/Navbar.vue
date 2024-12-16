<template>
    <nav class="fixed top-0 w-full bg-white shadow-sm z-50">
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between h-16">
                <!-- Logo -->
                <NuxtLink to="/" class="flex items-center space-x-2">
                    <img src="@/assets/logo.png" alt="Logo" class="h-12" />
                </NuxtLink>

                <!-- Navigation -->
                <div class="hidden md:flex items-center space-x-8">
                    <PublicNavigationLink v-for="item in navigationItems" :key="item.path" :label="item.label"
                        :path="item.path" />
                </div>

                <!-- Auth Buttons -->
                <PublicNavigationAuthButtons @open-login="$emit('open-login')" @open-register="$emit('open-register')" />
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
const navigationItems = [
    { label: 'Accueil', path: '/' },
    { label: 'Services', path: '/#services' },
    { label: 'Avantages', path: '/#benefits' },
    { label: 'À propos', path: '/#about' },
    { label: 'Contact', path: '/#contact' }
]

defineEmits<{
    (e: 'open-login'): void
    (e: 'open-register'): void
}>()
</script>