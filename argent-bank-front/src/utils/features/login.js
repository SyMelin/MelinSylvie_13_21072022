import produce from 'immer'
import { selectLogin } from '../selectors'


const initialState = {
    status: 'void',
    token: null,
    userIsConnected: false,
    error: null,
}

const FETCHING = 'login/fetching'
const RESOLVED = 'login/resolved'
const REJECTED = 'login/rejected'
const CONNECT_USER = 'login/connectUser'

const loginFetching = () => ({ type: FETCHING })
const loginResolved = (data) => ({ type: RESOLVED, payload: data.token })
const loginRejected = (message) => ({ type: REJECTED, payload: message })
const connectUser = () => ({ type: CONNECT_USER })

export async function fetchOrUpdateLogin(store) {
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
                body: JSON.stringify({
                    email: 'tony@stark.com',
                    password: 'password123'
                })
            }
        );
        //console.log('response', response)
        const resJson = await response.json();
        console.log("resJson", await resJson)
        if (resJson.status === 200) {
            store.dispatch(loginResolved(resJson.body))
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
                    draft.token = action.payload
                    draft.status = 'resolved'
                    return
                }
                return;
            }
            case REJECTED: {
                if (draft.status === 'pending' || draft.status === 'updating') {
                    draft.error = action.payload
                    draft.token = null
                    draft.status = 'rejected'
                    return
                }
                return;
            }
            case CONNECT_USER: {
                draft.userIsConnected = !draft.userIsConnected
                return
            }
            default:
                return 
        }
    })
}