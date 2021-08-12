import {Component} from 'react'
import Taro from '@tarojs/taro'
import {View} from '@tarojs/components'
import { AtTabBar }  from 'taro-ui'
import {BASEURLIMG} from '../../constants/global'

import shouye from '../../images/首页.svg'
import redian from '../../images/信息.svg'
import dangan from '../../images/爱心.svg'
import wode from '../../images/我的.svg'

class TabBar extends Component{
  handleClick (value) {
    console.log("tabBar ====" +value);
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
            url: `/pages/myRecord/healthRecords?itemcode=${itemcode}`
          });
        }else{
          Taro.navigateTo({url: '/pages/myRecord/wxLogin'})
        }
        break;
      case 3:
        Taro.reLaunch({
          url: '/pages/myRecord/index'
        });
        break;
      default:
        break;
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
            // { title: '首页',image:`${BASEURLIMG}首页.svg`},
            // { title: '今日热点',image:`${BASEURLIMG}信息.svg`},
            // { title: '健康档案',image:`${BASEURLIMG}爱心.svg`},
            // { title: '我的',image:`${BASEURLIMG}我的.svg`}
            { title: '首页',image:`${shouye}`},
            { title: '今日热点',image:`${redian}`},
            { title: '健康档案',image:`${dangan}`},
            { title: '我的',image:`${wode}`}
          ]}
          onClick={this.handleClick}
        />
      </View>
    )
  }
}

export default TabBar
