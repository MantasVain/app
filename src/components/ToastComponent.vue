<template>
  <div>
    <b-toast id="vue-toast" :variant="variant" solid auto-hide-delay="4000">
      <template #toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <strong class="mr-auto"> {{ title }} </strong>
        </div>
      </template>
      {{ text }}
    </b-toast>
  </div>
</template>
<script>
export default ({
  props: {
    variant: String,
    text: String,
  },
  computed: {
    title() {
      let titleVar = 'Toast message';
      if (this.variant === 'success') {
        titleVar = 'Success';
      } else if (this.variant === 'danger') {
        titleVar = 'Error';
      }
      return titleVar;
    },
  },
});
</script>
