<script setup>
const modal = ref({
    make: false,
    location: false,
    price: false
})

const { makes } = useCars()

const city = ref('')
const priceRange = ref({
    min: "",
    max: ""
})
const route = useRoute()
const router = useRouter()

const updateModal = (key) => {
    modal.value[key] = !modal.value[key]
}

const onLocationChange = () => {
    if (!city.value) {
        return
    }

    if (!isNaN(parseInt(city.value))) {
        throw createError({
            statusCode: 400,
            message: 'Invalid City Format'
        })
    }

    updateModal("location")
    navigateTo(`/city/${city.value}/car/${route.params.make}`)
    city.value = ""
}

const onMakeChange = (make) => {
    if (!make) {
        return
    }

    updateModal("make")
    navigateTo(`/city/${route.params.city}/car/${make}`)
}

const onPriceChange = () => {
    if (priceRange.value.max && priceRange.value.min) {

    }
    updateModal("price")
    // navigateTo(`/city/${route.params.city}/car/${route.params.make}`)
    router.push({
        query: {
            minPrice: priceRange.value.min,
            maxPrice: priceRange.value.max
        }
    })

}

const priceRangeText = computed(() => {
    const minPrice = route.query.minPrice;
    const maxPrice = route.query.maxPrice;
    if (!minPrice && !maxPrice) {
        return 'Any'
    } else if (!minPrice && maxPrice) {
        return `< ${maxPrice}`
    } else if (minPrice && !maxPrice) {
        return `> ${minPrice}`
    } else {
        return `${route.query.minPrice} - ${route.query.maxPrice}`
    }
})

const { toTitleCase } = useUtilities()

</script>

<template>
    <div class="shadow border w-64 mr-10 z-30 h-[190px]">
        <!-- Start Location -->
        <div class="p-5 flex justify-between relative cursor-pointer border-b">
            <h3>Location</h3>
            <h3 class="text-blue-400 capitalize" @click="updateModal('location')">
                {{ route.params.city ? toTitleCase(route.params.city) : 'All' }}
            </h3>
            <div v-if="modal.location" class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white">
                <input type="text" class="border p-1 rounded" v-model="city" />
                <button @click="onLocationChange" class="bg-blue-400 w-full mt-2 rounded text-white p-1">
                    Apply
                </button>
            </div>
        </div>
        <!-- End Location -->

        <!--Start Makes-->
        <div class="p-5 flex justify-between relative cursor-pointer border-b">
            <h3>Make</h3>
            <h3 class="text-blue-400 capitalize" @click="updateModal('make')">{{ route.params.make ?
                toTitleCase(route.params.make) : 'All' }}</h3>
            <div v-if="modal.make"
                class="absolute border shadow left-56 p-5 top-1 -m-1 w-[600px] flex justify-between flex-wrap bg-white">
                <h4 v-for="make in makes" :key="make" class="w-1/3" @click="onMakeChange(make)">{{ make }}</h4>
            </div>
        </div>
        <!-- End Makes -->

        <!-- Start Price -->
        <div class="p-5 flex justify-between relative cursor-pointer border-b">
            <h3>Price</h3>
            <h3 class="text-blue-400 capitalize" @click="updateModal('price')">{{ priceRangeText }}</h3>
            <div v-if="modal.price" class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white">
                <input class="border p-1 rounded" type="number" placeholder="Min" v-model="priceRange.min">
                <input class="border p-1 rounded mt-1" type="number" placeholder="MAx" v-model="priceRange.max">
                <button class="bg-blue-400 w-full mt-2 rounded text-white p-1" @click="onPriceChange">Apply</button>
            </div>
        </div>
        <!-- Start Price -->

    </div>
</template>