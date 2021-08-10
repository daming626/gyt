import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
import {BASEURL} from '../../constants/global'
import './hotSpotIcon.less'

/**
 * 今日热点头部
 */
class HotSpotIcon extends components{
  render(){
    return (
      <View className='at-row at-row--wrap hot-spot-icon'>
          <View className='at-article__p'>节气养生</View>
          <View className='at-article__p'>自我保健</View>
          <View className='at-article__p'>药膳食疗</View>
          <View className='at-article__p'>中药常识</View>
          <View className='at-article__p'>中医文化</View>
          <View className='at-article__p'>儿科健康</View>
        </View>
      </View>
    )
  }
}

export default HotSpotIcon
