<template>
  <div>
    <div v-for="(menus, categoryName) in categorizedMenus">
        <div>
        <h3 class="menu-category">{{ categoryName }}</h3>
        <button class="button">メニューを作成</button>
        </div>
        <menu-list
        :menus="menus"
        :categoryName="categoryName"></menu-list>
    </div>
  </div>
</template>

<script>
import MenuList from './MenuList.vue';

export default {
  props: {
    categorizedMenus: {
      type: Object,
      required: true
    }
  },
  components: {
    MenuList
  }
}
</script>