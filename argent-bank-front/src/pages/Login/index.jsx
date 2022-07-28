import { useEffect } from 'react'


import SignInContentSection from '../../components/SignInContentSection'
import '../../styles/Login.css'

function Login () {

    useEffect(() => {
        document.title = 'Argent Bank - Login Page';
    });


    return (
        <main className="main bg-dark">
            <SignInContentSection />
        </main>
    )
}

export default Login