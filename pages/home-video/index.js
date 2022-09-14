// pages/home-video/index.js
import {getTopMVs } from '../../service/api_video'
Page({
  data: {
    topMVs:[],  // mv 列表
    hasMore: true, // 是否能加载更多(后端会告诉)
  },
  async getTopMVsData(offset){
    // 是否可以请求逻辑判断
    // 为什么要加上 offset !== 0 ? 
    // 因为在触底hasMore变false之后, 在去下拉刷新时刷新不了, 所以加了个额外的判断
    if(!this.data.hasMore && offset !== 0) return 
  
    // 真正请求数据
    const res = await getTopMVs(offset)
    let newData = []
    if(offset === 0) { // 做下判断
      newData = res.data
    }else {
      newData = [...this.data.topMVs , ...res.data]
    }
    // 设置数据
    this.setData({topMVs:newData})
    this.setData({hasMore:res.hasMore})

    // 关闭下拉刷新动画(默认不会自动关闭)
    if(offset === 0) {
      wx.stopPullDownRefresh()
    }
  },
  async onLoad(options) {
    this.getTopMVsData(0)
  },
  async onPullDownRefresh() {  // 下拉刷新
    this.getTopMVsData(0)
  },
  async onReachBottom() {    // 上拉触底
    this.getTopMVsData(this.data.topMVs.length)
  },
  handleVideoItemClick(e){
    const id = e.currentTarget.dataset.item.id 
    // 然后跳转到详情页
    wx.navigateTo({
      url: '/pages/video-detail/index?id=' + id,
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})