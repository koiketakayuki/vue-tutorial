export default {
  goToEditMode(state, menu) {
    state.targetMenu = menu;
    state.isEditMode = true;
    state.isDeleteConfimationMode = false;
    document.body.className = 'no-scroll';
  },
  goToDeleteConfirmationMode(state, menu) {
    state.targetMenu = menu;
    state.isEditMode = false;
    state.isDeleteConfimationMode = true;
    document.body.className = 'no-scroll';
  },
  goToMenuList(state) {
    state.targetMenu = null;
    state.isEditMode = false;
    state.isDeleteConfimationMode = false;
    document.body.className = '';
  },
  receiveShop(state, shop) {
    state.shop = shop;
  },
  receiveCategorizedMenus(state, categorizedMenus) {
    state.categorizedMenus = categorizedMenus;
  }
};
