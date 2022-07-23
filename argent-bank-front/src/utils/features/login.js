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
const CONNECT_USER = 'connectUser'

const userFetching = () => ({ type: FETCHING })
const userResolved = (token) => ({ type: RESOLVED, payload: token })
const userRejected = (error) => ({ type: REJECTED, payload: error })
const connectUser = () => ({ type: CONNECT_USER })

export async function fetchOrUpdateLogin(store) {
    const status = selectLogin(store.getState()).status
    // if request is pending or updating, stop the action to avoid double request
    if (status === 'pending' || status === 'updating') {
        return;
    }
    // else, launch the request
    store.dispatch(userFetching());
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
        const data = await response.json();
        console.log("data", await data)
        const token = await data.body.token
        console.log("token", token)
        store.dispatch(userResolved(token))
        store.dispatch(connectUser())
    } catch (error) {
        store.dispatch(userRejected(error))
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
                draft.userIsConnected = true
                return
            }
            default:
                return 
        }
    })
}