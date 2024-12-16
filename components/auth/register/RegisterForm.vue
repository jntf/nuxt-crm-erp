// components/auth/register/RegisterForm.vue
<template>
    <form @submit.prevent="$emit('submit')" class="space-y-6">
        <div class="rounded-md shadow-sm -space-y-px">
            <div>
                <label for="company" class="sr-only">Nom de l'entreprise</label>
                <input id="company" :value="company"
                    @input="$emit('update:company', ($event.target as HTMLInputElement).value)" type="text" required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                    placeholder="Nom de l'entreprise" />
            </div>
            <div>
                <label for="email" class="sr-only">Email professionnel</label>
                <input id="email" :value="email"
                    @input="$emit('update:email', ($event.target as HTMLInputElement).value)" type="email" required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                    placeholder="Email professionnel" />
            </div>
            <div>
                <label for="password" class="sr-only">Mot de passe</label>
                <input id="password" :value="password"
                    @input="$emit('update:password', ($event.target as HTMLInputElement).value)" type="password"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                    placeholder="Mot de passe" />
            </div>
            <div>
                <label for="confirmPassword" class="sr-only">Confirmer le mot de passe</label>
                <input id="confirmPassword" :value="confirmPassword"
                    @input="$emit('update:confirmPassword', ($event.target as HTMLInputElement).value)" type="password"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                    placeholder="Confirmer le mot de passe" />
            </div>
        </div>

        <div v-if="error" class="text-red-600 text-sm text-center">
            {{ error }}
        </div>

        <div class="flex space-x-3">
            <button type="submit" :disabled="loading"
                class="flex-1 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                {{ loading ? 'Création en cours...' : 'Créer mon compte' }}
            </button>
        </div>
    </form>
    <!-- Déjà un compte -->
    <div class="text-center mt-4">
        <button @click="$emit('switch-to-login')" class="text-sm text-blue-600 hover:text-blue-700">
            Déjà un compte ? Connectez-vous
        </button>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    company: string
    email: string
    password: string
    confirmPassword: string
    loading: boolean
    error: string
}>()

defineEmits<{
    (e: 'update:company', value: string): void
    (e: 'update:email', value: string): void
    (e: 'update:password', value: string): void
    (e: 'update:confirmPassword', value: string): void
    (e: 'submit'): void
    (e: 'switch-to-login'): void
}>()
</script>