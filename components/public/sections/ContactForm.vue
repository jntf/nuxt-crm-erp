// components/public/sections/HeroSection/ContactForm.vue
<template>
    <form class="p-6 bg-white rounded-lg">
        <div class="space-y-4">
            <input type="email" placeholder="Votre email"
                class="w-full p-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
            <textarea rows="4" placeholder="Votre message"
                class="w-full p-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"></textarea>
            <button
                class="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors">
                Envoyer
            </button>
        </div>
    </form>
</template>