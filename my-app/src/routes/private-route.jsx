import React, {useEffect} from "react";
import { Redirect } from "react-router-dom";
import { Login } from "../containers/auth/Login";
import UserPage from '../layout/index'
import {useSelector,useDispatch } from 'react-redux'
import { getInforUser } from "../redux/user/action";
function PrivateRoute() {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.authenticate.isAuthenticated);
  const token = localStorage.getItem("token");
    useEffect(() => {
      dispatch(getInforUser())
    }, []);    
  return <>
    {isAuthenticated?
      <UserPage />
       :
      <Redirect exact
        to="/login" component={ Login}/>
    }
    </>
}
export default PrivateRoute;

