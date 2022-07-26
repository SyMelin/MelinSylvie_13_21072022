import produce from 'immer'
import { selectNameEditing } from '../selectors'

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

export const setInputValueFirstName = (firstName, id) => ({ type: SET_INPUT_VALUE, payload: firstName, id: id })
export const setInputValueLastName = (lastName, id) => ({ type: SET_INPUT_VALUE, payload: lastName, id: id })
export const setEditFormState = () => ({ type: IS_OPEN })
const nameEditingFetching = () => ({ type: FETCHING })
const nameEditingResolved = (data) => ({ type: RESOLVED, payload: data })
const nameEditingRejected = (message) => ({ type: REJECTED, payload: message })
export const nameEditingSignOut = () => ({ type: SIGN_OUT})

export async function fetchOrUpdateEditForm(store, token, editNameData) {
    const status = selectNameEditing(store.getState()).status
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

export default function nameEditingReducer(state = initialState, action) {
    return produce(state, draft => {
        if (action.type === IS_OPEN) {
            draft.firstName = ''
            draft.lastName = ''
            draft.editFormIsOpen = !draft.editFormIsOpen
        }
        if (action.type === SIGN_OUT) {
            draft.firstName = ''
            draft.lastName = ''
            draft.editFormIsOpen = false
        } 
        if (action.type === FETCHING) {
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
            return;
        }
        if (action.type === RESOLVED) {
            if(draft.status === 'pending' || draft.status === 'updating') {
                draft.data = action.payload
                draft.status = 'resolved'
                return
            }
            return;
        }
        if (action.type === REJECTED) {
            if (draft.status === 'pending' || draft.status === 'updating') {
                draft.error = action.payload
                draft.data = null
                draft.status = 'rejected'
                return
            }
            return;
        }
        else {
            switch (action.id) {
                case "userFirstname": {
                    draft.firstName = action.payload
                    return
                }
                case "userLastname": {
                    draft.lastName = action.payload
                    return
                }
                default:
                    return
            }
        }
    })
}