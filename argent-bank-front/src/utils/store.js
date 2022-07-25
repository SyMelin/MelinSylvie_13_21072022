import { combineReducers, createStore } from 'redux'
import signInInputReducer from './features/signInInput'
import loginReducer from './features/login'
import userReducer from './features/user'
import nameEditingReducer from './features/nameEditing'

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// combineReducers is used to run several reducers together
const reducer = combineReducers({
    signInInput: signInInputReducer,
    login: loginReducer,
    user: userReducer,
    nameEditing: nameEditingReducer,
})

// store
export const store = createStore(reducer, reduxDevtools);