<template>
  <div v-if="isDeleteConfimationMode">
    <div class="overlay" @click="goToMenuList"></div>
    <div class="delete-confirmation-dialog">
      <div class="delete-confirmation-dialog__header">
        <p>メニューの削除</p>
      </div>
      <div class="delete-confirmation-dialog__content">
        <p class="confirmation-text">{{ targetMenu.name }}</p>を削除しますか？
        <div class="actions">
          <button class="button button--action button--delete mr-20" @click="deleteMenu(targetMenu)">削除</button>
          <button class="button button--action" @click="goToMenuList">キャンセル</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState([
    'isDeleteConfimationMode',
    'targetMenu'
  ]),
  methods: {
    goToMenuList() {
      this.$store.commit('goToMenuList');
    },
    deleteMenu(menu) {
      this.$store.dispatch('deleteMenu', menu);
    }
  }
}
</script>

<style lang="scss">
.mr-20 {
  margin-right: 20px;
}
.delete-confirmation-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 320px;
  margin-left: -150px;
  margin-top: -100px;
  background-color: #ffffff;
  text-align: center;
  z-index: 10; /* keep on top of other elements on the page */

  .delete-confirmation-dialog__header {
    text-align: left;
    padding: 8px 10px;
    background-color: rgba(0, 0, 0, 0.1);
    font-size: 16px;
    color: rgba(0, 0, 0, 0.8);
  }

  .delete-confirmation-dialog__content {
    padding: 8px 16px;
    font-size: 16px;
    
    .confirmation-text {
      font-size: 26px;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .actions {
      padding: 20px 0 10px 0;

      .button--action {
        font-size: 16px;
      }

      .button--delete {
        padding: 8px 30px;
        background-color: #ff0000;
        opacity: 0.6;
        color: #fff;
        border-style: none;
        box-shadow: 2px 2px 3px 1px #666;
        -moz-box-shadow: 2px 2px 3px 1px #666;
        -webkit-box-shadow: 2px 2px 3px 1px #666;

        &:hover {
          opacity: 0.4
        }
      }
    }
  }
}
</style>
