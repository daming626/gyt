import {Component} from 'react'
import Taro from '@tarojs/taro'
import {View} from '@tarojs/components'
import { AtTabBar }  from 'taro-ui'

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
        Taro.reLaunch({
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
        <AtTabBar
          fixed
          backgroundColor='#ffffff'
          color='#cccccc'
          selectedColor='#d40000'

          tabList={[
            { title: '首页'},
            { title: '今日热点'},
            { title: '健康档案'},
            { title: '我的' }
          ]}
          onClick={this.handleClick}
        />
      </View>
    )
  }
}

export default TabBar
