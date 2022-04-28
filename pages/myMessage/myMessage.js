Page({
  data: {
    isShowDeleteModal: false, // 控制删除已读Modal
    isShowReadModal: false, // 控制一键已读Modal
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
    },
    globalData_info: {
      1: {
          id: 11,
          title: '活动通知',
          content: '恭喜获得20个租币，请查收!',
          time: '2020-03-23 14:30',
          isRead: false
      },
      2: {
          id: 21,
          title: '订单已取消',
          content: '订单已成功取消，感谢您的关注',
          time: '2020-03-23 14:30',
          isRead: false
      }
    }
  },

  onLoad() {
    // my.setCanPullDown({
    //   canPullDown:false
    // });
    // my.startPullDownRefresh()
    // my.startPullDownRefresh()
  },
  
  onPullDownRefresh() {
    console.log('refsh')
    const that = this;
    setTimeout(() => {
      my.stopPullDownRefresh({
        complete (res) {
          that._updateActiveData();
        }
      })
    }, 1000);
  },

  // 下拉刷新当前选项的消息列表
  _updateActiveData () {
    const { tabs, activeIndex, id, globalData, globalData_info } = this._getCurrentDataId();
    const infoList = JSON.parse(JSON.stringify(globalData_info[id]));
    const currentTabsNum = tabs[activeIndex].number
    globalData[id].push(infoList);
    tabs[activeIndex].number = currentTabsNum + 1;
    this.setData({
      globalData,
      tabs
    })
  },

  _onTabsActiveChange (index) {
    this.setData({
      activeIndex: index
    })
  },

  // 获取当前消息项id
  _getCurrentDataId () {
    const { tabs, activeIndex, globalData, globalData_info } = this.data;
    const currentData = tabs[activeIndex];
    const { id } = currentData;
    return {tabs, activeIndex, id, globalData, globalData_info};
  },

  //删除已读
  _clearMsgData () {
    my.showToast({
      content: `正在加载中...`,
      duration: 1000,
    });
    setTimeout(()=>{
      my.showToast({
        content: `操作成功!`,
        duration: 1000,
      });
      const {tabs, activeIndex, id, globalData} = this._getCurrentDataId();
      // 是否存在已读
      const hasCanRead = globalData[id].some(item=>{
        return item.isRead
      });
      if (!hasCanRead) {
        return my.showToast({
          content: `当前未有已读消息!`,
          duration: 1000,
        });
      }
      const newList = [];
      globalData[id].forEach(item=>{
        if (!item.isRead) {
          newList.push(item)
        }
      });
      globalData[id] = newList
      const params = {
        globalData
      };
      if (!params.globalData[id].length) {
        // 清空number消息提示标识
        tabs[activeIndex].number = 0;
        params.tabs = tabs;
      }
      this.setData({...params})
    }, 1000)
  },

  // 一键已读
  _handleReadAllMsgData () {
    my.showToast({
      content: `正在加载中...`,
      duration: 1000,
    });
    setTimeout(()=>{
      my.showToast({
        content: `操作成功!`,
        duration: 1000,
      });
      const {tabs, activeIndex, id, globalData} = this._getCurrentDataId();
      
      // 是否存在未读；
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
      console.log(globalData)
      this.setData({
        tabs,
        globalData
      })
    }, 1000)
  },

  // 已读前触发
  _handleRead (e) {
    const index = e.currentTarget.dataset.index;
    const dataName = index === 1 ? 'isShowReadModal' : 'isShowDeleteModal';
    this.setData({
      [dataName]: true
    });
  },

  // 一键已读弹窗按钮处理逻辑
  _onButtonClick_read (e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      isShowReadModal: false
    })
    if (!index) {
      this._handleReadAllMsgData();
    }
  },

    // 删除已读弹窗按钮处理逻辑
  _onButtonClick_delete (e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      isShowDeleteModal: false
    })
    if (!index) {
      this._clearMsgData();
    }
  },

  // 查看详情
  _onHandleDetail (currentData) {
    this.setData({
      isShowDetail: true,
      currentDetailInfo: currentData
    })
  },

  // 修改详情popup状态
  _onChangePopupStatus (flag = true) {
    this.setData({
      isShowDetail: flag
    })
  }
});
