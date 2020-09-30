import Session from 'react-session-api'
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
class ProtectedRoute extends Component {
    constructor(props) {
        super(props);
        this.state={
            isAuthenticated:false
        }

       }
    componentDidMount(){
        
    const items = { ...localStorage };
    //alert(items);
    const expiredate=Date.parse(items.expirationDate);
   // console.log(items);
    const now = new Date();
   // console.log(now.getTime());
    if (now.getTime() > expiredate) {
      
      localStorage.clear();
      
    }else{
      Session.set('isAuthenticated', items.isAuthentening)
      Session.set('UserAuths', items.UserAuths)
      Session.set('UserDetails', items.UserDetails)
      Session.set('token', items.token)
     this.setState({'isAuthenticated':items.isAuthentening})
    }
}


    render() {
      const { component: Component, ...props } = this.props
  
      return (
        <Route 
          {...props} 
          render={props => (
            this.state.isAuthenticated ?
              <Component {...props} /> :
              <Redirect to='/' />
          )} 
        />
      )
    }
  }

  export default ProtectedRoute;