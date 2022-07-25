import React from 'react'
import { NavLink } from 'react-router-dom'

function LogButton ({ userIsConnected }) {
    return userIsConnected ? (
        <NavLink
            to="/"
            //onClick={() => dispatch(connectUser())}
            className={ ({isActive}) => "main-nav-item" + (isActive ? " router-link-exact-active" : " router-link")}>
            <i className="fa fa-sign-out"></i>
            Sign Out
        </NavLink>
        ): (
        <NavLink
            to="/login"
            className={ ({isActive}) => "main-nav-item" + (isActive ? " router-link-exact-active" : " router-link")}>
            <i className="fa fa-user-circle"></i>
            Sign In
        </NavLink>
        )
}

export default LogButton