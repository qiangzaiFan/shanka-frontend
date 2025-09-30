// pages/add-card/add-card.js
Page({
  data: {
    word: '',
    images: [],
    definition: '',
    example: '',
    loading: false
  },

  goBack: function() {
    wx.navigateBack();
  },

  onWordInput: function(e) {
    this.setData({ word: e.detail.value });
  },

  onDefinitionInput: function(e) {
    this.setData({ definition: e.detail.value });
  },

  onExampleInput: function(e) {
    this.setData({ example: e.detail.value });
  },

  chooseImage: function() {
    wx.showToast({ title: '功能开发中', icon: 'none' });
  },

  handleSave: function() {
    const { word } = this.data;
    if (!word) {
      wx.showToast({
        title: '请输入英文单词',
        icon: 'none'
      });
      return;
    }

    this.setData({ loading: true });
    setTimeout(() => {
      this.setData({ loading: false });
      wx.showToast({
        title: '保存成功',
        icon: 'success'
      });
      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
    }, 1000);
  }
});