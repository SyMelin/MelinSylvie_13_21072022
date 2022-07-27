import { createAction } from '@reduxjs/toolkit'
import produce from 'immer'
import { selectLogin } from '../selectors'


const initialState = {
    status: 'void',
    token: null,
    userIsConnected: false,
    error: null,
}
/*
const FETCHING = 'login/fetching'
const RESOLVED = 'login/resolved'
const REJECTED = 'login/rejected'
const CONNECT_USER = 'login/connectUser'
const SIGN_OUT = 'login/signOut'

const loginFetching = () => ({ type: FETCHING })
const loginResolved = (data) => ({ type: RESOLVED, payload: data.token })
const loginRejected = (message) => ({ type: REJECTED, payload: message })
const connectUser = () => ({ type: CONNECT_USER })
export const loginSignOut = () => ({ type: SIGN_OUT})
*/

const loginFetching = createAction('login/fetching')
const loginResolved = createAction('login/resolved')
const loginRejected = createAction('login/rejected')
const connectUser = createAction('login/connectUser')
export const loginSignOut = createAction('login/signOut')

export async function fetchOrUpdateLogin(store, signInData) {
    const status = selectLogin(store.getState()).status
    // if request is pending or updating, stop the action to avoid double request
    if (status === 'pending' || status === 'updating') {
        return;
    }
    // else, launch the request
    store.dispatch(loginFetching());
    try {
        const response = await fetch(
            'http://localhost:3001/api/v1/user/login',
            {
                // Adding method type
                method: 'POST',
                // Adding headers
                headers: { 'Content-Type': 'application/json' },
                // Adding body or contents to send
                body: JSON.stringify(signInData)
            }
        );
        //console.log('response', response)
        const resJson = await response.json();
        console.log("resJson", await resJson)
        if (resJson.status === 200) {
            store.dispatch(loginResolved(resJson.body.token))
            store.dispatch(connectUser())
        } else {
            store.dispatch(loginRejected(resJson.message))
        }
    } catch (error) {
        store.dispatch(loginRejected(error))
    }
}

export default function loginReducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case loginFetching.toString(): {
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
            }
            case loginResolved.toString(): {
                if(draft.status === 'pending' || draft.status === 'updating') {
                    draft.token = action.payload
                    draft.status = 'resolved'
                    return
                }
                return;
            }
            case loginRejected.toString(): {
                if (draft.status === 'pending' || draft.status === 'updating') {
                    draft.error = action.payload
                    draft.token = null
                    draft.status = 'rejected'
                    return
                }
                return;
            }
            case connectUser.toString(): {
                draft.userIsConnected = !draft.userIsConnected
                return
            }
            case loginSignOut.toString(): {
                draft.status = 'void'
                draft.token = null
                draft.userIsConnected = false
                draft.error = null
                return
            }
            default:
                return 
        }
    })
}