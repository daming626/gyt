import React, { Component } from 'react'
import Taro from "@tarojs/taro"
import { View } from '@tarojs/components'
import Header from '../index/header'
import HotSpotIcon from './hotSpotIcon'
import HotItem from "../common/hotItem";
import HotMedicineItem from "./hotMedicineItem";
import TabBar from "../common/tabBar";
import { APIBASEURL } from '../../constants/global'
import { AtSearchBar } from 'taro-ui'
import '../index/header.less'
/**
 * 今日热点主页面
 */
class HotSpotIndex extends Component {
  render () {
    return (
      <View className='index'>
        <AtSearchBar
          actionName='搜索'
          placeholder="搜索今日热点"
          className='search-input'
        />
        <HotSpotIcon parent={this} />
        <TabBar tabBarCurrent={1} />
      </View>
    )
  }
}

export default HotSpotIndex
