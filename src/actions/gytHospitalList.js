import Taro from "@tarojs/taro";
import {APIBASEURL, GETHOSPITALS} from "../constants/global";

export const getHospitals = (page,condition) => {
  return (dispatch, getState) => {
    console.log("我要发送请求了")
    Taro.request({
      url: `${APIBASEURL}/gyt/hospitalList`,
      data:{
        pageNum:page,
        condition:condition
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      // dataType: 'json',
      // credentials: 'include',
      success: (res) => {
        console.log("我拿到数据了")
        dispatch(setGytHospitalList(res.data.data));
      },
      fail: function (errMsg) {
        console.log("我失败了")
        Taro.showToast({
          title: '服务器请求错误',
          icon: 'none',
          duration: 3000
        })
      }
    });
  }
}

export function setGytHospitalList (hospitals){
  console.log("TTTTTTTTTTTTT"+GETHOSPITALS);
  return {
    type: GETHOSPITALS,
    gytHospitals: hospitals
  }
}

