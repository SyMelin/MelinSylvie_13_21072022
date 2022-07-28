import { createAction, createReducer } from '@reduxjs/toolkit'
//import produce from 'immer'
import { useDispatch, useSelector, useStore } from 'react-redux'
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

export function sendNameData(token) {
    console.log('clic1')
    return (dispatch, getState) => {
        console.log('clic2')
        const user = selectUser(getState()).user
        const nameEditing = selectEditNameForm(getState())
        console.log(!(nameEditing.firstName === user.data.firstName))
        if (!(nameEditing.firstName === user.data.firstName) || !(nameEditing.lastName === user.data.lastName)) {
            console.log('editNameData', nameEditing.editNameData)
            dispatch(fetchOrUpdateUserNameData(token, nameEditing.editNameData))
        }
        dispatch(setEditFormState()) 
    }
   
    }

export default createReducer(initialState, builder => builder
    .addCase(setEditFormState, (draft) => {
        draft.firstName = ''
        draft.lastName = ''
        draft.editFormIsOpen = !draft.editFormIsOpen
        return
    })
    .addCase(setInputValue, (draft, action) => {
        const formEntry = action.payload.formEntry;
        draft.editNameData[formEntry] = action.payload.value
        return
    })
    .addCase(nameEditingSignOut, (draft) => {
        draft.firstName = ''
        draft.lastName = ''
        draft.editFormIsOpen = false
        return
    })
)