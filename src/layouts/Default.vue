<template>
  <div class="layout overflow-hidden w-full">
    <Header />
    <!-- <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
        <g-link class="nav__link" to="/test/">Test</g-link>

      </nav>
    </header> -->
    <div class="w-full pt-24">
      <slot />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<script>
import Header from "../components/Header";

export default {
  components: {
    Header,
  },
};
</script>

<style>



.layout {
  max-width: 100vw;
  margin: 0 auto;
}

</style>
