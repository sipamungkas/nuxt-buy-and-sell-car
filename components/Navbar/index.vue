<script setup>
const user = useSupabaseUser()

const supabase = useSupabaseAuthClient();


const logout = () => {
    const { error } = supabase.auth.signOut()
    if (error) {
        console.log({ error })
        throw createError('Failed to logt')
    }
    user.value = null
    navigateTo('/')

}

</script>

<template>
    <div>
        <header class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md">
            <NuxtLink class="text-3xl font-mono" to="/"> Cartrader </NuxtLink>
            <div v-if="user" class="flex">
                <NuxtLink class="mr-5" to="/profile/listings">
                    Profile
                </NuxtLink>
                <p class="cursor-pointer" @click="logout">Logout</p>
            </div>
            <div v-else>
                <NuxtLink to="/login">
                    Login
                </NuxtLink>
            </div>
        </header>
    </div>
</template> 