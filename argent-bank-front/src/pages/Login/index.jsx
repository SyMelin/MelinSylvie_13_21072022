import React, { useEffect } from 'react'
import SignInContent from '../../sections/SignInContent'
import '../../styles/Login.css'

function Login () {

    useEffect(() => {
        document.title = 'Argent Bank - Login Page';
    });


    return (
        <main className="main bg-dark">
            <SignInContent />
        </main>
    )
}

export default Login