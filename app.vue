<template>
  <div>
    <!-- START NAVBAR -->
    <header class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md">
      <a class="text-3xl font-mono" href="/"> Cartrader </a>
    </header>
    <!-- END NAVBAR -->

    <!-- START HOME HERO -->
    <div class="relative h-screen w-100 bg-no-repeat bg-cover bg-bottom bg-[url('/assets/img/hero-bg-image.jpg')]">
      <div class="z-10 absolute w-full h-full flex flex-col justify-center items-center">
        <div class="text-center w-1/2">
          <h1 class="text-8xl font-serif mb-10 text-white">Find your Car</h1>
        </div>
        <!-- START HOME SEARCHBAR -->
        <div
          class="font-serif w-full md:w-[1000px] rounded-full bg-white flex flex-row justify-between overflow-hidden drop-shadow-2xl mx-auto">
          <input type="text" name="" id="" placeholder="Search by city..."
            class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none">
          <button class="bg-sky-500 px-10 text-white font-normal">Search</button>
        </div>
        <!-- START HOME SEARCHBAR -->
      </div>
      <div class="z-1 absolute w-full h-full bg-black opacity-50"></div>
    </div>

    <!-- END HOME HERO -->
  </div>
</template>
