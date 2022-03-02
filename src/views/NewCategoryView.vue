<template>
  <div class="newCategory">
    <div class="container">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group label="Category name:">
          <b-form-input
            v-model="category.name"
            placeholder="Enter category name"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Parent category: ">
          <treeselect
            v-model="category.parentName"
            :options="categoryOptions"
            :showCount="true"
            :defaultExpandLevel="defaultExpandLevel"
            required
          />
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <Modal :modalShow="modalShow" :text="modalText" />
    </div>
  </div>
</template>

<script>
import Treeselect from '@riophae/vue-treeselect';
import Modal from '@/components/ModalComponent.vue';
import '@riophae/vue-treeselect/dist/vue-treeselect.css';

export default {
  name: 'NewCategoryView',
  components: { Treeselect, Modal },
  data() {
    return {
      show: true,
      defaultExpandLevel: 3,
      modalText: '',
      modalShow: false,
      category: {
        name: '',
        parentName: 'Top level',
        level: 0,
      },
      categoryOptions: [
        {
          id: 'Top level',
          label: 'Top level',
          children: [],
        },
      ],
    };
  },
  created() {
    this.loadCategoryOptionList();
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.addCategory(this.category);
      this.resetForm();
    },
    onReset(event) {
      event.preventDefault();
      this.resetForm();
    },
    resetForm() {
      this.category.name = '';
      this.category.parentName = 'Top level';
      this.category.level = 0;
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    loadCategoryOptionList() {
      this.$store.getters.getCategories.forEach((el) => {
        this.addCategoryOption(el);
      });
    },
    addCategory(category) {
      let errorCode = '';
      const categoryArray = this.$store.getters.getCategories;
      const categoryParent = categoryArray.find((el) => el.name === category.parentName);
      const tempCategory = { ...category };
      tempCategory.level = categoryParent.level + 1;
      categoryArray.forEach((element) => {
        if (element.name === category.name) {
          errorCode = `Category with name ${element.name} already exists`;
        }
      });
      if (tempCategory.level > 3) {
        errorCode = 'Categories can only span for 3 levels';
      }
      if (errorCode === '') {
        this.$store.commit('addCategory', tempCategory);
        this.addCategoryOption(tempCategory);
      } else {
        // Fix the modal
        this.modalText = errorCode;
        this.modalShow = true;
        console.log(errorCode);
      }
    },
    addCategoryOption(category) {
      const categoryOption = {
        id: category.name,
        label: category.name,
        children: [],
      };
      this.addToTree(this.categoryOptions[0], category, categoryOption);
    },
    addToTree(parentCategory, category, value) {
      if (parentCategory.label === category.parentName) {
        parentCategory.children.push(value);
      } else if (parentCategory.children != null) {
        let i;
        for (i = 0; i < parentCategory.children.length; i += 1) {
          this.addToTree(parentCategory.children[i], category, value);
        }
      }
    },
    updateModalProp(value) {
      this.modalShow = value;
      console.log(value);
    },
  },
};
</script>
