import { useDispatch, useSelector } from 'react-redux'
import { selectSignInForm } from '../../utils/selectors'
import { setInputValue } from '../../utils/features/signInForm'

function SignInFormInput ({ type, id }) {

    const dispatch = useDispatch()
    const signInForm = useSelector(selectSignInForm);
    const signInFormInput = signInForm[id]

    return (
        <div className="input-wrapper">
            <label htmlFor={id}>{`${id[0].toUpperCase()}${id.slice(1)}`}</label>
            <input
                type={type}
                id={id}
                defaultValue={signInFormInput}
                onChange={(e) => {
                    let formEntry = ""
                    if (id === "username") {
                        formEntry = "email"
                    }
                    if (id === "password") {
                        formEntry = "password"
                    }
                    dispatch(setInputValue(formEntry, e.target.value))
                }}
            />
        </div>
    )
}

export default SignInFormInput