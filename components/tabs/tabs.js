Component({
  mixins: [],
  data: {},
  props: {
    activeIndex: {
      type: Number,
      default: 0
    },
    tabs: {
      type: Array,
      default: () => ([])
    },
    onChange: () => {} // 修改activeIndex值
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleChangeActiveIndex (e) {
      const { onChange } = this.props;
      const index = e.target.dataset.tabsIndex;
      onChange(index);
    }
  },
});
