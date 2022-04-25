Page({
  data: {
    activeIndex: 0,
    tabs: [
      {
        title: '活动公告',
        number: 0,
      },
      {
        title: '订单消息',
        number: 2,
      },
    ],
    handleList: [
      {
        url: '/assets/img/delete.png',
        label: '删除已读'
      },
      {
        url: '/assets/img/clear.png',
        label: '一键已读'
      }
    ]
  },
  onLoad() {},
  tabsActiveChange (index) {
    this.setData({
      activeIndex: index
    })
  }
});
