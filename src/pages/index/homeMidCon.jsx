import React, { Component } from 'react';
import Taro from "@tarojs/taro";
import { View } from '@tarojs/components'

import './homeMidCon.less'

class HomeMidCon extends Component {

  //转到体质辨识
  toPhyIdentity() {
    Taro.navigateTo({ url: '/pages/physicalIdentity/welcomePhysical' })
  }

  //转到健康管理规范
  toHealthKnowledge() {
    Taro.navigateTo({ url: '/pages/physicalIdentity/healthKnowledge' })
  }
  render() {
    return (
      <View className='at-row  home-mid-content'>
        <View className='at-col at-col-6 home-mid-img1' onClick={this.toHealthKnowledge.bind(this)}>
          <View className='home-mid-knowledge'>
            <text className='home-mid-know at-col--wrap'>中医健康管理知识宣教</text>
          </View>
        </View>
        <View className='at-col at-col-6 home-mid-img2' onClick={this.toPhyIdentity.bind(this)}>
          <View className='home-mid-identity'>
            <text className='home-phy-ident'>【体质辨识】</text>
            <text className='home-phy-ident-table'>判定量表</text>
          </View>
        </View>
      </View>
    );
  }
}

export default HomeMidCon;
