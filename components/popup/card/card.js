Component({
  mixins: [],
  data: {},
  props: {
    info: {},
    parentIndex: {
      type: Number,
      default: 0
    },
    childIndex: {
      type: Number,
      default: 0
    },
    onConfirm: () => {}
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleChangeStatus () {
      const { info, parentIndex, childIndex, onConfirm } = this.props;
      if (!info.isGet) {
        onConfirm && onConfirm(parentIndex, childIndex)
      }
    }
  },
});
