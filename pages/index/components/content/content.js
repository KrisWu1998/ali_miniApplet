Component({
  mixins: [],
  data: {
    isShowPopup: false,
    userMoney: 32
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onChangePopupStatus (flag = true) {
      this.setData({isShowPopup: flag})
    },
    
    onAddUserMoney (num) {
      const { userMoney } = this.data;
      this.setData({
        userMoney: userMoney + num
      })
    }
  },
});
