import { combineReducers } from 'redux'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
  user: userReducer,
  // banxicoData: banxicoReducer
})

export default rootReducer
