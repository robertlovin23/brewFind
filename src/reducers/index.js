import {combineReducers} from 'redux'
import authReducer from './authReducer'
import breweryReducer from './breweryReducer'
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
    auth: authReducer,
    breweries: breweryReducer,
    form: formReducer
})