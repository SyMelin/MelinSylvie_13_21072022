import { useEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { selectUser, selectLogin  } from '../../utils/selectors'
//import { editUserName } from '../../store'
import { fetchOrUpdateUser } from '../../utils/features/user'
import Account from '../../sections/Account'
import '../../styles/Profile.css'

function Profile ({ accountData }) {
    const userFirstname = "Tony"
    const userLastname = "Jarvis"
    const userName = userFirstname + " " + userLastname

    /*
    const dispatch = useDispatch();
    const editingUserName = useSelector(state => state.editingUserName);
    */

    const editingUserName = false

    const user = useSelector(selectUser);
    const userData = user.data
    const login = useSelector(selectLogin);
    const token =  login.token
    const store = useStore()

    useEffect(() => {
        document.title = 'Argent Bank - Profile Page';
    })

    useEffect (() => {
        fetchOrUpdateUser(store, token);
    }, [store, token])

    console.log('test', user.data)

    if (user.status === 'rejected') {
        return <span>Something went wrong</span>
    }

    //console.log('est2', user.date.firstName)


    return (
        <main className="main bg-dark">
            {editingUserName
            ? <div className="header">
                <h1>Welcome back</h1>
                <form>
                    <div className='form-inputs'>
                        <div className="input-wrapper">
                            <label htmlFor="userFirstname" className="sr-only">Firstname</label>
                            <input type="text" id="userFirstname" placeholder="Firstname"/>
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="userLastname" className="sr-only">Lastname</label>
                            <input type="text" id="userLastname" placeholder="Lastname"/>
                        </div>
                    </div>
                    <div className='form-buttons'>
                        <button
                           // onClick={() => {dispatch(editUserName())}} //To be modified
                            className="form-button"
                        >
                            Save
                        </button>
                        <button
                           // onClick={() => {dispatch(editUserName())}} //To be modified
                            className="form-button"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
            : <div className="header">
                <h1>Welcome back<br />!</h1>
                <button
                  //  onClick={() => {dispatch(editUserName())}} //To be modified
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