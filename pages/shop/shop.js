const shopData = require('../../utils/shopData.json');
Page({
  data: {
    userInfo: {
      nickName: '',
      avatar: ''
    },
    shopList: [
      {
        cover: '/assets/img/shop_goods.png',
        title: "顶配 iPhone Xs 256g超大电池",
        need_coin: 200, // 需要租币的量
        need_pay: 99, // 需要加多少r
        price: '12.8', // 原价
        total_num: '1440', // 已被兑换多少件
        tags: '包邮'
      },
      {
        cover: '/assets/img/shop_goods.png',
        title: "顶配 iPhone Xs 256g超大电池",
        need_coin: 200, // 需要租币的量
        need_pay: 99, // 需要加多少r
        price: '12.8', // 原价
        total_num: '1440', // 已被兑换多少件
        tags: ''
      },
      {
        cover: '/assets/img/shop_goods.png',
        title: "顶配 iPhone Xs 256g超大电池",
        need_coin: 200, // 需要租币的量
        need_pay: 99, // 需要加多少r
        price: '12.8', // 原价
        total_num: '1440', // 已被兑换多少件
        tags: '包邮'
      },
      {
        cover: '/assets/img/shop_goods.png',
        title: "顶配 iPhone Xs 256g超大电池",
        need_coin: 200, // 需要租币的量
        need_pay: 99, // 需要加多少r
        price: '12.8', // 原价
        total_num: '1440', // 已被兑换多少件
        tags: '包邮'
      },
    ],
    baseCoverUrl: '/assets/img/shop_goods.png'
  },
  onLoad() {
    // 打开授权
    my.getAuthCode({
      scopes: 'auth_user',
      success: (res) => {
        my.getAuthUserInfo({
          success: (userInfo) => {
            this.setData({
              userInfo
            })
          }
        })
      },
      fail:()=>{
        my.showToast({
          content: `该活动需要授权才能参与！`,
          duration: 2000,
          complete: () =>{
            my.navigateBack({
              delta: 1
            })
          }
        });
      }
    })
  },
  onShow() {

  },
  onHide () {

  },
  // 下拉加载
  onPullDownRefresh() {
    const that = this;
    setTimeout(() => {
      my.stopPullDownRefresh({
        complete () {
          const res = shopData;
          const { baseCoverUrl, shopList } = that.data;
          if (res.status === 0) {
            const data = res.data || {};
            const { list } = data;
            list.forEach(item=>item.cover = baseCoverUrl);
            shopList.push(...list);
            that.setData({
              shopList
            });
            my.showToast({
              content: `刷新成功!`,
              duration: 1000,
            });
          }
        }
      })
    }, 1000);
    console.log(shopData)
  },
});
