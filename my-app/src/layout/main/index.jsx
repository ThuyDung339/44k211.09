import React from 'react'
import {
  Route, Switch
} from "react-router-dom";
import Home from '../../containers/users/Home'
import './../style.css'
export default function Main() {
    return (
      <div className='main'>
        <Switch>
          <Route exact path="/about">
            <p>about</p>
          </Route>
          <Route exact path="/infor-user">
           <p>user</p>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          </Switch>
        </div>
    )
}
