import { useDispatch, useSelector } from 'react-redux'
import { selectSignInForm } from '../../utils/selectors'
import { setTextInputValue } from '../../utils/features/signInForm'

function SignInFormTextInput ({ type, id, formEntry }) {

    const dispatch = useDispatch()
    const signInFormTextInput = useSelector(selectSignInForm).formData[formEntry]

    return (
        <div className="input-wrapper">
            <label htmlFor={id}>{`${id[0].toUpperCase()}${id.slice(1)}`}</label>
            <input
                type={type}
                id={id}
                defaultValue={signInFormTextInput} //To be considered when the "remember me" feature will be implemented
                onChange={(e) => {dispatch(setTextInputValue(formEntry, e.target.value))}}
            />
        </div>
    )
}

export default SignInFormTextInput