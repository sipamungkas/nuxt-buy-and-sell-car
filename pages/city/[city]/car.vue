<template>
    <Navbar />
    <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
        <div class="mt-32 flex">
            <CarSidebar />
            <NuxtPage /> 
            <!-- this nuxtpage will render inside car directory its can be a static or dynamic -->
        </div>
    </div>
</template>