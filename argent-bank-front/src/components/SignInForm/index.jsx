import { useDispatch, useSelector } from 'react-redux'
import { selectLogin, selectSignInForm } from '../../utils/selectors'
import SignInFormInput from '../SignInFormInput'
import SignInFormButton from '../SignInFormButton'
import '../../styles/SignInForm.css'

function SignInForm() {

    const signInFormError = useSelector(selectSignInForm).error
    const login = useSelector(selectLogin)

    return (
        <form>
            <SignInFormInput
                type={'text'}
                id={'username'}
                formEntry={'email'}
            />
            <SignInFormInput
                type={'password'}
                id={'password'}
                formEntry={'password'}
            />
            { signInFormError
            ? <span className='signInForm-error'>{login.error}</span>
            : null
            }
            <div className="input-remember">
                <input
                    type="checkbox"
                    id="remember-me"
                />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <SignInFormButton />
        </form>
    )
}

export default SignInForm