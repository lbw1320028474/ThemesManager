//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    themesData: [{
        id: "1254",
        isFree: true,
        charge: 0,
        chargeText: "免费",
        name: "动态 夏威夷",
        author: "小虫之家",
        cover: "https://themecn.dbankcdn.com/dl/hitopdl/hitop/theme/700018667/preview_unlock_0.jpg"
      },
      {
        id: "1254",
        charge: 3,
        isFree: false,
        chargeText: "¥3.0",
        name: "动态 夏威夷",
        author: "小虫之家",
        cover: "https://themecn.dbankcdn.com/dl/hitopdl/hitop/theme/700018616/preview_unlock_0.jpg"
      }, {
        id: "1254",
        isFree: false,
        charge: 3,
        chargeText: "¥3.0",
        name: "动态 夏威夷",
        author: "小虫之家",
        cover: "https://themecn.dbankcdn.com/dl/hitopdl/hitop/theme/700018621/preview_unlock_0.jpg"
      }, {
        id: "1254",
        charge: 0,
        isFree: true,
        chargeText: "免费",
        name: "动态 夏威夷",
        author: "小虫之家",
        cover: "https://themecn.dbankcdn.com/dl/hitopdl/hitop/theme/700018615/preview_unlock_0.jpg"
      }, {
        id: "1254",
        charge: 4,
        isFree: false,
        chargeText: "¥4.0",
        name: "动态 夏威夷",
        author: "小虫之家",
        cover: "https://themecn.dbankcdn.com/dl/hitopdl/hitop/theme/700018657/preview_unlock_0.jpg"
      }, {
        id: "1254",
        charge: 4,
        isFree: false,
        name: "动态 夏威夷",
        chargeText: "¥4.0",
        author: "小虫之家",
        cover: "https://themecn.dbankcdn.com/dl/hitopdl/hitop/theme/700018628/preview_unlock_0.jpg"
      }, {
        id: "1254",
        charge: 3,
        isFree: false,
        name: "动态 夏威夷",
        chargeText: "¥3.0",
        author: "小虫之家",
        cover: "https://themecn.dbankcdn.com/dl/hitopdl/hitop/theme/700018690/preview_unlock_0.jpg"
      }, {
        id: "1254",
        charge: 6,
        isFree: false,
        name: "动态 夏威夷",
        chargeText: "¥6.0",
        author: "小虫之家",
        cover: "https://themecn.dbankcdn.com/dl/hitopdl/hitop/theme/700018532/preview_unlock_0.jpg"
      }, {
        id: "1254",
        charge: 0,
        isFree: true,
        chargeText: "免费",
        name: "动态 夏威夷",
        author: "小虫之家",
        cover: "https://themecn.dbankcdn.com/dl/hitopdl/hitop/theme/700018337/preview_unlock_0.jpg"
      }
    ]
  },

  onLoad: function() {

  },
  getUserInfo: function(e) {

  }
})