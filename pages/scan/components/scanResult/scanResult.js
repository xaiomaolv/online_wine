// pages/scan/components/scanResult/scanResult.js
import lottie from 'lottie-miniprogram'
import {
  appletLogin, //登录
} from '../../../../api/api.js'
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgInfo: {
      type: Object,
      value: ''
    },
    cameraImg: {
      type: String,
      value: ''
    },
    identifying: {
      type: Number,
      value: 0
    },
    wineInfo: {
      type: Object,
      value: ''
    },
    isToken: {
      type: String,
      value: ''
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    showResult: false,
    // identifying: 0, //识别，0正在识别，1 识别成功 2 识别失败
    imgUrl: app.globalData.imgUrl,
    // isToken: app.getToken()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    init() {
      if (this.inited) {
        return
      }
      this.createSelectorQuery().selectAll('#lottie_demo').node(res => {
        // console.log(res, 'ressss');
        const canvas = res[0].node
        const context = canvas.getContext('2d')
        canvas.width = 160
        canvas.height = 240
        lottie.setup(canvas)
        this.ani = lottie.loadAnimation({
          loop: true,
          autoplay: true,
          animationData: require('../../../../json/data'),
          rendererSettings: {
            context,
          },
        })
        this.inited = true
      }).exec()
      // this.ani.pause()  //结束动画
    },
    showScanResult: function () {
      this.setData({
        showResult: true,
        identifying: 0,
        wineInfo: {},
      })
      this.inited = undefined
      this.init()
    },
    hideScanResult: function () {
      this.setData({
        showResult: false,
        cameraImg: ''
      })
    },
    // 关闭弹窗
    onClose() {
      this.setData({
        showResult: false,
        cameraImg: ''
      })
      this.triggerEvent('cancel')
    },
    //授权获取手机号
    getUserProfile: function (e) {
      console.log(this.data.isToken, 'token');
      this.triggerEvent('getAuthPhone', e)
    },
    //已有token跳转详情
    toDetail: function (e) {
      console.log(this.data.isToken, 'token2222');
      this.triggerEvent('toDetail')
    },
    // 再次识别
    tryAgain() {
      // this.setData({
      //   identifying: 0
      // })
      this.setData({
        showResult: false,
        cameraImg: ''
      })
      this.triggerEvent('tryAgain')
      // this.inited = undefined
      // console.log(this.inited,'this.inited');
      // this.init()
    },
  },
  lifetimes: {
    //在组件实例进入页面节点树时执行
    attached: function () {
      // this.scanWine()
      // this.init()
    }
  }
})