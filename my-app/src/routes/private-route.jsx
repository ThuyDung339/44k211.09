import React from "react";
import { Redirect } from "react-router-dom";
import UserPage from '../layout/index'
//import MiniDrawer from "../layout/main/index";
class PrivateRoute extends React.Component {
  render() {
    if (!localStorage.getItem("token")) {
      return <Redirect to={"/login"} />;
    }
    return <UserPage/>
  }
}
export default PrivateRoute;