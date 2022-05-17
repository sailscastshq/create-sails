<template>
    <p>{{ using }}</p>
    <Link href="/example/45456">See example index</Link>
<Head title="Home"></Head>
</template>

<script setup>
import { Link } from '@inertiajs/inertia-vue3'
import { Head } from '@inertiajs/inertia-vue3'

const props = defineProps({
    using: String
})
</script>
