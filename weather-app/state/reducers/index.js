import { combineReducers } from 'redux'
import mainReducer from './mainReducer'
import shareReducer from '../../../shared/state/reducers/shareReducer'

export default combineReducers({
  mainReducer,
  shareReducer
})
