// pages/profile/profile.js
Page({
  data: {
    // 家长信息
    parentAvatar: '/images/logo.svg',
    parentName: '小明爸爸',
    parentPhone: '138****5678',
    registerDate: '2025-01-01',

    // 孩子信息
    childAvatar: '/images/logo.svg',
    childName: '小明',
    birthDate: '2020-05-10',
    gender: 'male', // 'male' | 'female'
  },

  setGender(e) {
    this.setData({ gender: e.currentTarget.dataset.value });
  },

  bindDateChange(e) {
    this.setData({
      birthDate: e.detail.value,
    });
  },

  changeAvatar(e) {
    const type = e.currentTarget.dataset.type; // 'parent' or 'child'
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const tempFilePath = res.tempFilePaths[0];
        if (type === 'parent') {
          this.setData({ parentAvatar: tempFilePath });
        } else {
          this.setData({ childAvatar: tempFilePath });
        }
      },
    });
  },

  saveProfile(e) {
    const formData = e.detail.value;
    const submittedData = Object.assign({}, this.data, formData);
    console.log('Form submitted:', submittedData);
    // TODO: 接入后端保存。当前先提示成功。
    wx.showToast({
      title: '已保存',
      icon: 'success',
    });
  },
});
