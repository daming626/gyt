import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import {BASEURLIMG,APIBASEURL} from '../../constants/global'
import Taro from '@tarojs/taro'
import HotHospital from './hotHospital'
import HospitalList from './hospitalList'
import TabBar from '../common/tabBar'

import './hospitalGyt.less'

class HospitalGyt extends Component{
  constructor (props) {
    super(props);
    this.state = {
      twoHotHospital: [],
    }
  }

  componentDidMount () {
    /*按预约量取最多的两个医院*/
    Taro.request({
      url: `${APIBASEURL}/TopTwoHospitals`,
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      dataType: 'json',
      credentials: 'include',
      success: (res) => {
        this.setState({
          twoHotHospital: res.data.data
        })
      },
      fail: function (errMsg) {
        Taro.showToast({
          title: '服务器请求错误',
          icon: 'none',
          duration: 3000
        })
      }
    });
  }
  render(){
    const {twoHotHospital} = this.state;
    return(
      <View>
        <view className='header'>
          <view className='header-text'>医院</view>
        </view>
        <view className='hot-hos'>热门国医堂</view>
        <View className='bg'>
          <HotHospital list={twoHotHospital}/>
          <HospitalList />
          <TabBar/>
        </View>
      </View>
    )
  }
}

export default HospitalGyt
