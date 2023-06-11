// pages/detail/index/index.js
import {
  getDetailInfo, //详情
  getDetailPageVideo, //品酒视频
  getDecanterTime, // 醒酒时间
  queryMyVintageCommentLog, //我的日志
  getVintageCommentInfo, //点评笔记
  getWineryTop, //酒庄最佳酒款
} from '../../../api/detail.js'
const app = getApp();
Page({
  data: {
    isShowNav: false, //是否显示顶部导航
    isShowBtn: true, //是否显示左侧按钮
    backgroundColor: '#B81728', //背景颜色
    navTitle: '酒款详情页', //标题
    isWhite: true, //是否白色胶囊
    titleColor: 'white', //字体颜色
    // 导航栏高度
    navHeight: app.globalData.navHeight,
    navBarHeight: app.globalData.navBarHeight,
    // 导航栏距离顶部距离
    navTop: app.globalData.navTop,
    // 胶囊的高度
    navObj: app.globalData.navObj,
    // 胶囊宽度+距右距离
    navObjWid: app.globalData.navObjWid,
    // ————————吸顶tab————————//
    toView: '',
    activeIndex: 0,
    // customStyle:{
    //   width:560rpx,margin:auto;width:560rpx;margin:auto;
    // },
    title: [{
      name: "详情",
      opt: 'blurbCard',
      type: 0
    }, {
      name: "评价",
      opt: 'evaluateCard',
      type: 1
    }, {
      name: "攻略",
      opt: 'tasteCard',
      type: 2
    }, {
      name: "推荐",
      opt: 'likeCard',
      type: 3
    }],
    isHidden: false,
    scrollLock: false, //滑动枷锁
    isScroll: '',
    detailInfo: {},
    // 图片地址
    imgUrl: app.globalData.imgUrl,
    // ————————————//
    // 背景图
    w_bg: 'https://img1.baidu.com/it/u=1098577027,1368137597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
    wine_bg: 'https://img1.baidu.com/it/u=1098577027,1368137597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
    wineInfo: {
      w_bg: 'https://img1.baidu.com/it/u=1098577027,1368137597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
      w_img: 'http://dev.vivino.cc/api/files/sc/find-by-uuid?uuid=f25a8958-3c37-4719-9071-136f24c7bd7f',
      rate: [{
        origin: '你喜欢的风格',
        desc: '本周最高评分意大利红酒',
        rate: '4.0',
        num: 6586,
        price: 85555
      }],
      w_name: '莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅葡萄酒',
      w_flag: 'https://img1.baidu.com/it/u=708777537,1411350085&fm=253&fmt=auto&app=138&f=JPEG?w=650&h=498',
      w_origin: '法国-莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
      w_eng: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
      price: 85555
    },
    // 推荐年份
    recomeYear: [{
        year: '2021',
        name: '最高评分',
        num: '4.0'
      },
      {
        year: '2021',
        name: '最优价格',
        num: '￥1244'
      },
      {
        year: '2021',
        name: '最受欢迎',
        num: '12222条评价'
      }
    ],
    wineEditorNotes: null,
    // 简介
    blurbCurrent: '0',
    blurbHight: ['亮点', '标签'],
    blurbList: [{
        icon: '/img/mate/4.png',
        name: '排名全球第一'
      },
      {
        icon: '/img/mate/5.png',
        name: '排名全球第一'
      },
      {
        icon: '/img/mate/6.png',
        name: '排名全球第一'
      },
      {
        icon: '/img/mate/7.png',
        name: '排名全球第一'
      },
      {
        icon: '/img/mate/8.png',
        name: '排名全球第一'
      }
    ],
    // 口味特征
    flavourList: [{
        flavourValue: 70,
        left: '清淡',
        right: '醇厚'
      },
      {
        flavourValue: 50,
        left: '干',
        right: '甜'
      },
      {
        flavourValue: 10,
        left: '柔和',
        right: '酸度'
      },
      {
        flavourValue: 30,
        left: '顺滑',
        right: '单宁'
      },
    ],
    // 我的日志
    logList: {
      photo: [{
          num: '拍照识别过4次此款酒',
          icon: '/img/mate/8.png'
        },
        {
          num: '视频识别过4次此款酒',
          icon: '/img/mate/7.png'
        },
      ],
      history: [{
        name: '武大',
        date: '2012-09-12',
        rate: '4.0',
        year: 2020,
        desc: '非常不错，非常不错，非常不错，非常不错，非常不错，非常不错，',
        head: '/img/mate/12.png'
      }, {
        name: '武大',
        date: '2012-09-12',
        rate: '4.0',
        year: 2020,
        desc: '非常不错，非常不错，非常不错，非常不错，非常不错，非常不错，',
        head: '/img/mate/12.png'
      }]
    },
    // 点评笔记
    commentInfo: {},
    // 评价
    evaluateHight: ["参考酒评", "最新", "朋友"],
    wineLists: [{
        w_bg: 'https://img1.baidu.com/it/u=1098577027,1368137597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        w_img: '/img/mate/wine1.png',
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
      {
        w_bg: 'https://img1.baidu.com/it/u=1098577027,1368137597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        w_img: '/img/mate/wine.png',
        rate: [{
          origin: '法国',
          desc: '本周最佳评价',
          rate: '4.0',
          num: 300,
          price: 2565555
        }],
        w_name: '莫里斯绅士酒庄莫里斯绅士酒绅',
        w_origin: '法国-莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        rate: '4.0',
        num: 800,
      },
      {
        w_bg: 'https://img1.baidu.com/it/u=1098577027,1368137597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        w_img: '/img/mate/wine1.png',
        rate: [{
          origin: '法国',
          desc: '本周最佳评价',
          rate: '4.0',
          num: 300,
          price: 2565555
        }],
        w_name: '莫里斯绅士酒庄莫里斯绅士酒庄莫里莫里',
        w_origin: '法国-莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        rate: '4.0',
        num: 800,
      },
      {
        w_bg: 'https://img1.baidu.com/it/u=1098577027,1368137597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        w_img: '/img/mate/wine.png',
        rate: [{
          origin: '法国',
          desc: '本周最佳评价',
          rate: '4.0',
          num: 300,
          price: 2565555
        }],
        w_name: '莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        w_origin: '法国-莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        rate: '4.0',
        num: 300,
      },
      {
        w_bg: 'https://img1.baidu.com/it/u=1098577027,1368137597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        w_img: '/img/mate/wine1.png',
        rate: [{
          origin: '法国',
          desc: '本周最佳评价',
          rate: '4.0',
          num: 300,
          price: 2565555
        }],
        w_name: '莫里斯绅士酒庄莫里斯绅士酒绅',
        w_origin: '法国-莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        rate: '4.0',
        num: 800,
      },
      {
        w_bg: 'https://img1.baidu.com/it/u=1098577027,1368137597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        w_img: '/img/mate/wine.png',
        rate: [{
          origin: '法国',
          desc: '本周最佳评价',
          rate: '4.0',
          num: 300,
          price: 2565555
        }],
        w_name: '莫里斯绅士酒庄莫里斯绅士酒庄莫里莫里',
        w_origin: '法国-莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        rate: '4.0',
        num: 800,
      },
      {
        w_bg: 'https://img1.baidu.com/it/u=1098577027,1368137597&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
        w_img: '/img/mate/wine1.png',
        rate: [{
          origin: '法国',
          desc: '本周最佳评价',
          rate: '4.0',
          num: 300,
          price: 2565555
        }],
        w_name: '莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        w_origin: '法国-莫里斯绅士酒庄莫里斯绅士酒庄莫里斯绅',
        rate: '4.0',
        num: 300,
      },

    ],
    // 评价
    evaluateCurrent: 0,
    rateCardHeight: 0,
    // 评酒视频
    videoList: [],
    coverdisplay: 'none',   
    wineryTopList: [], //最佳酒款
    // 评分组件开始
    isStartRate: false,
    // 食物搭配
    foodList: [{
        logo: '/img/mate/13.png',
        name: '牛肉'
      },
      {
        logo: '/img/mate/14.png',
        name: '羊肉'
      },
      {
        logo: '/img/mate/15.png',
        name: '家禽'
      },
    ],
    // 醒酒时间
    DecanteList: [],
    // 推荐场合
    recommendList: [],
    isShowBlurb: false, //展开收缩
    locationMap: {
      latitude: 44.7,
      longitude: 8.03
    },
    articleEdit: {}, //编者注
    isOpen: false,
    isFold: false, // 是否显示'展开' 默认不显示
    // 口味特征
    wineCharacteristicsVO: {},
    // 风味描述
    flavorsWebVOS: [],
    // 食物搭配
    wineFoodsList: [],
    // 国旗
    countryCode: '',
    isWineBottle: false, //是否是红酒瓶
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options);
    let that = this
    let wineUuid = options.uuid
    // let wineryId = options.wineryId
    that.setData({
      scanImg: options.scanImg
    })
    that.detailInfo(wineUuid) //详情
    that.getDetailPageVideo(wineUuid) //视频教程
    that.getDecanterTime(wineUuid) //醒酒时间
    that.queryMyVintageCommentLog(wineUuid) //我的日志
    that.getVintageCommentInfo(wineUuid) //点评笔记
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
    let that = this
    that.navTabs = that.selectComponent(".navtabs");
    that.showDownApp = that.selectComponent(".downApp");

    // that.init()
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

  },
  // 详情页信息
  detailInfo(uuid) {
    let that = this
    let params = {
      wineUUID: uuid
    }
    getDetailInfo(params).then(res => {
      if (res.code == 200) {
        that.setData({
          detailInfo: res.data,
          wine_bg: res.data.background,
          "locationMap.latitude": res.data.wineryRegionLatitude ? res.data.wineryRegionLatitude : null,
          "locationMap.longitude": res.data.wineryRegionLongitude ? res.data.wineryRegionLongitude : null,
          wineCharacteristicsVO: res.data.wineCharacteristicsVO.avg ? res.data.wineCharacteristicsVO.avg : null,
          flavorsWebVOS: res.data.flavorsWebVOS ? res.data.flavorsWebVOS : null,
          wineFoodsList: res.data.wineFoodsList ? res.data.wineFoodsList : null,
          wineEditorNotes: res.data.wineEditorNotes ? res.data.wineEditorNotes : null,
          wineryId: res.data.wineryId
        })
        that.editCard()
        //获取锚点的节点信息
        that.slideAnchor();
        that.rateCardHeight()
        that.judgeWater()
        setTimeout(function () {
          that.editMarkdown()
        }, 100)
        console.log(res, 'wineUUID=139a3308-4617-11ec-8373-066b4187bf04');
        that.getWineryTop(that.data.wineryId) //最佳酒款
      } else {
        wx.showModal({
          title: '提示',
          content: res.message,
          showCancel: false,
          success(res) {
            if (res.confirm) {
              console.log('用户点击确定')
              wx.navigateBack({
                delta: 1
              })
            }
          }
        })

      }
    })
  },
  // 详情页视频
  getDetailPageVideo(uuid) {
    let params = {
      page: 1,
      pageSize: 3,
      wineUUID: uuid
    }
    getDetailPageVideo(params).then(res => {
      if (res.code == 200) {
        res.data.items.forEach(item =>{
          let url = item.coverURL.replace('http','https')
          // console.log(url,'url');
          item.coverURL = url
        })
        this.setData({
          videoList: [...res.data.items]
        })
      }
      // console.log(res.data.items, 'ddview');
      // console.log(this.data.videoList, 'videoList');
    })
  },
  // 醒酒时间
  getDecanterTime(uuid) {
    let params = {
      wineUUID: uuid
    }
    getDecanterTime(params).then(res => {
      if (res.code == 200) {
        // console.log(res.data.decanterTimeVotes, 'time');
        let time = res.data.decanterTimeVotes
        let sum = time.fourHours + time.oneHour + time.tenMinutes + time.thirtyMinutes + time.twoHours
        // console.log(sum, 'sium');
        this.setData({
          DecanteList: res.data.decanterTimeVotes,
          "DecanteList.sum": sum
        })
      }

    })
  },
  // 我的日志
  queryMyVintageCommentLog(uuid) {
    let params = {
      wineUUID: uuid
      // wineUUID: '1397b48c-4617-11ec-8373-066b4187bf04'
    }
    queryMyVintageCommentLog(params).then(res => {
      // console.log(res, 'queryMyVintageCommentLog');
      if (res.code == 200) {
        this.setData({
          logList: res.data,
        })
      }

    })
  },
  // 点评笔记
  getVintageCommentInfo(uuid) {
    let params = {
      // wineUUID: '1397b48c-4617-11ec-8373-066b4187bf04'
      wineUUID: uuid
    }
    getVintageCommentInfo(params).then(res => {
      // console.log(res, 'getVintageCommentInfo');
      if (res.code == 200) {
        // let str = `${res.data.referenceList.length > 0 ? '参考酒评' : ''},${res.data.friendList.length > 0 ? '朋友' : ''},${res.data.friendList.length > 0 ? '朋友' : ''}`
        // console.log(str,'Array.from(str)');
        // console.log(str.split(","),'Array.from(str)');
        this.setData({
          commentInfo: res.data,
          // evaluateHight: str.split(",")
        })
      }

    })
  },
  // 最佳酒款
  getWineryTop(wineryId) {
    let params = {
      // wineryId:'879'
      wineryId: wineryId
    }
    getWineryTop(params).then(res => {
      let that = this
      console.log(res, 'getWineryTop');
      if (res.code == 200) {
        res.data.items.forEach(item => {
          wx.getImageInfo({
            src: this.data.imgUrl + item.wineImg,
            success: function (res) {
              let isBottle = (res.width / res.height).toFixed(2) < 0.75 ? true : false;
              // console.log(isBottle, 'isBottle');
              item.isBottle = isBottle
            }
          })
        })
        this.setData({
          wineryTopList: [...res.data.items]
        })
        // console.log(this.data.wineryTopList, 'wineryTopList');
      }

    })
  },
  // 编者注计算markdown高度
  editMarkdown() {
    let that = this
    let query = wx.createSelectorQuery();
    query.select('.content').boundingClientRect();
    query.exec(function (rect) {
      // console.log(rect, 'hhhhhhhhhh');
      if (rect[0] === null) {
        that.setData({
          markdownHeight: 0
        })
        return
      } else if (rect[0].height > 320) { // 自定义一个边界高度
        that.setData({
          isFold: true,
          markdownHeight: rect[0].height - 320
        })
      }
    })
  },
  // 编者注点击展开或收起
  open() {
    this.setData({
      isOpen: this.data.isOpen ? false : true
    })
  },
  // 返回
  handleBackClick(e) {
    // wx.navigateTo({
    //   url: '/pages/scan/scan',
    // })
    const pages = getCurrentPages();
    console.log(pages, 'pagess');
    // if (pages.length >= 4) {
      wx.navigateBack({
        delta: 1
      })
    // } else {
    //   wx.redirectTo({
    //     url: '/pages/scan/scan',
    //   })
    // }
  },
  editCard() {
    let cod = `偶然相遇相貌英俊的青年水手傩送，傩送在翠翠的心里留下了深刻的印象。同时，傩送的兄长天保也喜欢上了翠翠，并提前托媒人提了亲。天保告诉傩送一年前他就爱上了翠翠，而傩送告诉天保他两年前就爱上了翠翠，天保听了后也吃了一惊。然而此时，当地的团总以新磨坊为陪嫁，想把女儿许配给傩送。而傩送宁肯继承一条破船也要与翠翠成婚。
    兄弟俩没有按照当地风俗以决斗论胜负，而是采用公平而浪漫的唱山歌的方式表达感情，让翠翠自己从中选择。傩送是唱歌好手，天保自知唱不过弟弟，心灰意冷，断然驾船远行做生意。
    碧溪边只听过一夜傩送的歌声，后来，歌却再没有响起来。老船夫忍不住去问，本以为是老大唱的，却得知：唱歌人是傩送，老大讲出实情后便去做生意。几天后老船夫听说老大坐水船出了事，淹死了……
    码头的船总顺顺因为儿子天保的死对老船夫变得冷淡。船总顺顺不愿意翠翠再做傩送的媳妇。老船夫只好郁闷地回到家，翠翠问他，他也没说起什么。夜里下了大雨，夹杂着吓人的雷声。第二天翠翠起来发现船已被冲走，屋后的白塔也冲塌了，翠翠去找爷爷却发现老人已在雷声将息时死去了…… 老军人杨马兵热心地前来陪伴翠翠，也以渡船为生，等待着傩送的归来。
    `
    // app.getText('https://www.vvadd.com/wxml_demo/demo.txt?v=2', res => {
    // let obj = app.towxml(this.data.wineEditorNotes[0].editorNote, 'markdown', {
    let obj = app.towxml(cod, 'markdown', {
      theme: 'light', //主题 dark 黑色，light白色，不填默认是light
      base: "www.xxx.com",
      events: { //为元素绑定的事件方法
        tap: e => {
          if (e.currentTarget.dataset.data && e.currentTarget.dataset.data.attr && (e.currentTarget.dataset.data.attr.class == "h2w__p")) {

          }
          console.log('tap', e);
        },
        change: e => {
          console.log('todo', e);
        }
      }
    });
    //更新解析数据
    // console.log(obj, 'ddd');
    this.setData({
      articleEdit: obj,
    });
    // console.log(obj,'obj');
    //   });
  },
  // 简介按钮高亮切换
  handleClick(e) {
    this.setData({
      blurbCurrent: e.target.dataset.blurbid
    })
  },
  // 评价按钮高亮切换
  evaluateBtnClick(e) {
    this.setData({
      evaluateCurrent: e.target.dataset.evaluateid
    })
  },
  // tab滑
  //获取锚点的节点信息
  slideAnchor(e) {
    let that = this
    new Promise(resolve => {
      let query = wx.createSelectorQuery().in(that);
      query.select('#blurbCard').boundingClientRect();
      query.select('#evaluateCard').boundingClientRect();
      query.select('#tasteCard').boundingClientRect();
      query.select('#likeCard').boundingClientRect();
      query.exec(function (res) {
        resolve(res);
      });
    }).then(res => {
      const windowHeight = wx.getSystemInfoSync().windowHeight;
      let heightArray = [],
        bottomArray = [],
        topArray = [];
      res.forEach(rect => {
        // console.log(rect, 'rrrrr');
        // console.log(that.data.markdownHeight);
        // console.log(rect.top,'rect.top');
        // let top = that.data.markdownHeight > 0 ? Math.floor(rect.top) - that.data.markdownHeight : Math.floor(rect.top)
        let top = Math.floor(rect.top)
        heightArray.push(top);
        bottomArray.push(Math.floor(rect.bottom));
        topArray.push(rect.height)
      });
      console.log(heightArray, 'heightArray');
      that.setData({
        scrollHeight: windowHeight,
        heightArray,
        bottomArray,
        topArray,
        scrollLock: true,
        isScroll: true,
      });
    });
  },
  // 获取ratecard的top
  rateCardHeight() {
    let that = this
    const query = wx.createSelectorQuery()
    query.select('#rateCard').boundingClientRect()
    query.exec(function (res) {
      that.setData({
        rateCardHeight: res[0].top
      })
    })
  },

  // 判断评价水球开始滚动
  judgeWater() {
    // 监听页面是否滚动到myElement标签
    let isStartRate
    let observer = wx.createIntersectionObserver(this)
    observer.relativeToViewport().observe('#evaluateCard', (res) => {
      if (res.intersectionRatio > 0) {
        isStartRate = true; //控制水球动画
      } else {
        isStartRate = false
      }
      this.setData({
        isStartRate: isStartRate
      })
    })

  },
  //点击锚点跳转
  jumpTo: function (e) {
    // console.log(e, 'eeeeeeeee');
    let that = this
    let target = e.detail.item.opt;
    let activeIndex = e.detail.item.type;
    let {
      topArray,
      scrollHeight,
      isHidden
    } = that.data;
    let numHeight = 0;
    //计算当前锚点是否能根据tab的点击至顶部
    for (var i = activeIndex; i < topArray.length; i++) {
      numHeight += topArray[i]
    }
    // console.log(numHeight, 'numHeight');
    // console.log(target,'target');
    // console.log(isHidden,'isHidden');
    isHidden = target === 'blurbCard' ? false : isHidden;
    // console.log(target, '33333');
    that.setData({
      toView: target,
      activeIndex,
      isHidden,
      scrollLock: numHeight >= scrollHeight ? true : false //如果界面出现锚点位置过低的情况防止tab的active回弹
    })
  },

  //scroll-view滚动监听事件
  toScroll: function (e) {
    let that = this
    const {
      heightArray,
      scrollLock,
      toView,
      rateCardHeight
    } = that.data;
    let scrollTop = e.detail.scrollTop;
    // console.log(scrollTop, 'scrollTop');
    // console.log(heightArray, 'heightArray');
    // console.log(rateCardHeight, 'rateCardHeight');
    let isHidden = scrollTop >= heightArray[0] ? true : false; //控制tab显示与隐藏
    let isShowNav = scrollTop >= rateCardHeight ? true : false; //控制topnav显示与隐藏

    if (that.data.isShowNav != isShowNav) {
      that.setData({
        isShowNav
      })
    }
    if (that.data.isHidden != isHidden) {
      that.setData({
        isHidden,
        toView: '',
        activeIndex: 0,
      })
    }
    //锚点高度足够时，滑动到相应的位置，tab的active发生相应的改变
    // console.log(scrollLock,'scrollLock');
    if (scrollLock) {
      let len = heightArray.length;
      let lastIndex = len - 1;
      let activeIndex = 0;
      // console.log(lastIndex,'lastIndex');
      // console.log(scrollTop,'scrollTop');
      for (let i = 0; i < len; i++) {
        if (scrollTop >= 0 && scrollTop < heightArray[0]) {
          // console.log(i,1111);
          activeIndex = 0;
        } else if (scrollTop >= heightArray[i] && scrollTop < heightArray[i + 1]) {
          // console.log(i,'iiiiii');
          activeIndex = i;
        } else if (scrollTop >= heightArray[lastIndex]) {
          activeIndex = lastIndex;
        }
      }
      that.setData({
        activeIndex
      })
    }
  },
  //停止滚动，防止锚点位置过低，界面滚动时无效的情况
  endScroll: function (e) {
    // console.log(e, 'end');
    this.setData({
      scrollLock: true
    });
  },
  // 扫码
  toScan() {
    wx.redirectTo({
      url: '/pages/scan/scan',
    })
  },
  // 发布动态
  toDownApp() {
    wx.navigateTo({
      url: '/pages/detail/downApp/downApp',
    })
  },
  //展开收缩
  listToggle: function () {
    this.setData({
      isShowBlurb: !this.data.isShowBlurb
    })
  },
  // 跳转详情
  toDetail(e) {
    // console.log(e, 'eeee');
    let uuid = e.currentTarget.dataset.item.wineUUID
    // let wineryId = e.currentTarget.dataset.item.wineryId
    const pageSize = getCurrentPages().length
    // console.log(pageSize,'pageSize')
    // getCurrentPages没到达3级就可以使用navigateTo跳转  
    if (pageSize !=3) {
      wx.navigateTo({
        url: `/pages/detail/index/index?uuid=${uuid}`,
      })
    } else {
      //有超过的话 使用redirectTo 关闭当前页进行跳转
      wx.redirectTo({
        url: `/pages/detail/index/index?uuid=${uuid}`,
      })
    }
    // wx.navigateTo({
    //   url: `/pages/detail/index/index?uuid=${uuid}`,
    // })
  },
  // 判断图片大小
  onImgLoad(event) {
    const {
      width,
      height
    } = event.detail
    // console.log(width, height);
    if (height > 500) {
      this.setData({
        isWineBottle: true
      })
    }
  },
})