import Vue from 'vue';
import VueRouter from 'vue-router';
// import HomeView from '../views/HomeView.vue';
import NewUserView from '../views/NewUserView.vue';
import NewCategoryView from '../views/NewCategoryView.vue';
import UserListView from '../views/UserListView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: NewCategoryView,
  },
  {
    path: '/newUser',
    name: 'newUser',
    component: NewUserView,
  },
  {
    path: '/newCategory',
    name: 'newCategory',
    component: NewCategoryView,
  },
  {
    path: '/:cat+',
    name: 'cat',
    component: UserListView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
