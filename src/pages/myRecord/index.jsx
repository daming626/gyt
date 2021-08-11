import React, { Component } from 'react'
import Taro, { reLaunch } from "@tarojs/taro"
import { View, Text, Image } from '@tarojs/components'
import { AtAvatar, AtIcon } from 'taro-ui';
import './index.less'
import TabBar from '../commen/tabBar';

import registered from '../../images/registered.svg'
import patient from '../../images/patient.svg'
import health from '../../images/health.svg'
import record from '../../images/record.svg'
import cost from '../../images/cost.svg'
import collection from '../../images/collection.svg'
import evaluation from '../../images/evaluation.svg'
import physical from '../../images/physical.svg'



class Index extends Component {

  constructor(props) {
    super();
  }

  componentDidMount() {
    //在本地获取用户itemcode
  }




  toPage(){
    console.log('1234567')
    Taro.navigateTo({url:`personalMessage`})
  }


  render() {
    return (
      <View className='at-row index'>
        {/* 用户个人信息 */}
        <View className='at-col at-col-12 head'>
          {/* 用户头像及名称 */}
          <View className='at-row box'>
            {/* 用户头像 */}
            <View className='at-col at-col-3 portrait' >
              <AtAvatar circle>
              </AtAvatar>
            </View>
            {/* 用户名称 */}
            <View className='at-col at-col-6 userNameText'>
              <Text onClick={this.toPage}>微信用户</Text>
            </View>
            {/* 右侧按钮 */}
            <View className='at-col at-col-3 rightIcon'>
              <AtIcon onClick={this.toPage} value='chevron-right' color='#FFF'></AtIcon>
            </View>
          </View>
        </View>
        {/* 用户相关记录 */}
        <View className='at-row headBar'>
          <View className='at-col  headBarBox'>
            <Image className='headBar-img' src={registered}></Image>
            <Text className='headBar-text'>我的挂号</Text>
          </View>
          <View className='at-col  headBarBox'>
            <Image className='headBar-img' src={patient}></Image>
            <Text className='headBar-text'>就诊人管理</Text>
          </View>
        </View>
        {/* 健康数据 */}
        <View className='at-col at-col-12 middle'>
          <View className='at-col middle_box'>
            <View className='middleHeadText'>
              <Text>健康数据</Text>
            </View>
            <View className='at-row items_box'>
              <View className='at-col  middle_items'>
                <Image className='middle-img' src={health}></Image>
                <View><Text className='middle-text'>健康档案</Text></View>
              </View>
              <View className='at-col  middle_items'>
                <Image className='middle-img' src={record}></Image>
                <View><Text className='middle-text'>电子病历</Text></View>
              </View>
              <View className='at-col  middle_items'>
                <Image className='middle-img' src={cost}></Image>
                <View><Text className='middle-text'>就诊费用</Text></View>
              </View>
            </View>
          </View>
        </View>

        {/* 我的服务 */}
        <View className='at-row myService'>
          <View className='myService_box' >
            <View className='myServiceHeadText'>
              <Text>我的服务</Text>
            </View>
            <View className='at-col at-col-12 myService_items_box'>
              <View className='myService_items'>
                <View className='at-col at-col-3 service_items_img'>
                  <Image className='service_items_img' src={collection}></Image></View>
                <View className='at-col at-col-6 service_items_text'>
                  <Text className='service_items_text'>我的收藏</Text></View>
                <View className='at-col at-col-3 service_items_icon'>
                  <AtIcon value='chevron-right' color='#a9a9a9'></AtIcon></View>
              </View>
              <View className='myService_items'>
                <View className='at-col at-col-3 service_items_img'>
                  <Image className='service_items_img' src={evaluation}></Image>
                </View>
                <View className='at-col at-col-6 service_items_text'>
                  <Text className='service_items_text'>效果评价</Text></View>
                <View className='at-col at-col-3 service_items_icon'>
                  <AtIcon value='chevron-right' color='#a9a9a9'></AtIcon></View>
              </View>
              <View className='myService_items'>
                <View className='at-col at-col-3 service_items_img'>
                  <Image className='service_items_img' src={physical}></Image></View>
                <View className='at-col at-col-6 service_items_text'>
                  <Text className='service_items_text'>体脂辨识记录</Text></View>
                <View className='at-col at-col-3 service_items_icon'>
                  <AtIcon value='chevron-right' color='#a9a9a9'></AtIcon></View>
              </View>
            </View>
          </View>
        </View>
        <TabBar></TabBar>
      </View>
    )
  }
}
export default Index


