import React, { Component } from 'react';
import axios from 'axios'
import { API } from './../config';
import Session from 'react-session-api'
class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            username: '',
            password: '',
            showMsg: false,
            loading: false
        }
        Session.clear();
        localStorage.clear();
    }
    componentDidMount(){
        axios({
            method: 'post',
            url: `${API}/signout`,
          //  timeout: 4000,    // 4 seconds timeout
            headers: {
            Accepts:'application/json',
              "Content-Type":"application/json",
              Authorization: 'Bearer ' +Session.get('token')
             }
          })
          .then(response => {
         
          })
          .catch(error => console.error('timeout exceeded'))
    }



    render() {
        return ( <
            div >
            <
            div id = "app" >
            <
            section className = "section" >
            <
            div className = "container mt-5" >
            <
            div className = "page-error" >
            <
            div className = "page-inner" >
            <
            h1 > Thank You < /h1> <
            div className = "page-description" >
            Logout Successfully.. <
            /div> <
            div className = "page-search" >
            <
            form >
            <
            div className = "form-group floating-addon floating-addon-not-append" >
            <
            div className = "input-group" >
            <
            div className = "input-group-prepend" >
            <
            div className = "input-group-text" >

            <
            /div> < /
            div > <
            /div> < /
            div > <
            /form> <
            div className = "mt-3" >
            <
            a href = "/" > Login Again < /a> < /
            div > <
            /div> < /
            div > <
            /div> < /
            div > <
            /section> < /
            div > <
            /div>
        )
    }
}

export default Logout;