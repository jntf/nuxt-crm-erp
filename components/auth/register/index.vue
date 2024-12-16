// components/auth/register/index.vue
<template>
    <TransitionRoot appear :show="modelValue" as="template">
        <Dialog as="div" @close="$emit('update:modelValue', false)" class="relative z-50">
            <TransitionChild enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <DialogOverlay class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4">
                    <TransitionChild enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 align-middle shadow-xl transition-all">
                            <div class="space-y-8">
                                <div>
                                    <h2 class="text-center text-3xl font-extrabold text-gray-900">
                                        Créez votre compte
                                    </h2>
                                </div>

                                <AuthRegisterForm v-model:company="company" v-model:email="email"
                                    v-model:password="password" v-model:confirmPassword="confirmPassword"
                                    :loading="loading" :error="error" @submit="handleRegister" />
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup lang="ts">
import { useSupabaseClient } from '#imports'
// import { useAuthStore } from '~/stores/auth'
import { Dialog, DialogPanel, DialogTitle, DialogOverlay, TransitionRoot, TransitionChild } from '@headlessui/vue'

const props = defineProps<{
    modelValue: boolean
}>()

const emit = defineEmits<{
    'update:modelValue': [value: boolean]
    'switch-to-login': [value: boolean]
}>()

const client = useSupabaseClient()
// const auth = useAuthStore()
const router = useRouter()

const company = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')
const loading = ref(false)

async function handleRegister() {
    // try {
    //     error.value = ''
    //     loading.value = true

    //     // Vérification des mots de passe
    //     if (password.value !== confirmPassword.value) {
    //         throw new Error('Les mots de passe ne correspondent pas')
    //     }

    //     // Inscription avec Supabase
    //     const { error: authError, data } = await client.auth.signUp({
    //         email: email.value,
    //         password: password.value,
    //         options: {
    //             data: {
    //                 company: company.value
    //             }
    //         }
    //     })

    //     if (authError) throw authError

    //     // Si l'inscription est réussie
    //     await auth.initializeAuth()
    //     router.push('/dashboard')
    // } catch (e: any) {
    //     error.value = e.message || 'Erreur lors de l\'inscription'
    // } finally {
    //     loading.value = false
    // }
}
</script>