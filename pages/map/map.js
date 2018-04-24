Page({
  data: {
    latitude: 18.4749100000,
    longitude: 108.9054400000,
    scale: 18,
    markers: [{
      latitude: 18.4749100000,
      longitude: 108.9054400000,
      iconPath: '../../static/location_map.png'
    }]
  },
  onShareAppMessage: function (res) {
    // if (res.from === 'button') {
    //   // 来自页面内转发按钮
    //   console.log(res.target)
    // }
    return {
      title: '', 
      imageUrl: '../../static/calligraphy1.png',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  } 
})