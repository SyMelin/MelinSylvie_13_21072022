import produce from 'immer'

const initialState = {
    email: '',
    password: '',
}

const SET_INPUT_VALUE = 'signIn/setInputValue'
const SIGN_OUT = 'signIn/signOut'

export const setInputValue = (id, value) => ({
    type: SET_INPUT_VALUE,
    payload: {
        id: id,
        value: value,
    }
})

export const signInSignOut = () => ({ type: SIGN_OUT})

export default function loginReducer(state = initialState, action) {
    return produce(state, draft => {
        if (action.type === SIGN_OUT) {
            draft.email = ''
            draft.password = ''
        }
        if (action.type === SET_INPUT_VALUE) {
            const id = action.payload.id;
            draft[id] = action.payload.value
        }
    })
}