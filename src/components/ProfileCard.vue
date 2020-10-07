<template>
  <div
    class="card md:flex sm:whitespace-no-wrap bg-white cursor-pointer animate w-full sm:justify-center p-2 rounded-lg shadow-lg h-589px"
  >
    <g-image
      src="@/assets/profile.png"
      class="rounded-full h-16 w-16 md:w-20 md:h-20 mx-auto md:my-auto md:mx-0"
    ></g-image>
    <div class="text-center ml-0 md:text-left md:ml-2">
      <h2 class="text-xl">Veljko Sekulic</h2>
      <div>Junior Frontend Developer</div>
      <div>veljko.sekulic@grafema.me</div>
      <div>38267173286</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProfileCard",
};
</script>
<style>
.animate:hover img {
  transform: rotate(360deg);
  transition: transform ease-in-out 300ms;
}

.card:hover{
  /* transform: scale(1.05);
   */
   transform: translateY(-5px);
  transition: ease-in-out 200ms;
}
</style>