<template>
  <div class="main w-full md:w-1/4 rounded-lg p-4 m-4">
    <article class="flex flex-col justify-center items-center">
      <div class="bg-secondary rounded-full p-4">
        <slot class="" />
      </div>
      <div class="text-center leading-tight mt-3 p-3 text-secondary ">
        <p>
          Excepturi, magni ad architecto eveniet officiis mollitia vitae
          tempora, distinctio esse placeat voluptatem ut adipisci similique?
        </p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "IconCard",
};
</script>

<style scoped>
    .main{
        background-color: rgba(255, 255, 255, 0.267);
    }

    .main:hover{
        background-color: rgba(255, 255, 255, 0.486);

    }
</style>