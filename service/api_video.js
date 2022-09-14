import hyRequest from './index'

export function getTopMVs(offset, limit = 30){
  return hyRequest.get('/top/mv', {
    offset,
    limit
  })
}