import React, { useEffect } from 'react'
import './Login.css'
import Olx from '../../Images/Olx-img.png'
import { auth, provider } from "../Config/firebase"
import { Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";



function Login() {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.user)
    const { user } = userData;
    let history = useHistory();

    useEffect(() => {
        console.log('User', user)

    }, [user])



    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {

                dispatch({
                    type: 'UPDATE_USER',
                    user: result.user
                })
                history.push('/')
            })
            .catch((error) => alert(error.message))

    }
    return (
        <div className="login__form">
            <form>
                <img src={Olx} className="logo_img" />
                <small> ➡ Your data will be kept safe </small>
            </form>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
