import { createAction, createReducer } from '@reduxjs/toolkit'
//import produce from 'immer'

const initialState = {
    email: '',
    password: '',
}

export const signInFormSignOut = createAction('signInForm/signOut')
export const setInputValue = createAction('signInForm/setInputValue', (id, value) => {
   return {
        payload: {
            id: id,
            value: value,
        }
   } 
})

export default createReducer(initialState, builder => builder
    .addCase(setInputValue, (draft, action) => {
        const id = action.payload.id;
        draft[id] = action.payload.value
        return
    })
    .addCase(signInFormSignOut, (draft) => {
        draft.email = ''
        draft.password = ''
        return
    })
)