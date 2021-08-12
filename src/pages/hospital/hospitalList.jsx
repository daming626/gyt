import React, { Component } from 'react'
import { connect } from "react-redux";
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { AtAccordion, AtList, AtListItem, AtRate } from 'taro-ui';
import { BASEURL, HOSPITAL_BOOKING, HOSPITAL_SOURCE } from '../../constants/global'
import { getHospitalDistance } from "../../common/map_utils";
import { getHospitals } from '../../actions/gytHospitalList'
import Taro from '@tarojs/taro'
import './condition.less'
import './hospitalList.less'

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
      newHospitals: this.props.gytHospitalList.gytHospitals
    })
    this.getDis(this.props.gytHospitalList.gytHospitals)
  }

  /**
 * 比较
 * @param propertyName 小->大
 * @return {function(*, *): number}
 */
  compare(propertyName) {
    return function (object1, object2) {
      let value1 = object1[propertyName];
      let value2 = object2[propertyName];
      if (value1 > value2) {
        return 1;
      } else if (value1 < value2) {
        return - 1;
      } else {
        return 0;
      }
    }
  }
  /*从大到小*/
  compare2(propertyName) {
    return function (object1, object2) {
      let value1 = object1[propertyName];
      let value2 = object2[propertyName];
      if (value1 < value2) {
        return 1;
      } else if (value1 > value2) {
        return - 1;
      } else {
        return 0;
      }
    }
  }

  /**
 * 按评分或预约量排序
 * @param con
 */
  selectCondition(con) {
    console.log("我要选择了" + con)
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

  /**
 * 查看医院详情
 * @param itemcode 医院的code
 * @param hospitalName 医院名称
 * @param hospitalStar 医院评分
 */
  viewHospitalDetail(itemcode, hospitalName, hospitalStar, booking) {
    Taro.navigateTo({
      url: `/pages/hospital/hospitalDetail?id=${itemcode}&name=${hospitalName}&star=${hospitalStar}&booking=${booking}`
    });
  }

  /*
* 滚动屏幕触底
*/
  _onScrollToLower() {
    console.log("滚动开始加载")
    let _this = this
    new Promise(function (resolve, reject) {
      const { page } = _this.state
      console.log("!!" + page)
      _this.setState({
        page: page + 1
      })
      resolve()
    }).then(() => {
      const { page } = _this.state
      console.log("@@" + page)
      const { condition } = _this.state
      console.log("%%" + condition)
      this.props.getHospitals(page, condition)
      let old = _this.state.newHospitals
      const ids = old.map((item, index) => item.itemid)
      let list = [...old]
      if (_this.props.gytHospitalList.gytHospitals.length === 0) {
        Taro.showToast({
          title: '没有更多数据了',
          icon: 'none',
          duration: 1000
        }).then(r => {
        })
      }
      _this.props.gytHospitalList.gytHospitals.forEach((item, index) => {
        if (!ids.includes(item.itemid)) {
          list.push(item)
        }
      })
      _this.getDis(_this.props.gytHospitalList.gytHospitals);
      _this.setState({
        newHospitals: list.sort(this.compare2(_this.state.condition))
      })
    })
  }

  /**
 * 求距离
 * @param hosList
 */
  getDis(hosList) {
    hosList.forEach((item, index) => {
      console.log("1   " + item.hospitalPro)
      console.log("2   " + item.hospitalCity)
      console.log("3   " + item.hospitalCountry)
      console.log("4   " + item.hospitalAdress)
      let address = item.hospitalPro.concat(item.hospitalCity, item.hospitalCountry, item.hospitalAdress)
      try {
        getHospitalDistance(address, (distance) => {
          this.setDistance(item.itemid, distance)
        })
      } catch (e) {
        new Error('解析地址位置距离失败！')
      }
    })
  }

  /**
 * 设置距离
 * @param k --> key
 * @param v -->value
 */
  setDistance = (k, v) => {
    let { hosDisMap } = this.state
    hosDisMap.set(k, v)
    this.setState({
      hosDisMap: hosDisMap
    })
  }

  /*按距离排序 近->远 */
  sortByDis() {
    console.log("按距离了")
    let { hosDisMap } = this.state
    const list = this.state.newHospitals
    list.forEach((item, index) => {
      if (hosDisMap.get(item.itemid)) {
        item.distance = hosDisMap.get(item.itemid)
      }
    })
    this.setState({
      newHospitals: list.sort(this.compare('distance'))
    })
  }

  render() {
    const { hosDisMap } = this.state
    const scrollStyle = { height: '450px' }
    const scrollTop = 0
    const Threshold = 300
    return (
      <View>
        <View>
          <View className='condition-layout'>
            <View className='condition-item' >
              <View onClick={this.sortByDis.bind(this)}>
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
              let ds
              if (hosDisMap.get(hospital.itemid) != null) {
                ds = hosDisMap.get(hospital.itemid) / 1000 > 1 ? `${Number(hosDisMap.get(hospital.itemid) / 1000).toFixed(1)}km` : `${Number(hosDisMap.get(hospital.itemid)).toFixed(1)}m `
              } else {
                ds = ''
              }
              return (
                <View className='at-row  hosp-list' key={index} onClick={this.viewHospitalDetail.bind(this, hospital.itemcode, hospital.hospitalName, hospital.hospitalSource, hospital.hospitalBooking)}>
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
                      {
                        <View className='at-col at-col-4 hos-distant'>{ds}&nbsp;</View>
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