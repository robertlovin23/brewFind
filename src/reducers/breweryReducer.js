import {LIST_BREWERIES,SHOW_BREWERY, CREATE_BREWERY, EDIT_BREWERY, DELETE_BREWERY} from '../actions/types'
import _ from 'lodash'

export default (state = {}, action) => {
    switch(action.type){
        case LIST_BREWERIES:
            return {...state, ..._.mapKeys(action.payload, 'id')}
        case SHOW_BREWERY:
            return {...state, [action.payload.id]: action.payload}
        case CREATE_BREWERY:
            return {...state, [action.payload.id]: action.payload}
        case EDIT_BREWERY:
            return {...state, [action.payload.id]: action.payload}
        case DELETE_BREWERY:
            return _.omit(state, action.payload)
        default:
            return state;
    }
}