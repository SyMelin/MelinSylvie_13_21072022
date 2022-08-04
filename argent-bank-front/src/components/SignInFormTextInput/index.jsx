import { useDispatch, useSelector } from 'react-redux'
import { selectSignInForm } from '../../utils/selectors'
import { setTextInputValue } from '../../utils/features/signInForm'
import './SignInFormTextInput.css'


/**
 * SignInFormTextInput properties
 * 
 * @typedef { Object } SignInFormTextInputProps
 * @prop { String } type - type of the input
 * @prop { String } id
 * @prop { String } formEntry
 */
/**
 * React component: SignInFormTextInput
 * 
 * @type { React.FC<SignInFormTextInputProps> }
 * @returns { React.ReactElement }
 */
function SignInFormTextInput ({ type, id, formEntry }) {

    const dispatch = useDispatch()
    const signInFormTextInput = useSelector(selectSignInForm).formData[formEntry]

    return (
        <div className="input-wrapper">
            <label htmlFor={id}>{`${id[0].toUpperCase()}${id.slice(1)}`}</label>
            <input
                type={type}
                id={id}
                defaultValue={signInFormTextInput} //To be considered for the "remember me" subfeature
                onChange={(e) => {dispatch(setTextInputValue(formEntry, e.target.value))}}
            />
        </div>
    )
}

export default SignInFormTextInput