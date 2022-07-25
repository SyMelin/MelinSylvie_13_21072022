import produce from 'immer'

const initialState = {
    email: '',
    password: '',
}

const SET_INPUT_VALUE = 'signIn/setInputValue'
const SIGN_OUT = 'signIn/signOut'

export const setInputValueUsername = (username, id) => ({ type: SET_INPUT_VALUE, payload: username, id: id })
export const setInputValuePassword = (password, id) => ({ type: SET_INPUT_VALUE, payload: password, id: id })
export const signInSignOut = () => ({ type: SIGN_OUT})

export default function loginReducer(state = initialState, action) {
    return produce(state, draft => {
        if (action.type === SIGN_OUT) {
            draft.email = ''
            draft.password = ''
        } else {
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
        }
    })
}