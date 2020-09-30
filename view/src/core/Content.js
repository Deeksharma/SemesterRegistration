import React, { Suspense, Component } from 'react'
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import Session from 'react-session-api'
import Subheader from '../core/Subheader'
// routes config
import routes from './../Routes'


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
                'isAuthenticated': Session.get('isAuthenticated'),
            }
            //   console.log(Session.items());
    }
    componentDidMount() {

    }
    componentWillUpdate() {
      //    this.setState({'isAuthenticated': Session.get('isAuthenticated')})
    }

    render(props) {
        return ( 
        <div>       
             <div className = "main-content">   
             <Subheader pathname={this.props.location.pathname}/>
            <Switch> {
                routes.map((route, idx) => {
                   //  console.log(route.name)
                    return route.component && ( <
                        Route key = { idx }

                        path = { route.path }
                        exact = { route.exact }
                        name = { route.name }

                        render = {
                            props => (this.state.isAuthenticated ?
                                <
                                route.component {...props }
                                /> :  <Redirect to='/Logouts
                                ' />
                            )
                        }
                        />
                    )
                })
            } <
            Redirect from = "/" to = "/home" / >
            </Switch> 
            
            <section className = "section" >
               
            </section>
            </div> 
            </div>
        )

    }
}
export default withRouter(Content)
