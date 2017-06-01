<template>
  <div class="menu-edition-form">
    <div>
      <div v-for="(index, menu) in menus" class="menu-edition-card-container">
        <div class="navigator-container">
        <div v-if="menus.length">
          <img v-if="index > 1" class="up-button" src="http://www.clker.com/cliparts/8/7/Y/H/W/e/up-arrow-circle-hi.png" />
          <img v-if="index < menus.length" class="down-button" src="http://www.clker.com/cliparts/y/m/X/o/s/R/down-arrow-circle-hi.png" />
        </div>
        </div>
        <menu-edition-card :menu="menu" :key="index" :onClick="onClick" :isEditMode="menu.isEditMode"></menu-edition-card>
      </div>
    </div>
  </div>
</template>

<script>
import MenuEditionCard from './MenuEditionCard.vue';

export default {
  data() {
    return {
      isActiveMenuIndex: 1
    }
  },
  components: {
    MenuEditionCard
  },
  methods: {
    onClick: function() {
      console.log("test");
      this.activeMenuIndex = 1;
    },
    isEditMode: function(index) {
      return index === this.isActiveMenuIndex;
    }
  },
  props: ['menus']
}
</script>

<style>

.navigator-container {
  display: flex;          /* 2 */
  justify-content: center;/* 3 */
  align-items: center;    /* 4 */
  float: left;
  height: 250px;
  margin-left: 80px;
}

.up-button {
  display: block;
  cursor: pointer;
  width: 80px;
  height: 80px;
}

.down-button {
  display: block;
  cursor: pointer;
  width: 80px;
  height: 80px;
}
</style>