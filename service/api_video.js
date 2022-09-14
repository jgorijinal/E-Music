import hyRequest from './index'

// 获取 mv 列表
export function getTopMVs(offset, limit = 30){
  return hyRequest.get('/top/mv', {
    offset,
    limit
  })
}
// mv 地址 
export function getMVURL(id) {
  return hyRequest.get('/mv/url',{
    id
  })
}
// mv 详情数据
export function getMVDetail(mvid) {
  return hyRequest.get('/mv/detail', {
    mvid
  })
}
// 相关视频
export function getRelatedVideo(id) {
  return hyRequest.get('/related/allvideo', {
    id
  })
}
