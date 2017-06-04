<template>
  <div
    class="overlay"
    :class="{ 'is-delete-confirmation-mode': isDeleteConfimationMode }"
    @click="goToListPage">
    test
  </div>
</template>

<script>
import store from '../store';
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';

export default {
  computed: mapState([
    'isDeleteConfimationMode',
    'targetMenu'
  ]),
  methods: mapMutations(['goToListPage'])
}
</script>

<style>
.is-delete-confirmation-mode {
  display: inline;
}
</style>
