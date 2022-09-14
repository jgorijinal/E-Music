// pages/video-detail/index.js
import { getMVDetail,getMVURL,getRelatedVideo } from '../../service/api_video'
Page({
  data: {
    mvURLInfo:{},     // mv 地址
    mvDetail:{},      // mv 详情数据
    relatedVideos:[]  // 相关视频
  },
  onLoad(options) {
    const id = options.id 
    this.getPageData(id)
  },
  getPageData(id){
    // 获取 mv 地址
    getMVURL(id).then(res =>{
      this.setData({mvURLInfo:res.data})
    })
    // 获取 mv 详情数据
    getMVDetail(id).then(res => {
      this.setData({mvDetail: res.data})
    })
    // 获取 相关 视频
    getRelatedVideo(id).then(res =>{
      this.setData({relatedVideos:res.data})
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})