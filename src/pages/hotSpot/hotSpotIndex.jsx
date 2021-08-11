/**
 * 热点详情
 */
import React, { Component } from 'react'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { View, RichText } from '@tarojs/components'
// import { AtRate }  from 'taro-ui'
// import Header from '../index/header'
// import TabBar from "../common/tabBar";
// import { APIBASEURL } from '../../constants/global'

class HotSpotIndex extends Component {
 constructor(){
   super()
 }
 
 componentDidMount() {
   const kk = getCurrentInstance().router.params.KK;
  console.log("HHHH"+kk);

 }
  render() {
    return(
      <View>KKKKK</View>
    )
  }
}

export default HotSpotIndex

