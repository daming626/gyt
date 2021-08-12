import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'
import TabBar from '../common/tabBar'
import RecordList from './component/recordList'


class Record extends Component {
  
  constructor (props) {
    super(props)
    this.state = {
      patientsList: [],
      medicalList: [],
      patientCode: '',
      patientItemCode: '',
      defaultpatientName: '',
      idcardNo:''
    }
  }

  render() {
    let medicalList = this.state.medicalList;
    let defaultpatientName = this.state.defaultpatientName;

    return (
        <View className='at-row medical'>
          <RecordList parent={this} medicalList={medicalList} defaultpatientName={defaultpatientName} />
          <TabBar/>
        </View>
    );
  }
}

export default Record

