//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    title:'代写书法',
    address: '海南省乐东县利国镇塘丰村14队6号',
    qq: '1442088888',
    phone: '18976764420',
    wx: '18976764420',
    des: '本店经营硬笔软笔书法代写服务，代写情书，贺卡祝福语，手写对联春联，随意定制，价格很美丽，如有需要欢迎联系。支持全国配送服务！',
    couplet:[
      'http://r.photo.store.qq.com/psb?/V10yq96o4Pm7Kj/srxzlD58mqWsx9nPP5xd*T3HDvh7DPscyxkz1lhrAMg!/r/dJUAAAAAAAAA',
      'http://r.photo.store.qq.com/psb?/V10yq96o4Pm7Kj/6wZPG3rHxzx.8A3Vju*1oygBOlG89XEuLAKfltS.mg8!/r/dDEBAAAAAAAA',
      'http://r.photo.store.qq.com/psb?/V10yq96o4Pm7Kj/JuthL57O4abVJLTA99sI8ehy3EWqO8.*5EWaCLaKGnQ!/r/dAQBAAAAAAAA',
      'http://r.photo.store.qq.com/psb?/V10yq96o4Pm7Kj/qlYkN5Bh14d*F5aBVNDdIOcWNFnRkM4Bhtw0xBqVf*s!/r/dDMBAAAAAAAA',
      'http://r.photo.store.qq.com/psb?/V10yq96o4Pm7Kj/fFoYffWo3AMi07ufFNSd05Dom3hreka0dxxR*8EuhPQ!/r/dDABAAAAAAAA',
      'http://r.photo.store.qq.com/psb?/V10yq96o4Pm7Kj/kcgCJyw0y34KB4n8SJv5phizETZareVsceAb4M7bko0!/r/dDABAAAAAAAA',
      'http://r.photo.store.qq.com/psb?/V10yq96o4Pm7Kj/SlGU8g3jv7tc1r9YZ4Zlaa7.wQfrScA4tO.V.*IqpV0!/r/dDABAAAAAAAA',
      'http://r.photo.store.qq.com/psb?/V10yq96o4Pm7Kj/iarSaldksbs1WOy8OLQse82EFuRhbn6ulEnfhhW*oFQ!/r/dF4BAAAAAAAA',
      'http://r.photo.store.qq.com/psb?/V10yq96o4Pm7Kj/v6Pehn5jH8kNxX1olyuGT*CZdJ4xnr9vmDJffGXJlJU!/r/dEEBAAAAAAAA',
      'http://r.photo.store.qq.com/psb?/V10yq96o4Pm7Kj/fkn4x8jLayZja8Xijgi7K1mNnx8eIOVQdnj1NJJEKGE!/r/dJEAAAAAAAAA',
      'http://r.photo.store.qq.com/psb?/V10yq96o4Pm7Kj/3OvSuVefVHqBkPiiyG*v28gbQyWAcp70Av.Ndr3hMDE!/r/dDABAAAAAAAA',
    ],
    calligraphy:[
      'http://r.photo.store.qq.com/psb?/V10yq96o4Pm7Kj/Z5*tlnuyzxtnQNyHQ01536QU4jY9zR7vFSrysfcYnOs!/r/dJUAAAAAAAAA', 
      'http://r.photo.store.qq.com/psb?/V10yq96o4Pm7Kj/RET7boNEqBhRhf8XiMqyOc3Trocxf2aHXjd7O8vao6Q!/r/dDIBAAAAAAAA',
      'http://r.photo.store.qq.com/psb?/V10yq96o4Pm7Kj/nEja2hnVgjf4T54g.Zmp*GAM6ztfhNrZ.9RebLszw74!/r/dDEBAAAAAAAA',
      'http://r.photo.store.qq.com/psb?/V10yq96o4Pm7Kj/Bd5gChMcoGEXBCuDVokX8PZ.VLq9XS8zkXW3Hp1uQME!/r/dF4BAAAAAAAA',
      'http://r.photo.store.qq.com/psb?/V10yq96o4Pm7Kj/lmaLwdl1QLmPGQ2qyRuNwQnHKmrs8YsMqGC.6mtT0uw!/r/dEEBAAAAAAAA',
      'http://r.photo.store.qq.com/psb?/V10yq96o4Pm7Kj/zakj4wsvQ4dzk4QM6Ar7lw3bzw4ULPij0KYbq99Oy4c!/r/dAQBAAAAAAAA',
      'http://r.photo.store.qq.com/psb?/V10yq96o4Pm7Kj/n2NmF3iPY33VXfXgnDgK32rI0dWCdnPtyL9RUntLhNs!/r/dAgBAAAAAAAA'
    ]
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
  goBigImg(e) {
    wx.setStorageSync('imgUrl', e.currentTarget.dataset.item)
    wx.navigateTo({
      url: '../img/img'
    })
  },
  goCall(){
    wx.makePhoneCall({
      phoneNumber: this.data.phone
    })
  },
  goMap(){
    wx.navigateTo({
      url: '../map/map'
    })
  }
})
