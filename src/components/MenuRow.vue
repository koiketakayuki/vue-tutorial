<template>
  <li class="menu-row">
    <div class="caption">
      <img draggable="false" src="http://www.img03.ekiten.jp/image_charge2/21/3727921/menu/s150_020170524143912.jpg" width="70" height="70" alt="">
    </div>
    <div class="content">
      <div class="menu-content">
        <div v-if="menu.isRecomendation" class="pickup-tag">オススメ！</div>
        <p class="menu-content__name">{{ menu.name }}</p>
        <p v-if="menu.price" class="menu-content__price">
          価格<span class="price">{{ menu.price | formatPrice }}</span>円
          <span>{{ menu.isTaxIncluded ? '（税込）' : '（税抜き）' }}</span>
        </p>
        <div class="menu-content__information-container">
          <div class="information tag">{{ categoryName }}</div>
          <div class="information">写真：<span class="status">{{ menu.numberOfPhoto }}</span>枚</div>
          <div class="information">説明：<span class="status">{{ menu.hasDescription ? '有' : '無' }}</span></div>
        </div>
      </div>
    </div>
    <div class="row-actions">
      <span class="action" @click="onMenuView(menu)">閲覧</span>/
      <span class="action" @click="onMenuEdit(menu)">編集</span>/
      <span class="action" @click="onMenuCopy(menu)">コピー</span>/
      <span class="action delete" @click="onMenuDelete(menu)">削除</span>
    </div>
  </li>
</template>

<script>
import store from '../store';

export default {
  props: {
    menu: {
      type: Object,
      required: true
    },
    categoryName: {
      type: String,
      required: true
    }
  },
  methods: {
    onMenuView(menu) {
      window.open("http://www.ekiten.jp/shop_7125811/menu/menu_427888/");
    },
    onMenuEdit(menu) {
      this.$store.commit('goToEditMode', menu);
    },
    onMenuDelete(menu) {
      this.$store.commit('goToDeleteConfirmation', menu);
    }
  },
  filters: {
    formatPrice: function(price) {
      let result = price.toString();
      const pattern = /(\d+)(\d{3})/;

      while (pattern.test(result)) {
        result = result.replace(pattern, "$1,$2");
      }
      return result;
    }
  }
}
</script>

<style lang="scss">
.menu-row {
  position: relative;
  padding: 13px 15px 14px;
  zoom: 1;
  border-top: solid 1px #ebebeb;

  &:first-child {
    border: none;
  }

  &:hover {
    background-color: #f4f4f4;
  }

  .content {
    display: table;
    height: 70px;
    margin-left: 85px;
  }

  .caption {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 70px;
  }
}


.menu-content {
  display: table-cell;

  .pickup-tag {
    margin-bottom: 2px;
    font-size: 11px;
    font-weight: bold;
    color: #d00;
  }

  .menu-content__name {
    font-size: 107.7%;
    font-weight: bold;
  }

  .menu-content__price {
    margin-top: 3px;
    font-size: 92.3%;
    color: #666;

    .price {
      margin: 0 8px;
      font-size: 133.3%;
      font-weight: bold;
    }
  }

  .menu-content__information-container {
    color: #888;
    letter-spacing: 0;
    white-space: nowrap;
    line-height: 1.1;

    .information {
      display: inline-block;
      margin: 5px 0 0 10px;
      padding-right: 9px;
      border-right: solid 1px #ddd;
      color: #888;
      letter-spacing: 0;
      white-space: nowrap;
      line-height: 1.1;
      
      &:last-child {
        padding-right: 0;
        border-right: none;
      }
    }

    .tag {
      margin-right: 5px;
      margin-left: 0;
      padding: 0 3px;
      border-right: none;
      background: #a98569;
      font-size: 10px;
      color: #fff;
      line-height: 1.6;
    }

    .status {
      margin: 0 3px;
      font-weight: bold;
    }
  }
}

.row-actions {
  position: absolute;
  top: 2px;
  right: 6px;
  font-size: 13px;

  .action {
    color: -webkit-link;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
    text-decoration: underline;
  }

  .delete {
    color: #f70000;
  }
}
</style>