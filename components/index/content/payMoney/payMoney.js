Component({
  mixins: [],
  data: {
    list: [
      '/assets/img/payMoney/shop.png',
      '/assets/img/payMoney/task.png',
      '/assets/img/payMoney/money.png',
      '/assets/img/payMoney/shop.png',
      '/assets/img/payMoney/task.png',
      '/assets/img/payMoney/money.png',
    ],
    scrollTop: 0
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {},
   scrollToTop(e) {
    console.log(e);
    this.setData({
      scrollTop: 0,
    });
  },
});
