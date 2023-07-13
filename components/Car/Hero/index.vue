<template>
    <div class="relative h-screen w-100 bg-no-repeat bg-cover bg-bottom bg-[url('/assets/img/hero-bg-image.jpg')]">
        <div class="z-10 absolute w-full h-full flex flex-col justify-center items-center">
            <div class="text-center w-1/2">
                <h1 class="text-8xl font-serif mb-10 text-white">Find your Car</h1>
            </div>
            <!-- START HOME SEARCHBAR -->
            <CarSearchBar />
            <!-- START HOME SEARCHBAR -->
        </div>
        <div class="z-1 absolute w-full h-full bg-black opacity-50"></div>
    </div>
</template>