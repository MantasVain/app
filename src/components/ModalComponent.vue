<template>
  <div>
    <b-modal v-model="show" hide-footer>
      <div class="d-block text-center">
        <h3>{{ text }}</h3>
      </div>
      <div class="float-right">
        <b-button class="mt-5" @click="close()">Close</b-button>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: 'ModalComponent',
  props: {
    text: String,
    modalShow: Boolean,
  },
  data() {
    return {
      show: this.modalShow,
    };
  },
  methods: {
    close() {
      this.$emit('updateModalProp', false);
    },
  },
};
</script>
