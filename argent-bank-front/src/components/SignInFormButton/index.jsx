import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { sendSignInFormData } from '../../utils/features/login'
import '../../styles/SignInFormButton.css'

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