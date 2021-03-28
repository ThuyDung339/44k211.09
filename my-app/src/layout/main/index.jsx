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
          <Route path="/about">
            <p>about</p>
          </Route>
          <Route path="/users">
           <p>user</p>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
          </Switch>
        </div>
    )
}
