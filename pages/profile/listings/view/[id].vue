<script setup>
definePageMeta({
  layout: "custom",
});

const route = useRoute()
const { data: messages } = useFetch(`/api/cars/listings/${route.params.id}/message`)

</script>

<template>
  <div class="rounded shadow mt-20">
    <CarMessageCard v-for="msg in messages" :message="msg" :key="msg.id" />
  </div>
</template>