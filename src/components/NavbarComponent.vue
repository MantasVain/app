<template>
  <b-sidebar
    visible
    noCloseOnRouteChange
    bg-variant="dark"
    text-variant="light"
    shadow
    no-header
    width="300px"
    class="mw-250"
    tag="nav"
  >
    <div class="px-3 py-2">
      <h4 id="sidebar-no-header-title">FrontEnd Task</h4>
      <b-nav vertical>
        <b-nav-item to="/newUser">New User</b-nav-item>
        <b-nav-item to="/newCategory">New Category</b-nav-item>
        <b-dd-divider />
        <h5>Categories</h5>
        <vue-tree-navigation
          :defaultOpenLevel="defaultOpenLevel"
          :items="navOptions"
        />
      </b-nav>
    </div>
  </b-sidebar>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
    return {
      navOptions: [{
        name: 'Top level',
        children: [],
      }],
      defaultOpenLevel: 3,
    };
  },
  created() {
    this.$store.getters.getCategories.forEach((el) => {
      this.addCategoryOption(el);
    });
  },
  computed: {
    updatedCategories() {
      return this.$store.getters.getCategories;
    },
  },
  watch: {
    updatedCategories(newVal) {
      this.resetNav();
      newVal.forEach((el) => {
        this.addCategoryOption(el);
      });
    },
  },
  methods: {
    addCategoryOption(category) {
      const navOption = {
        name: category.name,
        path: category.name,
        children: [],
      };
      this.addToTree(this.navOptions[0], category, navOption);
    },
    addToTree(parentCategory, category, value) {
      if (parentCategory.name === category.parentName) {
        parentCategory.children.push(value);
      } else if (parentCategory.children != null) {
        let i;
        for (i = 0; i < parentCategory.children.length; i += 1) {
          this.addToTree(parentCategory.children[i], category, value);
        }
      }
    },
    resetNav() {
      this.navOptions = [{
        name: 'Top level',
        children: [],
      }];
    },
  },
};
</script>
<style lang="scss">
.TreeNavigation li{
  padding-left: 15px;
}
.b-sidebar{
  min-width: 300px;
}
.NavigationItem__router-link{
  overflow-wrap: break-word;
}
</style>
