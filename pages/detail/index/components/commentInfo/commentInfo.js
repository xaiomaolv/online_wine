// pages/detail/index/components/commentInfo/commentInfo.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    commentInfoList: {
      type: Array,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 图片地址
    imgUrl: app.globalData.imgUrl,
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})