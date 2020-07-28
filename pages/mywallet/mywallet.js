// pages/mywallet/mywallet.js
import Dialog from '../../pages/dist/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  Gotolive:function(event){
    wx:wx.navigateTo({
      url: '../BuyCard/BuyCard',
    })
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

  },
// Gotolive(){
//   Dialog.confirm({
//     title:'退出',
//     message:'确认要退出',
//   })
//     .then(()=>{
//       //Gotolive
//       // 跳转页面
//       wx.reLaunch({
//         url:'../PriceRule/PriceRule'
//       })
//     })
//     .catch(()=>{
//     })
// },

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