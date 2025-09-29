// index.js
Page({
  data: {
    totalWords: 158,
    newWords: 20,
    oldWords: 138,
    keyword: '',
    allCards: [
      { id: 1, word: 'apple', date: '2025-08-07', image: '' },
      { id: 2, word: 'bicycle', date: '2025-08-07', image: '' },
      { id: 3, word: 'elephant', date: '2025-08-07', image: '' },
    ],
    filteredCards: []
  },

  onLoad() {
    this.checkLoginStatus();
    this.setData({
      filteredCards: this.data.allCards
    });
  },

  // 检查登录状态
  checkLoginStatus() {
    const token = wx.getStorageSync('token');
    if (!token) {
      wx.reLaunch({
        url: '/pages/login/login'
      });
    }
  },

  // 搜索输入
  onSearchInput(e) {
    const keyword = e.detail.value.toLowerCase();
    const filteredCards = this.data.allCards.filter(card => 
      card.word.toLowerCase().includes(keyword)
    );
    this.setData({
      keyword,
      filteredCards
    });
  },

  // 新增闪卡
  addCard() {
    wx.showToast({ title: '功能开发中', icon: 'none' });
  },

  // 批量新增
  batchAdd() {
    wx.showToast({ title: '功能开发中', icon: 'none' });
  },

  // 闪卡设置
  goToSettings() {
    wx.showToast({ title: '功能开发中', icon: 'none' });
  },

  // 编辑闪卡
  editCard(e) {
    const cardId = e.currentTarget.dataset.id;
    wx.showToast({ title: `编辑闪卡 ${cardId}`, icon: 'none' });
  }
})