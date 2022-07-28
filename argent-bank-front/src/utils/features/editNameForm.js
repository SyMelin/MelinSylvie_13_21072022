import { createAction, createReducer } from '@reduxjs/toolkit'
//import produce from 'immer'
import { selectUser, selectEditNameForm } from '../selectors'
import { fetchOrUpdateUserNameData } from './user'

const initialState = {
    editNameData: {
        firstName: '',
        lastName: '',
    },
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

export function sendNameData(store, token) {
    const editNameForm = selectEditNameForm(store.getState())
    const user = selectUser(store.getState())
    //console.log('editData: ', editNameForm.editNameData, 'userData: ', user.data)
    if ((editNameForm.editNameData.firstName === "") || (editNameForm.editNameData.lastName === "")) {
        console.log("l'un des 2 est vide")
        return
    }
    if (!(editNameForm.editNameData.firstName === user.data.firstName) || !(editNameForm.editNameData.lastName === user.data.lastName)) {
       // console.log('dans if de sendNameData', editNameForm.editNameData)
        store.dispatch(fetchOrUpdateUserNameData(token, editNameForm.editNameData))
    }
    store.dispatch(setEditFormState()) 
}

export default createReducer(initialState, builder => builder
    .addCase(setEditFormState, (draft) => {
        draft.editNameData.firstName = null
        draft.editNameData.lastName = null
        draft.editFormIsOpen = !draft.editFormIsOpen
        return
    })
    .addCase(setInputValue, (draft, action) => {
        const formEntry = action.payload.formEntry
        draft.editNameData[formEntry] = action.payload.value
        return
    })
    .addCase(nameEditingSignOut, (draft) => {
        draft.editNameData.firstName = null
        draft.editNameData.lastName = null
        draft.editFormIsOpen = false
        return
    })
)