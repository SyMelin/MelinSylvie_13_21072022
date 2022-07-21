import React, { useEffect, useState } from 'react'
import Account from '../../sections/Account'
import '../../styles/Profile.css'

function Profile ({ accountData }) {
    const userFirstname = "Tony"
    const userLastname = "Jarvis"
    const userName = userFirstname + " " + userLastname
    const [isBeingEdited, setIsBeingEdited] = useState(false)

    useEffect(() => {
        document.title = 'Argent Bank - Profile Page';
    })

    return (
        <main className="main bg-dark">
            {isBeingEdited
            ? <div className="header">
                <h1>Welcome back</h1>
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
                        <button
                            onClick={() => setIsBeingEdited(false)} //To be modified
                            className="form-button"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => setIsBeingEdited(false)} //To be modified
                            className="form-button"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
            : <div className="header">
                <h1>Welcome back<br />{userName}!</h1>
                <button
                    onClick={() => setIsBeingEdited(true)} //To be modified
                    className="edit-button"
                >
                    Edit Name
                </button>
            </div>
            }
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