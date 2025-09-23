// pages/study/study.js
Page({
  data: {
    todayProgress: 60,
    studyCards: [
      {
        id: 1,
        title: '数学基础练习',
        cardCount: 50,
        progress: 85,
        lastStudy: '今天 14:30'
      },
      {
        id: 2,
        title: '英语单词卡片',
        cardCount: 120,
        progress: 92,
        lastStudy: '昨天 16:20'
      },
      {
        id: 3,
        title: '语文古诗词',
        cardCount: 80,
        progress: 67,
        lastStudy: '前天 10:15'
      },
      {
        id: 4,
        title: '科学知识卡',
        cardCount: 60,
        progress: 45,
        lastStudy: '3天前 09:30'
      }
    ],
    stats: {
      totalCards: 310,
      studiedCards: 235,
      studyDays: 15,
      studyTime: 420
    }
  },

  onLoad: function (options) {
    this.checkLoginStatus();
    this.loadStudyData();
  },

  onShow: function () {
    // 页面显示时刷新数据
    this.loadStudyData();
  },

  // 检查登录状态
  checkLoginStatus: function() {
    const token = wx.getStorageSync('token');
    if (!token) {
      wx.reLaunch({
        url: '/pages/login/login'
      });
    }
  },

  // 加载学习数据
  loadStudyData: function() {
    // 这里可以调用API获取真实的学习数据
    // 目前使用模拟数据
    console.log('加载学习数据');
  },

  // 开始学习
  startStudy: function(e) {
    const cardId = e.currentTarget.dataset.id;
    const card = this.data.studyCards.find(item => item.id === cardId);
    
    wx.showModal({
      title: '开始学习',
      content: `准备开始学习"${card.title}"吗？`,
      success: (res) => {
        if (res.confirm) {
          wx.showToast({
            title: '功能开发中',
            icon: 'none'
          });
          
          // 这里可以跳转到具体的学习页面
          // wx.navigateTo({
          //   url: `/pages/study-detail/study-detail?id=${cardId}`
          // });
        }
      }
    });
  },

  // 下拉刷新
  onPullDownRefresh: function() {
    this.loadStudyData();
    setTimeout(() => {
      wx.stopPullDownRefresh();
    }, 1000);
  }
});