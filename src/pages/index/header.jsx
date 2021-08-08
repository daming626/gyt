import { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import './header.less'

class Header extends Component{
  render() {
    return(
      <View>
        <AtSearchBar
          placeholder='搜索'
          className='search-input'
        />
      </View>
    )
  }
}

export default Header
