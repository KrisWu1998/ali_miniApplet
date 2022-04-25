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
    changePopupStatus (flag = true) {
      this.setData({isShowPopup: flag})
    },
    addUserMoney (num) {
      const { userMoney } = this.data;
      this.setData({
        userMoney: userMoney + num
      })
    }
  },
});
