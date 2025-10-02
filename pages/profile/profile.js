// pages/profile/profile.js
Page({
  data: {
    // 家长信息
    parentName: '小明爸爸',
    parentPhone: '138****5678',
    registerDate: '2025-01-01',

    // 孩子信息
    childName: '小明',
    birthDate: '2020-05-10',
    gender: 'male' // 'male' | 'female'
  },

  setGender(e) {
    const value = e.currentTarget.dataset.value;
    this.setData({ gender: value });
  },

  saveProfile() {
    // TODO: 接入后端保存。当前先提示成功。
    wx.showToast({
      title: '已保存',
      icon: 'success'
    });
  }
});