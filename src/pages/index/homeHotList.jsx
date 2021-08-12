import {Component} from 'react'
import Taro from '@tarojs/taro'
import {View} from '@tarojs/components'

import './homeHotList.less'

class HomeHotList extends Component{
  render(){
    return(
      <View>
          <View className='at-row at-col-12 home-hot-title-content'>
            <text className='home-hot-title'>今日热点</text>
            <View className='home-hot-more'>
              <text className='home-hot-more-title' >更多</text>
              <View className='at-icon at-icon-chevron-right' />
            </View>
          </View>
      </View>
    )
  }
}

export default HomeHotList