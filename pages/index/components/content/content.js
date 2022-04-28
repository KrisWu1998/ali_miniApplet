Component({
  mixins: [],
  data: {
    isShowPopup: false,
    userMoney: 32,
    positionVal: 'relative'
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onChangePopupStatus (flag = true) {
      // my.setCanPullDown({
      //   canPullDown:false
      // })
      this.setData({
        isShowPopup: flag,
        positionVal: flag ? 'fixed' : 'relative'
      })
    },
    
    onAddUserMoney (num) {
      const { userMoney } = this.data;
      this.setData({
        userMoney: userMoney + num
      })
    }
  },
});
