<template>
  <div class="d-flex p-3 px-md-4 mb-4 border-bottom bg-dark shadow-sm">
    <div
      class="d-none d-md-flex flex-row my-auto flex-grow-1 align-items-center"
    >
      <h5 class="mr-3 font-weight-normal justify-content-start text-light">
        {{ pageName }}
      </h5>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      pageName: 'Page Name...',
    };
  },
  watch: {
    $route() {
      console.log(this.$route.params);
      // Fix the page name
      if (this.$route.params.cat !== undefined) {
        this.pageName = `${this.getLastRouteItem()} category page`;
      }
    },
  },
  methods: {
    getLastRouteItem() {
      return this.$route.params.cat.substring(
        this.$route.params.cat.lastIndexOf('/') + 1,
      );
    },
  },
};
</script>
