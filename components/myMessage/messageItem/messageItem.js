Component({
  mixins: [],
  data: {},
  props: {
    iconUrl: {
      type: String,
      default: ''
    },
    info: {
      type: Object,
      default: () => ({})
    },
    onHandleDetail: () => {}
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    confirm () {
      const { info, onHandleDetail } = this.props;
      onHandleDetail(info);
    }
  },
});
