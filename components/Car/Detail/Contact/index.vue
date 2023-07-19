<script setup>
const route = useRoute()
const message = reactive({
    name: "",
    email: "",
    phone: "",
    message: ""
})

const errorMsg = ref('')
const successMsg = ref('')

const isButtonDisabled = computed(() => {
    for (let key in message) {
        if (!message[key]) return true
    }
    return false
})

const handleSubmit = async () => {
    try {
        errorMsg.value = ""
        successMsg.value = ""

        const response = await $fetch(`/api/cars/listings/${route.params.id}/message`, {
            method: 'POST',
            body: message
        })

        if (response) {
            message.value.name = ""
            message.value.email = ""
            message.value.phone = ""
            message.value.message = ""

        }
        successMsg.value = "Message sent Successfully"
    } catch (error) {
        errorMsg.value = error.statusMessage
    }

}
</script>

<template>
    <div class="mt-10">
        <div class="flex w-[600px] justify-between">
            <input v-model="message.name" type="text" class="border p-1" placeholder="Name" />
            <input v-model="message.email" type="text" class="border p-1" placeholder="Email" />
            <input v-model="message.phone" type="text" class="border p-1" placeholder="Phone" />
        </div>
        <div class="flex mt-4 w-[600px]">
            <textarea v-model="message.message" class="border p-1 w-full" placeholder="Message"></textarea>
        </div>
        <button @click="handleSubmit" :disabled="isButtonDisabled" :class="isButtonDisabled ? 'bg-gray-400' : 'bg-blue-400'"
            class="bg-blue-400 text-white px-10 py-3 rounded mt-4">
            Submit
        </button>
        <p v-if="errorMsg" class="mt-3 text-red-400">{{ errorMsg }}</p>
        <p v-if="successMsg" class="mt-3 text-green-400">{{ successMsg }}</p>

    </div>
</template>