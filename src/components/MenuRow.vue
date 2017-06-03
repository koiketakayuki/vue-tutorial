<template>
  <div class="menu-row">
    <div class="text-block">
      <div class="menu-content">
        <p>{{ menu.name }}</p>
      </div>
      <div class="edit-button">
      </div>
    </div>
    <div class="image-block">
    </div>
  </div>
</template>

<script>
export default {
  props: ['menu', 'onMenuClick']
}
</script>

<style>
.menu-row {
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
  width: 99%;
}
</style>