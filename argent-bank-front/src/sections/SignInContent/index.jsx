import { useNavigate } from 'react-router-dom'
import '../../styles/SignInContent.css'

function SignInContent ({ userIsConnected, setUserIsConnected}) {
    const navigate = useNavigate()

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                
                <button
                    onClick={() => {
                        setUserIsConnected(true)
                        return navigate("/profile", {replace:true})
                    }} //to be replaced
                    className="sign-in-button"
                    >
                        Sign In
                </button>
            
            </form>
        </section>
    )
}

export default SignInContent