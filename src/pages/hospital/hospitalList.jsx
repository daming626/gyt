import React, { Component } from 'react'
import { connect } from "react-redux";
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { AtAccordion, AtList, AtListItem, AtRate } from 'taro-ui';
import { BASEURL,  HOSPITAL_BOOKING, HOSPITAL_SOURCE } from '../../constants/global'
import { getHospitals } from '../../actions/gytHospitalList'
import Taro from '@tarojs/taro'
import './condition.less'
// import './hospitalList.less'

@connect(({ gytHospitalList }) => ({
  gytHospitalList
}), (dispatch) => ({
  getHospitals(page, condition) {
    dispatch(getHospitals(page, condition))
  }
}))
// const mapStateToProps = (state) => {
//     return {
//       gytHospitalList: state.gytHospitals
//     }
// }
// 
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//       getHospitals: (page,condition) => dispatch(getHospitals(page,condition))
//     }
// }

// @connect(mapStateToProps, mapDispatchToProps)
class HospitalList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newHospitals: [],
      open: false,
      condition: '',
      page: 1,
      hosDisMap: new Map()
    }
  }

  /*控制筛选按钮是否开启*/
  handleClick(value) {
    this.setState({
      open: value
    })
  }

  componentDidMount() {
    let _this = this
    console.log("0000000000000000000")
    _this.setState({
      // newHospitals: this.props.gytHospitalsList.gytHospitals
    })
    // this.getDis(this.props.gytHospitalsList.gytHospitals)
  }

  /**
 * 按评分或预约量排序
 * @param con
 */
  selectCondition(con) {
    console.log("我要选择了")
    let _this = this
    _this.setState({
      condition: con
    })
    this.props.getHospitals(1, con)
    setTimeout(function () {
      Taro.redirectTo({
        url: 'hospitalGyt'
      })
    }, 150)

    _this.handleClick(false)
  }

  /*
* 滚动屏幕触底
*/
  _onScrollToLower() {
    console.log("开始加载")
    let _this = this
    new Promise(function (resolve, reject) {
      const { page } = _this.state
      _this.setState({
        page: page + 1
      })
      resolve()
    }).then(() => {
      const { page } = _this.state
      const { condition } = _this.state
      this.props.getHospitals(page, condition)
      let old = _this.state.newHospitals
      const ids = old.map((item, index) => item.itemid)
      let list = [...old]
      if (_this.props.gytHospitalsList.gytHospitals.length === 0) {
        Taro.showToast({
          title: '没有更多数据了',
          icon: 'none',
          duration: 1000
        }).then(r => {
        })
      }
      _this.props.gytHospitalsList.gytHospitals.forEach((item, index) => {
        if (!ids.includes(item.itemid)) {
          list.push(item)
        }
      })
      // _this.getDis(_this.props.gytHospitalsList.gytHospitals);
      _this.setState({
        newHospitals: list.sort(this.compare2(_this.state.condition))
      })
    })
  }

  render() {
    // const {hosDisMap} = this.state
    const scrollStyle = { height: '450px' }
    const scrollTop = 0
    const Threshold = 300
    return (
      <View>
        <View>
          <View className='condition-layout'>
            <View className='condition-item' >
              {/* <View onClick={this.sortByDis.bind(this)}> */}
              <View>
                <text>按距离：</text>
                <Image src={BASEURL + 'u738.svg'} />
              </View>
            </View>
            <View>
              <View className='vertical-divider' />
            </View>
            <View className='condition-select'>
              <AtAccordion
                open={this.state.open}
                onClick={this.handleClick.bind(this)}
                title='筛选'
                className='selected-btn'
              >
                <AtList hasBorder={true}>
                  <AtListItem
                    title='评分'
                    thumb={BASEURL + 'score.png'}
                  onClick={this.selectCondition.bind(this, HOSPITAL_SOURCE)}
                  />
                  <AtListItem
                    title='预约量'
                    thumb={BASEURL + 'amount.png'}
                  onClick={this.selectCondition.bind(this, HOSPITAL_BOOKING)}
                  />
                </AtList>
              </AtAccordion>
            </View>
          </View>
          <View className='level-divider' />
        </View>
        <ScrollView
          className='hos-list'
          scrollY
          scrollWithAnimation
          scrollTop={scrollTop}
          style={scrollStyle}
          lowerThreshold={Threshold}
          upperThreshold={Threshold}
          onScrollToLower={this._onScrollToLower.bind(this)}
        >
          {
            this.state.newHospitals.map((hospital, index) => {
              // let ds
              // if (hosDisMap.get(hospital.itemid) != null) {
              //   ds = hosDisMap.get(hospital.itemid) / 1000 > 1 ? `${Number(hosDisMap.get(hospital.itemid) / 1000).toFixed(1)}km` : `${Number(hosDisMap.get(hospital.itemid)).toFixed(1)}m `
              // } else {
              //   ds = ''
              // }
              return (
                // <View className='at-row  hosp-list' key={index} onClick={this.viewHospitalDetail.bind(this, hospital.itemcode, hospital.hospitalName, hospital.hospitalSource, hospital.hospitalBooking)}>
                <View className='at-row  hosp-list' key={index} >
                  KKKKKKKKKKKKKKKKKKKKKK
                  <View className='at-col at-col-4 hospitalList-img-center'>
                    <Image className='hospitalList-img' src={hospital.hosCover} />
                  </View>
                  <View className='at-col at-col-8'>
                    <View className='hos-list-hospName'>
                      {hospital.hospitalName}
                    </View>
                    <View>
                      <AtRate size={15} className='hos-list-star-ab' value={hospital.hospitalSource} />
                    </View>
                    <View className='at-row'>
                      <View className='at-col at-col-8 hos-book-num'>今日预约量
                          {
                          hospital.hospitalBooking !== null ? (<View>&nbsp;{hospital.hospitalBooking}</View>) : (<View>&nbsp;0</View>)
                        }
                      </View>
                      {iiiiiiiiiiiiiiiii
                        // <View className='at-col at-col-4 hos-distant'>{ds}&nbsp;</View>
                      }
                    </View>
                  </View>
                </View>
              )
            })
          }
        </ScrollView>
      </View>
    )
  }
}

export default HospitalList