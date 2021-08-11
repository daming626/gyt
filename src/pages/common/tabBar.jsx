import React, {Component} from 'react';
import { AtTabBar }  from 'taro-ui'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'

import home from '../../images/home.svg'
import homeSelected from '../../images/homeSelected.svg'
import news from '../../images/news.svg'
import newsSelected from '../../images/newsSelected.svg'
import healthRecord from '../../images/healthRecord.svg'
import healthRecordSelected from '../../images/healthRecordSelected.svg'
import mine from '../../images/mine.svg'
import mineSelected from '../../images/mineSelected.svg'



class TabBar extends Component {
  constructor () {
    super(...arguments);
  }

  componentDidMount() {
  }

  handleClick (value) {
    console.log("tabBar ====" +value);
    switch (value) {
      case 1:
        Taro.reLaunch({
          url: '/pages/hotSpot/hotSpotIndex'
        })
      case 3:
        Taro.reLaunch({
          url: '/pages/myRecord/index'
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <View>
        <View style={{'height':'4rem'}} />
        <AtTabBar fixed
                  backgroundColor='#ffffff'
                  color='#cccccc'
                  selectedColor='#d40000'
                  tabList={[
                    { title: '首页',image: {home}, selectedImage: {homeSelected}},
                    { title: '今日热点',image: {news}, selectedImage: {newsSelected}},
                    { title: '健康档案',image: {healthRecord}, selectedImage: {healthRecordSelected}},
                    { title: '我的',image: {mine}, selectedImage: {mineSelected}}
                  ]}
                  onClick={this.handleClick.bind(this)}
                  current={this.props.tabBarCurrent}
        />
      </View>
    );
  }
}
export default TabBar;
