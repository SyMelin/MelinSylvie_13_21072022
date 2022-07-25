import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { setInputValueUsername, setInputValuePassword } from '../../utils/features/signInInput'
import { fetchOrUpdateLogin } from '../../utils/features/login'
import { selectSignInInput, selectLogin } from '../../utils/selectors'
import '../../styles/SignInContent.css'

function SignInContent () {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const signInInput = useSelector(selectSignInInput);
    const login = useSelector(selectLogin);
    const store = useStore()

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        defaultValue={signInInput.username}
                        onChange={(e) => dispatch(setInputValueUsername(e.target.value, e.target.id))}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        defaultValue={signInInput.password}
                        onChange={(e) => dispatch(setInputValuePassword(e.target.value, e.target.id))}
                    />
                </div>
                <div className="input-remember">
                    <input
                        type="checkbox"
                        id="remember-me"
                    />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button
                    onClick={() => {
                        const signInData = signInInput
                      //  console.log(signInData)
                        fetchOrUpdateLogin(store, signInData);
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

export default SignInContent