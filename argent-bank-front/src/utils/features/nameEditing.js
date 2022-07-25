import produce from 'immer'

const initialState = {
    firstName: '',
    lastName: '',
    editFormIsOpen: false,
}

const SET_INPUT_VALUE = 'nameEditing/setInputValue'
const IS_OPEN = 'nameEditing/isOpen'
const SIGN_OUT = 'nameEditing/signOut'

export const setInputValueFirstName = (firstName, id) => ({ type: SET_INPUT_VALUE, payload: firstName, id: id })
export const setInputValueLastName = (lastName, id) => ({ type: SET_INPUT_VALUE, payload: lastName, id: id })
export const setEditFormState = () => ({ type: IS_OPEN })
export const nameEditingSignOut = () => ({ type: SIGN_OUT})

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
        } else {
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