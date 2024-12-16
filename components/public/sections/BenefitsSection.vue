// components/public/sections/HeroSection/BenefitsSection.vue
<template>
    <section class="py-16 bg-primary-50" id="benefits">
        <div class="container mx-auto px-4">
            <div class="max-w-3xl mx-auto">
                <h2 class="text-3xl font-bold text-center mb-12">
                    Avantages Professionnels
                </h2>
                <div class="space-y-6">
                    <div v-for="benefit in benefits" :key="benefit.title" class="flex items-start space-x-4">
                        <ArrowRightIcon class="w-6 h-6 text-tertiary-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 class="text-xl font-semibold mb-2">{{ benefit.title }}</h3>
                            <p class="text-primary-600">{{ benefit.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from '@heroicons/vue/24/outline'

const benefits = [
    {
        title: 'Marketplace Exclusive B2B',
        description: 'Une plateforme dédiée aux professionnels de l\'automobile avec des prix négociés et un accès privilégié aux stocks.'
    },
    {
        title: 'Outils de Gestion Intégrés',
        description: 'Suivez vos transactions, gérez vos documents et accédez à vos statistiques depuis votre espace personnalisé.'
    },
    {
        title: 'Support Dédié',
        description: 'Une équipe de professionnels à votre service pour vous accompagner dans toutes vos démarches.'
    }
]
</script>