import { Component } from 'react'
import { View,Image} from '@tarojs/components'
import PropTypes from "prop-types";
import { AtRate }  from 'taro-ui'
import Taro from '@tarojs/taro'
import './hotHospital.less'

class HotHospital extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  // viewHospitalDetail(itemcode, hospitalName, hospitalStar,booking) {
  //   Taro.navigateTo({
  //     url: `/pages/hospital/hospitalDetail?id=${itemcode}&name=${hospitalName}&star=${hospitalStar}&booking=${booking}`
  //   });
  // }

  render() {
    return (
        <View className='at-row hos-msg'>
          {
            this.props.list.map((hospital, index) => {
              return (
                <View className='at-col  pad' key={index} >
                  <Image className='hos-img' src={hospital.hosCover} />
                  <View className='at-col--wrap hos-img-text'>{hospital.hospitalName}</View>
                  <AtRate
                    className='hos-img-star'
                    value={hospital.hospitalSource}
                  />
                </View>
              )
            })
          }
        </View>
    )
  }
}
// HotHospital.defaultProps = {
//   list: []
// };
// HotHospital.propType = {
//   list: PropTypes.array.isRequired
// };
export default HotHospital