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
  permission: {
    "scope.userLocation": {
      "desc": "你的位置信息将用于显示医院距离"
    }
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
        'personalMessage',
        //'myRegistered',
        'patientManagement/index',
        'healthData',
        'record'
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
