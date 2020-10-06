<template>
  <Layout>
    <!-- 
    
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p> -->
    <section class="md:h-screen text-gray-500 pt-16">
      <div class="container mx-auto flex flex-col md:flex-row px-10">
        <div class="flex flex-col md:w-1/2 mb-6 md:mr-8 md:my-auto">
          <h1 class="leading-none font-black text-secondary text-3xl lg:text-5xl"> 
            <span class="block text-primary">Lorem ipsum dolor sit,</span
            ><span class="block">amet consectetur adipisicing elit.</span>
          </h1>
          <p class="mt-4 leading-snug text-xl font-light text-grayBlue">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eius sapiente deserunt, esse libero, eum cupiditate rem quidem sed itaque odit quis unde repellendus beatae laudantium fugit accusamus inventore eligendi?</p>
        </div>
        <div class="w-4/6 mt-10 md:mt-0 mx-auto md:w-1/2">
          <g-image src="../assets/tablet.png" class=""></g-image>
        </div>
      </div>
    </section>
    <section>
      
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<style>
</style>
