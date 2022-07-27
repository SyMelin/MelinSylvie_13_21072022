import { configureStore }  from '@reduxjs/toolkit'
import signInFormReducer from './features/signInForm'
import loginReducer from './features/login'
import userReducer from './features/user'
import editNameFormReducer from './features/editNameForm'

const store = configureStore ({
    reducer: {
        signInForm: signInFormReducer,
        login: loginReducer,
        user: userReducer,
        editNameForm: editNameFormReducer,
    }
})

export default store