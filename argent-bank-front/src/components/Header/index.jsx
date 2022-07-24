import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { selectLogin } from '../../utils/selectors'
//import { connectUser } from '../../store'
import logo from '../../assets/argentBankLogo.png'
import '../../styles/Header.css'

function Header () {
    const userFirstname = 'Tony'
    const dispatch = useDispatch()
   // const store = useStore()
    const login = useSelector(selectLogin);
   // console.log(store.getState().login.userIsConnected)
   // const userIsConnected = useSelector(state => state.userIsConnected)
   const userIsConnected = login.userIsConnected
   //console.log("userIsConnected", userIsConnected)

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
                {userIsConnected
                ? <div>
                    <Link to="/profile" className="main-nav-item router-link">
                        <i className="fa fa-user-circle"></i>
                        {userFirstname}
                    </Link>
                    <NavLink
                        to="/"
                        //onClick={() => dispatch(connectUser())}
                        className={ ({isActive}) => "main-nav-item" + (isActive ? " router-link-exact-active" : " router-link")}>
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </NavLink>
                </div>
                : <div>
                    <NavLink
                        to="/login"
                        className={ ({isActive}) => "main-nav-item" + (isActive ? " router-link-exact-active" : " router-link")}>
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
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