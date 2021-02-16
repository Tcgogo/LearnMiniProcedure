// components/my-cpn/my-cpn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: "我是默认值",
      observer: function(newVal, oldValue) {
        console.log(newVal,oldValue)
      }
    }
  },
  externalClasses: ["titleclass"],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleIncrement() {
      this.triggerEvent('increment',{name: 'tc', age: 18},{});
    }
  }
})
