// pages/home/home.js
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