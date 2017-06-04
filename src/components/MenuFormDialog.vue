<template>
  <div v-if="isEditMode">
    <div class="overlay"></div>
    test
  </div>
</template>

<script>
import store from '../store';
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';

export default {
  computed: mapState([
    'isEditMode',
    'targetMenu'
  ]),
  methods: mapMutations(['goToMenuList'])
}
</script>

<style>
.is-edit-mode {
  display: inline;
}
</style>