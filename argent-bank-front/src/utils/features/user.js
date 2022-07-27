import { createAction, createReducer } from '@reduxjs/toolkit'
import produce from 'immer'
import { selectUser } from '../selectors'

const initialState = {
    status: 'void',
    data: null,
    error: null,
}

const userFetching = createAction('user/fetching')
const userResolved = createAction('user/resolved')
const userRejected = createAction('user/rejected')
export const usernameUpdated = createAction('user/usernameUpdated')
export const userSignOut = createAction('user/signOut')

export async function fetchOrUpdateUser(store, token) {
    const status = selectUser(store.getState()).status
    // if request is pending or updating, stop the action to avoid double request
    if (status === 'pending' || status === 'updating') {
        return;
    }
    // else, launch the request
    store.dispatch(userFetching());
    try {
        const response = await fetch(
            'http://localhost:3001/api/v1/user/profile',
            {
                // Adding method type
                method: 'POST',
                // Adding headers
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        );
       // console.log('response', response)
        const resJson = await response.json();
        console.log("resJson", await resJson)
        if (resJson.status === 200) {
            store.dispatch(userResolved(resJson.body))
        } else {
            store.dispatch(userRejected(resJson.message))
        }
    } catch (error) {
        store.dispatch(userRejected(error))
    }  
}

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
        return;
    })
    .addCase(userResolved, (draft, action) => {
        if(draft.status === 'pending' || draft.status === 'updating') {
            draft.data = action.payload
            draft.status = 'resolved'
            return
        }
        return;
    })
    .addCase(userRejected, (draft, action) => {
        if (draft.status === 'pending' || draft.status === 'updating') {
            draft.error = action.payload
            draft.data = null
            draft.status = 'rejected'
            return
        }
        return;
    })
    .addCase(usernameUpdated, (draft, action) => {
        draft.data = action.payload
        draft.status = 'resolved'
        return
    })
    .addCase(userSignOut, (draft) => {
        draft.status = 'void'
        draft.data = null
        draft.error = null
        return
    })
)