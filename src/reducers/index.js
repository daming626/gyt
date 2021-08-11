import { combineReducers } from 'redux'
import counter from './counter'
import gytHospitalList from './gytHospitalList'

export default combineReducers({
  counter,
  gytHospitalList
})
