import { createAction, createReducer } from '@reduxjs/toolkit'
//import produce from 'immer'
import { selectUser, selectEditNameForm, selectLogin } from '../selectors'
import { fetchOrUpdateUserNameData } from './user'

const initialState = {
    formData: {
        firstName: '',
        lastName: '',
    },
    editNameFormIsOpen: false,
}

export const nameEditingSignOut = createAction('nameEditing/signOut')
export const setEditNameFormState = createAction('nameEditing/isOpen')
export const setInputValue = createAction('nameEditing/setInputValue', (formEntry, value) => {
    return {
        payload: {
            formEntry: formEntry,
            value: value,
        }
    }
})


export function sendNameData (e) {
    e.preventDefault()
    return (dispatch, getState) => {
        const editNameFormData = selectEditNameForm(getState()).formData
        const userData = selectUser(getState()).data
        const token = selectLogin(getState()).token
        // If at least one of the inputs is empty, nothing happens
        if ((editNameFormData.firstName === "") || (editNameFormData.lastName === "")) {
            console.log("l'un des 2 est vide")
            return
        }
        if (!(editNameFormData.firstName === userData.firstName) || !(editNameFormData.lastName === userData.lastName)) {
            dispatch(fetchOrUpdateUserNameData(token, editNameFormData))
        }
        dispatch(setEditNameFormState()) 
    }
}

export default createReducer(initialState, builder => builder
    .addCase(setEditNameFormState, (draft) => {
        draft.formData.firstName = null
        draft.formData.lastName = null
        draft.editNameFormIsOpen = !draft.editNameFormIsOpen
        return
    })
    .addCase(setInputValue, (draft, action) => {
        const formEntry = action.payload.formEntry
        draft.formData[formEntry] = action.payload.value
        return
    })
    .addCase(nameEditingSignOut, (draft) => {
        draft.formData.firstName = null
        draft.formData.lastName = null
        draft.editNameFormIsOpen = false
        return
    })
)