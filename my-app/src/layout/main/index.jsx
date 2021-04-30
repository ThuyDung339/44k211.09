import React from 'react'
import {
  Route, Switch
} from "react-router-dom";
import Cuisine from '../../components/Cuisine';
import RomChat from '../../components/RomChat';
import Travel from '../../components/Travel';
import Home from '../../containers/users/Home';
import PostTravelDetail from '../../components/postTravelDetail'
import PostCuisineDetail from '../../components/postCuisineDetail'
import './../style.css'
export default function Main() {
    return (
      <div className='main'>
        <Switch>
          <Route exact path="/chat/id">
            <RomChat/>
          </Route>
          <Route exact path="/infor-user">
            <p>user</p>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/travel">
            <Travel/>
          </Route>
          <Route exact path="/cuisine">
            <Cuisine/>
          </Route>
          <Route exact path='/travel/:id' component={PostTravelDetail} />
          <Route exact path='/cuisine/:id' component={PostCuisineDetail}/>
        </Switch>
        </div>
    )
}
