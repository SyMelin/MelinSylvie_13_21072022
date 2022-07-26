import { useEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { selectUser, selectLogin, selectNameEditing  } from '../../utils/selectors'
//import { editUserName } from '../../store'
import { fetchOrUpdateUser } from '../../utils/features/user'
import { setInputValueFirstName, setInputValueLastName } from '../../utils/features/nameEditing'
import { setEditFormState, fetchOrUpdateEditForm } from '../../utils/features/nameEditing'
import Account from '../../sections/Account'
import '../../styles/Profile.css'

function Profile ({ accountData }) {
    //const userFirstname = "Tony"
    //const userLastname = "Jarvis"
    //const userName = userFirstname + " " + userLastname

    
    const dispatch = useDispatch();
    const nameEditing = useSelector(selectNameEditing);
    //console.log(nameEditing.editFormIsOpen)
    const editFormIsOpen = nameEditing.editFormIsOpen
   // console.log(editFormIsOpen)
    const user = useSelector(selectUser);
    const login = useSelector(selectLogin);
    const token =  login.token
    const store = useStore()

    useEffect(() => {
        document.title = 'Argent Bank - Profile Page';
    })

    useEffect (() => {
        fetchOrUpdateUser(store, token);
    }, [store, token])

    if (user.status === 'rejected') {
        return <span>Something went wrong</span>
    }

    const isLoading = user.status === 'void' || user.status === 'pending'

    if (isLoading) {
        return <span>Loading</span>
    }

    return !isLoading ? (
        <main className="main bg-dark">
            {editFormIsOpen
            ? <div className="header">
                <h1>Welcome back</h1>
                <form>
                    <div className='form-inputs'>
                        <div className="input-wrapper">
                            <label htmlFor="userFirstname" className="sr-only">Firstname</label>
                            <input
                                type="text"
                                id="userFirstname"
                                placeholder="Firstname"
                                defaultValue={nameEditing.firstName}
                                onChange={(e) => dispatch(setInputValueFirstName(e.target.value, e.target.id))}
                                />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="userLastname" className="sr-only">Lastname</label>
                            <input
                                type="text"
                                id="userLastname"
                                placeholder="Lastname"
                                defaultValue={nameEditing.lastName}
                                onChange={(e) => dispatch(setInputValueLastName(e.target.value, e.target.id))}
                                />
                        </div>
                    </div>
                    <div className='form-buttons'>
                        <button
                            onClick={() => {
                                const editNameData = {
                                    firstName: nameEditing.firstName,
                                    lastName: nameEditing.lastName,
                                }
                                console.log(editNameData)
                                fetchOrUpdateEditForm(store, token, editNameData)
                                if (login.status === 'resolved') {
                                    dispatch(setEditFormState())
                                }
                                }} //To be modified
                            className="form-button"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => {dispatch(setEditFormState())}} //To be modified
                            className="form-button"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
            : <div className="header">
                <h1>Welcome back<br />{user.data.firstName + " " + user.data.lastName}!</h1>
                <button
                    onClick={() => {dispatch(setEditFormState())}} //To be modified
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
            )
        )}
        </main>
    )
    : null
}

export default Profile