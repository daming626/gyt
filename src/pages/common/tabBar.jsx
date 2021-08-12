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
    //console.log(value);
    //console.log(this.props.tabBarCurrent)
    if(value!=this.props.tabBarCurrent){
      switch (value) {
        case 0:
          Taro.reLaunch({
            url: '/pages/index/index'
          });
          break;
        case 2:
          Taro.navigateTo({
            url: '/pages/myRecord/healthData'
          });
          break;
        case 3:
          Taro.navigateTo({
            url: '/pages/myRecord/index'
          });
          break;
        default:
          break;
      }
    }else{
      console.log("当前页")
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
                    { title: '首页',image: `${home}`, selectedImage: `${homeSelected}`},
                    { title: '今日热点',image:`${news}`, selectedImage:`${newsSelected}`},
                    { title: '健康档案',image: `${healthRecord}`, selectedImage:`${healthRecordSelected}`},
                    { title: '我的',image: `${mine}`, selectedImage: `${mineSelected}`}
                  ]}
                  onClick={this.handleClick.bind(this)}
                  current={this.props.tabBarCurrent}
        />
      </View>
    );
  }
}
export default TabBar;
