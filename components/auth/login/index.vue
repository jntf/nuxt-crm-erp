// components/auth/login/index.vue
<template>
    <TransitionRoot appear :show="modelValue" as="template">
        <Dialog as="div" @close="$emit('update:modelValue', false)" class="relative z-50">
            <TransitionChild 
                enter="duration-300 ease-out" 
                enter-from="opacity-0" 
                enter-to="opacity-100"
                leave="duration-200 ease-in" 
                leave-from="opacity-100" 
                leave-to="opacity-0"
            >
                <DialogOverlay class="fixed inset-0 bg-black bg-opacity-25" />
            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4">
                    <TransitionChild 
                        enter="duration-300 ease-out" 
                        enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" 
                        leave="duration-200 ease-in" 
                        leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95"
                    >
                        <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 align-middle shadow-xl transition-all">
                            <div class="space-y-8">
                                <div>
                                    <h2 class="text-center text-3xl font-extrabold text-gray-900">
                                        Connectez-vous à votre compte
                                    </h2>
                                </div>

                                <AuthLoginForm
                                    v-model:email="email"
                                    v-model:password="password"
                                    :loading="loading"
                                    :error="error"
                                    @submit="handleLogin"
                                    @cancel="$emit('update:modelValue', false)"
                                    @switch-to-register="$emit('update:modelValue', false)"
                                />
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
    'switch-to-register': [value: boolean]
}>()

const client = useSupabaseClient()
// const auth = useAuthStore()
const router = useRouter()

const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

async function handleLogin() {
    // try {
    //     error.value = ''
    //     loading.value = true

    //     const { error: authError } = await client.auth.signInWithPassword({
    //         email: email.value,
    //         password: password.value
    //     })

    //     if (authError) throw authError

    //     await auth.initializeAuth()
    //     router.push('/dashboard')
    // } catch (e: any) {
    //     error.value = e.message || 'Erreur de connexion'
    // } finally {
    //     loading.value = false
    // }
}
</script>