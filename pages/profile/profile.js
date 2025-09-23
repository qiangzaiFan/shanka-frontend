// pages/profile/profile.js
Page({
  data: {
    userInfo: {
      nickname: '小明爸爸',
      id: '10086',
      expireDate: '2026-08-07',
      avatar: ''
    }
  },

  onLoad: function (options) {
    this.loadUserInfo();
  },

  // 加载用户信息
  loadUserInfo: function() {
    // 从本地存储或接口获取用户信息
    const userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
      this.setData({
        userInfo: userInfo
      });
    }
  },

  // 跳转到学习报告页面
  goToStudyReport: function() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  },

  // 跳转到修改密码页面
  goToChangePassword: function() {
    wx.navigateTo({
      url: '/pages/change-password/change-password'
    });
  },

  // 退出登录
  handleLogout: function() {
    wx.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          // 清除本地存储的用户信息
          wx.removeStorageSync('userInfo');
          wx.removeStorageSync('token');
          
          // 跳转到登录页面
          wx.reLaunch({
            url: '/pages/login/login'
          });
        }
      }
    });
  }
});