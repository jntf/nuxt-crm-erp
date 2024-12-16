<template>
    <footer class="bg-gray-50">
        <div class="container mx-auto px-4 py-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <!-- Company Info -->
                <div>
                    <h3 class="text-gray-900 font-semibold mb-4">NjiAuto</h3>
                    <p class="text-gray-600">
                        Votre plateforme B2B professionnelle pour l'automobile.
                    </p>
                </div>

                <!-- Quick Links -->
                <PublicLayoutFooterLinks title="Liens rapides" :links="quickLinks" />

                <!-- Legal Links -->
                <PublicLayoutFooterLinks title="Légal" :links="legalLinks" />

                <!-- Contact -->
                <PublicLayoutFooterContact />
            </div>

            <!-- Copyright -->
            <PublicLayoutFooterCopyright />
        </div>
    </footer>
</template>

<script setup lang="ts">
const quickLinks = [
    { name: 'Fonctionnalités', path: '/#features' },
    { name: 'Tarifs', path: '/#pricing' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Blog', path: '/blog' }
]

const legalLinks = [
    { name: 'Mentions légales', path: '/mentions-legales' },
    { name: 'Politique de confidentialité', path: '/politique-confidentialite' },
    { name: 'CGV', path: '/cgv' }
]
</script>