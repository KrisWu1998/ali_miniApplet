Component({
  mixins: [],
  data: {
    activePriceIndex: 0,
    priceTabs: [
      {
        label: '全部',
        min: 0,
        max: 99999
      },
      {
        label: '1-100',
        min: 1,
        max: 100
      },
      {
        label: '100-500',
        min: 100,
        max: 500
      },
      {
        label: '500-5000',
        min: 500,
        max: 5000
      },
      {
        label: '5000以上',
        min: 5000,
        max: 99999
      }
    ],

  },
  props: {
    shopList: {
      type: Array,
      default: () => ([])
    }
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {},
  onPullDownRefresh() {
    console.log('refsh')
    const that = this;
    console.log(this.ref)
  },
});
