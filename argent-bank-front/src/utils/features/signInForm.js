import { createAction, createReducer } from '@reduxjs/toolkit'
//import produce from 'immer'

const initialState = {
    formData: {
        email: '',
        password: '',
    },
    checkbox: false,
    error: false,
}

export const signInFormSetError = createAction('signInForm/setError')
export const signInFormSignOut = createAction('signInForm/signOut')
export const setCheckboxInputValue = createAction('signInForm/setCheckboxInputValue')
export const setTextInputValue = createAction('signInForm/setTextInputValue', (formEntry, value) => {
   return {
        payload: {
            formEntry: formEntry,
            value: value,
        }
   } 
})

export default createReducer(initialState, builder => builder
    .addCase(setTextInputValue, (draft, action) => {
        const formEntry = action.payload.formEntry;
        draft.formData[formEntry] = action.payload.value
        return
    })
    .addCase(setCheckboxInputValue, (draft) => {
        draft.checkbox = !draft.checkbox
    })
    .addCase(signInFormSetError, (draft, action) => {
        draft.error = action.payload
    })
    .addCase(signInFormSignOut, (draft) => {
        if (draft.checkbox === false) {
            draft.formData.email = ''
            draft.formData.password = ''
        }
        return
    })
)