// pages/show/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     id:"",
     result:"",
     discuss:"",
     bookid:"",
     count:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {  
    var that=this
    let id = options.id
   wx.setStorage({
     data: options.id,
     key: 'finalid',
   })
     //console.log(id)
    wx.request({
      url: 'http://movie.1808a.com/test1228/Test/read',
      data:{
        id
      },
      success(res){
       // console.log(res)
        let result=res.data.result
        //console.log(result)
        that.setData({
          result
        })
      }
    })
      wx.request({
        url: 'http://movie.1808a.com/test1228/Test/create',
        data:{
          id
        },
        success(e){
          console.log(e)
          let discuss=e.data.result
          let count=e.data.count.count
          that.setData({
            discuss,
            count
          })
        }
      })
  },
   /**
   * 添加评论
   */
  add(e){
    var that=this
    var val=e.detail.value.dis
    var userid=1
    wx.getStorage({
      key: 'finalid',   
        success (res) {
        //  console.log(res.data)  
        let bookid=res.data
       wx.request({
      url: 'http://movie.1808a.com/test1228/Test/save',
      data:{
        "userid":userid,
        "bookid":bookid,
        "discuss":val
      },
      success(res){
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