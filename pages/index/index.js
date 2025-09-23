// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    recentStudy: [
      {
        id: 1,
        title: '数学基础练习',
        time: '今天 14:30',
        progress: 85
      },
      {
        id: 2,
        title: '英语单词卡片',
        time: '昨天 16:20',
        progress: 92
      },
      {
        id: 3,
        title: '语文古诗词',
        time: '前天 10:15',
        progress: 67
      }
    ]
  },

  onLoad() {
    this.checkLoginStatus();
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

  // 跳转到内容管理
  goToContentManage() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  },

  // 跳转到学习卡
  goToStudyCard() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  },

  // 跳转到学习进度
  goToProgress() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  },

  // 跳转到设置
  goToSettings() {
    wx.navigateTo({
      url: '/pages/profile/profile'
    });
  }
})