import React, {Component} from 'react'
import Taro from '@tarojs/taro';
import {View, Text} from '@tarojs/components'
import PropTypes from 'prop-types'


class RecordList extends Component {

  constructor (props) {
    super(props)
    this.state = {
      open: false,
      patientDetailItemid:'',
      patient_Name:'',
      patientDetailItemCode:'',
      patientDetailDate:'',
      formNo:''
    }
  }

  /*点击查看按钮*/
  handleView=(event)=>{
    let patientDetailItemid = ''
    let formNo = ''

    this.setState({
      //电子病历表的itemid
      patientDetailItemid: event.target.dataset.itemId,
      formNo: event.target.dataset.formNo
    },()=>{
      patientDetailItemid = this.state.patientDetailItemid
      formNo = this.state.formNo
    })


    if(this.props.toTarget === MEDICALRECORD){
      // 电子病历
      Taro.navigateTo({
        url:`/pages/myRecord/elecMedRec/detail?formNo=${formNo}`
      })
    }else{
      Taro.navigateTo({
        url:`/pages/myRecord/medicalExpenses/detail?formNo=${formNo}`
      })
    }

  }

  handleClick (value) {
    this.setState({
      open: value
    })
  }


  render() {
    let medicalList = this.props.medicalList;
    return (
      <View className='at-row medical'>
        <View className='at-col at-col-12'>
          <View className='at-row medi-content'>
            <View className='at-row medi-name'>
              <Text className='per-name'>{'患者姓名:'}</Text>
              <Text className='per-name-2'>{this.props.defaultpatientName}</Text>
            </View>
          </View>
          <View className='at-row medi-content'>
            <View className='at-row thead'>
              <View className='at-col at-col thead'>
                <Text className='per-name-3'>机构名称</Text>
              </View>
              <View className='at-col at-col thead'>
                <Text className='per-name-3'>就诊日期</Text>
              </View>
              <View className='at-col at-col thead'>
                <Text className='per-name-3'>操作</Text>
              </View>
            </View>
          </View>
          {/* {
            (medicalList || []).map((medicalItem, index)=>{
              return (
                <View className='at-row medi-content'>
                  <View className={index % 2 === 0 ? 'at-row tbody' : 'at-row tbody2'}>
                    <View className={index % 2 === 0 ? 'at-col at-col-4 tbody' : 'at-col at-col-3 tbody2'}>
                      <Text className='per-name-4 orgstyle'>{medicalItem.visitOrgName}</Text>
                    </View>
                    <View className={index % 2 === 0 ? 'at-col at-col-4 tbody' : 'at-col at-col-5 tbody2'}>
                      <Text className='per-name-4'>{moment(medicalItem.visitDtime).format('YYYY-MM-DD')}</Text>
                    </View>
                    <View className={index % 2 === 0 ? 'at-col at-col-4 tbody' : 'at-col at-col-4 tbody2'}>
                      <Text className='look'
                            data-formNo={medicalItem.outpatFormNo}
                            onClick={this.handleView.bind(this)}>查看</Text>
                    </View>
                  </View>
                </View>
              )
            })
          } */}
        </View>
      </View>
    );
  }
}

RecordList.defaultProp={
  parent: null,
  toTarget: ''
}

RecordList.propTypes = {
  medicalList: PropTypes.array.isRequired,
  defaultpatientName: PropTypes.string.isRequired
}

export default RecordList
