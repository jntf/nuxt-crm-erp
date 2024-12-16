<template>
    <section class="py-16 bg-white" id="services">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12">Nos Services Premium</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <PublicSectionsServiceCard v-for="service in services" :key="service.title" v-bind="service" />
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import {
    TruckIcon,
    ShieldCheckIcon,
    CubeIcon
} from '@heroicons/vue/24/outline'

const services = [
    {
        icon: TruckIcon,
        title: 'Stock Automobile',
        description: 'Accédez à notre large inventaire de véhicules disponibles en temps réel. Gérez vos achats et ventes depuis une interface unique.'
    },
    {
        icon: ShieldCheckIcon,
        title: 'Garanties & Certifications',
        description: 'Bénéficiez de nos services d\'expertise et de garantie mécanique pour sécuriser vos transactions.'
    },
    {
        icon: CubeIcon,
        title: 'Gestion Complete',
        description: 'De l\'achat à la revente, nous gérons toutes les étapes: transport, préparation, documentation et immatriculation.'
    }
]
</script>