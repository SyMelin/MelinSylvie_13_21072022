import { createStore } from 'redux'
import produce from 'immer'

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const initialState = {
    userIsConnected: false,
    editingUserName: false,
}

// actions names
export const CONNECT_USER = "connectUser";
export const EDIT_USER_NAME = "editUserName";

// actions creators
export const connectUser = () => ({ type: CONNECT_USER })
export const editUserName = () => ({ type: EDIT_USER_NAME })

// reducer
function reducer(state = initialState, action) {
    if (action.type === CONNECT_USER) {
        return produce (state, draft => {
            draft.userIsConnected = !draft.userIsConnected
        });
    }
    if (action.type === EDIT_USER_NAME) {
        return produce (state, draft => {
            draft.editingUserName = !draft.editingUserName
        });
    }
    return state;
}


// store
export const store = createStore(reducer, reduxDevtools);

/*
store.subscribe(() => {
    console.log("Nouveau state:");
    console.log(store.getState());
});
*/