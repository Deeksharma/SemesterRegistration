import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import loadable from '@loadable/component'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Component1 from './core/Component1';
const Logout = loadable(() =>
    import ('./core/Logout'));
const Layout = loadable(() =>
    import ('./core/Layout'));
const FileNotFound = loadable(() =>
    import ('./core/FileNotFound'));
//responsible for html displayed in browser
const loading = ( <
        div class = "d-flex justify-content-center" >
        <
        div class = "spinner-border"
        role = "status" >
        <
        span class = "sr-only" > Please Wait, Loading... < /span> < /
        div > <
        /div>
    )
    // Pages
const Login = loadable(() =>
    import ('./core/Component1'));
class App extends Component {

    constructor(props) {
        super(props);


    }
    componentDidMount() {

    }



    render() {
            return ( <BrowserRouter >
                    <React.Suspense fallback = { loading } >
                    <Switch >
                    <Route exact path = "/Logout"
                    name = "Logout Page"
                    render = {
                        props => < Logout {...props }
                        />} / >
                        <
                        Route exact path = "/"
                        name = "Login Page"
                        render = {
                            props => < Login {...props }
                            />} / >
                            <
                            Route path = "/"
                            name = "Home"
                            render = {
                                props => < Layout {...props }
                                />} / >
                                <
                                Route path = "*" >
                                <
                                FileNotFound / >
                                <
                                /Route> < /
                                Switch > <
                                /React.Suspense> < /
                                BrowserRouter >
                            );
                        }
                    }

                    export default App;
