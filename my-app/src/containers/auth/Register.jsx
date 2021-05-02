import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormRegister from '../../components/FormRegister'
import { Register as registerAction,registerActionRedirect } from '../../redux/auth/action';
import { Redirect } from 'react-router-dom';
import { Login } from './Login';
export const Register = () => {
    const isRegisterSuccess=useSelector(state=>state.authenticate?.isRegisterSuccess)
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(registerActionRedirect())
    }, []);   
    const handleRegister = data => {
        dispatch(registerAction(data))
    }
    return (
        (isRegisterSuccess===false)?
        (<div>
            <FormRegister handleSubmit={handleRegister} />
         </div>) :
        (
           <Redirect exact
           to="/login" component={ Login}/>
        )
    )
}
