import { useEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { selectUser, selectLogin, selectEditNameForm  } from '../../utils/selectors'
import { fetchOrUpdateUser } from '../../utils/features/user'
import AccountSection from '../../components/AccountSection'
//import EditNameForm from '../../components/editNameForm'
import EditNameInput from '../../components/EditNameInput'
import EditFormButton from '../../components/EditFormButton'
import '../../styles/Profile.css'

function Profile ({ accountData }) {
    
    const dispatch = useDispatch();
    const editNameForm = useSelector(selectEditNameForm);
    const editFormIsOpen = editNameForm.editFormIsOpen
    const user = useSelector(selectUser);
    const login = useSelector(selectLogin);
    const token =  login.token
    const store = useStore()

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
                        <EditFormButton
                            type="sendEditedData"
                            className="form-button"
                            children="Save"
                            store={store}
                            token={token}
                        />
                        <EditFormButton
                            type="cancelEdit"
                            className="form-button"
                            children="Cancel"
                        />
                    </div>
                </form>
            </div>
            : <div className="header">
                <h1>
                    Welcome back
                    <br />
                    {user.data.firstName + " " + user.data.lastName}!
                </h1>
                <EditFormButton
                    type="openForm"
                    className="edit-button"
                    children="Edit Name "
                />
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

/*
<button
    onClick={() => {dispatch(setEditFormState())}}
    className="edit-button"
>
    Edit Name
</button>

<button
    onClick={() => {dispatch(setEditFormState())}}
    className="form-button"
>
    Cancel
</button>

<button
    onClick={(e) => {
        e.preventDefault()
        //console.log('AVANT sendNameData ', editNameForm.editNameData)
        sendNameData(store, token)
    }}
    className="form-button"
>
    Save
</button>
*/