import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = {
    formData: {
        email: '',
        password: '',
    },
    checkbox: false,
    error: false,
}


// Action creators
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


// Reducer creator
export default createReducer(initialState, builder => builder
    .addCase(setTextInputValue, (draft, action) => {
        const formEntry = action.payload.formEntry
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
        // if the 'remember me' checkbox was not checked at the sign-in page
        if (draft.checkbox === false) {
            draft.formData.email = ''
            draft.formData.password = ''
        }
        return
    })
)