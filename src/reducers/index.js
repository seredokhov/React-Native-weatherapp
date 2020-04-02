import { combineReducers } from 'redux'
import SetLocationReducer from './SetLocationReducer'
import SetCountryList from './SetCountryList'

export default combineReducers({
	location: SetLocationReducer,
	countries: SetCountryList
})