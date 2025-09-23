// pages/change-password/change-password.js
Page({
  data: {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    showCurrentPassword: false,
    showNewPassword: false,
    showConfirmPassword: false,
    loading: false
  },

  // 当前密码输入
  onCurrentPasswordInput: function(e) {
    this.setData({
      currentPassword: e.detail.value
    });
  },

  // 新密码输入
  onNewPasswordInput: function(e) {
    this.setData({
      newPassword: e.detail.value
    });
  },

  // 确认密码输入
  onConfirmPasswordInput: function(e) {
    this.setData({
      confirmPassword: e.detail.value
    });
  },

  // 验证密码格式
  validatePassword: function(password) {
    // 密码长度8-16位，包含字母和数字
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
    return regex.test(password);
  },

  // 提交修改
  handleSubmit: function() {
    const { currentPassword, newPassword, confirmPassword } = this.data;

    // 验证输入
    if (!currentPassword) {
      wx.showToast({
        title: '请输入当前密码',
        icon: 'none'
      });
      return;
    }

    if (!newPassword) {
      wx.showToast({
        title: '请输入新密码',
        icon: 'none'
      });
      return;
    }

    if (!confirmPassword) {
      wx.showToast({
        title: '请确认新密码',
        icon: 'none'
      });
      return;
    }

    // 验证新密码格式
    if (!this.validatePassword(newPassword)) {
      wx.showToast({
        title: '密码格式不正确',
        icon: 'none'
      });
      return;
    }

    // 验证两次密码是否一致
    if (newPassword !== confirmPassword) {
      wx.showToast({
        title: '两次密码输入不一致',
        icon: 'none'
      });
      return;
    }

    // 验证新密码不能与当前密码相同
    if (currentPassword === newPassword) {
      wx.showToast({
        title: '新密码不能与当前密码相同',
        icon: 'none'
      });
      return;
    }

    this.setData({ loading: true });

    // 模拟API调用
    setTimeout(() => {
      this.setData({ loading: false });
      
      wx.showToast({
        title: '密码修改成功',
        icon: 'success'
      });

      // 延迟返回上一页
      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
    }, 2000);
  }
});