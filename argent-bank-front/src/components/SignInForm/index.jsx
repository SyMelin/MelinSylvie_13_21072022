import { useDispatch, useSelector } from 'react-redux'
import { selectLogin, selectSignInForm } from '../../utils/selectors'
import SignInFormTextInput from '../SignInFormTextInput'
import SignInFormCheckboxInput from '../SignInFormChexboxInput'
import SignInFormButton from '../SignInFormButton'
import '../../styles/SignInForm.css'

function SignInForm() {

    const signInFormError = useSelector(selectSignInForm).error
    const login = useSelector(selectLogin)

    return (
        <form>
            <SignInFormTextInput
                type={'text'}
                id={'username'}
                formEntry={'email'}
            />
            <SignInFormTextInput
                type={'password'}
                id={'password'}
                formEntry={'password'}
            />
            { signInFormError
            ? <span className='signInForm-error'>{login.error}</span>
            : null
            }
            <SignInFormCheckboxInput />
            <SignInFormButton />
        </form>
    )
}

export default SignInForm