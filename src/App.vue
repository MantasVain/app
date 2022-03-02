<template>
  <div id="app">
    <div class="container--fluid">
      <Header />
      <NavBar />
      <router-view class="routerview" />
      <Footer />
    </div>
  </div>
</template>
<script>
import NavBar from '@/components/NavbarComponent.vue';
import Header from '@/components/HeaderComponent.vue';
import Footer from '@/components/FooterComponent.vue';

export default {
  name: 'app',
  components: {
    NavBar,
    Header,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
body,
html {
  height: 100%;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-left: 300px;
  min-height: 100vh;
}
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #8799ac;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.container {
  height: 100vh;
  padding: 20px;
}
.header {
  min-height: 60px;
}
.footer {
  min-height: 100px;
}
</style>
