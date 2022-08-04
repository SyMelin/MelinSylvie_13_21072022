import { createAction, createReducer } from '@reduxjs/toolkit'
import { selectUser } from '../selectors'

const initialState = {
    status: 'void',
    data: null,
    error: null,
}


// Action creators
const userFetching = createAction('user/fetching')
const userResolved = createAction('user/resolved')
const userRejected = createAction('user/rejected')
export const userSignOut = createAction('user/signOut')


/**
 * Return a Thunk function that:
 * Launchs a Post fetch request to get the user's data from the API
 * 
 * @param { String } token
 */
export function fetchOrUpdateUser(token) {
    return async (dispatch, getState) => {
        const status = selectUser(getState()).status
        // if request is pending or updating, stop the action to avoid double request
        if (status === 'pending' || status === 'updating') {
            return
        }
        // else, launch the request
        dispatch(userFetching())
        try {
            const response = await fetch(
                'http://localhost:3001/api/v1/user/profile',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
            const resJson = await response.json()
            console.log("resJson", await resJson)
            if (resJson.status === 200) {
                dispatch(userResolved(resJson.body))
            } else {
                dispatch(userRejected(resJson.message))
            }
        } catch (error) {
            dispatch(userRejected(error))
        }
    }   
}


/**
 * Returns a Thunk function that:
 * Launchs a PUT fetch to modify the user's firstname and/or lastname
 * 
 * @param { String } token
 * @param { Object } formData
 */
export function fetchOrUpdateUserNameData(token, formData) {

    return async (dispatch, getState) => {
        const status = selectUser(getState()).status
        // if request is pending or updating, stop the action to avoid double request
        if (status === 'pending' || status === 'updating') {
            return
        }
        // else, launch the request
        dispatch(userFetching())
        try {
            const response = await fetch(
                'http://localhost:3001/api/v1/user/profile',
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(formData)
                }
            )
            const resJson = await response.json()
            console.log("resJson", await resJson)
            if (resJson.status === 200) {
                dispatch(userResolved(resJson.body))
            } else {
                dispatch(userRejected(resJson.message))
                alert("Error: Your name couldn't be updated")
            }
        } catch (error) {
            dispatch(userRejected(error))
            alert("Error: Your name couldn't be updated")
        }
    }    
}


// Reducer creator
export default createReducer(initialState, builder => builder
    .addCase(userFetching, (draft) => {
        if (draft.status === 'void') {
            draft.status = 'pending'
            return
        }
        if (draft.status === 'rejected') {
            draft.error = null
            draft.status = 'pending'
            return
        }
        if (draft.status === 'resolved') {
            draft.status = 'updating'
            return
        }
        return
    })
    .addCase(userResolved, (draft, action) => {
        if(draft.status === 'pending' || draft.status === 'updating') {
            draft.data = action.payload
            draft.status = 'resolved'
            return
        }
        return
    })
    .addCase(userRejected, (draft, action) => {
        if (draft.status === 'pending' || draft.status === 'updating') {
            draft.error = action.payload
            draft.data = null
            draft.status = 'rejected'
            return
        }
        return
    })
    .addCase(userSignOut, (draft) => {
        draft.status = 'void'
        draft.data = null
        draft.error = null
        return
    })
)