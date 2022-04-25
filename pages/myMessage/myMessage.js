Page({
  data: {
    isShowModal: false, // 提示是否要已读
    isShowDetail: false, // 查看详情
    activeIndex: 0,
    currentDetailInfo: {}, // 当前查看的详情数据
    tabs: [
      {
        id: 1,
        title: '活动公告',
        number: 3,
      },
      {
        id: 2,
        title: '订单消息',
        number: 1,
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
    ],
    // 对应消息列表
    globalData: {
      1: [
        {
          id: 11,
          title: '活动通知',
          content: '恭喜获得20个租币，请查收!',
          time: '2020-03-23 14:30',
          isRead: false
        },
        {
          id: 12,
          title: '免费得iPhone11',
          content: '恭喜获得20个租币，请查收!',
          time: '2020-03-23 14:30',
          isRead: false
        },
        {
          id: 13,
          title: '节日赠租币',
          content: '人人租机祝你节日快乐，送88个租币位置送88个租币位置送88个租币位置',
          time: '2020-03-23 14:30',
          isRead: false
        }
      ],
      2: [
        {
          id: 21,
          title: '订单已取消',
          content: '订单已成功取消，感谢您的关注',
          time: '2020-03-23 14:30',
          isRead: false
        }
      ]
    },
    // 对应消息列表 每条数据显示的icon图标
    iconUrlList: {
      1: '/assets/img/message-tips.png',
      2: '/assets/img/message-book.png'
    }
  },
  onLoad() {
    my.setCanPullDown({
      canPullDown:false
    })
  },
  tabsActiveChange (index) {
    this.setData({
      activeIndex: index
    })
  },
  // 一键已读
  clearMsgData () {
    my.showToast({
      content: `正在加载中...`,
      duration: 1000,
    });
    setTimeout(()=>{
      my.showToast({
        content: `操作成功!`,
        duration: 1000,
      });
      const { tabs, globalData, activeIndex } = this.data;
      const currentData = tabs[activeIndex];
      const { id } = currentData;
      const hasNoRead = globalData[id].some(item=>{
        return !item.isRead;
      });
      if (!hasNoRead) {
        return my.showToast({
          content: `当前暂无未读信息!`,
          duration: 1000,
        });
      }
      // 清空number消息提示标识
      tabs[activeIndex].number = 0;
      // 清空消息列表
      globalData[id].forEach(item=>{
        item.isRead = true;
      })
      this.setData({
        tabs,
        globalData
      })
    }, 1000)
  },
  // 已读前触发
  beforeClear () {
    this.setData({
      isShowModal: true
    })
  },
  // 已读弹窗按钮处理逻辑
  onButtonClick (e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      isShowModal: false
    })
    if (!index) {
      this.clearMsgData();
    }
  },
  // 查看详情
  handleDetail (currentData) {
    this.setData({
      isShowDetail: true,
      currentDetailInfo: currentData
    })
  },
  // 修改详情popup状态
  changePopupStatus (flag = true) {
    this.setData({
      isShowDetail: flag
    })
  }
});
