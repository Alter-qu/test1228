// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      book:"",
     resu:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
      wx.request({
        url: 'http://movie.1808a.com/test1228/Test',
        success(e){
          //console.log(e)
          let book=e.data.result
          that.setData({
            book
          })
        }
      })
  },
    /**
   * 跳转详情
   */
  show(e){
      let id=e.currentTarget.dataset.id
       console.log(id)
       wx.request({
         url: 'http://movie.1808a.com/test1228/Test/read',
         data:{
           id
         },
         success(res){
           let resu=res.data.result
            // console.log(resu);
            wx.navigateTo({
              url: "/pages/show/show?id="+id,
              success: function(res) {
               console.log(res)
              }
            })
         }
       })
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