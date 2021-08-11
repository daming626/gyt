export default {
  pages: [
    'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  config :{
    enablePullDownRefresh: true,
    backgroundTextStyle: "dark",
    onReachBottomDistance: 50
  },
  subPackages:[
    {
      "root": "pages/myRecord/",
      "pages": [
        'index',
        'personalMessage'
        // 'myRegistered',
        // 'patientManagement',
        // 'healthData',
        // 'record',
        // 'cost',
        // 'myCollection',
        // 'evaluation',
        // 'physical'
      ]
    },
    {
      "root": "pages/hotSpot/",
      "pages": [
        'hotSpotIndex'
      ]
    },
    {
      "root": "pages/hospital/",
      "pages": [
        'hospitalGyt'
      ]
    }
  ]
}
