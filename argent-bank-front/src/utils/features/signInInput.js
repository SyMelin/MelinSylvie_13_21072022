import produce from 'immer'

const initialState = {
    email: '',
    password: '',
}

const SET_INPUT_VALUE = 'signIn/setInputValue'

export const setInputValueUsername = (username, id) => ({ type: SET_INPUT_VALUE, payload: username, id: id })
export const setInputValuePassword = (password, id) => ({ type: SET_INPUT_VALUE, payload: password, id: id })

export default function loginReducer(state = initialState, action) {
    return produce(state, draft => {
        switch (action.id) {
            case "username": {
                draft.email = action.payload
                return
            }
            case "password": {
                draft.password = action.payload
                return
            }
            default:
                return
        }
    })
}
    