<template>
  <div class="newUser">
    <div class="container">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group label="Name:">
          <b-form-input
            v-model="user.name"
            placeholder="Enter your name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Last Name:" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="user.lastName"
            placeholder="Enter your last name"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Email:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="user.email"
            type="email"
            placeholder="Enter your email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Password:" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="user.password"
            type="password"
            placeholder="Enter your password"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-5" label="Age:" label-for="input-5">
          <b-form-input
            id="input-5"
            v-model="user.age"
            type="number"
            placeholder="Enter your age"
            :max="99"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-6" label="Gender:" label-for="input-6">
          <b-form-select
            id="input-6"
            v-model="user.gender"
            placeholder="Select your gender"
            :options="genders"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-7" label="Category:" label-for="input-7">
          <b-form-select
            id="input-7"
            v-model="user.category"
            :options="categoryOptions"
            required
          ></b-form-select>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <Toast :variant="variant" :text="toastText"></Toast>
    </div>
  </div>
</template>
<script>
import Toast from '@/components/ToastComponent.vue';

export default {
  components: { Toast },
  name: 'newUser',
  data() {
    return {
      toastText: '',
      variant: '',
      user: {
        name: '',
        lastName: '',
        email: '',
        password: '',
        age: '',
        gender: null,
        category: null,
      },
      categoryOptions: [
        { text: 'Select One', value: null },
      ],
      genders: [
        { text: 'Select One', value: null },
        'Male',
        'Female',
      ],
      show: true,
    };
  },
  mounted() {
    this.$store.getters.getCategories.forEach((el) => {
      if (el.name !== 'Top level') this.categoryOptions.push(el.name);
    });
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$store.commit('addUsers', { ...this.user });
      this.toastText = `User ${this.user.name} created successfully`;
      this.variant = 'success';
      this.$bvToast.show('vue-toast');
      this.resetForm();
    },
    onReset(event) {
      event.preventDefault();
      this.resetForm();
    },
    resetForm() {
      this.user.name = '';
      this.user.lastName = '';
      this.user.email = '';
      this.user.password = '';
      this.user.age = '';
      this.user.gender = null;
      this.user.category = null;
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    resetCategories() {
      this.categories = [
        { text: 'Select One', value: null },
      ];
    },
  },
};
</script>
