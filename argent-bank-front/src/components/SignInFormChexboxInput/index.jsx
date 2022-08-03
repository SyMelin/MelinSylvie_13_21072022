import { useDispatch, useSelector } from 'react-redux'
import { selectSignInForm } from '../../utils/selectors'
import { setCheckboxInputValue } from '../../utils/features/signInForm'

function SignInFormCheckboxInput () {

    const dispatch = useDispatch()
    const signInFormCheckboxInput = useSelector(selectSignInForm).checkbox;

    return (
        <div className="input-remember">
            <input
                type="checkbox"
                id="remember-me"
                checked={signInFormCheckboxInput ? true : false}
                onChange={() => {dispatch(setCheckboxInputValue())}}
            />
            <label htmlFor="remember-me">Remember me</label>
        </div>
    )
}

export default SignInFormCheckboxInput