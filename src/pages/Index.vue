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
        <div class="w-4/6 mt-10 md:mt-0 mx-auto md:w-1/2 phone">
          <g-image src="../assets/tablet.png" class=""></g-image>
        </div>
      </div>
      <div class="hidden w-screen md:flex justify-center align-middle z-10">
        <g-image
          id="scroll"
          src="../assets/icons/scroll.svg"
          class="animate-bounce"
        ></g-image>
      </div>
    </section>
    <section class="md:h-auto bg-secondary w-full">
      <div
        class="container mx-auto flex flex-col text-xl pt-8 px-2 md:px-0 md:pt-8"
      >
        <div class="mx-auto mb-8 w-3/4 text-center">
          <h1 class="text-2xl md:text-5xl text-white font-black leading-none">
            Our <span class="text-primary">Articles</span>
          </h1>
        </div>
        <div class="flex flex-wrap mx-auto py-4">
          <ImprovedCard />
          <ImprovedCard />
          <ImprovedCard />
          <ImprovedCard />
          <ImprovedCard />
          <ImprovedCard />
        </div>
      </div>
    </section>
    <section class="h-auto bg-gradient-to-b from-secondary to-primary">
      <div class="container mx-auto flex flex-col pb-8 md:pt-8">
        <div
          class="mx-auto mb-8 w-3/4 text-center border-t-2 border-primary pt-12"
        >
          <h1
            class="block text-2xl md:text-5xl text-white font-black leading-relaxed"
          >
            About <span class="text-primary">Us</span>
          </h1>
          <p class="block font-hairline text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            soluta illo deserunt sed corrupti laboriosam asperiores voluptates
            natus doloremque consectetur possimus magni deleniti nesciunt aut
            accusamus consequuntur, doloribus architecto error. Architecto
            adipisci, eaque quae deserunt magni molestiae asperiores laborum et
            consectetur odio! Eligendi commodi ipsa fuga aperiam blanditiis?
            Reprehenderit esse nostrum distinctio vero repellendus perferendis
            velit officiis, cumque vel blanditiis. Nihil, asperiores ullam quod
            ea inventore vel, illum reprehenderit sint eos minima, cum iusto
            ipsa est laudantium!
          </p>
        </div>
        <div class="flex flex-wrap justify-center">
          <IconCard>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="teal"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-activity"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
          </IconCard>
          <IconCard>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="teal"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-airplay"
            >
              <path
                d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
              ></path>
              <polygon points="12 15 17 21 7 21 12 15"></polygon>
            </svg>
          </IconCard>
          <IconCard>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="teal"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-bar-chart"
            >
              <line x1="12" y1="20" x2="12" y2="10"></line>
              <line x1="18" y1="20" x2="18" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="16"></line>
            </svg>
          </IconCard>
        </div>
      </div>
    </section>
    <section class="h-auto bg-gradient-to-b from-primary to-secondary">
      <div class="container mx-auto pb-8">
        <div
          class="w-3/4 text-center mx-auto font-black border-t-2 border-secondary pt-12"
        >
          <h1 class="text-2xl md:text-5xl text-secondary">Contact Us</h1>
          <div class="bg-secondary py-6 px-8 rounded-lg flex flex-row mt-4">
            <form class="flex flex-col mr-4 w-full">
              <div @keyup="movePlaceholder" class="relative">
                <input
                  type="text"
                  placeholder="Name"
                  class="rounded-lg my-3 p-2 w-full"
                />

                <span class="absolute placeholder text-left font-light"
                  >Name</span
                >
              </div>
              <div @keyup="movePlaceholder" class="relative">
                <input
                  type="text"
                  placeholder="Last name"
                  class="rounded-lg my-3 p-2 w-full"
                />

                <span class="absolute placeholder text-left font-light"
                  >Last name</span
                >
              </div>
              <div @keyup="movePlaceholder" class="relative">
                <input
                  type="text"
                  placeholder="Email"
                  class="rounded-lg my-3 p-2 w-full"
                />

                <span class="absolute placeholder text-left font-light"
                  >Email</span
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import IconCard from "../components/IconCard";
import Card from "../components/ProfileCard";
import ImprovedCard from "../components/ImprovedCard";
export default {
  metaInfo: {
    title: "Hello, world!",
  },
  components: {
    Card,
    ImprovedCard,
    IconCard,
  },
  methods: {
    movePlaceholder(event) {
      const spanToMove = event.path[1].children[1];
      const input = event.target.value;
      console.log(input.length);
      
      if (spanToMove.classList.contains("move")) {
        console.log("test1");
        if (input.length === 0) {
          console.log("test");
          spanToMove.classList.remove("move");
          return;
        }
        return;
      }
      if(input.length===0 && event.keyCode === 8){
        return;
      }

      spanToMove.classList.add("move");
    },
  },
};
</script>

<style lang="css">
.move {
  animation: move-placeholder 0.2s ease-in-out forwards;
}

@keyframes move-placeholder {
  0% {
    z-index: 0;
    top: 20px;
    opacity: 0;
  }
  100% {
    top: -12px;
    opacity: 1;
    z-index: 1;
    color: white;
  }
}

.placeholder {
  z-index: -1;
  left: 8px;
  top: 20px;
}

.phone {
  transition: transform 0.2s ease-in-out;
}

.phone:hover {
  transform: rotate(4deg);
}

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

.custom-shape.front {
  left: 1%;
  transform: rotate(38deg) scale(7);
  z-index: 0;
}

.custom-shape {
  animation: move 15s ease-in-out infinite;
  animation-direction: alternate;
}

.custom-shape.front {
  animation-direction: alternate-reverse;
}

@keyframes move {
  0% {
    left: 0;
  }
  100% {
    left: 30vw;
  }
}
</style>
