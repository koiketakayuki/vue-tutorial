<template>
  <div class="menu-card" :class="{ 'is-edit-mode': isEditMode }" @click="onClick">
    card{{ menu }}
  </div>
</template>

<script>
export default {
  props: ['menu', 'isEditMode', 'onClick']
}
</script>

<style lang="scss">
.is-edit-mode {
  cursor: pointer;
  background-color: #888888;
}
.menu-card {
  border: solid 1px #888888;
  width: 800px;
  height: 250px;
  margin-left: auto;
  margin-right: auto;
}
</style>