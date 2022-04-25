Component({
  mixins: [],
  data: {
    list: [
      {
        title: '顶配 iPhone Xs 256...',
        tags: '免押金',
        money: 6.88,
        day: 30,
        url: '/assets/img/recommend/1.png'
      },
      {
        title: '顶配 iPhone Xs 256...',
        tags: '免押金',
        money: 6.88,
        day: 30,
        url: '/assets/img/recommend/1.png'
      },
      {
        title: '顶配 iPhone Xs 256...',
        tags: '免押金',
        money: 6.88,
        day: 30,
        url: '/assets/img/recommend/1.png'
      },
      {
        title: '顶配 iPhone Xs 256...',
        tags: '免押金',
        money: 6.88,
        day: 30,
        url: '/assets/img/recommend/1.png'
      }
    ],
    loading: false
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    handleMore () {
      console.log('handleMore')
      this.setData({loading: true})
      setTimeout(() => {
        const { list } = this.data;
        const info  = JSON.parse(JSON.stringify(list));
        list.push(...info);
        this.setData({list, loading: false})
      }, 1000);
      
    }
  },
});
