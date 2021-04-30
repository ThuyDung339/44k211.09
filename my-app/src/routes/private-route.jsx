import React,{useEffect} from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import {getInforUser} from '../redux/user/action'
import UserPage from '../layout/index'
//import MiniDrawer from "../layout/main/index";
function PrivateRoute() {
  const dispatch = useDispatch();
  const userInfor = useSelector(state => state.user.userInfor);
  useEffect(() => {
  dispatch(getInforUser())
  }, []);
  console.log(userInfor,'nè nè')
    if (!localStorage.getItem("token")) {
      return <Redirect to={"/login"} />;
    }
    return <UserPage/>
  
}
export default PrivateRoute;

