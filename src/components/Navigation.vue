<template>
    <nav class="w-full sm:flex sm:items-center sm:w-auto">
            <g-link class="block mt-4 mr-3 sm:mt-0 text-teal-200 hover:text-white" to="/">Home</g-link>
            <g-link class="block mt-4 mr-3 sm:mt-0 text-teal-200 hover:text-white" to="/about/">About</g-link>
            <g-link class="block mt-4 mr-3 sm:mt-0 text-teal-200 hover:text-white" to="/test/">Test</g-link>
            <g-link class="block mt-4 mr-3 sm:mt-0 text-teal-200 hover:text-white" to="/test2/">Test2</g-link>
            <g-link class="block mt-4 mr-3 sm:mt-0 text-teal-200 hover:text-white" to="/sample-landing/">Sample Landing</g-link>
        </nav>
</template>
<script>
export default {
    name: "Navigation",
    props:{
        mobile: Boolean
    }
}
</script>