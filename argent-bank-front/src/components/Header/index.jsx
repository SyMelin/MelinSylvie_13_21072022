import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectLogin, selectUser } from '../../utils/selectors'
import LinkToProfile from '../LinkToProfile'
import LogButton from '../LogButton'
import logo from '../../assets/argentBankLogo.png'
import './Header.css'

function Header () {
    const user = useSelector(selectUser)
    const isResolved = user.status === 'resolved'
    const login = useSelector(selectLogin)
    const userIsConnected = login.userIsConnected
    
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
                { userIsConnected && isResolved
                    ? <div>
                        <LinkToProfile />
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