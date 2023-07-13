<script setup>
const route = useRoute()
const { make, city } = route.params
const { toTitleCase } = useUtilities()

useHead({
    title: `Buy ${toTitleCase(make)} Car in ${toTitleCase(city)}`
})

definePageMeta({
    layout: 'custom'
})

</script>

<template>
    <div class="mt-32 flex">
        <NuxtErrorBoundary>
            <CarSidebar />
            <NuxtPage />
            <template #error="{ error }">
                <div>
                    <div class="text-center mx-auto flex flex-col">
                        <h1 class="text-5xl mb-4 text-red-400">Sorry, Invalid City Format</h1>
                        <code>{{ error }}</code>
                        <button @click="error.value = null" class="text-white bg-blue-400 px-10 py-2 rounded mt-4">Back to
                            Home</button>
                    </div>
                </div>
            </template>
        </NuxtErrorBoundary>
        <!-- this nuxtpage will render inside car directory its can be a static or dynamic -->
    </div>
</template>