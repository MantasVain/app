import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
        name: 'Vardas',
        lastName: 'Pavarde',
        email: 'mail@gml.com',
        password: 'passs',
        age: '18',
        gender: 'Male',
        category: 'A',
      },
      {
        name: 'Vardas1',
        lastName: 'Pavarde1',
        email: 'mail@gml.com',
        password: 'passs',
        age: '19',
        gender: 'Male',
        category: 'A',
      },
      {
        name: 'Vardas2',
        lastName: 'Pavarde2',
        email: 'mail@gml.com',
        password: 'passs',
        age: '20',
        gender: 'Male',
        category: 'A',
      },
      {
        name: 'Name',
        lastName: 'Lastname',
        email: 'mail@gmail.com',
        password: 'secret',
        age: '20',
        gender: 'Female',
        category: 'B',
      },
    ],
    categories: [{
      name: 'Top level',
      parentName: '',
      level: 0,
    },
    {
      name: 'A',
      parentName: 'Top level',
      level: 1,
    },
    {
      name: 'B',
      parentName: 'Top level',
      level: 1,
    },
    {
      name: 'C',
      parentName: 'Top level',
      level: 1,
    },
    {
      name: 'D',
      parentName: 'A',
      level: 2,
    },
    ],
  },
  getters: {
    getUsers: (state) => state.users,
    getCategories: (state) => state.categories,
  },
  mutations: {
    addUsers(state, payload) {
      state.users.push(payload);
    },
    addCategory(state, payload) {
      state.categories.push(payload);
    },
  },
  actions: {
  },
  modules: {
  },
});
