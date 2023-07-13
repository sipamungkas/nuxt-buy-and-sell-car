<script setup>
const { cars } = useCars()
</script>

<template>
    <div class="w-full">
        <CarCarItem v-for="car in cars" :key="car.id" :car="car" />
    </div>
</template>