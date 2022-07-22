import { createStore } from 'redux'

const initialState = {
    isBeingEdited: false,
}

export const editUserName = () => ({ type: "editUserName"})

function reducer(state = initialState, action) {
    if (action.type === 'editUserName') {
        return {
            ...state,
            isBeingEdited: !state.isBeingEdited
        };
    }
    return state;
}

export const store = createStore(reducer);