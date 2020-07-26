// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      messageList:[],
      sectionBox:[],
      activityList:[]
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      messageList: [
        {id: "m1", content:"骑青桔，攒时长，享受更多权益"},
        {id: "m2", content:"骑行5分钟，即可领取升级大礼包"},
      ],
      sectionBox: [
        {image:'../../image/卡.png',title: "青桔骑行卡",content:"包月骑，更划算",IconImage:"../../image/右箭头 (4).png"},
        {image:'../../image/1.jpg',title: "青桔骑行金",content:"多骑多得可提现",IconImage:"../../image/右箭头 (4).png"},
        {image:'../../image/2.png',title: "青桔商城",content:"分享新奇好物",IconImage:"../../image/右箭头 (4).png"},
        {image:'../../image/应用.png',title: "立即关注服务号",content:"周周福利尽享不停",IconImage:"../../image/右箭头 (4).png"},
      ],
      activityList:[
        {image:'../../image/5.jpg',title1: " 来领！30元红包",title2:"跟昊然，去追风",btn:"点击领取>"},
        {image:'../../image/6.jpg',title1: " 加入青桔成长计划",title2:"最高兑换85元礼包",btn:"一键兑换>"},
        {image:'../../image/7.jpg',title1: " 邀好友免费骑青桔",title2:"昊然送你现金奖励",btn:"点击参与>"}
      ]
    })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})