<template>
  <header
    class="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-full"
  >
    <div class="flex flex-no-shrink items-center text-white mr-6">
      <span class="font-bold text-xl"><g-link to="/"> Website</g-link> </span>
    </div>
    <div class="flex-grow"></div>

    <button @click="toggleMobileMenu" class="block sm:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu fill-current text-white"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
    </button>
    <div
      :class="showMobileMenu ? 'block' : 'hidden'"
      class="w-full sm:flex bg-aqua sm:w-auto"
    >
      <div class="text-sm sm:flex-grow text-white">
        <g-link
          class="no-underline mr-4 block mt-4 sm:inline-block sm:mt-0 text-teal hover:text-teal-200"
           to="/about/">About</g-link
        >
        <g-link
          class="no-underline mr-4 block mt-4 sm:inline-block sm:mt-0 text-teal hover:text-teal-200"
           to="/test/">Test</g-link
        >
        <g-link
          class="no-underline mr-4 block mt-4 sm:inline-block sm:mt-0 text-teal hover:text-teal-200"
           to="/test2/">Test2</g-link
        >
        <g-link
          class="no-underline mr-4 block mt-4 sm:inline-block sm:mt-0 text-teal hover:text-teal-200"
           to="/sample-landing/">Landing</g-link
        >
      </div>
    </div>
  </header>
</template>

<script>
import Navigation from "../components/Navigation";
export default {
  name: "Header",
  data() {
    return { showMobileMenu: false };
  },
  components: {
    Navigation,
  },
  methods: {
    toggleMobileMenu() {
      console.log("ua");
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
};
</script>

<style scoped>

</style>