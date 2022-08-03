import SignInFormInput from '../SignInFormInput'
import SignInFormButton from '../SignInFormButton'
import '../../styles/SignInForm.css'

function SignInForm() {
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