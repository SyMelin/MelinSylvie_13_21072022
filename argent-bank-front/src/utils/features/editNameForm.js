import { createAction, createReducer } from '@reduxjs/toolkit'
//import produce from 'immer'

const initialState = {
    firstName: '',
    lastName: '',
    editFormIsOpen: false,
}

export const nameEditingSignOut = createAction('nameEditing/signOut')
export const setEditFormState = createAction('nameEditing/isOpen')
export const setInputValue = createAction('nameEditing/setInputValue', (formEntry, value) => {
    return {
        payload: {
            formEntry: formEntry,
            value: value,
        }
    }
})

export default createReducer(initialState, builder => builder
    .addCase(setEditFormState, (draft) => {
        draft.firstName = ''
        draft.lastName = ''
        draft.editFormIsOpen = !draft.editFormIsOpen
        return
    })
    .addCase(setInputValue, (draft, action) => {
        const formEntry = action.payload.formEntry;
        draft[formEntry] = action.payload.value
        return
    })
    .addCase(nameEditingSignOut, (draft) => {
        draft.firstName = ''
        draft.lastName = ''
        draft.editFormIsOpen = false
        return
    })
)