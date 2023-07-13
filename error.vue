<template>
    <div class="flex h-screen justify-center items-center flex-col">
        <h1 class="text-9xl">404</h1>
        <p class="mt-7 text-4xl text-blue-400">Page not found</p>
        <button @click="navigateTo('/')" class="text-white mt-9 rounded py-4 px-5 bg-blue-500">
            Go Back
        </button>
    </div>
</template>