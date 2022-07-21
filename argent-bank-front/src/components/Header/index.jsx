import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/argentBankLogo.png'
import '../../styles/Header.css'

function Header () {
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
                <div>
                    <NavLink
                        to="/login"
                        className={ ({isActive}) => "main-nav-item" + (isActive ? " router-link-exact-active" : " router-link")}>
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </NavLink>
                </div>
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