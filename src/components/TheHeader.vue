<script setup>

import { isPageValid } from '@/validators';
import TheLogo from './TheLogo.vue';
import  TheHeaderProgress from './TheHeaderProgress.vue';
<<<<<<< HEAD
import { isPageValid } from '@/validators';
=======
>>>>>>> bdd51f6ce37f76fbc2c840f85211017f8679a9e8
import { PAGE_PROGRESS, PAGE_TIMELINE } from '@/constants';

const emit = defineEmits({
    navigate: isPageValid
});

</script>

<template>

<header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">

<TheLogo @click="emit('navigate', PAGE_TIMELINE)"/>

<TheHeaderProgress @click="emit('navigate', PAGE_PROGRESS)"/>

</header>

</template>