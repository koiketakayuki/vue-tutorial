<template>
  <li class="menu-row">
    <div class="text-block">
      <div class="menu-content">
        <p class="menu-content__name">{{ menu.name }}</p>
        <p v-if="menu.price" class="menu-content__price">
          価格<span class="price">{{ menu.price | formatPrice }}</span>円
          <span v-if="menu.isTaxIncluded">（税込）</span>
          <span v-else>（税抜き）</span>
        </p>
        <div class="menu-content__information">
        </div>
      </div>
      <div class="button-container">
        <button class="button button--edit">編集</button>
        <button class="button button--delete">削除</button>
      </div>
    </div>
    <div class="image-block">
    </div>
  </li>
</template>

<script>
export default {
  props: ['menu', 'onMenuClick'],
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

<style style="scss">
.menu-row {
  position: relative;
  padding: 13px 15px 14px;
  zoom: 1;
  border-top: solid 1px #ebebeb;
}

.menu-row:first-child {
  border: none;
}

.menu-row:hover {
  background-color: #f4f4f4;
}

.text-block {
  display: table;
  height: 70px;
  margin-left: 85px;
}

.image-block {
  position: absolute;
  top: 15px;
  left: 15px;
  width: 70px;
}

.menu-content {
  display: table-cell;
}

.menu-content__name {
  font-size: 107.7%;
  font-weight: bold;
}

.menu-content__price {
  margin-top: 3px;
  font-size: 92.3%;
  color: #666;
}

.price {
  margin: 0 8px;
  font-size: 133.3%;
  font-weight: bold;
}

.menu-content__information {
  
}

.button-container {
  position: absolute;
  right: 20px;
}

.button--edit {

}

.button--delete {
  background: -moz-linear-gradient(bottom, #36d, #248 50%, #36d);
  background: -webkit-gradient(linear, left bottom, left top, from(#36d), color-stop(0.5, #248), to(#36d));
}
</style>