<script setup>
const route = useRoute()

const minPrice = computed(() => route.query.minPrice)
const maxPrice = computed(() => route.query.maxPrice)
const make = computed(() => route.params.make)

const { data: cars } = await useFetchCars(route.params.city, {
    minPrice,
    maxPrice,
    make
})


</script>

<template>
    <div>
        <CarList v-if="cars.length" :cars="cars" />
        <h4 v-else class="text-red-400 text-center w-100 text-3xl">No Cars Found With Filters</h4>
    </div>
</template>