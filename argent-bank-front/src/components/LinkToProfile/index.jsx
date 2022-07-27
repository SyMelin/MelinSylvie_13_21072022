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
    } else {
        //console.log(user.data.firstName)
    }

    //const firstname = user.data?.firstName

    return  (
        <Link
            to="/profile"
            className="main-nav-item router-link"
        >
            <i className="fa fa-user-circle"></i>
        </Link>
    )
}

export default LinkToProfile