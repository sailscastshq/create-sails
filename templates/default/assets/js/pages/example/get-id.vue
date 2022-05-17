<template>
    <p>This is dynamic ID: {{ id }}</p>
    <p>This is current time: {{ time }}</p>
    <Link href="/example/45456" :only="['time']">Reload</Link>
</template>

<script setup>
import { Link } from '@inertiajs/inertia-vue3'
const props = defineProps({
    id: Number,
    time: Number
})
</script>
