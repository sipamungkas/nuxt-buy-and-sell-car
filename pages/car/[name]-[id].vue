<script setup>


const route = useRoute()
const { name, id } = route.params
const { toTitleCase } = useUtilities()

useHead({
    title: `Buy ${toTitleCase(name)} ${id} car`
})



definePageMeta({
    layout: "custom"
})
</script>

<template>
    <div>
        <CarDetailHero />
        <CarDetailAttribute />
        <CarDetailDescription />
    </div>
</template>