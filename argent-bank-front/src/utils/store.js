import { combineReducers, createStore } from 'redux'
import signInFormReducer from './features/signInForm'
import loginReducer from './features/login'
import userReducer from './features/user'
import nameEditingReducer from './features/nameEditing'

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// combineReducers is used to run several reducers together
const reducer = combineReducers({
    signInForm: signInFormReducer,
    login: loginReducer,
    user: userReducer,
    nameEditing: nameEditingReducer,
})

// store
export const store = createStore(reducer, reduxDevtools);