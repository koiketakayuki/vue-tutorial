<template>
  <div id="app">
    <h2>{{ shop.name }}のメニュー一覧</h2>
    <div v-for="(menus, category) in categorizedMenus">
      <h3>{{ category }}</h3>
      <menu-list v-for="(index, menu) in menus" :menus="menus" key="index"></menu-list>
    </div>
  </div>
</template>

<script>
import MenuList from './components/MenuList.vue';

export default {
  data() {
    return {
      shop: {
        name: 'エキテン整骨院'
      },
      categorizedMenus: {
        'カイロプラティック': [{
          name: 'test'
        }],
        '整体': [{
          name: 'test2'
        }],
        '骨盤矯正': [{
          name: 'test3'
        }]
      }
    };
  },
  components: {
    MenuList
  },
}
</script>

<style>
ul {
  margin: 0;
  padding: 0;
}

li {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>