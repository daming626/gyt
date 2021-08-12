export const getHospitalDistance = (hospAddress, getDistance) => {
  const QQMapWX = require('../libs/qqmap-wx-jssdk');
  var qqmapsdk = new QQMapWX({
    key: 'DA7BZ-NNZCP-WRBD2-LMFPW-TEHGK-TWBC7'
  });
  const setting = {
    skew: 0,
    rotate: 0,
    showLocation: false,
    showScale: false,
    subKey: '',
    layerStyle: 1,
    enableZoom: true,
    enableScroll: true,
    enableRotate: false,
    showCompass: false,
    enable3D: false,
    enableOverlooking: false,
    enableSatellite: false,
    enableTraffic: false,
  }
  //地址解析
  qqmapsdk.geocoder({
      address: hospAddress,
      success: function (res) {
        var res = res.result;
        var latitude = res.location.lat;
        var longitude = res.location.lng;
        qqmapsdk.calculateDistance({
            from: '',
            to: latitude + ',' + longitude,
            success: function (res) {
              var res = res.result;
              getDistance(res.elements[0].distance)
            },
            fail: function (error) {
              console.error(error);
            },
            complete: function (res) {
            }
          })
      },
      fail: function (error) {
        console.error(error);
      },
      complete: function () {
        console.log('');
      }
    })
}
