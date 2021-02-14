import { combineReducers } from '@reduxjs/toolkit'
import { authReducer } from './regStore/reducer'

export default combineReducers({
    auth: authReducer,
})
