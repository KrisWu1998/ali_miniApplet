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
    handleClose () {
      const { onConfirm } = this.props;
      onConfirm(false)
    }
  },
});
