import React, { Suspense } from 'react'
import { sessionService } from 'redux-react-session';
import { connect } from 'react-redux';
import ProtectedRoutes from '../core/ProtectedRoutes'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import Session from 'react-session-api'
// routes config
import routes from './../Routes'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
const getSessionData=()=>{
 
}

const TheContent = (props) => {
  getSessionData();
  //alert(Session.get('isAuthenticated'));
  
  console.log('auth ');
  return (
  <div>

  <div className="main-content">

  <ul className="breadcrumb breadcrumb-style ">
    <li className="breadcrumb-item">
      <h4 className="page-title m-b-0">Home</h4>
    </li>
    <li className="breadcrumb-item">
{routes.name}
    </li>
    <li className="breadcrumb-item active"></li>
  </ul>
  <Switch>
   {routes.map((route, idx) => {
    // console.log(route.name)
    return route.component && (
      <Route
        isAuthenticated={props.isAuth}
        key={idx}
        cookies={props.cookies}
        path={route.path}
        exact={route.exact}
        name={route.name}
        
        render={props => (
            <route.component {...props} />
        )} />
    )
  })}
  <Redirect from="/" to="/home" />
  </Switch>
    <section className="section">

 </section>
 </div>
  </div>
  )
}

export default TheContent
