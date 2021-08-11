import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'

import t1 from '../../images/jqys.svg'
import t2 from '../../images/zwbj.svg'
import t3 from '../../images/yssl.svg'
import t4 from '../../images/zycs.svg'
import t5 from '../../images/zywh.svg'
import t6 from '../../images/ekjk.svg'

// import {tu} from '../../constants/global'
import './hotSpotIcon.less'

/**
 * 今日热点头部
 */
class HotSpotIcon extends Component{
  render(){
    return (

    <View className='at-row at-row--wrap hot-spot-icon'>

      {/*节气养生*/}
      <View className='at-col at-col-4 hot-spot-icon-list'>
        <Image className='hot-spot-icon-list-image' src={t1} />
        <View className='at-article__p'>节气养生</View>
      </View>

      {/*自我保健*/}
      <View className='at-col at-col-4 hot-spot-icon-list'>
        <Image className='hot-spot-icon-list-image' src={t2} />
        <View className='at-article__p'>自我保健</View>
      </View>

      {/*药膳食疗*/}
      <View className='at-col at-col-4 hot-spot-icon-list'>
        <Image className='hot-spot-icon-list-image' src={t3} />
        <View className='at-article__p'>药膳食疗</View>
      </View>

      {/*中药常识*/}
      <View className='at-col at-col-4 hot-spot-icon-list'>
        <Image className='hot-spot-icon-list-image' src={t4} />
        <View className='at-article__p'>中药常识</View>
      </View>

      {/*中医文化*/}
      <View className='at-col at-col-4 hot-spot-icon-list'>
        <Image className='hot-spot-icon-list-image' src={t5} />
        <View className='at-article__p'>中医文化</View>
      </View>

      {/*儿科健康*/}
      <View className='at-col at-col-4 hot-spot-icon-list'>
        <Image className='hot-spot-icon-list-image' src={t6} />
        <View className='at-article__p'>儿科健康</View>
      </View>
      
      
      {/*/!*节气养生*!/*/}
      {/*<View className='at-col at-col-4 hot-spot-icon-list'>*/}
      {/*  <Image className='hot-spot-icon-list-image' src={`${tu}jqys.svg`} />*/}
      {/*  <View className='at-article__p'>节气养生</View>*/}
      {/*</View>*/}
      
      {/*/!*自我保健*!/*/}
      {/*<View className='at-col at-col-4 hot-spot-icon-list'>*/}
      {/*  <Image className='hot-spot-icon-list-image' src={`${tu}zwbj.svg`} />*/}
      {/*  <View className='at-article__p'>自我保健</View>*/}
      {/*</View>*/}
      
      {/*/!*药膳食疗*!/*/}
      {/*<View className='at-col at-col-4 hot-spot-icon-list'>*/}
      {/*  <Image className='hot-spot-icon-list-image' src={`${tu}yssl.svg`} />*/}
      {/*  <View className='at-article__p'>药膳食疗</View>*/}
      {/*</View>*/}
      
      {/*/!*中药常识*!/*/}
      {/*<View className='at-col at-col-4 hot-spot-icon-list'>*/}
      {/*  <Image className='hot-spot-icon-list-image' src={`${tu}zycs.svg`} />*/}
      {/*  <View className='at-article__p'>中药常识</View>*/}
      {/*</View>*/}
      
      {/*/!*中医文化*!/*/}
      {/*<View className='at-col at-col-4 hot-spot-icon-list'>*/}
      {/*  <Image className='hot-spot-icon-list-image' src={`${tu}zywh.svg`} />*/}
      {/*  <View className='at-article__p'>中医文化</View>*/}
      {/*</View>*/}
      
      {/*/!*儿科健康*!/*/}
      {/*<View className='at-col at-col-4 hot-spot-icon-list'>*/}
      {/*  <Image className='hot-spot-icon-list-image' src={`${tu}ekjk.svg`} />*/}
      {/*  <View className='at-article__p'>儿科健康</View>*/}
      {/*</View>*/}

    </View>
    )
  }
}

export default HotSpotIcon
