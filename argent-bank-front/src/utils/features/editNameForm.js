import { createAction, createReducer } from '@reduxjs/toolkit'
//import produce from 'immer'
import { selectEditNameForm, selectUser } from '../selectors'
import { usernameUpdated } from './user'

const initialState = {
    firstName: '',
    lastName: '',
    editFormIsOpen: false,
    status: 'void',
    //data: null,
    error: null,
}

const nameEditingFetching = createAction('nameEditing/fetching')
const nameEditingResolved = createAction('nameEditing/resolved')
const nameEditingRejected = createAction('nameEditing/rejected')
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

export function fetchOrUpdateEditForm(token, editNameData) {
    return async (dispatch, getState) => {
        const status = selectEditNameForm(getState()).status
        // if request is pending or updating, stop the action to avoid double request
        if (status === 'pending' || status === 'updating') {
            return;
        }
        // else, launch the request
        dispatch(nameEditingFetching());
        try {
            const response = await fetch(
                'http://localhost:3001/api/v1/user/profile',
                {
                    // Adding method type
                    method: 'PUT',
                    // Adding headers
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(editNameData)
                }
            );
        // console.log('response', response)
            const resJson = await response.json();
            console.log("resJson", await resJson)
            if (resJson.status === 200) {
                //dispatch(nameEditingResolved(resJson.body))
                //const data = selectUser(store.getState()).data
                dispatch(usernameUpdated(resJson.body))
                dispatch(nameEditingResolved())
            } else {
                dispatch(nameEditingRejected(resJson.message))
            }
        } catch (error) {
            dispatch(nameEditingRejected(error))
        }
    }    
}

export default createReducer(initialState, builder => builder
    .addCase(nameEditingFetching, (draft) => {
        if (draft.status === 'void') {
            draft.status = 'pending'
            return
        }
        if (draft.status === 'rejected') {
            draft.error = null
            draft.status = 'pending'
            return
        }
        if (draft.status === 'resolved') {
            draft.status = 'updating'
            return
        }
        return
    })
    .addCase(nameEditingResolved, (draft) => {
        if(draft.status === 'pending' || draft.status === 'updating') {
            // draft.data = action.payload
             draft.status = 'resolved'
             return
         }
         return
    })
    .addCase(nameEditingRejected, (draft, action) => {
        if (draft.status === 'pending' || draft.status === 'updating') {
            draft.error = action.payload
           // draft.data = null
            draft.status = 'rejected'
            return
        }
        return
    })
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
        draft.status = 'void'
        //draft.data = null
        draft.error = null
        return
    })
)