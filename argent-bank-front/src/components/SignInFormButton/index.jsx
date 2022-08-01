import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrUpdateLogin } from '../../utils/features/login'
import { selectSignInForm, selectLogin } from '../../utils/selectors'
import '../../styles/SignInFormButton.css'

function SignInFormButton() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const signInForm = useSelector(selectSignInForm);
    const login = useSelector(selectLogin);

    return (
        <button
        onClick={(e) => {
            e.preventDefault()
            const signInData = signInForm
          //  console.log(signInData)
            dispatch(fetchOrUpdateLogin(signInData));
            if (login.status === 'rejected') {
                return <span>Something went wrong</span>
            }
            return navigate("/profile", {replace:true})
        }}
        className="sign-in-button"
        >
            Sign In
    </button> 
    )
}

export default SignInFormButton