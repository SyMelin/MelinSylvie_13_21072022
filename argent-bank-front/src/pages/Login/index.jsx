import { useEffect } from 'react'
import SignInForm from '../../components/SignInForm'
import './Login.css'


/**
 * React component: Login page
 * 
 * @type { React.FC }
 * @returns { React.ReactElement }
 */

function Login () {

    useEffect(() => {
        document.title = 'Argent Bank - Login Page'
    })

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <SignInForm />
            </section>
        </main>
    )
}

export default Login