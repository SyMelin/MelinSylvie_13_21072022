import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../../utils/selectors'

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
        <Link
            to="/profile"
            className="main-nav-item router-link"
        >
            <i className="fa fa-user-circle"></i>
            {user.data.firstName}
        </Link>
    )
}

export default LinkToProfile