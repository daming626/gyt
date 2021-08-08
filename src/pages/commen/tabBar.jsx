import {Component} from 'react'
import Taro from '@tarojs/taro'
import {View} from '@tarojs/components'
import { AtTabBar }  from 'taro-ui'

class TabBar extends Component{
  handleClick(){
    console.log("KKKKKK")
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
            { title: '首页' },
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
