import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signInFormSignOut } from '../../utils/features/signInForm'
import { loginSignOut } from '../../utils/features/login'
import { userSignOut } from '../../utils/features/user'
import { nameEditingSignOut } from '../../utils/features/editNameForm'
import './LogButton.css'


/**
 * LogButton properties
 * 
 * @typedef { Object } LogButtonProps
 * @prop { Boolean } userIsConnected
 */
/**
 * React component: LogButton
 * 
 * @type { React.FC<LogButtonProps> }
 * @returns { React.ReactElement }
 */
function LogButton ({ userIsConnected }) {

    const dispatch = useDispatch()

    return userIsConnected ? (
        <NavLink
            to="/"
            onClick={() => {
                dispatch(signInFormSignOut())
                dispatch(loginSignOut())
                dispatch(userSignOut())
                dispatch(nameEditingSignOut())
            }}
            className={ ({isActive}) => "main-nav-item" + (isActive ? " router-link-exact-active" : " router-link")}
        >
            <i className="fa fa-sign-out"></i>
            Sign Out
        </NavLink>
        ): (
        <NavLink
            to="/login"
            className={ ({isActive}) => "main-nav-item" + (isActive ? " router-link-exact-active" : " router-link")}
        >
            <i className="fa fa-user-circle"></i>
            Sign In
        </NavLink>
        )
}

export default LogButton