// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myName: "Tcgogo",
    myAge: 18,
    list: ['a','b','c'],
    count: 0
  },
  handleBtnAdd() {
    this.setData({
      count: this.data.count +1
    });
  }

})