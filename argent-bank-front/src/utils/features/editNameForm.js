import produce from 'immer'
import { selectEditNameForm } from '../selectors'
import {  } from '../selectors'

const initialState = {
    firstName: '',
    lastName: '',
    editFormIsOpen: false,
    status: 'void',
    data: null,
    error: null,
}

const SET_INPUT_VALUE = 'nameEditing/setInputValue'
const IS_OPEN = 'nameEditing/isOpen'
const FETCHING = 'nameEditing/fetching'
const RESOLVED = 'nameEditing/resolved'
const REJECTED = 'nameEditing/rejected'
const SIGN_OUT = 'nameEditing/signOut'

export const setInputValue = (formEntry, value) => ({
    type: SET_INPUT_VALUE,
    payload: {
        formEntry: formEntry,
        value: value,
    }
})

export const setEditFormState = () => ({ type: IS_OPEN })
const nameEditingFetching = () => ({ type: FETCHING })
const nameEditingResolved = (data) => ({ type: RESOLVED, payload: data })
const nameEditingRejected = (message) => ({ type: REJECTED, payload: message })
export const nameEditingSignOut = () => ({ type: SIGN_OUT})

export async function fetchOrUpdateEditForm(store, token, editNameData) {
    const status = selectEditNameForm(store.getState()).status
    // if request is pending or updating, stop the action to avoid double request
    if (status === 'pending' || status === 'updating') {
        return;
    }
    // else, launch the request
    store.dispatch(nameEditingFetching());
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
            store.dispatch(nameEditingResolved(resJson.body))
        } else {
            store.dispatch(nameEditingRejected(resJson.message))
        }
    } catch (error) {
        store.dispatch(nameEditingRejected(error))
    }  
}

export default function editNameFormReducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.type) {
            case FETCHING: {
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
            }
            case RESOLVED: {
                if(draft.status === 'pending' || draft.status === 'updating') {
                    draft.data = action.payload
                    draft.status = 'resolved'
                    return
                }
                return
            }
            case REJECTED: {
                if (draft.status === 'pending' || draft.status === 'updating') {
                    draft.error = action.payload
                    draft.data = null
                    draft.status = 'rejected'
                    return
                }
                return
            }
            case IS_OPEN: {
                draft.firstName = ''
                draft.lastName = ''
                draft.editFormIsOpen = !draft.editFormIsOpen
                return
            }
            case SET_INPUT_VALUE: {
                const formEntry = action.payload.formEntry;
                draft[formEntry] = action.payload.value
                return
            }
            case SIGN_OUT: {
                draft.firstName = ''
                draft.lastName = ''
                draft.editFormIsOpen = false
                draft.status = 'void'
                draft.data = null
                draft.error = null
                return
            }
            default:
                return
        }
        
        
    })
}