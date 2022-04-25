Component({
  mixins: [],
  data: {
    info: {
      message: 2,
    },
    addMoneyList: [
      {
        label: '支付成功',
        url: '/assets/img/addMoney.png'
      },
      {
        label: '支付成功',
        url: '/assets/img/addMoney.png'
      },
      {
        label: '运动步数',
        url: '/assets/img/addMoney.png'
      },
      {
        label: '新人专享',
        isNew: true,
        url: '/assets/img/addMoney_new.png'
      },
      {
        label: '运动步数',
        url: '/assets/img/addMoney.png'
      }
    ],
    stepNum: 2748
  },
  props: {
    userMoney: {
      type: Number,
      default: 0
    },
    onChangePopupStatus: () => {}
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    handlePopup () {
      this.props.onChangePopupStatus();
    },
    goMessagePage () {
      my.navigateTo({ url: "/pages/myMessage/myMessage" })
    }
  },
});
