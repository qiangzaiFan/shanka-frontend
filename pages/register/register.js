// pages/register/register.js
Page({
  data: {
    phone: '',
    password: '',
    confirmPassword: '',
    smsCode: '',
    showPassword: false,
    showConfirmPassword: false,
    agreeProtocol: false,
    countdown: 0,
    countdownTimer: null,
    loading: false
  },

  onUnload() {
    if (this.data.countdownTimer) {
      clearInterval(this.data.countdownTimer)
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

  // 输入确认密码
  onConfirmPasswordInput(e) {
    this.setData({ confirmPassword: e.detail.value })
  },

  // 输入验证码
  onSmsCodeInput(e) {
    this.setData({ smsCode: e.detail.value })
  },

  // 切换密码显示
  togglePasswordShow() {
    this.setData({ showPassword: !this.data.showPassword })
  },

  // 切换确认密码显示
  toggleConfirmPasswordShow() {
    this.setData({ showConfirmPassword: !this.data.showConfirmPassword })
  },

  // 发送验证码
  async sendSmsCode() {
    const { phone, countdown } = this.data
    
    if (!this.validatePhone(phone)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none'
      })
      return
    }

    if (countdown > 0) return

    try {
      wx.showToast({
        title: '验证码已发送',
        icon: 'success'
      })
      this.startCountdown()
    } catch (error) {
      wx.showToast({
        title: '发送失败',
        icon: 'none'
      })
    }
  },

  // 开始倒计时
  startCountdown() {
    let countdown = 60
    this.setData({ countdown })

    const timer = setInterval(() => {
      countdown--
      this.setData({ countdown })
      
      if (countdown <= 0) {
        clearInterval(timer)
        this.setData({ countdownTimer: null })
      }
    }, 1000)

    this.setData({ countdownTimer: timer })
  },

  // 同意协议
  onAgreeChange(e) {
    this.setData({ agreeProtocol: e.detail.value.length > 0 })
  },

  // 验证手机号
  validatePhone(phone) {
    return /^1[3-9]\d{9}$/.test(phone)
  },

  // 验证密码
  validatePassword(password) {
    return password.length >= 6
  },

  // 注册
  async handleRegister() {
    const { phone, password, confirmPassword, smsCode, agreeProtocol, loading } = this.data

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

    // 验证确认密码
    if (password !== confirmPassword) {
      wx.showToast({
        title: '两次密码不一致',
        icon: 'none'
      })
      return
    }

    // 验证验证码
    if (!smsCode || smsCode.length !== 6) {
      wx.showToast({
        title: '请输入6位验证码',
        icon: 'none'
      })
      return
    }

    // 验证协议同意
    if (!agreeProtocol) {
      wx.showToast({
        title: '请先同意用户协议',
        icon: 'none'
      })
      return
    }

    this.setData({ loading: true })

    try {
      wx.showToast({
        title: '注册成功',
        icon: 'success'
      })

      setTimeout(() => {
        wx.navigateBack()
      }, 1500)

    } catch (error) {
      wx.showToast({
        title: '注册失败',
        icon: 'none'
      })
    } finally {
      this.setData({ loading: false })
    }
  },

  // 返回登录
  goLogin() {
    wx.navigateBack()
  },

  // 查看协议
  viewProtocol(e) {
    const type = e.currentTarget.dataset.type
    wx.navigateTo({
      url: `/pages/protocol/protocol?type=${type}`
    })
  }
})