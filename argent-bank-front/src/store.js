import { createStore } from 'redux'

const initialState = {
    userIsConnected: false,
    editingUserName: false,
}

export const connectUser = () => ({ type: "connectUser" })
export const editUserName = () => ({ type: "editUserName" })

function reducer(state = initialState, action) {
    if (action.type === "connectUser") {
        return {
            ...state,
            userIsConnected: !state.userIsConnected
        };
    }
    if (action.type === 'editUserName') {
        return {
            ...state,
            editingUserName: !state.editingUserName
        };
    }
    return state;
}

export const store = createStore(reducer);