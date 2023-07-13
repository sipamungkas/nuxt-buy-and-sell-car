<script setup lang="ts">
interface PropsInterface extends RouteParams {
    name: string,
    id: string
}

import { RouteParams } from '.nuxt/vue-router';


const route = useRoute()

const { name, id } = route.params as PropsInterface
useHead({

    title: `Buy ${toTitleCase(name)} ${id} car`
})

function toTitleCase(str: string) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
</script>

<template>
    <div>
        <div class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
            <CarDetailHero />
            <CarDetailAttribute />
            <CarDetailDescription />
        </div>
    </div>
</template>