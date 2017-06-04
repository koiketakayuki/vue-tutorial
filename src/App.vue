<template>
  <div class="container">
    <h2 class="heading"><span class="inner">{{ shop.name }}のメニュー一覧</span></h2>
    <div v-for="(menus, categoryName) in categorizedMenus">
      <div>
        <h3 class="menu-category">{{ categoryName }}</h3>
        <button class="button">メニューを作成</button>
      </div>
      <menu-list
        :menus="menus"
        :categoryName="categoryName"
        ></menu-list>
    </div>
    <menu-form-dialog></menu-form-dialog>
    <delete-confirmation-dialog></delete-confirmation-dialog>
  </div>
</template>

<script>
import MenuList from './components/MenuList.vue';
import MenuFormDialog from './components/MenuFormDialog.vue';
import DeleteConfirmationDialog from './components/DeleteConfirmationDialog.vue';
import store from './store';

export default {
  store,
  data() {
    return {
      shop: {
        name: 'エキテン整骨院'
      },
      categorizedMenus: {
        'カイロプラティック': [
          {
            name: 'aaaaa',
            price: 5300,
            isTaxIncluded: true,
            numberOfPhoto: 10,
            hasDescription: true,
            isRecomendation: true,
            index: 0
          },
          {
            name: 'bbbbb',
            numberOfPhoto: 1,
            hasDescription: false,
            index: 1
          },
          {
            name: 'ccccc',
            numberOfPhoto: 1,
            hasDescription: false,
            index: 2
          },
          {
            name: 'ddddd',
            numberOfPhoto: 1,
            hasDescription: false,
            index: 3
          },
          {
            name: 'eeeee',
            numberOfPhoto: 1,
            hasDescription: false,
            index: 4
          }
        ],
        '整体': [
          {
            name: 'test2',
            price: 5210,
            isTaxIncluded: true,
            numberOfPhoto: 1,
            hasDescription: false,
            index: 0
          }
        ],
        '骨盤矯正': [
          {
            name: 'test3',
            price: 3300,
            isTaxIncluded: false,
            numberOfPhoto: 1,
            hasDescription: true,
            index: 0
          }
        ],
        'O脚':[],
        'test':[]
      }
    };
  },
  methods: {
    onMenuEdit() {

    },
    onMenuCopy() {

    },
    onMenuDelete() {

    }
  },
  components: {
    MenuList,
    MenuFormDialog,
    DeleteConfirmationDialog
  },
}
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
  width: 600px;
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
</style>