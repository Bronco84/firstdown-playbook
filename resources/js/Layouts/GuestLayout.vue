<script setup>
import AppNav from '@/Components/AppNav.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div class="flex flex-col h-screen bg-gray-100 overflow-auto">
        <AppNav/>

        <div class="grid h-screen">
                <slot />

        </div>
    </div>
</template>
