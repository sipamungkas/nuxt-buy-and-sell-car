<script setup>


const route = useRoute()

const { name, id } = route.params
const { toTitleCase } = useUtilities()

const { data: car } = await useFetchCar(id)
useHead({
    title: `Buy ${toTitleCase(name)} ${id} car`
})


definePageMeta({
    layout: "custom"
})
</script>

<template>
    Test
    <div v-if="car">
        <CarDetailHero :car="car" />
        <CarDetailAttribute :features="car.features" />
        <CarDetailDescription :description="car.description" />
    </div>
    <div v-else>Car Not Found</div>
</template>