// app/layouts/public.vue
<template>
  <div class="min-h-screen flex flex-col">
    <PublicNavigationNavbar @open-login="showLoginModal = true" @open-register="showRegisterModal = true" />

    <!-- Contenu principal -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <PublicLayoutFooter />

    <!-- Modales -->
    <AuthLogin v-model="showLoginModal" @switch-to-register="switchToRegister" />
    <AuthRegister v-model="showRegisterModal" @switch-to-login="switchToLogin" />
  </div>
</template>

<script setup lang="ts">
const showLoginModal = ref(false)
const showRegisterModal = ref(false)

function switchToLogin() {
  showRegisterModal.value = false
  showLoginModal.value = true
}

function switchToRegister() {
  showLoginModal.value = false
  showRegisterModal.value = true
}
</script>