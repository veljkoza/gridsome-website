<template>
  <Layout>
    <!-- <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img
          class="rounded-lg md:w-56"
          src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
          width="448"
          height="299"
          alt="Woman paying for a purchase"
        />
      </div>
      <div class="mt-4 md:mt-0 md:ml-6">
        <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">
          Marketing
        </div>
        <a
          href="#"
          class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
          >Finding customers for your new business</a
        >
        <p class="mt-2 text-gray-600">
          Getting a new business off the ground is a lot of hard work. Here are
          five ideas you can use to find your first customers.
        </p>
      </div>
    </div> -->
    <h1 class="text-2xl text-center mb-4">Test page</h1>
    <div class="container w-full p-3 m-auto grid sm:grid-cols-3 grid-cols-1 gap-4">
      <div class="sm:col-start-1 sm:col-end-4 text-lg tracking-wide font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quod?
        Nesciunt laudantium dolorem deleniti, debitis vel culpa vitae eius
        labore, quasi tempore, in non perferendis porro quisquam eligendi
        excepturi officiis?
      </div>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </div>
  </Layout>
</template>

<script>
import ProfileCard from "../components/ProfileCard";
export default {
  metaInfo: {
    title: "About us",
  },
  components: {
    ProfileCard,
  },
};
</script>
