// components/auth/login/LoginForm.vue
<template>
  <form @submit.prevent="$emit('submit')" class="space-y-6">
    <div class="rounded-md shadow-sm -space-y-px">
      <div>
        <label for="email" class="sr-only">Email</label>
        <input id="email" :value="email" @input="$emit('update:email', ($event.target as HTMLInputElement).value)"
          type="email" required
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
          placeholder="Email" />
      </div>
      <div>
        <label for="password" class="sr-only">Mot de passe</label>
        <input id="password" :value="password"
          @input="$emit('update:password', ($event.target as HTMLInputElement).value)" type="password" required
          class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
          placeholder="Mot de passe" />
      </div>
    </div>

    <div v-if="error" class="text-red-600 text-sm text-center">
      {{ error }}
    </div>

    <div class="flex space-x-3">
      <button type="submit" :disabled="loading"
        class="flex-1 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
        {{ loading ? 'Connexion...' : 'Se connecter' }}
      </button>
    </div>
  </form>
  <!-- Pas de compte -->
  <div class="text-center mt-4">
    <button @click="$emit('switch-to-register')"
      class="text-sm text-blue-600 hover:text-blue-700 transition-colors duration-200">
      Pas de compte ? Créez-en un
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  email: string
  password: string
  loading: boolean
  error: string
}>()

defineEmits<{
  (e: 'update:email', value: string): void
  (e: 'update:password', value: string): void
  (e: 'submit'): void
  (e: 'cancel'): void
  (e: 'switch-to-register'): void
}>()
</script>