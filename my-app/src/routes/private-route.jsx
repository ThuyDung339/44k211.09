import React, {useEffect} from "react";
import { Redirect } from "react-router-dom";
import { Login } from "../containers/auth/Login";
import UserPage from '../layout/index'
import {useSelector } from 'react-redux'
function PrivateRoute() {
  const isAuthenticated = useSelector(state => state.authenticate.isAuthenticated);
  const token = localStorage.getItem("token");
  
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

