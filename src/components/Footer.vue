<template>
  <footer class="flex flex-col sticky bg-secondary p-6 font-light">
    <div class="flex md:flex-row justify-between">
      <div class="flex flex-col md:flex-row">
        <g-link class="text-white pr-0 md:pr-6 hover:text-primary" to="/">Home</g-link>
        <span class="invisible md:visible md:pr-6 text-primary">•</span>
        <g-link class="text-white pr-0 md:pr-6 hover:text-primary" to="/">About</g-link>
        <span class="invisible md:visible md:pr-6 text-primary">•</span>
        <g-link class="text-white pr-0 md:pr-6 hover:text-primary" to="/">Improved Card</g-link>
      </div>
      <div class="flex flex-col md:flex-row">
        <g-link class="text-white pr-0 md:pr-6 underline hover:text-primary" to="/">Privacy Policy</g-link>
        <span class="invisible md:visible md:pr-6 text-primary hover:text-primary">•</span>
        <g-link class="text-white pr-0 underline hover:text-primary" to="/">Terms and Conditions</g-link>
      </div>
    </div>
    <div class="w-full border-t-2 border-primary my-3 md:block"></div>
    <div class="flex flex-row justify-between text-white text-xs">
        <p>©2020 Omninext. All rights reserved.</p>
        <p>info@qubired.it</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
</style>