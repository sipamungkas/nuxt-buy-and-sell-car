<script setup>
const route = useRoute()
const { make, city } = route.params
useHead({
    title: `Buy ${toTitleCase(make)} Car in ${toTitleCase(city)}`
})

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

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