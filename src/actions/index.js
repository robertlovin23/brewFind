import {SIGN_IN,SIGN_OUT,LIST_BREWERIES,SHOW_BREWERY, CREATE_BREWERY, EDIT_BREWERY, DELETE_BREWERY} from './types'
import brewery from '../apis/brewery'
import history from '../components/history'

export const signIn = (userId) => {
    return{
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return{
        type: SIGN_OUT
    }
}
export const listBreweries = () => async (dispatch) => {
    const response = await brewery.get('/breweries')
    dispatch({
        type: LIST_BREWERIES,
        payload: response.data
    })
}
export const showBrewery = (id) => async (dispatch) => {
    const response = await brewery.get(`/breweries/${id}`)
    dispatch({
        type: SHOW_BREWERY,
        payload: response.data
    })
}
export const createBrewery = (formValues) => async (dispatch,getState) => {
    const { userId } = getState().auth;
    const response = await brewery.post('/breweries', {...formValues, userId})
    dispatch({
        type: CREATE_BREWERY,
        payload: response.data
    })
    history.push('/')
}

export const editBrewery = (id, formValues) => async (dispatch) => {
    const response = await brewery.patch(`/breweries/${id}`, formValues)
    dispatch({
        type: EDIT_BREWERY,
        payload: response.data
    })
    history.push('/')
}

export const deleteBrewery = (id) => async(dispatch) => {
    await brewery.delete(`/breweries/${id}`)
    dispatch({
        type: DELETE_BREWERY,
        payload: id
    })
    history.push('/')
}