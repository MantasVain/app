<template>
  <div class="home">
    <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in user" :key="user.id">
              <td>{{ user.name }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.age }}</td>
              <td>{{ user.gender }}</td>
              <td>{{ user.category }}</td>
            </tr>
          </tbody>
        </table>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      user: [],
    };
  },
  mounted() {
    this.user = this.$store.getters.getUsers;
  },
};
</script>
