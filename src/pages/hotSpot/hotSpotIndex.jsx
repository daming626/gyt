import React, { Component } from 'react'
import Taro from "@tarojs/taro"
import { View } from '@tarojs/components'
// import Header from '../index/header'
import HotSpotIcon from './hotSpotIcon'
// import HotItem from "../common/hotItem";
// import HotMedicineItem from "./hotMedicineItem";
import TabBar from "../common/tabBar";
// import { APIBASEURL } from '../../constants/global'
import { AtRate, AtSearchBar } from 'taro-ui'
import '../index/header.less'
/**
 * 今日热点主页面
 */
class HotSpotIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      hotSpotList: [],
      // 中药常识
      hotSpotMedicineList: [],
      // 热点数据类型
      chooseDataType: '',
      pageNum: '',
      pageSize: 10,
      // 输入框关键字
      keyword: '',
      newPageDataType: ''
    }
  }

  render () {
    return (
      <View className='index'>
        <AtSearchBar
          actionName='搜索'
          placeholder="搜索今日热点"
          value={this.state.keyword}
          // onChange={this.change.bind(this)}
          // onActionClick={this.doSearch.bind(this)}
          className='search-input'
        />
        <HotSpotIcon parent={this} />
        <AtRate value={24/8}></AtRate>
        <TabBar tabBarCurrent={1} />
      </View>
    )
  }
}

export default HotSpotIndex
