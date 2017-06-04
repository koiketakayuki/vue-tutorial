const menus = {
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
};

export default {
  getCategorizedMenus(shopId) {
    return new Promise((success, failure) => {
      success(menus);
    });
  },
  getDetailedMenu(menu) {
    return new Promise((success, failure) => {
      success(menu);
    });
  },
  updateMenuOrder(updateMenus) {
    return new Promise((success, failure) => {
      failure(new Error('メニュー順の変更に失敗しました。一度ページを更新してやり直してください。'));
    });
  },
  deleteMenu(menu) {
    return new Promise((success, failure) => {
      failure(new Error('メニューの削除に失敗しました。一度ページを更新してやり直してください。'));
    });
  }
};
