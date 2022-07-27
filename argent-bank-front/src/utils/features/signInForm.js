import { createAction } from '@reduxjs/toolkit'
import produce from 'immer'

const initialState = {
    email: '',
    password: '',
}
/*
const SET_INPUT_VALUE = 'signIn/setInputValue'
const SIGN_OUT = 'signIn/signOut'

export const setInputValue = (id, value) => ({
    type: SET_INPUT_VALUE,
    payload: {
        id: id,
        value: value,
    }
})

export const signInSignOut = () => ({ type: SIGN_OUT})
*/

export const setInputValue = createAction('signInForm/setInputValue', (id, value) => {
   return {
        payload: {
            id: id,
            value: value,
        }
   } 
})

export const signInFormSignOut = createAction('signInForm/signOut')



export default function loginReducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case setInputValue.toString(): {
                const id = action.payload.id;
                draft[id] = action.payload.value
                return
            }
            case signInFormSignOut.toString(): {
                draft.email = ''
                draft.password = ''
                return
            }
            default:
                return
        }
    })
}