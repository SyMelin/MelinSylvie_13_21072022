import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { fetchOrUpdateLogin } from '../../utils/features/login'
import { selectSignInForm, selectLogin } from '../../utils/selectors'
import SignInInput from '../SignInInput'
import '../../styles/SignInContent.css'

function SignInContentSection () {

    const navigate = useNavigate()
    const signInForm = useSelector(selectSignInForm);
    const login = useSelector(selectLogin);
    //const store = useStore()
    const dispatch = useDispatch()

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
                <SignInInput type={'text'} id={'username'} />
                <SignInInput type={'password'} id={'password'} />
                <div className="input-remember">
                    <input
                        type="checkbox"
                        id="remember-me"
                    />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
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
            </form>
        </section>
    )
}

export default SignInContentSection