import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { GYT, YYREGISTRATION, SMART, BASEURLIMG } from '../../constants/global'
import Taro from '@tarojs/taro'

// import { BASEURLIMG } from '../../constants/global'
// import yiyuan from '../../images/医院.svg'
import guahao from '../../images/挂号.svg'
// import daozhen from '../../images/导诊.svg'

import './indexIcon.less'

class IndexIcon extends Component {
  toIndexIconPage(target) {
    console.log("LLLLLLLLLL" + target)
    switch (target) {
      case GYT:
        console.log("1111"+target);
        // this.props.getHospitals(1, '');
        setTimeout(function () {
          Taro.navigateTo({ url: '/pages/hospital/hospitalGyt' });
        }, 100);
        break
      case YYREGISTRATION:
        console.log("2222"+target);
        // this.props.search('', '', 1, 20)
        setTimeout(function () {
          Taro.navigateTo({ url: '/pages/yyRegistration/yyhospital/index' });
        }, 100);
        break;
      case SMART:
        console.log("3333"+target);
        if (this.state.itemcode != null) {
          Taro.navigateTo({
            url: '/pages/diagnosis/diagnosis'
          });
        } else {
          Taro.navigateTo({ url: '/pages/myRecord/wxLogin' })
        }
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <View className='at-row  icon-content'>
        <View className='at-col-4 icon-item' onClick={this.toIndexIconPage.bind(this, GYT)}>
          <Image className='icons-img' src={`${BASEURLIMG}医院.svg`} />
          <Text className='icon-title'>国医堂</Text>
        </View>
        <View className='at-col-4 icon-item' onClick={this.toIndexIconPage.bind(this, YYREGISTRATION)}>
          {/* <Image className='icons-img' src={`${BASEURLIMG}挂号.svg`}/> */}
          <Image className='icons-img' src={guahao} />
          <Text className='icon-title'>预约挂号</Text>
        </View>
        <View className='at-col-4 icon-item' onClick={this.toIndexIconPage.bind(this, SMART)}>
          <Image className='icons-img' src={`${BASEURLIMG}导诊.svg`} />
          <Text className='icon-title'>智能导诊</Text>
        </View>
      </View>
    )
  }
}

export default IndexIcon