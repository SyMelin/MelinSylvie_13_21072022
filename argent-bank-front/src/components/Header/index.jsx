import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectLogin, selectUser } from '../../utils/selectors'
import LogButton from '../LogButton'
import logo from '../../assets/argentBankLogo.png'
import '../../styles/Header.css'

function Header () {
    const user = useSelector(selectUser);
    const login = useSelector(selectLogin);
    const userIsConnected = login.userIsConnected

    const isRejected = login.status === 'rejected' || user.status === 'rejected'
    const userIsLoading = user.status === 'void' || user.status === 'pending'
    const loginIsLoading = login.status === 'void' || login.status === 'pending'
    
    return (
        <header>
            <nav className="main-nav">
                <Link
                    to="/"
                    className="link main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                {!isRejected && userIsConnected && !loginIsLoading && !userIsLoading
                    ? <div>
                        <Link to="/profile" className="main-nav-item router-link">
                            <i className="fa fa-user-circle"></i>
                            {user.data.firstName}
                        </Link>
                        <LogButton userIsConnected={userIsConnected} />
                    </div>
                    : <div>
                        <LogButton userIsConnected={userIsConnected} />
                    </div>
                }
            </nav>
        </header>
    )
}

export default Header

//Quand utilisateur connecté :
/*
<div>
    <a class="main-nav-item" href="./user.html">
        <i class="fa fa-user-circle"></i>
        Tony
    </a>
    <a class="main-nav-item" href="./index.html">
        <i class="fa fa-sign-out"></i>
        Sign Out
    </a>
 </div>
 */