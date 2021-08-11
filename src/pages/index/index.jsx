import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'

import Header from "./header";
import TabBar from "../commen/tabBar";
import HomeSwiper from "./homeSwiper";
import IndexIcon from "./indexIcon"
import HomeMidCon from './homeMidCon'
import HomeHotList from './homeHotList'

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

  render () {
    return (
      <View className='index'>
        <Header/>
        <HomeSwiper/>
        <IndexIcon/>
        <HomeMidCon/>
        <HomeHotList/>
        <TabBar/>
      </View>
    )
  }
}

export default Index

