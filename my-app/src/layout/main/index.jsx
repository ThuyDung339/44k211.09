import React from 'react'
import {
  Route, Switch
} from "react-router-dom";
import Home from '../../containers/users/Home'
import InforUser from '../../components/InforUser'
import './../style.css'
export default function Main() {
    return (
      <div className='main'>
        <Switch>
          <Route path="/about">
            <p>about</p>
          </Route>
          <Route exact path="/infor-user">
           <InforUser />
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          </Switch>
        </div>
    )
}
