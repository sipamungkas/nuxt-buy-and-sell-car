<script setup>
const { cars } = useCars()
</script>

<template>
    <div class="w-full">
        <CarItem v-for="car in cars" :key="car.id" :car="car" />
    </div>
</template>