<template>
  <Layout>
    <div class="container my-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap">
        <ImprovedCard/>
        <ImprovedCard/>
        <ImprovedCard/>
        <ImprovedCard/>
        <ImprovedCard/>
        <ImprovedCard/>

      </div>
    </div>
  </Layout>
</template>

<script>
import ImprovedCard from "../components/ImprovedCard"
export default {
  metaInfo: {
    title: 'Improved card'
  },
  components: {
    ImprovedCard,
  },
}
</script>
