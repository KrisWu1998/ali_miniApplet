Component({
  mixins: [],
  data: {
    moneyNum: 1560,
    cardList: [
      'lightpink',
      'lightblue',
      'lightcoral',
      'orange',
      'lightsteelblue'
    ]
  },
  props: {
    userInfo: {
      type: Object,
      default: () => ({})
    }
  },
  didMount() {

  },
  didUpdate() {},
  didUnmount() {},
  methods: {},
});
