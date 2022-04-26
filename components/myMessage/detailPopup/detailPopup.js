Component({
  mixins: [],
  data: {},
  props: {
    isShow: {
      type: Boolean,
      default: true
    },
    info: {
      type: Object,
      default: () => ({})
    },
    onConfirm: () => {}
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onHandleClose () {
      const { onConfirm } = this.props;
      onConfirm(false)
    }
  },
});
