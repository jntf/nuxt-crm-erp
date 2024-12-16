// components/public/sections/HeroSection/HeroSection.vue
<template>
    <div>
        <!-- Hero Title Section -->
        <section class="pt-20 pb-12 bg-gradient-to-b from-white to-primary-500 min-h-96">
            <div class="container mx-auto px-4">
                <PublicSectionsHeroTitle title="Votre Plateforme B2B Professionnelle"
                    subtitle="Simplifiez vos opérations commerciales et développez votre activité" />
            </div>
        </section>
        <!-- Hero CTA Section -->
        <LazyPublicSectionsServiceSection />
        <LazyPublicSectionsBenefitsSection />
        <LazyPublicSectionsContactSection />
    </div>
</template>