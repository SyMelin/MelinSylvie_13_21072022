import { useEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { selectUser, selectLogin, selectEditNameForm  } from '../../utils/selectors'
import { fetchOrUpdateUser, fetchOrUpdateUserNameData } from '../../utils/features/user'
import { setEditFormState } from '../../utils/features/editNameForm'
import AccountSection from '../../components/AccountSection'
import EditNameInput from '../../components/EditNameInput'
import '../../styles/Profile.css'

function Profile ({ accountData }) {
    
    const dispatch = useDispatch();
    const nameEditing = useSelector(selectEditNameForm);
    const editFormIsOpen = nameEditing.editFormIsOpen
    const user = useSelector(selectUser);
    const login = useSelector(selectLogin);
    const token =  login.token
    //const store = useStore()

    useEffect(() => {
        document.title = 'Argent Bank - Profile Page';
    })

    useEffect (() => {
        dispatch(fetchOrUpdateUser(token))
    }, [dispatch, token])

    if (user.status === 'rejected') {
        return
    }

    const isLoading = user.status === 'void' || user.status === 'pending'

    if (isLoading) {
        return <span>Loading</span>
    }

    return  user.status === 'resolved' ? (
        <main className="main bg-dark">
            {editFormIsOpen
            ? <div className="header">
                <h1>Welcome back</h1>
                <form>
                    <div className='form-inputs'>
                        <EditNameInput id={'firstname'} />
                        <EditNameInput id={'lastname'} />
                    </div>
                    <div className='form-buttons'>
                        <button
                            onClick={(e) => {
                                e.preventDefault()
                                const editNameData = {
                                    firstName: nameEditing.firstName,
                                    lastName: nameEditing.lastName,
                                }
                                console.log('editNameData', editNameData)
                                dispatch(fetchOrUpdateUserNameData(token, editNameData))
                                dispatch(setEditFormState())
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
                <AccountSection
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