Page({
  onLoad(query) {
    // my.setCanPullDown({
    //   canPullDown:false
    // })
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
    my.setCanPullDown({
      canPullDown:false
    })
  },
  onHide() {
    // 页面隐藏
    my.setCanPullDown({
      canPullDown:true
    })
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: '运动步数',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
