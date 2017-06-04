import ShopAPI from '../api/shop';
import MenuAPI from '../api/menu';
function closeInformation(commit) {
  setTimeout(() => commit('closeInformation'), 5000);
}

export default {
  getShop({ commit }, shopId) {
    return ShopAPI.getShop(shopId).then(shop => commit('receiveShop', shop));
  },
  getCategorizedMenus({ commit }, shopId) {
    return MenuAPI.getCategorizedMenus(shopId).then(categorizedMenus => commit('receiveCategorizedMenus', categorizedMenus));
  },
  getDetailedMenu(targetMenu) {
    return MenuAPI.getDetailedMenu(targetMenu);
  },
  deleteMenu({ commit }, targetMenu) {
    commit('goToMenuList');
    return MenuAPI
      .deleteMenu(targetMenu)
      .then(() => {
        /* 削除結果をstateに反映 */
        commit('deleteMenu', targetMenu);
        /* 削除成功のメッセージを表示 */
        commit('displayInformation', 'メニューを削除しました');
      })
      .catch(e => {/* 失敗したらメッセージを表示 */
        commit('displayInformation', e.message);
        closeInformation(commit);
      });
  },
  updateMenuOrder({ commit }, menus ) {
    return MenuAPI
      .updateMenuOrder(menus)/* うまくアップデートできたら何もしない */
      .catch(e => {/* 失敗したらメッセージを表示 */
        commit('displayInformation', e.message);
        closeInformation(commit);
      });
  },
  saveMenu() {

  }
};
