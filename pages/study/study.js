// pages/study/study.js
Page({
  data: {
    year: 2024,
    month: 5,
    days: [],
    weekDays: ['日', '一', '二', '三', '四', '五', '六'],
    totalCheckIns: 12,
    consecutiveCheckIns: 5,
    monthBest: 8,
    isTodayCheckedIn: false,
    checkedDates: ['2024-5-1', '2024-5-3', '2024-5-4', '2024-5-5', '2024-5-8', '2024-5-9', '2024-5-10', '2024-5-11', '2024-5-12', '2024-5-15', '2024-5-16', '2024-5-17']
  },

  onLoad: function (options) {
    const date = new Date();
    this.setData({
      year: date.getFullYear(),
      month: date.getMonth() + 1,
    });
    this.generateCalendar(this.data.year, this.data.month);
    this.checkTodayStatus();
  },

  generateCalendar: function (year, month) {
    const firstDay = new Date(year, month - 1, 1).getDay();
    const daysInMonth = new Date(year, month, 0).getDate();
    const days = [];
    const today = new Date();

    // Add empty placeholders for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push({ day: '', date: '' });
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const dateStr = `${year}-${month}-${i}`;
      days.push({
        day: i,
        date: dateStr,
        isToday: i === today.getDate() && month === today.getMonth() + 1 && year === today.getFullYear(),
        isChecked: this.data.checkedDates.includes(dateStr)
      });
    }
    this.setData({ days });
  },
  
  checkTodayStatus: function() {
    const today = new Date();
    const dateStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    this.setData({
      isTodayCheckedIn: this.data.checkedDates.includes(dateStr)
    });
  },

  handlePrevMonth: function () {
    let { year, month } = this.data;
    if (month === 1) {
      month = 12;
      year--;
    } else {
      month--;
    }
    this.setData({ year, month });
    this.generateCalendar(year, month);
  },

  handleNextMonth: function () {
    let { year, month } = this.data;
    if (month === 12) {
      month = 1;
      year++;
    } else {
      month++;
    }
    this.setData({ year, month });
    this.generateCalendar(year, month);
  },

  handleCheckIn: function () {
    if (this.data.isTodayCheckedIn) return;

    const today = new Date();
    const dateStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    const newCheckedDates = [...this.data.checkedDates, dateStr];
    
    // In a real app, you would send this to a server
    this.setData({
      checkedDates: newCheckedDates,
      isTodayCheckedIn: true,
      totalCheckIns: this.data.totalCheckIns + 1,
      // Recalculate consecutive days, etc.
    });
    
    this.generateCalendar(this.data.year, this.data.month); // Re-render calendar to show check-in
    
    wx.showToast({
      title: '打卡成功！',
      icon: 'success'
    });
  }
});