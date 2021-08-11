import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import Taro from '@tarojs/taro' 
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

  handleClicks(){
    console.log("KKKKKKKK")
    Taro.navigateTo({
      url:'../yyRegistration/yyhospital/index?kk=KKKKKPPPPPPPPPPPP'
    })
  }

  handleClick1(){
    console.log("11111")
    Taro.navigateTo({
      url:'../hospital/hospitalGyt?kk=KKKKKPPPPPPPPPPPP'
    })
  }


  render () {
    return (
      <View className='index'>
        <AtSearchBar
          placeholder="海哥一打五"
        />
        <View onClick={this.handleClicks}>
        <Button>预约挂号</Button>
        </View>
        <View onClick={this.handleClick1}>
        <Button>国医堂</Button>
        </View>
      </View>
    )
  }
}

export default Index