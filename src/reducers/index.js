import { combineReducers } from 'redux'
import counter from './counter'
import hospitalList from './hospitalList'

export default combineReducers({
  counter,
  hospitalList //预约挂号
})
