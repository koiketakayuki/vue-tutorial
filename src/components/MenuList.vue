<template>
  <ul class="menu-list">
    <li
      draggable="true"
      is="menu-row"
      v-for="menu in orderedMenus"
      :menu="menu"
      :categoryName="categoryName"
      @dragstart.native="dragStart(menu, $event)"
      @dragend.native="dragEnd($event)"
      @dragenter.native="dragEnter(menu)">
    </li>
  </ul>
</template>

<script>
import MenuRow from './MenuRow.vue';
import { orderBy } from 'lodash';

export default {
  props: {
    menus: {
      type: Array,
      required: true
    },
    categoryName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      draggingItem: null
    }
  },
  computed: {
    orderedMenus: function() {
      return orderBy(this.menus, 'index');
    }
  },
  components: {
    MenuRow
  },
  methods: {
    dragStart (menu, e) {
      this.draggingItem = menu;
      e.target.style.opacity = 0.5;
    },
    dragEnd (e) {
      e.target.style.opacity = 1;
      this.draggingItem = null;
      this.$store.dispatch('updateMenuOrder', this.menus);
    },
    dragEnter (menu) {
      if (this.draggingItem && menu.index !== this.draggingItem.index) {
        const tempIndex = menu.index;
        menu.index = this.draggingItem.index
        this.draggingItem.index = tempIndex
      }
    }
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