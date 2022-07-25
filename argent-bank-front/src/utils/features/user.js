import produce from 'immer'
import { selectUser } from '../selectors'

const initialState = {
    status: 'void',
    data: null,
    error: null,
}

const FETCHING = 'user/fetching'
const RESOLVED = 'user/resolved'
const REJECTED = 'user/rejected'

const userFetching = () => ({ type: FETCHING })
const userResolved = (data) => ({ type: RESOLVED, payload: data })
const userRejected = (message) => ({ type: REJECTED, payload: message })

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

export default function userReducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case FETCHING: {
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
            case RESOLVED: {
                if(draft.status === 'pending' || draft.status === 'updating') {
                    draft.data = action.payload
                    draft.status = 'resolved'
                    return
                }
                return;
            }
            case REJECTED: {
                if (draft.status === 'pending' || draft.status === 'updating') {
                    draft.error = action.payload
                    draft.data = null
                    draft.status = 'rejected'
                    return
                }
                return;
            }
            default:
                return 
        }
    })
}