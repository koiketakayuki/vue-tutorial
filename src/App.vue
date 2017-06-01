<template>
  <div id="app">
    <menu-edition-form :menus="menus"></menu-edition-form>
  </div>
</template>

<script>
import MenuEditionForm from './components/MenuEditionForm.vue';

export default {
  components: {
    MenuEditionForm
  },
  data() {
    return {
      menus: [1, 2, 3]
    };
  }
}
</script>