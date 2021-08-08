import {Component} from 'react'
import {View,Text,Swiper,SwiperItem,Image} from '@tarojs/components'
import k1 from '../../images/登山.svg'
import k2 from '../../images/山景.svg'
import k3 from '../../images/山石.svg'

import './homeSwiper'

class HomeSwiper extends Component{
  render(){
    return(
      <View>
        <View className='at-row'>
          <View className='at-col at-col-12'>
            <Swiper indicatorDots='true'
                    indicatorColor='#fff'
                    indicatorActiveColor='#999'
                    autoplay='true'>
              <SwiperItem key={1}>
                <Image className='swiper-image' src={k1}/>
              </SwiperItem>
              <SwiperItem key={2}>
                <Image className='swiper-image' src={k2} />
              </SwiperItem>
              <SwiperItem key={3}>
                <Image className='swiper-image' src={k3} />
              </SwiperItem>
            </Swiper>
          </View>
        </View>
      </View>
    )
  }
}

export default HomeSwiper
