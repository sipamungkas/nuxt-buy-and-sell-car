<script setup>
definePageMeta({
  layout: "custom",
  middleware: [
    'auth'
  ]
});

const { listings } = useCars();
</script>

<template>
  <div>
    <div class="flex justify-between mt-24 items-center">
      <h1 class="text-6xl">My Listings</h1>
      <NuxtLink to="/profile/listings/create" class=" box-border
          w-10 h-10  bg-blue-400 flex rounded-full text-white font-bold cursor-pointer justify-center items-center
        ">+</NuxtLink>
    </div>
    <div class="shadow rounded p-3 mt-5">
      <CarListing v-for="listing in listings" :key="listing.id" :listing="listing" />
    </div>
  </div>
</template>