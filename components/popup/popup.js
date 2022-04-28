Component({
  mixins: [],
  data: {
    moneyNum: 3321,
    list: [
      {
        label: '新人专属',
        child: [
          {
            color: '#72D0A0',
            label: '收藏人人租机小程序',
            isGet: true,
            addMoney: 10
          },
          {
            color: 'yellow',
            label: '进行实名认证',
            isGet: false,
            addMoney: 30
          }
        ]
      },
      {
        label: '每天逛逛',
        child: [
          {
            color: '#72D0A0',
            label: '逛一逛活动也',
            isGet: false,
            addMoney: 10
          },
          {
            color: 'yellow',
            label: '逛一逛首页',
            isGet: false,
            addMoney: 30
          },
          {
            color: '#72D0A0',
            label: '逛一逛生活号首页',
            isGet: false,
            addMoney: 10
          },
          {
            color: 'yellow',
            label: '去分享',
            isGet: false,
            addMoney: 5
          }
        ]
      }
    ]
  },
  props: {
    isShow: false,
    onChangePopupStatus: () => {},
    onAddUserMoney: () => {}
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    // 关闭popup
    onHandleClose () {
      this.props.onChangePopupStatus(false);
    },
    // 修改是否已领取金币状态
    onSetGetMoneyStatus (parantIndex, childIndex) {
      const { list } = this.data;
      const info = list[parantIndex];
      const currentData = info.child[childIndex];
      currentData.isGet = true;
      // 替换数据
      info.child[childIndex] = currentData;
      list[parantIndex] = info;
      this.setData({ list });
      this.props.onAddUserMoney(currentData.addMoney);
      my.showToast({
        content: `恭喜获得${currentData.addMoney}个租币!`,
        duration: 1000,
      });
    }
  },
});
