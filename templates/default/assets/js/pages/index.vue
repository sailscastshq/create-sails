<template>
<h1 class="bg-red-400">{{ name }}</h1>
<Link href="/example">Go to Hello</Link>
</template>

<script setup>
import { Link } from '@inertiajs/inertia-vue3'
const props = defineProps({
    name: String
})
</script>
<style>
.red {
    color: red
}
</style>
