import { createAction, createReducer } from '@reduxjs/toolkit'
//import produce from 'immer'
import { selectLogin, selectSignInForm } from '../selectors'


const initialState = {
    status: 'void',
    token: null,
    userIsConnected: false,
    error: null,
}

const loginFetching = createAction('login/fetching')
const loginResolved = createAction('login/resolved')
const loginRejected = createAction('login/rejected')
const connectUser = createAction('login/connectUser')
export const loginSignOut = createAction('login/signOut')


export function sendSignInFormData(e, navigate) {
    e.preventDefault()
    return async (dispatch, getState) => {
        const signInFormData = selectSignInForm(getState())
        dispatch(fetchOrUpdateLogin(signInFormData));
        const status = selectLogin(getState()).status
        if (status === 'rejected') {
            return <span>Something went wrong</span>
        }
        return navigate("/profile", {replace:true})
    }
}


//thunk creator
export function fetchOrUpdateLogin(signInFormData) {
    //return a thunk
    return async (dispatch, getState) => {
        const status = selectLogin(getState()).status
        // if request is pending or updating, stop the action to avoid double request
        if (status === 'pending' || status === 'updating') {
            return;
        }
        // else, launch the request
        dispatch(loginFetching());
        try {
            const response = await fetch(
                'http://localhost:3001/api/v1/user/login',
                {
                    // Adding method type
                    method: 'POST',
                    // Adding headers
                    headers: { 'Content-Type': 'application/json' },
                    // Adding body or contents to send
                    body: JSON.stringify(signInFormData)
                }
            );
            //console.log('response', response)
            const resJson = await response.json();
            console.log("resJson", await resJson)
            if (resJson.status === 200) {
                dispatch(loginResolved(resJson.body.token))
                dispatch(connectUser())
            } else {
                dispatch(loginRejected(resJson.message))
            }
        } catch (error) {
            dispatch(loginRejected(error))
        }
    }
}


export default createReducer(initialState, builder => builder
    .addCase(loginFetching, (draft) => {
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
        return;
    })
    .addCase(loginResolved, (draft, action) => {
        if(draft.status === 'pending' || draft.status === 'updating') {
            draft.token = action.payload
            draft.status = 'resolved'
            return
        }
        return;
    })
    .addCase(loginRejected, (draft, action) => {
        if (draft.status === 'pending' || draft.status === 'updating') {
            draft.error = action.payload
            draft.token = null
            draft.status = 'rejected'
            return
        }
        return;
    })
    .addCase(connectUser, (draft) => {
        draft.userIsConnected = !draft.userIsConnected
        return
    })
    .addCase(loginSignOut, (draft) => {
        draft.status = 'void'
        draft.token = null
        draft.userIsConnected = false
        draft.error = null
        return
    })
)