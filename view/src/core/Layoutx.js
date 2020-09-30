import React,{Component} from 'react'
import {BrowserRouter,Switch,Route,Redirect,withRouter} from 'react-router-dom';
import Header from './../core/Header'
import SettingBar from './../core/settingBar'
import Content from './../core/Content'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Layout=()=>{

  //  console.log(routes.length);
    return(
      <div>
        <Header/>
        <Content/>
          <SettingBar/>
        </div>
    )
}

export default Layout;
