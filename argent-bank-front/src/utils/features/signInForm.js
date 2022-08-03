import { createAction, createReducer } from '@reduxjs/toolkit'
//import produce from 'immer'

const initialState = {
    formData: {
        email: '',
        password: '',
    } 
}

export const signInFormSignOut = createAction('signInForm/signOut')
export const setInputValue = createAction('signInForm/setInputValue', (formEntry, value) => {
   return {
        payload: {
            formEntry: formEntry,
            value: value,
        }
   } 
})

export default createReducer(initialState, builder => builder
    .addCase(setInputValue, (draft, action) => {
        const formEntry = action.payload.formEntry;
        draft.formData[formEntry] = action.payload.value
        return
    })
    .addCase(signInFormSignOut, (draft) => {
        draft.formData.email = ''
        draft.formData.password = ''
        return
    })
)