import React, { Component } from 'react'
import Header from './../core/Header'
import Sidenav from './../core/Menu'
import SettingBar from './../core/settingBar'
import Content from './../core/Content'
import Session from 'react-session-api'
class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'isAuthenticated': false
        }
        const items = {...localStorage };
        // console.log(JSON.parse(localStorage.getItem('UserDetails')));
       // console.log(items);
        const expiredate = Date.parse(items.expirationDate);
        const now = new Date();

        if (now.getTime() > expiredate) {
            Session.clear()
            localStorage.clear();
        } else {
            // console.log(items);
            if (items.isAuthentening) {
                Session.set('isAuthenticated', items.isAuthentening)
                Session.set('UserAuths', JSON.parse(localStorage.getItem('UserAuths')))
                Session.set('UserDetails', JSON.parse(localStorage.getItem('UserDetails')))
                Session.set('token', items.token)

                this.state = {
                    'isAuthenticated': items.isAuthentening
                }

            } else {
                this.props.history.push('/Logout');

            }
        }
        if (items.isAuthentening) {
            const userinfo = {...Session.get('UserDetails') }
            Session.set('username', userinfo[0].name);
            Session.set('dept_id', userinfo[0].dept_id);
            Session.set('dept_name', userinfo[0].dept_name);
            Session.set('id', userinfo[0].id);
            Session.set('name', userinfo[0].name);
            Session.set('dept_type', userinfo[0].dept_type);
            Session.set('auth_id', userinfo[0].auth_id);
            Session.set('photopath', userinfo[0].photopath);
        }

    }
    componentDidMount() {

    }
    componentWillUpdate() {
        const items = {...localStorage };
        const expiredate = Date.parse(items.expirationDate);
        const now = new Date();
        if (now.getTime() > expiredate) {
            Session.clear()
            localStorage.clear();

        } else {
            // console.log(items);
            Session.set('isAuthenticated', items.isAuthentening)
            Session.set('UserAuths', items.UserAuths)
            Session.set('UserDetails', items.UserDetails)
            Session.set('token', items.token)
            this.state = {
                'isAuthenticated': items.isAuthentening
            }
        }

        if (!this.state.isAuthenticated) {
            this.props.history.push('/Logout');
        }
    }
    render() {        
        return ( 
        <div>
            <Header / > 
            <Sidenav/>               
            <Content / >
            <SettingBar / >
            </div>
        )
    }
}

export default Layout;
