<template>
  <div class="menu-list">
    <ul v-for="menu in menus">
      <li>
        <menu-row :menu="menu" :onMenuClick="onMenuClick"></menu-row>
      </li>
    </ul>
  </div>
</template>

<script>
import MenuRow from './MenuRow.vue';

export default {
  props: ['menus', 'onMenuClick'],
  components: {
    MenuRow
  }
}
</script>

<style>
.menu-list {
  overflow: hidden;
  border: 1px solid #E3E3E3;
  background: #FFF;
  box-shadow: 0 2px 2px 0 #F1F1F1;
  word-break: break-all;
}
</style>