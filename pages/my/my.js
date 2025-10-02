// pages/my/my.js
Page({
  data: {
    // 可根据实际用户信息替换
    name: '小明爸爸',
    idText: '编号: 10086 | 有效期至: 2026-08-07'
  },

  goStudy() {
    // 跳转到现有学习页面，如需改为别的页面请告知
    wx.navigateTo({
      url: '/pages/study/study'
    });
  },

  goChangePassword() {
    wx.navigateTo({
      url: '/pages/change-password/change-password'
    });
  },

  goFlashcard() {
    // 选择首页或闪卡管理页面，根据项目实际路由调整
    wx.navigateTo({
      url: '/pages/index/index'
    });
  },

  // 新增：跳转到基本信息页面（原 profile）
  goProfile() {
    wx.navigateTo({
      url: '/pages/profile/profile'
    });
  },

  logout() {
    // 这里执行真实的退出逻辑，如清理 token、回到登录页等
    wx.showModal({
      title: '确认退出',
      content: '退出登录后需要重新登录，确认退出吗？',
      success: (res) => {
        if (res.confirm) {
          // 示例：跳转到登录页
          wx.reLaunch({
            url: '/pages/login/login'
          });
        }
      }
    });
  }
});