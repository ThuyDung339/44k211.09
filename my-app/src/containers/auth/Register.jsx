import React from 'react'
import { useDispatch } from 'react-redux'
import FormRegister from '../../components/FormRegister'
import { Register as registerAction, } from '../../redux/auth/action';
export const Register = () => {
   const dispatch = useDispatch();
    const Register = data => {
        dispatch(registerAction(data))
    }
    return (
        <div>
            <FormRegister handleSubmit={Register} />
        </div>
    )
}
