export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/result/index',
    'pages/doQuestion/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'MbtiGuide🌱',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [{
      pagePath: 'pages/index/index',
      text: '首页',
      iconPath:"images/tabbar_my.png", // 激活前的图片
      selectedIconPath:"images/tabbar_my_on.png", // 激活后的图片
    }, {
      pagePath: 'pages/result/index',
      text: '个人',
      iconPath:"images/tabbar_my.png",
      selectedIconPath:"images/tabbar_my_on.png",

    }],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  }
})
