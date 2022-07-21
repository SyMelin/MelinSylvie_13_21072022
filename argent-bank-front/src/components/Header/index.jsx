import logo from '../../assets/argentBankLogo.png'
import '../../styles/Header.css'

function Header () {
    return (
        <header>
            <nav className="main-nav">
                <a className="main-nav-logo" href="./index.html">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </a>
                <div>
                    <a className="main-nav-item" href="./sign-in.html">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </a>
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