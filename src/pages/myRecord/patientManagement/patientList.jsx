import React, { Component } from 'react'
import { View} from '@tarojs/components'
import Taro from "@tarojs/taro";

import './patientList.less'

import PatientListItem from "./patientListItem";


class PatientList extends Component {
  
  constructor () {
    super(...arguments)
    this.state = {
      patients:[],
      userCode:'',
      checkedIndex:'',
      openid:''
    }
  }
  componentWillMount(){
    Taro.request({
      url: `https://www.juntaitec.cn/api/getUserDetail?openid=ojPDl5MvtN7rWhLHwAzDUcs0CdyQ`,
      data:{
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      credentials: 'include',
      success: (res) => {
        Taro.setStorage({
          key: '__itemcode__',
          data: res.data.data.itemcode
        })
        console.log('用户itemcode:',res.data.data.itemcode)
      },
      fail: function (errMsg) {
        Taro.showToast({
          title: '服务器请求错误',
          icon: 'none',
          duration: 3000
        })
      }
    });
  }

  componentDidMount() {
    
    Taro.getStorage({
      key:'__itemcode__',
      success:(resp)=> {
        this.setState({
          userCode:resp.data
        })
        Taro.request({
          url: `https://www.juntaitec.cn/api/patientManager/${resp.data}`,
          header: {
            'content-type': 'application/json' // 默认值
          },
          method: 'GET',
          dataType: 'json',
          credentials: 'include',
          success: (res) => {
            this.setState({
              patients: res.data.data
            })
            //判断是否为默认就诊人,将索引传回子组件
            this.state.patients.forEach((patient,index) => {
              if (patient.defaultPatient === '1'){
                this.setState({
                  checkedIndex: index
                })
              }
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
      }
    });
  }

  changeDefaultPatient = (indexNum)=>{
    this.setState({
      checkedIndex: indexNum
    })
  }

  render () {
    let patients=this.state.patients
    return (
      <View className='patient-main patient-manager-content-font-size'>
        {
          patients.map((patientItem,indexNum)=>{
            return(
              <PatientListItem key={indexNum} userCode={this.state.userCode} parent={this} patientItem={patientItem} index={indexNum} checkedIndex={this.state.checkedIndex} />
              )
          })
        }
        </View>
    )
  }
}
export default PatientList

