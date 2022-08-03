import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, selectLogin, selectEditNameForm  } from '../../utils/selectors'
import { fetchOrUpdateUser } from '../../utils/features/user'
import AccountSection from '../../components/AccountSection'
import EditNameForm from '../../components/EditNameForm'
import EditNameFormButton from '../../components/EditNameFormButton'
import '../../styles/Profile.css'

function Profile ({ accountData }) {
    
    const dispatch = useDispatch();
    const editNameForm = useSelector(selectEditNameForm);
    const editNameFormIsOpen = editNameForm.editNameFormIsOpen
    const user = useSelector(selectUser);
    const login = useSelector(selectLogin);
    const token =  login.token

    useEffect(() => {
        document.title = 'Argent Bank - Profile Page';
    })

    useEffect (() => {
        dispatch(fetchOrUpdateUser(token))
    }, [dispatch, token])

    if (user.status === 'rejected') {
        return <span>Something went wrong</span>
    }

    const isLoading = user.status === 'void' || user.status === 'pending'

    if (isLoading) {
        return <span>Loading</span>
    }

    return user.status === 'resolved' ? (
        <main className="main bg-dark">
            {editNameFormIsOpen
            ? <div className="header">
                <h1>Welcome back</h1>
                <EditNameForm />
            </div>
            : <div className="header">
                <h1>
                    Welcome back
                    <br />
                    {user.data.firstName + " " + user.data.lastName}!
                </h1>
                <EditNameFormButton
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