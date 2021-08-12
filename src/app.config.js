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
  subPackages:[
    {
      "root": "pages/myRecord/",
      "pages": [
        'index',
        'personalMessage',
        // 'myRegistered',
        'patientManagement/index',
        'healthData',
        'record'
        // 'cost',
        // 'myCollection',
        // 'evaluation',
        // 'physical'
      ]
    }
  ]
}
