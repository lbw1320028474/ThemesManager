//logs.js
// const util = require('../../utils/util.js')
Page({
  onLoad: function () {
    setTimeout(() => {
      console.log("1.5秒启动首页");
      wx.switchTab({
        url: "../themes/themes",
      })
      // wx.navigateTo({
      //   url: '../mainpage/mainpage'
      // })
    }, 1500);
  }
})
