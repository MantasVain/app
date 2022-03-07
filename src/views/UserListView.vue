<template>
  <div class="userList">
    <div class="container">
      <PaginationComponent v-show="!isUserListEmpty" :items="users" />
      <div>
        <h1 class="text-center" v-show="isUserListEmpty">
          Sorry, there are no users in this category
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import PaginationComponent from '@/components/PaginationComponent.vue';

export default {
  name: 'UserListView',
  components: {
    PaginationComponent,
  },
  data() {
    return {
      users: [],
      isUserListEmpty: true,
    };
  },
  mounted() {
    this.loadUsers();
  },
  watch: {
    $route() {
      this.resetUserArray();
      this.loadUsers();
    },
  },
  methods: {
    loadUsers() {
      this.$store.getters.getUsers.forEach((element) => {
        if (element.category === this.getLastRouteItem()) {
          this.users.push(element);
        }
      });
      if (this.users.length === 0) {
        this.isUserListEmpty = true;
      } else {
        this.isUserListEmpty = false;
      }
    },
    resetUserArray() {
      this.users = [];
    },
    getLastRouteItem() {
      return this.$route.params.cat.substring(
        this.$route.params.cat.lastIndexOf('/') + 1,
      );
    },
    getCurrentPage(value) {
      console.log('Pag', this.currentPage);
      this.currentPage = value;
    },
  },
};
</script>
