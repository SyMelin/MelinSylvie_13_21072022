import React, { useEffect } from 'react'
import SignInContent from '../../sections/SignInContent'
import '../../styles/Login.css'

function Login ({ userIsConnected, setUserIsConnected }) {

    useEffect(() => {
        document.title = 'Argent Bank - Login Page';
    });


    return (
        <main className="main bg-dark">
            <SignInContent userIsConnected={userIsConnected} setUserIsConnected={setUserIsConnected}/>
        </main>
    )
}

export default Login