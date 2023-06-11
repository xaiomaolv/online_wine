const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    wineryTopList: {
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
    isWineBottle: false, // 是否是酒瓶
    wineryTop: [],
    wineLists: [{
        w_bg: 'https://img1.baidu.com/it/u=1098577027,1368137597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        w_img: 'http://dev.vivino.cc/api/files/sc/find-by-uuid?uuid=104e019e-cbbe-4b9b-9ab4-895933ff416f',
        rate: [{
          origin: '法国',
          desc: '本周最佳评价',
          rate: '4.0',
          num: 300,
          price: 2565555
        }],
        w_name: '莫里斯绅士酒庄莫里斯',
        w_origin: '法国-莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        rate: '4.0',
        num: 300,
      },
      {
        w_bg: 'https://img1.baidu.com/it/u=1098577027,1368137597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        w_img: 'http://dev.vivino.cc/api/files/sc/find-by-uuid?uuid=f25a8958-3c37-4719-9071-136f24c7bd7f',
        rate: [{
          origin: '法国',
          desc: '本周最佳评价',
          rate: '4.0',
          num: 300,
          price: 2565555
        }],
        w_name: '莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        w_origin: '法国-莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        rate: '4.0',
        num: 800,
      },
      {
        w_bg: 'https://img1.baidu.com/it/u=1098577027,1368137597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        w_img: 'http://dev.vivino.cc/api/files/sc/find-by-uuid?uuid=104e019e-cbbe-4b9b-9ab4-895933ff416f',
        rate: [{
          origin: '法国',
          desc: '本周最佳评价',
          rate: '4.0',
          num: 300,
          price: 2565555
        }],
        w_name: '莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        w_origin: '法国-莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        rate: '4.0',
        num: 300,
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 判断图片大小
    onImgLoad(event) {
      // const {
      //   width,
      //   height
      // } = event.detail
      // console.log(width, height);
      // let isBottle = (width / height).toFixed(2) < 0.75 ? true : false;
      // console.log(isBottle,'isBottle');
      //     this.setData({
      //       isWineBottle: isBottle
      //     })
      // wx.getImageInfo({
      //   src: this.data.imgUrl + item.wineImg,
      //   success: function (res) {
      //     console.log(res, 'imggggg');
      //     let isBottle = (res.width / res.height).toFixed(2) < 0.75 ? true : false;
      //     this.setData({
      //       isWineBottle: isBottle
      //     })
      //   }
      // })
    },
    imgRatio(item) {

      // res.src = fileAddress + item.wineImg;
      //   res.onload = function () {
      //     let isBottle = (res.width / res.height).toFixed(2) < 0.75;
      //     if (isBottle) {
      //       that.$set(item, "isBottle", true);
      //     } else {
      //       that.$set(item, "isBottle", false);
      //     }
      //   };
    },
    // 跳转详情
    toDetail(e) {
      console.log(e,'eeeeettttttooooo');
      let uuid = e.currentTarget.dataset.item.wineUUID
      const pageSize = getCurrentPages().length
      // console.log(pageSize,'pageSize')
      // getCurrentPages没到达3级就可以使用navigateTo跳转  
      if (pageSize != 3) {
        wx.navigateTo({
          url: `/pages/detail/index/index?uuid=${uuid}`,
        })
      } else {
        //有超过的话 使用redirectTo 关闭当前页进行跳转
        wx.redirectTo({
          url: `/pages/detail/index/index?uuid=${uuid}`,
        })
      }
    },
  },
  lifetimes: {
    attached: function () {
      let data = this.data.wineryTopList
      data.forEach(item => {
        wx.getImageInfo({
          src: this.data.imgUrl + item.wineImg,
          success: function (res) {
            let isBottle = (res.width / res.height).toFixed(2) < 0.75 ? true : false;
            item.isBottle = isBottle
          }
        })
        this.setData({
          wineryTop: [...data]
        })
      })
      console.log(this.data.wineryTop, 'this.data.wineryTop');
    }
  }
})