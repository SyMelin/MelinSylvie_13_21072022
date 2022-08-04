import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../../utils/selectors'
import './LinkToProfile.css'


/**
 * React component: LinkToProfile
 * 
 * @type { React.FC }
 * @returns { React.ReactElement }
 */

function LinkToProfile () {
    const user = useSelector(selectUser)

    if (user.status === 'rejected') {
        return
    }

    const isLoading = user.status === 'void' || user.status === 'pending'

    if (isLoading) {
        return
    }

    return  (
        <NavLink
            to="/profile"
            className={ ({isActive}) => "main-nav-item" + (isActive ? " router-link-exact-active" : " router-link")}
        >
            <i className="fa fa-user-circle"></i>
            {user.data.firstName}
        </NavLink>
    )
}

export default LinkToProfile