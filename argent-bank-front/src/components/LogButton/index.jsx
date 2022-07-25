import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signInSignOut } from '../../utils/features/signInInput'
import { loginSignOut } from '../../utils/features/login'
import { userSignOut } from '../../utils/features/user'

function LogButton ({ userIsConnected }) {

    const dispatch = useDispatch()

    return userIsConnected ? (
        <NavLink
            to="/"
            onClick={() => {
                dispatch(signInSignOut())
                dispatch(loginSignOut())
                dispatch(userSignOut())
            }}
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