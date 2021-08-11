import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import Taro from '@tarojs/taro' 
import { GYT, YYREGISTRATION } from '../../constants/global'
import {search} from "../../actions/search";

import './index.less'

@connect(() => ({
}), (dispatch) => ({
    search (keyword, condition, pageNum, pageSize) {
        dispatch(search(keyword, condition, pageNum, pageSize))
    },
    getHospitals(page,condition) {
        dispatch(getHospitals(page,condition))
    }
}))
class Index extends Component {
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  toIndexIconPage(target) {
    switch (target) {
        case GYT:
            setTimeout(function () {
                Taro.navigateTo({url: '/pages/hospital/hospitalGyt'});
            }, 100);
            break
        case YYREGISTRATION:
            this.props.search('', '', 1, 20)
            setTimeout(function () {
                Taro.navigateTo({url: '/pages/yyRegistration/yyhospital/index'});
            }, 100);
            break;
        default:
            break;
    }
}

  render () {
    return (
      <View className='index'>
        <AtSearchBar
          placeholder="海哥一打五"
        />
        <View onClick={this.toIndexIconPage.bind(this, YYREGISTRATION)}>
        <Button>预约挂号</Button>
        </View>
        <View onClick={this.toIndexIconPage.bind(this, GYT)}>
        <Button>国医堂</Button>
        </View>
      </View>
    )
  }
}

export default Index