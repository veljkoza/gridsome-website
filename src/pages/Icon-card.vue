<template>
  <Layout>
    <div class="container my-12 mx-auto px-4 md:px-12 h-screen">
      <div class="flex flex-wrap justify-between">
        <IconCard>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
        </IconCard>
        <IconCard>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
        </IconCard>
        <IconCard>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
        </IconCard>

      </div>
    </div>
  </Layout>
</template>

<script>
import IconCard from "../components/IconCard"
export default {
  metaInfo: {
    title: 'Improved card'
  },
  components: {
    IconCard,
  },
}
</script>
