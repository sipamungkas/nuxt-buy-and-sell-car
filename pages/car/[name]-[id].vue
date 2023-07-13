<script setup>



const route = useRoute()
const { name, id } = route.params
const { toTitleCase } = useUtilities()
const { cars } = useCars()

const car = computed(() =>
    cars.find(car =>
        car.id === parseInt(id)
    )
)

useHead({
    title: `Buy ${toTitleCase(name)} ${id} car`
})
// server side error
if (!car.value) {
    throw createError({
        statusCode: 404,
        message: "Car not found"
    })
}


definePageMeta({
    layout: "custom"
})
</script>

<template>
    <div v-if="car">
        <CarDetailHero :car="car" />
        <CarDetailAttribute :features="car.features" />
        <CarDetailDescription :description="car.description" />
    </div>
    <div v-else></div>
</template>