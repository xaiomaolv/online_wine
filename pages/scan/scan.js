// pages/scan/scan.js
import {
  scanWine,
  appletLogin, //登录
} from '../../api/api'
import {
  scanWineInfo, //扫酒记录
} from '../../api/detail.js'
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    img_height: 20,
    // 导航栏高度
    navHeight: app.globalData.navHeight,
    // 导航栏距离顶部距离
    navTop: app.globalData.navTop,
    // 胶囊的高度
    navObj: app.globalData.navObj,
    // 胶囊宽度+距右距离
    navObjWid: app.globalData.navObjWid,
    sShowCamera: false,
    isFirst: true, //是否是第一次进入
    imgUrl: app.globalData.imgUrl,
    imglist: [
      // {
      //   rate: 2.1,
      //   price: 1000,
      //   img: 'https://pic.aigexing.net/uploads/7/1253/2862058340/93209845123/476260524.jpg'
      // },
      // {
      //   rate: '',
      //   price: '',
      //   img: 'https://pic.aigexing.net/uploads/8/1253/2536336073/92605875135/41199282.jpg'
      // },
      // {
      //   rate: 4.1,
      //   price: 1000,
      //   img: 'https://pic.aigexing.net/uploads/7/1253/2862058340/93209845123/476260524.jpg'
      // },
      // {
      //   rate: '',
      //   price: 1000,
      //   img: 'https://pic.aigexing.net/uploads/8/1253/2536336073/92605875135/41199282.jpg'
      // },
    ],
    isShowCamera: false, //相机授权
    startY: 0, // 下滑删除开始坐标
    delIndex: -1, // 当前滑动的元素下标位置
    index: -1,
    Ystart: 0,
    isAnimation: false,
    aniMation: {},
    slideTop: 0,
    // 弹窗
    imgInfo: {},
    cameraImg: '', //canvas转图片
    isShowImage: false,
    identifying: 0,
    system: '', //设备信息
    isToken:app.getToken()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.ctx = wx.createCameraContext(); //初始化 创建 camera 上下文 CameraContext 对象。
    // 获取设备信息
    wx.getSystemInfo({
      success: res => {
        let sys = res.system
        let system = sys.indexOf("iOS") != -1 ? 'iOS' : 'Android'
        // console.log(system, 'system');
        this.setData({
          system: system
        })
      }
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
    this.scanResult = this.selectComponent(".scanResult");
    this.scanWineInfo()
    this.queryPhoto()
    this.authCamera()
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  // 相机授权
  authCamera() {
    var that = this
    wx.authorize({
      scope: 'scope.camera',
      success: function (res) {
        that.setData({
          isShowCamera: true,
        })
      },
      fail: function (res) {
        // console.log("" + res);
        wx.showModal({
          title: '请求授权您的摄像头',
          content: '如需正常使用此小程序功能，请您按确定并在设置页面授权用户信息',
          confirmText: '确定',
          success: res => {
            if (res.confirm) {
              wx.openSetting({
                success: function (res) {
                  // console.log('成功');
                  // console.log(res);
                  if (res.authSetting['scope.camera']) { //设置允许获取摄像头
                    console.log('设置允许获取摄像头')
                    wx.showToast({
                      title: '授权成功',
                      icon: 'success',
                      duration: 1000
                    })
                    that.setData({
                      isShowCamera: true,
                    })

                  } else { //不允许
                    wx.showToast({
                      title: '授权失败',
                      icon: 'none',
                      duration: 1000
                    })
                    that.setData({
                      isShowCamera: false,
                    })
                  }
                }
              })
            } else { //取消
              wx.showToast({
                title: '授权失败',
                icon: 'none',
                duration: 1000
              })
              that.setData({
                isShowCamera: false,
              })
            }
          }
        })

      }
    })
  },
  //获取节点信息
  queryPhoto(e) {
    let that = this
    setTimeout(() => {
      let that = this
      new Promise(resolve => {
        let query = wx.createSelectorQuery().in(that);
        query.select('#cemeraHeight').boundingClientRect();
        query.select('#takephoto').boundingClientRect();
        query.exec(function (res) {
          resolve(res);
        });
      }).then(res => {
        // console.log(res, '234567');
        const windowHeight = wx.getSystemInfoSync().windowHeight;
        let heightArray = [],
          topArray = [];
        res.forEach(rect => {
          heightArray.push(Math.floor(rect.top));
          topArray.push(rect.height)
        });
        that.setData({
          heightArray,
          topArray,
        });
      });
    }, 300)
  },
  /**
   * 图片截取
   * 自定义计算位置  截取自己需要的那一部分图片
   */
  generate(imgSrc) {
    let that = this
    wx.createSelectorQuery()
      .select("#cover_image")
      .boundingClientRect((rect) => {
        wx.getImageInfo({
          src: imgSrc,
          success: function (res) {
            that.canvas = wx.createCanvasContext("myCanvas", that) //画布
            //过渡页面中，图片的路径坐标和大小
            that.canvas.drawImage(imgSrc, 0, 0, wx.getSystemInfoSync().windowWidth, wx.getSystemInfoSync().windowHeight * 0.75)
            // that.canvas.setStrokeStyle('black')
            // that.canvas.strokeRect(rect.left, rect.top, rect.width, rect.height)
            that.canvas.draw()
            // setTimeout(function () {
            wx.canvasToTempFilePath({ //裁剪对参数
              canvasId: "myCanvas",
              x: rect.left, //画布x轴起点
              y: rect.top - wx.getSystemInfoSync().windowHeight * 0.066, //画布y轴起点
              width: rect.width, //画布宽度
              height: rect.height, //画布高度
              destWidth: rect.width, //输出图片宽度
              destHeight: rect.height, //输出图片高度
              success: function (res) {
                let imgInfo = {
                  tempFilePaths: res.tempFilePath
                }
                //清除画布上在该矩形区域内的内容。
                // that.canvas.clearRect(0, 0, that.data.width, that.data.height)
                // that.canvas.drawImage(res.tempFilePath, image_x, image_y, image_width, image_height)
                that.canvas.draw()
                // console.log(res.tempFilePath, 'ewsssss');
                that.setData({
                  canvasWidth: rect.width,
                  canvasHight: rect.height,
                  cameraImg: res.tempFilePath,
                  imgInfo: imgInfo
                })
                that.scanResult.showScanResult()
                that.scanWine()
              }
            })
            // }, 1000);
          }
        })
      })
      .exec();
  },
  /**
   * 拍照
   */
  takePhotoAction: function () {
    var that = this
    // 相机授权
    // that.authCamera()
    if (that.data.isShowCamera == true) {
      that.ctx.takePhoto({
        quality: 'high', //高质量
        success: (res) => {
          that.generate(res.tempImagePath);
          // console.log(res, 'takePhotoAction');
        },
      })
    }
  },
  // 图库选择
  chooseImg() {
    let that = this
    wx.chooseImage({
      count: 1,
      sourceType: ['album'], //只打开相册
      success: function (res) {
        console.log(res.tempFilePaths[0], 'chooseImage');
        let imgInfo = {
          tempFilePaths: res.tempFilePaths[0]
        }
        that.setData({
          cameraImg: res.tempFilePaths[0],
          imgInfo: imgInfo
        })
        that.scanResult.showScanResult()
        that.scanWine()
        // wx.redirectTo({
        //   url: '../../pages/scan/scanResult/scanResult?imgInfo=' + JSON.stringify(imgInfo)
        // })
      }
    })
  },
  // 查看教程
  seeTutorial() {
    wx.navigateTo({
      url: './videoView/videoView',
    })
    // console.log('教程');
  },
  // 跳转详情
  toDetail(e) {
    let uuid = e.currentTarget.dataset.item.wineUUID
    let scanImg = e.currentTarget.dataset.item.img
    // let uuid = "139a3308-4617-11ec-8373-066b4187bf04"
    wx.redirectTo({
      url: `../detail/index/index?uuid=${uuid}&scanImg=${scanImg}`
    })
  },
  // 返回
  handleBackClick() {
    wx.reLaunch({
      url: '../home/home',
    })
  },
  // 创建一个上滑的动画 基于px单位
  createAnimationPY(changeY, index) {
    let imglist = this.data.imglist;
    if (imglist.length != 0) {
      let ani = wx.createAnimation({
        delay: 0,
        timingFunction: 'linear',
        duration: 45
      }).translateY(changeY).step().export()
      // imglist[this.data.delIndex].aniMation = ani
      imglist[index].aniMation = ani
      this.setData({
        imglist,
        isAnimation: true
      })
    }
  },
  // //获取扫酒记录节点信息
  queryDel(e) {
    let that = this
    new Promise(resolve => {
      let query = wx.createSelectorQuery().in(that);
      query.select('#delBox').boundingClientRect();
      query.exec(function (res) {
        resolve(res);
      });
    }).then(res => {
      const windowHeight = wx.getSystemInfoSync().windowHeight;
      let bottomArray = [],
        heightArray = [];
      res.forEach(rect => {
        // console.log(rect, 'delBox');
        heightArray.push(Math.floor(rect.top));
        bottomArray.push(Math.floor(rect.bottom));
      });
      that.setData({
        slideTop: bottomArray[0] - heightArray[0]
      });
    });
  },
  //手指触摸动作开始 记录起点y坐标
  touchstart(e) {
    // console.log(e,'eeee');
    let index = e.currentTarget.dataset.index
    if (this.data.isAnimation) {
      this.createAnimationPY(0, index)
    }
    this.setData({
      delIndex: e.currentTarget.dataset.index,
      Ystart: e.changedTouches[0].pageY
    });
  },
  touchmove(e) {
    let index = e.currentTarget.dataset.index
    //  从下往上的移动距离 = 触摸初始位置y坐标 - 当前位置的y坐标
    let move = this.data.Ystart - e.changedTouches[0].pageY;
    // 当从下往上位移大于move的时候 调用方法创建动画
    if (move > 0) {
      this.createAnimationPY(-move, index)
    } else {
      // 当从下往上滑动的时候将让卡片复位
      this.createAnimationPY(0, index)
    }
  },
  touchend(e) {
    let index = e.currentTarget.dataset.index
    //  从下往上的移动距离 = 触摸初始位置y坐标 - 当前位置的y坐标
    let move = this.data.Ystart - e.changedTouches[0].pageY;
    // console.log(move, 'end-move');
    // console.log(this.data.slideTop, 'this.data.slideTop');
    // 当位移大于图片高度时候删除
    if (move > this.data.slideTop) {
      this.createAnimationPY(-move, index)
      let imglist = this.data.imglist
      imglist.splice(this.data.delIndex, 1);
      // console.log('删除第：' + this.data.delIndex + 1);
      this.setData({
        imglist: imglist
      })
      // console.log(this.data.imglist, 'imglist');
    } else {
      // 复位
      this.createAnimationPY(0, index)
    }
  },
  // 扫酒记录
  scanWineInfo() {
    scanWineInfo().then(res => {
      // console.log(res, 'resswine');
      if (res.code == 200) {
        if (res.data.items.length > 0) {
          this.setData({
            imglist: res.data.items,
            isFirst: false
          })
        }
      }

      this.queryDel()
    })
  },
  scanWine() {
    let that = this
    // 将图片上传到服务器
    // console.log(that.data.imgInfo.tempFilePaths, 'im');
    wx.uploadFile({
      url: app.globalData.scanWine, // 上传的服务器地址
      filePath: that.data.imgInfo.tempFilePaths, // 图片的本地地址
      header: {
        "content-type": "multipart/form-data",
        "token" : app.getToken() 
      },
      name: 'file', // 服务端用于接收文件的参数名
      success: function (res) {
        // console.log(res, 'dddd');
        // console.log(JSON.parse(res.data), 'res');
        let data = JSON.parse(res.data)
        // 上传成功
        if (data.code == 200) {
          // console.log(data.data.items, 'iems');
          that.setData({
            identifying: 1,
            wineInfo: data.data.items[0].wine
          })
        }
        if (data.code == 302) {
          that.setData({
            identifying: 2,
          })
        }
      }
    })
  },
  // 关闭识别结果弹窗
  handleCancel() {
    this.setData({
      cameraImg: ''
    })
  },
  // 识别结果 --再试一次
  handleAgain() {
    // this.setData({
    //   identifying: 0
    // })
    // this.scanWine()
    this.setData({
      cameraImg: ''
    })
    this.scanResult.hideScanResult()
  },
  // 识别结果弹窗 --跳转详情
  handleToDetail(){
    // console.log('ttttt');
    let uuid = this.data.wineInfo.uuid
    // let scanImg = e.currentTarget.dataset.item.img
      // let uuid = "139a3308-4617-11ec-8373-066b4187bf04"
      wx.redirectTo({
        url: '../detail/index/index?uuid=' + uuid,
      })
  },
  // 识别结果弹窗 --授权
  handleAuthPhone(e) {
    getApp().login().then(loginRes => {
      // console.log(loginRes.code, 'loginRes.code');
      this.setData({
        code: loginRes.code
      })
    })
    // console.log(e,'sssssss');
    var that = this
      wx.getUserInfo({
        desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          var ency = res.encryptedData;
          var iv = res.iv;
          if (iv == null || ency == null) {
            wx.showToast({
              title: "授权失败,请重新授权！",
              icon: 'none',
            })
            return false
          } else {
            var userInfo = {
              iv: iv,
              encryptedData: ency,
              code: app.getCode()
            }
          }
          if (e.detail.detail.iv == null || e.detail.detail.encryptedData == null) {
            wx.showToast({
              title: "授权失败,请重新授权！",
              icon: 'none',
            })
            return false
          } else {
            let userPhone = {
              iv: e.detail.detail.iv,
              encryptedData: e.detail.detail.encryptedData,
              code: that.data.code
            }
            let params = {
              userInfo: userInfo,
              userPhone: userPhone,
              system: that.data.system
            }
            console.log(params, 'params');
            appletLogin(params).then(res => {
              if (res.code == 200) {
                // console.log(res, 'appletLogin');
                wx.setStorageSync('token', res.data)
                let uuid = that.data.wineInfo.uuid
                // let uuid = "139a3308-4617-11ec-8373-066b4187bf04"
                wx.redirectTo({
                  url: '../detail/index/index?uuid=' + uuid,
                })
              }
            })
          }
        },
      })
  },
})