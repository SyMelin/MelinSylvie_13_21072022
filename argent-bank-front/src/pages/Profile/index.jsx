import React, { useEffect } from 'react'
import Account from '../../sections/Account'
import '../../styles/Profile.css'

function Profile ({ accountData }) {
    const userFirstname = "Tony"
    const userLastname = "Jarvis"
    const userName = userFirstname + userLastname

    useEffect(() => {
        document.title = 'Argent Bank - Profile Page';
    })

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br /><span>{userName}!</span></h1>
                <form>
                    <div className='form-inputs'>
                        <div className="input-wrapper">
                            <label htmlFor="userFirstname" className="sr-only">UserFirstname</label>
                            <input type="text" id="userFirstname" placeholder="Firstname"/>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="userLastname" className="sr-only">UserLastname</label>
                            <input type="text" id="userLastname" placeholder="Lastname"/>
                        </div>
                    </div>
                    <div className='form-buttons'>
                        <button className="form-button">Save</button>
                        <button className="form-button">Cancel</button>
                    </div>
                </form>
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