<template>
  <div class="userList">
    <div class="container">
      <table v-show="!isUserListEmpty" class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.gender }}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <h1 class="text-center" v-show="isUserListEmpty">
          Sorry, there is no users in this category
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserListView',
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
  },
};
</script>
