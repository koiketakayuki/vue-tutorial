<template>
  <div
    class="overlay"
    :class="{ 'is-edit-mode': isEditMode }"
    @click.prevent="goToListPage">
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
  methods: mapMutations(['goToListPage'])
}
</script>

<style>
.is-edit-mode {
  display: inline;
}
</style>