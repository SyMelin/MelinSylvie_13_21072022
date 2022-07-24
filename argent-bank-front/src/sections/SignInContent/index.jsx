import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector, useStore } from 'react-redux'
//import { connectUser } from '../../store'
import { fetchOrUpdateLogin } from '../../utils/features/login'
import { selectLogin } from '../../utils/selectors'

import '../../styles/SignInContent.css'

function SignInContent () {
   // const dispatch = useDispatch()
    const navigate = useNavigate()

    const login = useSelector(selectLogin);

    const store = useStore()
/*
    useEffect (() => {
        fetchOrUpdateLogin(store);
    }, [store])
*/
    



    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
                <div className="input-wrapper">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div className="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
            </form>
                <button
                    onClick={() => {
                        fetchOrUpdateLogin(store);
                       // return
                        //dispatch(connectUser()) //To be modified
                        return navigate("/profile", {replace:true})
                    }}
                    className="sign-in-button"
                    >
                        Sign In
                </button>
            
            
        </section>
    )
}

export default SignInContent