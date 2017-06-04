import shop from '../api/shop';
import menu from '../api/menu';
export default {
  getShop({ commit }, shopId) {
    return shop
      .getShop(shopId)
      .then(shop => commit('receiveShop', shop));
  },
  getCategorizedMenus({ commit }, shopId) {
    return menu
      .getCategorizedMenus(shopId)
      .then(categorizedMenus => commit('receiveCategorizedMenus', categorizedMenus));
  },
  getDetailedMenu(menu) {
    return menu.getDetailedMenu(menu);
  },
  updateMenuOrder({ commit }, menus ) {

  },
  saveMenu() {

  }
};
