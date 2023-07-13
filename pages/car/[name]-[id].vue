<script setup>


const route = useRoute()
const { name, id } = route.params

useHead({
    title: `Buy ${toTitleCase(name)} ${id} car`
})

function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

definePageMeta({
    layout: "custom"
})
</script>

<template>
    <div>
        <CarDetailHero />
        <CarDetailAttribute />
        <CarDetailDescription />
    </div>
</template>