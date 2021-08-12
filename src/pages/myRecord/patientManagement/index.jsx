import React, { Component } from 'react'
import { View,Button} from '@tarojs/components'
import Taro from "@tarojs/taro";

import './index.less'
import PatientList from "./patientList";
import TabBar from "../../common/tabBar";


class Index extends Component {
  
  //跳转到填写病人信息的页面
  toWriteInfo(){
    Taro.navigateTo({url: ''})
  }

  render () {
    return (
      <View className='patient-mgr-h'>
        <PatientList></PatientList>
        <View className='patient-manager-btn'>
          <Button className='patient-add-btn' onClick={this.toWriteInfo.bind(this)}>添加就诊人</Button>
        </View>
        <TabBar tabBarCurrent={3} />
      </View>
    )
  }
}

export default Index



