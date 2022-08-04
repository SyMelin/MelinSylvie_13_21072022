import { createAction, createReducer } from '@reduxjs/toolkit'
import { selectUser, selectEditNameForm, selectLogin } from '../selectors'
import { fetchOrUpdateUserNameData } from './user'

const initialState = {
    formData: {
        firstName: '',
        lastName: '',
    },
    error: {
        firstName: false,
        lastName: false,
    },
    editNameFormIsOpen: false,
}


// Action creators
export const nameEditingSignOut = createAction('nameEditing/signOut')
export const setEditNameFormState = createAction('nameEditing/isOpen')
export const setTextInputValue = createAction('nameEditing/setTextInputValue', (formEntry, value) => {
    return {
        payload: {
            formEntry: formEntry,
            value: value,
        }
    }
})


/**
 * Thunk function
 * First, prevents the default behaviour of the form button
 * Then return a thunk function that:
 * checks if a formData entry is empty and stops the process in this case
 * Then, checks if a formData entry is different from the matching current user data,
 * and calls the fetchOrUpdateUserNameData function
 * Finally, closes the editNameForm
 * 
 * @param {*} e - event
 */
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


// Reducer creator
export default createReducer(initialState, builder => builder
    .addCase(setEditNameFormState, (draft) => {
        draft.formData.firstName = null
        draft.formData.lastName = null
        draft.editNameFormIsOpen = !draft.editNameFormIsOpen
        return
    })
    .addCase(setTextInputValue, (draft, action) => {
        const formEntry = action.payload.formEntry
        // the value has at least 2 characters and the first character should be uppercase
        if (!(/^\b([A-ZÀ-Ÿ][-,a-zà-ÿ. ']+[ ]*)+$/gm.test(action.payload.value))) {
            draft.formData[formEntry] = ""
            draft.error[formEntry] = true
        } else {
            draft.formData[formEntry] = action.payload.value
            draft.error[formEntry] = false
        }
        return
    })
    .addCase(nameEditingSignOut, (draft) => {
        draft.formData.firstName = null
        draft.formData.lastName = null
        draft.error.firstName = null
        draft.error.lastName = null
        draft.editNameFormIsOpen = false
        return
    })
)