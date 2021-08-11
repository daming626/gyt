import { Component } from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'
import Taro from "@tarojs/taro";


import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  //转到体质辨识
  toPhysique() {
    Taro.navigateTo({url: '/pages/test/physique'})
  }

  //转到健康管理规范
  toHealth(){
    Taro.navigateTo({url: '/pages/test/health'})
  }
render() {
  return (
    <View className='at-row  index'>
      <View className='at-col at-col-6 index1'  onClick={this.toHealth.bind(this)}>
        <View className='home-mid-knowledge'>
          <text className='home-mid-know at-col--wrap'>中医健康管理知识宣教</text>
        </View>
      </View>
      <View className='at-col at-col-6 index3' onClick={this.toPhysique.bind(this)}>
        <View className='home-mid-identity'>
          <text className='home-phy-ident'>【体质辨识】</text>
          <text className='home-phy-ident-table'>判定量表</text>
        </View>
      </View>
    </View>
  );
}
}
export default Index
