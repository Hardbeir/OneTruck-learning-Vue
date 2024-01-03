<script setup>

import { CheckCircleIcon } from '@heroicons/vue/24/solid'


</script>

<template>

<header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">

    <a href="">

        <img src="./assets/" alt="logo" class="h-9">

    </a>

    <a href="#" class="text-sm">
        <div v-if="false" class="flex items-center gap-1">

            Day complete!

            <CheckCircleIcon class="h-7 text-green-500"/>

        </div>

        <div v-else class="flex items-center gap-1">
            <div>Progress: <span class="font-mono">20%</span></div>

            <div class="h-3 w-3 rounded-full bg-red-500"></div>
        </div>
       
    </a>

</header>

<main>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nisi asperiores ducimus eius optio dicta nesciunt aliquid neque quaerat explicabo! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, tempora quasi? Quo quidem voluptatum dignissimos quas nam quasi consequuntur. Eius laborum nihil nesciunt et voluptates deleniti nemo, nobis assumenda voluptatum commodi fugiat, fugit corporis facilis quia? Nobis temporibus numquam aliquam.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nisi asperiores ducimus eius optio dicta nesciunt aliquid neque quaerat explicabo! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, tempora quasi? Quo quidem voluptatum dignissimos quas nam quasi consequuntur. Eius laborum nihil nesciunt et voluptates deleniti nemo, nobis assumenda voluptatum commodi fugiat, fugit corporis facilis quia? Nobis temporibus numquam aliquam.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nisi asperiores ducimus eius optio dicta nesciunt aliquid neque quaerat explicabo! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, tempora quasi? Quo quidem voluptatum dignissimos quas nam quasi consequuntur. Eius laborum nihil nesciunt et voluptates deleniti nemo, nobis assumenda voluptatum commodi fugiat, fugit corporis facilis quia? Nobis temporibus numquam aliquam.
</main>

</template>

