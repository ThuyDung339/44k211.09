import React from 'react'
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import FormLogin from '../../components/FormLogin'
import { login as loginAction, } from '../../redux/auth/action';
import { Spin, message } from 'antd';
import 'antd/dist/antd.css';

export const Login = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.authenticate.isAuthenticated)
    const pending = useSelector(state => state.authenticate.pending)

    const login = data => {
        dispatch(loginAction(data))
    }
    if (isAuthenticated) return <Redirect to="/" />
    return (
        <div>
            {pending ?
                <Spin><FormLogin handleSubmit={login} /></Spin>
                : <FormLogin handleSubmit={login} />}
        </div>
    )
}