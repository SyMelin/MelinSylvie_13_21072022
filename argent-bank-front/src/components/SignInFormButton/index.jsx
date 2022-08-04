import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { sendSignInFormData } from '../../utils/features/login'
import './SignInFormButton.css'


/**
 * React component: SignInFormButton
 * 
 * @type { React.FC }
 * @returns { React.ReactElement }
 */
function SignInFormButton() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <button
            onClick={(e) => dispatch(sendSignInFormData(e, navigate))}
            className="sign-in-button"
        >
            Sign In
    </button> 
    )
}

export default SignInFormButton