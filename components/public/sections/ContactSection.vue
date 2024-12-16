// components/public/sections/HeroSection/ContactSection.vue
<template>
    <section class="py-16 bg-primary-50" id="contact">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12">Contactez-Nous</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div v-for="item in contactInfo" :key="item.title" class="p-6 bg-white rounded-lg">
                    <component :is="item.icon" class="w-12 h-12 text-tertiary-400 mb-4" />
                    <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
                    <p class="text-primary-600">{{ item.description }}</p>
                </div>
            </div>
            <PublicSectionsContactForm class="max-w-2xl mx-auto mt-12" />
        </div>
    </section>
</template>

<script setup lang="ts">
import {
    MapPinIcon,
    PhoneIcon,
    EnvelopeIcon,
    ClockIcon
} from '@heroicons/vue/24/outline'

const contactInfo = [
    {
        icon: MapPinIcon,
        title: 'Notre Adresse',
        description: '123 Rue du Commerce, 75001 Paris, France'
    },
    {
        icon: PhoneIcon,
        title: 'Téléphone',
        description: '+33 1 23 45 67 89'
    },
    {
        icon: EnvelopeIcon,
        title: 'Email',
        description: 'contact@njiauto.com'
    },
    {
        icon: ClockIcon,
        title: 'Horaires',
        description: 'Du lundi au vendredi, de 9h à 18h'
    }
]
</script>