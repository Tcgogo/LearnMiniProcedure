// pages/home/home.js
import request from "../../service/network"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myName: "Tcgogo",
    myAge: 18,
    list: ['a','b','c'],
    count: 0,
    imgUrl: ""
  },
  onLoad: function(option) {
    request({
      url: "http://152.136.185.210:8000/api/w6/recommend",
      methods: "get"
    }).then((res)=> {
      console.log(res)
    }, (err) => {
      console.log(err)
    })
  },
  handleBtnAdd() {
    this.setData({
      count: this.data.count +1
    });
  },
  chooseImg() {
    wx.chooseImage({
      success: (res) => {
        const path = res.tempFilePaths[0]
        this.setData({
          imgUrl: path
        })
      }
    })
  },
  handleIncrement(event) {
    console.log(event);
    this.setData({
      count: this.data.count +1
    });
  }

})