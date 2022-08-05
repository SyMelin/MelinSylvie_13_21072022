import { createAction, createReducer } from '@reduxjs/toolkit'
import { selectLogin, selectSignInForm } from '../selectors'
import { signInFormSetError } from './signInForm'

const initialState = {
    status: 'void',
    token: null,
    userIsConnected: false,
    error: null,
}


// Action creators
const loginFetching = createAction('login/fetching')
const loginResolved = createAction('login/resolved')
const loginRejected = createAction('login/rejected')
const connectUser = createAction('login/connectUser')
export const loginSignOut = createAction('login/signOut')


/**
 * First, prevents the default behaviour of the form button
 * Then return a thunk function that:
 * checks if a formData entry is empty and stops the process in this case
 * Then, calls the fetchOrUpdateLogin function
 * 
 * @param {*} e - event
 * @param { function } navigate - const navigte = useNavigate()
 */
export function sendSignInFormData(e, navigate) {
    e.preventDefault()
    return async (dispatch, getState) => {
        const signInFormData = selectSignInForm(getState()).formData
        if ((signInFormData.email === "") || (signInFormData.password === "")) {
            console.log("l'un des 2 est vide")
            return
        }
        dispatch(fetchOrUpdateLogin(signInFormData, navigate))
    }
}


/**
 * Return a Thunk function that:
 * First, launchs a Post fetch request to get a token from the API
 * If the request is resolved, then it returns the Profile page
 * If the request is rejected, then an error message will be displayed on the current page (Login page)
 * 
 * @param { Object } signInFormData
 * @param { function } navigate - const navigate = useNavigate()
 */
export function fetchOrUpdateLogin(signInFormData, navigate) {
    return async (dispatch, getState) => {
        const status = selectLogin(getState()).status
        // if request is pending or updating, stop the action to avoid double request
        if (status === 'pending' || status === 'updating') {
            return
        }
        // else, launch the request
        dispatch(loginFetching())
        try {
            const response = await fetch(
                'http://localhost:3001/api/v1/user/login',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(signInFormData)
                }
            )
            const resJson = await response.json()
            console.log("resJson", await resJson)
            if (resJson.status === 200) {
                dispatch(loginResolved(resJson.body.token))
                dispatch(connectUser())
                dispatch(signInFormSetError(false))
                return navigate("/profile", {replace:true})
            } else {
                dispatch(loginRejected(resJson.message))
                dispatch(signInFormSetError(true))
            }
        } catch (error) {
            dispatch(loginRejected(error))
            dispatch(signInFormSetError(true))
        }
    }
}


// Reducer creator
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
        return
    })
    .addCase(loginResolved, (draft, action) => {
        if(draft.status === 'pending' || draft.status === 'updating') {
            draft.token = action.payload
            draft.status = 'resolved'
            return
        }
        return
    })
    .addCase(loginRejected, (draft, action) => {
        if (draft.status === 'pending' || draft.status === 'updating') {
            draft.error = action.payload
            draft.token = null
            draft.status = 'rejected'
            return
        }
        return
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