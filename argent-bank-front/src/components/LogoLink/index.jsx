import { Link } from 'react-router-dom'
import logo from '../../assets/argentBankLogo.png'
import './LogoLink.css'

function LogoLink () {
    return (
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
    )
}

export default LogoLink