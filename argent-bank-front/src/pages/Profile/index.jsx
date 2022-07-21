import React, { useEffect } from 'react'
import Account from '../../sections/Account'
import '../../styles/Profile.css'

function Profile ({ accountData }) {

    useEffect(() => {
        document.title = 'Argent Bank - Profile Page';
    })

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            {accountData.map((account, index) => (
                <Account
                    key={`accountData--${index}`}
                    account={account}
                />
            ))}
        </main>
    )
}

export default Profile