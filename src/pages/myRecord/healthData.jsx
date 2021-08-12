import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'
import TabBar from '../common/tabBar'
import './healthData.less'

class HealthData extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      itemcode: '',
      xseIsOpen: false,
      xsejtIsOpen: false,
      chjkIsOpen: false,
      tnbIsOpen: false,
      gxyIsOpen: false,
      zlnIsOpen: false,
      /*个人基本信息*/
      baseObj: {
      },
      /*新生儿基本信息*/
      childrenObj: null,
      /*产后42天健康检査信息*/
      postpartumObj: null,
      /*2型糖尿病患者随访信息*/
      diabetesObj: null,
      /*高血压患者随访信息*/
      hyperObj: null,
      /*老年人中医药健康管理服务*/
      medChiManageObj: null
    }
  }

  render() {
    return (
      <View className='base-color'>
        <View className='text-radio'>
        <text className='title-ins'>个人基本信息</text>
        <View className='input-pad input-pad-bot'>
          <View className='at-row input-pad-bottom'><View className='at-col at-col-1' /><View className='at-col at-col-2'>姓名：</View><View className='at-col at-col-8 input-pad-list'>{this.state.baseObj!=null?this.state.baseObj.name:''}</View><View className='at-col at-col-1' /></View>
          <View className='at-row input-pad-bottom'><View className='at-col at-col-1' /><View className='at-col at-col-2'>性别：</View><View className='at-col at-col-8 input-pad-list'>{this.state.baseObj!=null?this.state.baseObj.sex:''}</View><View className='at-col at-col-1' /></View>
          <View className='at-row input-pad-bottom'><View className='at-col at-col-1' /><View className='at-col at-col-2'>出生日期：</View><View className='at-col at-col-8 input-pad-list'>{this.state.baseObj==null?'':this.state.baseObj.birthDate}</View><View className='at-col at-col-1' /></View>
          <View className='at-row input-pad-bottom'><View className='at-col at-col-1' /><View className='at-col at-col-2'>证件类型：</View><View className='at-col at-col-8 input-pad-list'>{this.state.baseObj!=null?this.state.baseObj.idType:''}</View><View className='at-col at-col-1' /></View>
          <View className='at-row input-pad-bottom'><View className='at-col at-col-1' /><View className='at-col at-col-2'>证件号码：</View><View className='at-col at-col-8 input-pad-list'>{this.state.baseObj!=null?this.state.baseObj.idNo:''}</View><View className='at-col at-col-1' /></View>
          <View className='at-row input-pad-bottom'><View className='at-col at-col-1' /><View className='at-col at-col-2'>文化程度：</View><View className='at-col at-col-8 input-pad-list'>{this.state.baseObj!=null?this.state.baseObj.education:''}</View><View className='at-col at-col-1' /></View>
          <View className='at-row input-pad-bottom'><View className='at-col at-col-1' /><View className='at-col at-col-2'>户口性质：</View><View className='at-col at-col-8 input-pad-list'>{this.state.baseObj!=null?this.state.baseObj.accoProperty:''}</View><View className='at-col at-col-1' /></View>
          <View className='at-row input-pad-bottom'><View className='at-col at-col-1' /><View className='at-col at-col-2'>婚姻状况：</View><View className='at-col at-col-8 input-pad-list'>{this.state.baseObj!=null?this.state.baseObj.marriage:''}</View><View className='at-col at-col-1' /></View>
          <View className='at-row input-pad-bottom'><View className='at-col at-col-1' /><View className='at-col at-col-2'>民族：</View><View className='at-col at-col-8 input-pad-list'>{this.state.baseObj!=null?this.state.baseObj.nationality:''}</View><View className='at-col at-col-1' /></View>
          <View className='at-row input-pad-bottom'><View className='at-col at-col-1' /><View className='at-col at-col-2'>移动号码：</View><View className='at-col at-col-8 input-pad-list'>{this.state.baseObj!=null?this.state.baseObj.mobilePhone:''}</View><View className='at-col at-col-1' /></View>
          <View className='at-row input-pad-bottom'><View className='at-col at-col-1' /><View className='at-col at-col-2'>出生地：</View><View className='at-col at-col-8 input-pad-list'>{this.state.baseObj!=null?this.state.baseObj.birthPlace:''}</View><View className='at-col at-col-1' /></View>
          <View className='at-row input-pad-bottom'><View className='at-col at-col-1' /><View className='at-col at-col-2'>既往患病史：</View><View className='at-col at-col-8 input-pad-list at-col--wrap'>{this.state.baseObj!=null?this.state.baseObj.pastSicknessType:''}</View><View className='at-col at-col-1' /></View>
          <View className='at-row input-pad-bottom'><View className='at-col at-col-1' /><View className='at-col at-col-2'>家族患病史：</View><View className='at-col at-col-8 input-pad-list at-col--wrap'>{this.state.baseObj!=null?this.state.baseObj.familyDisease:''}</View><View className='at-col at-col-1' /></View>
          <View className='at-row input-pad-bottom'><View className='at-col at-col-1' /><View className='at-col at-col-2'>患者与本人关系：</View><View className='at-col at-col-8 input-pad-list'>{this.state.baseObj!=null?this.state.baseObj.patientRelation:''}</View><View className='at-col at-col-1' /></View>
        </View>
        </View>
        <TabBar tabBarCurrent={2}></TabBar>
      </View>
    )
  }
}

export default HealthData