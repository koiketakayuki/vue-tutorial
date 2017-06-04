<template>
  <div class="container">
    <h2 class="heading" v-if="shop"><span class="inner">{{ shop.name }}のメニュー一覧</span></h2>
    <categorized-menu-list :categorizedMenus="categorizedMenus"></categorized-menu-list>
    <menu-form-dialog></menu-form-dialog>
    <delete-confirmation-dialog></delete-confirmation-dialog>
    <div class="snackbar" :class="{ active: hasInformation }">{{ information }}<button class="action" @click="cloceSnackbar">閉じる</button></div>
  </div>
</template>

<script>
import CategorizedMenuList from './components/CategorizedMenuList.vue';
import MenuFormDialog from './components/MenuFormDialog.vue';
import DeleteConfirmationDialog from './components/DeleteConfirmationDialog.vue';
import store from './store';

export default {
  computed: {
    shop() {
      return this.$store.state.shop;
    },
    categorizedMenus() {
      return this.$store.state.categorizedMenus;
    },
    hasInformation() {
      return this.$store.state.hasInformation;
    },
    information() {
      return this.$store.state.information;
    }
  },
  store,
  components: {
    CategorizedMenuList,
    MenuFormDialog,
    DeleteConfirmationDialog
  },
  methods: {
    cloceSnackbar() {
      this.$store.commit('closeInformation');
    }
  }
}

const shopId = 0;
store.dispatch('getShop', shopId);
store.dispatch('getCategorizedMenus', shopId);
</script>

<style lang="scss">
html > body {  
  font-size: 12px;  
}

p {
  margin: 0;
  padding: 0;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  margin: 0;
  padding: 0;
  list-style: none;
}

h1, h2, h3, h4, h5 {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

.container {
  margin: 50px 30px;
}

.heading {
  position: relative;
  margin-top: 30px;
  border: solid 1px #ccc;
  font-weight: bold;
  font-size: 107.7%;

  .inner {
    display: block;
    padding: 10px 15px 11px 16px;
    border-top: 1px solid #fff;
    background: #ececec;
  }

  &:after {
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: -1px;
    display: block;
    width: 7px;
    background: #f00;
    content: "";
    background: #936744;
  }
}

.menu-category {
  color: #936744;
  margin: 20px 0 10px;
  padding-left: 26px;
  min-height: 20px;
  background: url(./assets/category.png?20150423) no-repeat 0 50%;
  font-weight: bold;
  font-size: 123.7%;
}

.button {
  font-size: 12px;
  font-weight: bold;
  padding: 8px 12px;
  color: #888888;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: rgba(0,0,0,0.5);
}

.no-scroll {
  overflow: hidden;
}

.snackbar {
  position: fixed;
  min-width: 600px;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  transition-property: opacity, bottom, left, right, width, margin, border-radius;
  transition-duration: 1s;
  transition-timing-function: ease;
  font-family: RobotoDraft;
  font-size: 14px;
  min-height: 14px;
  background-color: #323232;
  justify-content: space-between;
  align-items: center;
  color: white;
  line-height: 22px;
  padding: 18px 24px;
  opacity: 0;

  .action {
    background: inherit;
    float: right;
    display: inline-block;
    border: none;
    font-size: inherit;
    color: #f9eb71;
    padding: 0px;
    min-width: min-content;
  }
}

.active {
  opacity: 1;
}
</style>