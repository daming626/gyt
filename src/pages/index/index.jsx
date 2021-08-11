import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import Taro from '@tarojs/taro' 
import { GYT, YYREGISTRATION } from '../../constants/global'
import {search} from "../../actions/search";

import './index.less'

class Index extends Component {
  componentWillReceiveProps () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  render () {
    return (
      <View className='index'>
      </View>
    )
  }
}

export default Index
