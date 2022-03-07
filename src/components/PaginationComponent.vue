<template>
  <div class="overflow-auto">
    <b-table
      :items="items"
      :perPage="itemsPerPage"
      :current-page="currentPage"
    >
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="itemsPerPage"
    ></b-pagination>
  </div>
</template>
<script>
export default {
  name: 'PaginationComponent',
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 2,
    };
  },
  props: {
    items: Array,
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
};
</script>
