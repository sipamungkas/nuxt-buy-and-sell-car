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
        <CarSidebar />
        <NuxtPage />
        <!-- this nuxtpage will render inside car directory its can be a static or dynamic -->
    </div>
</template>