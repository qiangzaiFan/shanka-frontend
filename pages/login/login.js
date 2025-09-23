// pages/login/login.js
Page({
  data: {
    phone: '',
    password: '',
    showPassword: false,
    loading: false
  },

  onLoad(options) {
    // 检查是否已登录
    const token = wx.getStorageSync('token')
    if (token) {
      wx.switchTab({
        url: '/pages/index/index'
      })
    }
  },

  // 输入手机号
  onPhoneInput(e) {
    const phone = e.detail.value.replace(/\D/g, '').slice(0, 11)
    this.setData({ phone })
  },

  // 输入密码
  onPasswordInput(e) {
    this.setData({ password: e.detail.value })
  },

  // 验证手机号
  validatePhone(phone) {
    return /^1[3-9]\d{9}$/.test(phone)
  },

  // 验证密码
  validatePassword(password) {
    return password.length >= 6
  },

  // 登录
  async handleLogin() {
    const { phone, password, loading } = this.data

    if (loading) return

    // 验证手机号
    if (!this.validatePhone(phone)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none'
      })
      return
    }

    // 验证密码
    if (!this.validatePassword(password)) {
      wx.showToast({
        title: '密码至少6位',
        icon: 'none'
      })
      return
    }

    this.setData({ loading: true })

    try {
      // 模拟登录成功
      const result = {
        token: 'mock_token_' + Date.now(),
        userInfo: {
          id: 10086,
          phone,
          nickname: '小明爸爸',
          expireDate: '2026-08-07'
        }
      }

      // 保存登录信息
      wx.setStorageSync('token', result.token)
      wx.setStorageSync('userInfo', result.userInfo)

      wx.showToast({
        title: '登录成功',
        icon: 'success'
      })

      // 跳转到首页
      setTimeout(() => {
        wx.switchTab({
          url: '/pages/index/index'
        })
      }, 1500)

    } catch (error) {
      wx.showToast({
        title: error.message || '登录失败',
        icon: 'none'
      })
    } finally {
      this.setData({ loading: false })
    }
  },

  // 忘记密码
  forgetPassword() {
    wx.showToast({
      title: '请联系您的机构老师',
      icon: 'none'
    })
  }
})