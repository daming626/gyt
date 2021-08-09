import { Component } from 'react'
import { View, Text, Picker } from '@tarojs/components'
import TabBar from '../common/tabBar'
import { AtAvatar, AtButton, AtInput, AtList, AtListItem } from 'taro-ui'

import './personalMessage.less'
class personalMessage extends Component {

  constructor() {
    super(...arguments)
    this.state = {
      value: '',
      selector: ['居民身份证', '港澳台身份证'],
      selectorChecked: '请选择证件类型',
      dateSel: '2018-04-22'
    }
  }

  handleChange(value) {
    this.setState({
      value
    })
  }
  // 选择证件类型
  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }
  // 选择日期
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }


  render() {
    return (
      <View className='at—row main'>
        <View className='at-col at-col-12 box'>
          <View className='at-row options'>
            <View className='at-col at-col-4 label'><Text>头像</Text></View>
            <View className='at-col at-col-8 inputContent'><AtAvatar circle>头像</AtAvatar></View>
          </View>
          <View className='at-row options'>
            <View className='at-col at-col-4 label'><Text>姓名</Text></View>
            <View className='at-col at-col-8 inputContent'>
              <AtInput placeholder='请输入名字'
                       border={false}
              /></View>
          </View>
          <View className='at-row options'>
            <View className='at-col at-col-4 label'><Text>性别</Text></View>
            <View className='at-col at-col-8 inputContent'>
              <View className='at-row sexBox'>
                <View ><AtButton className='sexButton' onClick={this.handleClick1}>男</AtButton>
                </View>
                <View ><AtButton className='sexButton' onClick={this.handleClick2}>女</AtButton></View>
              </View>
            </View>
          </View>
          <View className='at-row options'>
            <View className='at-col at-col-4 label'><Text>身份证件类型</Text></View>
            <View className='at-col at-col-8 inputContent'>
              <Picker className='IdCardType' mode='selector'
                      border={false}
                      range={this.state.selector}
                      onChange={this.onChange}>
                <AtList>
                  <AtListItem
                    extraText={this.state.selectorChecked}
                  />
                </AtList>
              </Picker>
            </View>
          </View>
          <View className='at-row options'>
            <View className='at-col at-col-4 label'><Text>证件号码</Text></View>
            <View className='at-col at-col-8 inputContent'>
              <AtInput type='idcard'
                       placeholder='请输入证件号码'
                       border={false} /></View>
          </View>
          <View className='at-row options'>
            <View className='at-col at-col-4 label'><Text>出生日期</Text></View>
            <View className='at-col at-col-8 inputContent'>
              <Picker className='birth' mode='date' start='1900-01-01' onChange={this.onDateChange}>
                <AtList>
                  <AtListItem className='per-picker'
                              extraText={this.state.dateSel} />
                </AtList>
              </Picker></View>
          </View>
          <View className='at-row options'>
            <View className='at-col at-col-4 label'><Text>手机号码</Text></View>
            <View className='at-col at-col-8 inputContent'>
              <AtInput className='input-font'
                       type='number'
                       maxlength='11'
                       minlength={11}
                       placeholder='请输入手机号码'
                       border={false} />
            </View>
          </View>
        </View>
        <View className='at-row options'>
          <View><AtButton>保存</AtButton></View>
          <View><AtButton>其他分支改动</AtButton></View>
        </View>
        <TabBar />
      </View>
    )
  }
}

export default personalMessage

