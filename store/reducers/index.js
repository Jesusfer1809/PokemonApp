import { combineReducers } from "redux"
import { slideReducer } from "./slideReducer"
import { userReducer } from "./userReducer"

export default combineReducers({
  slide: slideReducer,
})
