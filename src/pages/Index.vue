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
    <section class="md:h-screen text-gray-500">
      <div class="path-cutter w-full">
        <svg
          class="custom-shape back pt-4"
          viewBox="0 0 200 200"
          fill="#008080"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18,-15.1C20.7,-11,18.5,-3.6,21.5,13.7C24.5,31,32.9,58.3,24,70.4C15.1,82.6,-10.9,79.7,-27,67.5C-43,55.3,-49.1,34,-43.9,20.4C-38.8,6.8,-22.4,1,-13.2,-4.6C-4,-10.3,-2,-15.7,2.8,-18C7.7,-20.2,15.3,-19.3,18,-15.1Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          class="custom-shape front pt-4"
          viewBox="0 0 200 200"
          fill="#252A42"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18,-15.1C20.7,-11,18.5,-3.6,21.5,13.7C24.5,31,32.9,58.3,24,70.4C15.1,82.6,-10.9,79.7,-27,67.5C-43,55.3,-49.1,34,-43.9,20.4C-38.8,6.8,-22.4,1,-13.2,-4.6C-4,-10.3,-2,-15.7,2.8,-18C7.7,-20.2,15.3,-19.3,18,-15.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div class="container mx-auto flex flex-col md:flex-row px-10 md:mb-8">
        <div class="flex flex-col md:w-1/2 mb-6 md:mr-8 md:my-auto">
          <h1
            class="leading-none font-black text-secondary text-3xl lg:text-5xl"
          >
            <span class="block text-primary">Lorem ipsum dolor sit,</span
            ><span class="block">amet consectetur adipisicing elit.</span>
          </h1>
          <p class="mt-4 leading-snug text-xl font-light text-grayBlue">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            eius sapiente deserunt, esse libero, eum cupiditate rem quidem sed
            itaque odit quis unde repellendus beatae laudantium fugit accusamus
            inventore eligendi?
          </p>
        </div>
        <div class="w-4/6 mt-10 md:mt-0 mx-auto md:w-1/2">
          <g-image src="../assets/tablet.png" class=""></g-image>
        </div>
      </div>
      <div class="hidden w-screen md:flex justify-center align-middle z-10">
        <g-image src="../assets/icons/scroll.svg"></g-image>
      </div>
    </section>
    <section class="md:h-screen bg-secondary w-full">
      <div class="container mx-auto flex flex-col pt-16 text-xl md:pt-0 ">
        <div class="mx-auto mb-8">
          <h1 class="text-2xl md:text-5xl text-white font-black leading-none">
            Our team
          </h1>
        </div>
        <div class="flex flex-col p-4 md:p-0 md:flex-row gap-2">
          <Card/>
          <Card/>
          <Card/>

        </div>

      </div>
    </section>
    <section class="md:h-screen bg-secondary w-full bg-gradient-to-b from-secondary to-primary"></section>

  </Layout>
</template>

<script>
import Card from "../components/ProfileCard"
export default {
  metaInfo: {
    title: "Hello, world!",
  },
  components:{
    Card
  }
};
</script>

<style lang="css">
.path-cutter {
  position: absolute;
  width: 100%;
  height: 120vh;
  left: 0;
  z-index: -1;
  overflow: hidden;
}

.custom-shape {
  padding-top: 8rem;
  width: 120vw;
  position: absolute;
  transform: rotate(45deg) scale(7);
}

.custom-shape.front{
  left: 1%;
  transform: rotate(38deg) scale(7);
  z-index: 0;
}

.custom-shape{
animation: move 15s ease-in-out  infinite;
animation-direction: alternate;
}

.custom-shape.front{
  animation-direction: alternate-reverse;
}

@keyframes move {
  0%{
    left: 0;
  }
  100%{
    left: 30vw;

  }
}
</style>
