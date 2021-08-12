import React, { Component } from 'react'
import { View,Image} from '@tarojs/components'
import Taro from "@tarojs/taro";

import './patientList.less'

class PatientListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userCode:this.props.userCode,
    }
  }

  //改变radio
  onchangeRadio(indexNum){
      Taro.showModal({
        title: '提示',
        content: `设为默认就诊人！`,
        showCancel:false,
        success: (res) => {
          if (res.confirm) {
            this.props.parent.changeDefaultPatient(indexNum);
            Taro.request({
              url: `https://www.juntaitec.cn/api/patientManagerStatus`,
              data: {
                itemcode:this.props.patientItem.itemcode,
                userCode:this.state.userCode,
              },
              header: {
                'content-type': 'application/json'
              },
              method: 'PUT',
              dataType: 'json',
              credentials: 'include',
              success: (res) => {
                Taro.showToast({
                  title: '默认就诊人设置成功！',
                  icon: 'none',
                  duration: 3000
                })
              },
              fail: function (errMsg) {
                Taro.showToast({
                  title: '服务器请求错误',
                  icon: 'none',
                  duration: 3000
                })
              }
            });
          } else if (res.cancel) {
          }
        }
      })
  }

  //删除就诊人
  onDeletePatient(itemcode){
    let code=this.props.userCode
    Taro.showModal({
      title: '提示',
      content: `确定删除？`,
      success: function (res) {
        if (res.confirm) {
          Taro.request({
            url: `https://www.juntaitec.cn/api/patientManager`,
            data: {
              itemcode: itemcode,//就诊人code
              userCode:code,//用户code
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            method: 'DELETE',
            dataType: 'json',
            credentials: 'include',
            success: (res) => {
              Taro.showToast({
                title: '就诊人信息删除成功！',
                icon: 'none',
                duration: 3000
              });
              Taro.redirectTo({url: 'index'})
            },
            fail: function (errMsg) {
              Taro.showToast({
                title: '服务器请求错误',
                icon: 'none',
                duration: 3000
              })
            }
          });
        } else if (res.cancel) {
        }
      }
    })
  }

  //编辑就诊人
  onEditPatient(itemcode){
    Taro.navigateTo({url: `patientManagerEdit?itemcode=`+itemcode})
  }

  render () {
    let patientItem = this.props.patientItem;
    return (
      <View className='patient-main patient-manager-content-font-size'>
          <View className='patient-manager-content'>
            <View className='patient-item-distance'>
              <text className='patient-name'>{patientItem.patientName}</text>
              <text>18岁</text>
            </View>
            <View className='patient-item-distance'>
              <text>身份证号：</text>
              <text>{patientItem.idcardNo}</text>
            </View>
            <View className='patient-item-distance patient-address'>
              <text>住址：</text>
              <text>{patientItem.adressPro === patientItem.adressCity ? `${patientItem.adressPro}` : `${patientItem.adressPro + patientItem.adressCity}`}{patientItem.adressCountry}{patientItem.adress}</text>
            </View>
            <View className='at-row patient-item-distance icon-item patient-img-border'>
              <View className='at-col'>
                  <radio className='evaluate-msg-checkbox-radio'
                    color='#855713'
                    value='r1'
                    checked={this.props.checkedIndex === this.props.index}
                    onClick={this.onchangeRadio.bind(this, this.props.index)}
                  />
                <text>默认就诊人</text>
              </View>
              <View className='at-col at-col__offset-4' >
                <Image className='patient-operation-icon'  />
                <text onClick={this.onEditPatient.bind(this, patientItem.itemcode)}>编辑</text>
              </View>
              <View className='at-col'>
                <Image className='patient-operation-icon'  />
                <text onClick={this.onDeletePatient.bind(this, patientItem.itemcode)}>删除</text>
              </View>
            </View>
          </View>
        </View>
    )
  }
}
PatientListItem.defaultProps = {
  parent: null,
  patientItem: null,
  index: 0,
  checkedIndex: 0,
  userCode:''
}
export default PatientListItem

