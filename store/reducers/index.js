import { combineReducers } from "redux"
import { slideReducer } from "./slideReducer"
import { userReducer } from "./userReducer"
import { urlReducer } from "./urlReducer"

export default combineReducers({
  slide: slideReducer,
  url: urlReducer,
})
