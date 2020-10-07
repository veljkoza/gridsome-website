<template>
  <div class="w-full my-4 px-2 md:my-2 md:w-1/2 xl:w-1/3 cursor-pointer card">
    <article class="overflow-hidden rounded-lg shadow-lg bg-white"> 
      <g-image src="https://picsum.photos/400/200/?random" alt="" class="block h-auto w-full" />
      <header class="leading-tight flex justify-between items-center p-2 md:p-4">
        <h1 class="text-xl font-hairline cursor-pointer">Article title</h1>
        <p class="font-hairline" >11/1/19</p>
      </header>
      <footer class="leading-none flex justify-between items-center p-2 md:p-4">
        <div class="flex items-center">
          <g-image src="https://picsum.photos/32/32/?random" alt="" class="rounded-full mr-2"/>
          <p class="font-light">Veljko Sekulic</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart heart-icon cursor-pointer"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
      </footer>
    </article>
  </div>
</template>

<script>
export default {
  name: "ImprovedCard",
};
</script>

<style scoped>

    .card:hover{
        transform: translateY(-1rem);
    }

    .heart-icon:hover{
        animation: heart-fill 150ms ease-in-out forwards;
    }

    @keyframes heart-fill {
        0%{
            fill: transparent;
        }
        100%{
            fill: rgb(223, 40, 40)
        }
    }
</style>