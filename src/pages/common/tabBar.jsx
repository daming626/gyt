import {Component} from 'react'
import Taro from '@tarojs/taro'
import {View} from '@tarojs/components'
import { AtTabBar }  from 'taro-ui'
import {BASEURLIMG} from '../../constants/global'

import home from '../../images/home.svg'
import homeSelected from '../../images/homeSelected.svg'
import news from '../../images/news.svg'
import newsSelected from '../../images/newsSelected.svg'
import healthRecord from '../../images/healthRecord.svg'
import healthRecordSelected from '../../images/healthRecordSelected.svg'
import mine from '../../images/mine.svg'
import mineSelected from '../../images/mineSelected.svg'

class TabBar extends Component{
  constructor () {
    super(...arguments);
  }
  handleClick (value) {
    console.log("tabBar ====" +value);
    if(value!=this.props.tabBarCurrent){
    switch (value) {
      case 0:
        Taro.reLaunch({
          url: '/pages/index/index'
        });
        break;
      case 1:
        Taro.navigateTo({
          url: `/pages/hotSpot/hotSpotIndex` //'/pages/physicalIdentity/healthKnowledge'
        });
        break;
      case 2:
        if(this.state.openid){
          const {itemcode} = this.state;
          Taro.navigateTo({
            url: `/pages/myRecord/healthData`
          });
        }else{
          Taro.navigateTo({url: '/pages/myRecord/wxLogin'})
        }
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

  render(){
    return(
      <View>
        <View style={{'height':'4rem'}} />
        <AtTabBar
          fixed
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
    )
  }
}

export default TabBar
