import {Component} from 'react'
import {View,Text,Image} from '@tarojs/components'
import Taro from '@tarojs/taro'

import yiyuan from '../../images/医院.svg'
import guahao from '../../images/挂号.svg'
import daozhen from '../../images/导诊.svg'

import './indexIcon.less'

class IndexIcon extends Component{
  toIndexIconPage(){
    console.log("LLLLLLLLLL")
    // this.props.history.push("./test")
    // Taro.reLaunch({
    //   url:'/pages/test/test'
    // })
  }
  render(){
    return(
      <View className='at-row  icon-content'>
        <View className='at-col-4 icon-item' onClick={this.toIndexIconPage}>
          <Image className='icons-img' src={yiyuan}/>
          <Text className='icon-title'>国医堂</Text>
        </View>
        <View className='at-col-4 icon-item'>
          <Image className='icons-img' src={guahao}/>
          <Text className='icon-title'>预约挂号</Text>
        </View>
        <View className='at-col-4 icon-item'>
          <Image className='icons-img' src={daozhen}/>
          <Text className='icon-title'>智能导诊</Text>
        </View>
      </View>
    )
  }
}

export default IndexIcon