<script setup>
const error = useError()

useHead({
    title: `${error?.value?.statusCode} ${error?.value?.message}`
})

const handleError = () => {
    clearError({ redirect: '/' })
}
</script>

<template>
    <div class="flex h-screen justify-center items-center flex-col">
        <h1 class="text-9xl">{{ error?.statusCode }}</h1>
        <p class="mt-7 text-4xl text-blue-400">{{ error.message }}</p>
        <button @click="handleError" class="text-white mt-9 rounded py-2 px-5 bg-blue-500">
            Go Back
        </button>
    </div>
</template>