import React from 'react';
import {Link,Redirect  } from 'react-router-dom';
import Sidenav from './../core/Menu'
import { instanceOf } from 'prop-types';
import { connect } from 'react-redux';
import { useCookies } from 'react-cookie';

const LoadJS=()=>{
alert();
  const script = document.createElement("script");
     script.src = "http://localhost:3000/assets/js/scripts.js";
     script.async = true;
     document.body.appendChild(script);
};


const Header=(props)=>{

const [cookies, setCookie] = useCookies(['set']);
 

    return (
  <div>
    {LoadJS()}
    <div id="app">
    <div className="main-wrapper main-wrapper-1">
  <div className="navbar-bg"></div>
      <nav className="navbar navbar-expand-lg main-navbar sticky">
        <div className="form-inline mr-auto">
          <ul className="navbar-nav mr-3">
            <li><a href="#" data-toggle="sidebar" className="nav-link nav-link-lg
									collapse-btn"> <i data-feather="menu"></i></a></li>
            <li>
              <form className="form-inline mr-auto">
                <div className="search-element">
                  <input className="form-control" type="search" placeholder="Search" aria-label="Search" data-width="200"/>
                  <button className="btn" type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </form>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav navbar-right">
          <li><a href="#" className="nav-link nav-link-lg fullscreen-btn">
              <i data-feather="maximize"></i>
            </a></li>
          <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown"
              className="nav-link nav-link-lg message-toggle"><i data-feather="mail" className="mailAnim"></i>
              <span className="badge headerBadge1">
              </span> </a>
            <div className="dropdown-menu dropdown-list dropdown-menu-right pullDown">
              <div className="dropdown-header">
                Messages
                <div className="float-right">
                  <a href="#">Mark All As Read</a>
                </div>
              </div>
              <div className="dropdown-list-content dropdown-list-message">
                <a href="#" className="dropdown-item"> <span className="dropdown-item-avatar
											text-white"> <img alt="image" src="assets/img/users/user-1.png" className="rounded-circle"/>
                  </span> <span className="dropdown-item-desc"> <span className="message-user">John
                      Deo</span>
                    <span className="time messege-text">Please check your mail !!</span>
                    <span className="time">2 Min Ago</span>
                  </span>
                </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-avatar text-white">
                    <img alt="image" src="assets/img/users/user-2.png" className="rounded-circle"/>
                  </span> <span className="dropdown-item-desc"> <span className="message-user">Sarah
                      Smith</span> <span className="time messege-text">Request for leave
                      application</span>
                    <span className="time">5 Min Ago</span>
                  </span>
                </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-avatar text-white">
                    <img alt="image" src="assets/img/users/user-5.png" className="rounded-circle"/>
                  </span> <span className="dropdown-item-desc"> <span className="message-user">Jacob
                      Ryan</span> <span className="time messege-text">Your payment invoice is
                      generated.</span> <span className="time">12 Min Ago</span>
                  </span>
                </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-avatar text-white">
                    <img alt="image" src="assets/img/users/user-4.png" className="rounded-circle"/>
                  </span> <span className="dropdown-item-desc"> <span className="message-user">Lina
                      Smith</span> <span className="time messege-text">hii John, I have upload
                      doc
                      related to task.</span> <span className="time">30
                      Min Ago</span>
                  </span>
                </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-avatar text-white">
                    <img alt="image" src="assets/img/users/user-3.png" className="rounded-circle"/>
                  </span> <span className="dropdown-item-desc"> <span className="message-user">Jalpa
                      Joshi</span> <span className="time messege-text">Please do as specify.
                      Let me
                      know if you have any query.</span> <span className="time">1
                      Days Ago</span>
                  </span>
                </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-avatar text-white">
                    <img alt="image" src="assets/img/users/user-2.png" className="rounded-circle"/>
                  </span> <span className="dropdown-item-desc"> <span className="message-user">Sarah
                      Smith</span> <span className="time messege-text">Client Requirements</span>
                    <span className="time">2 Days Ago</span>
                  </span>
                </a>
              </div>
              <div className="dropdown-footer text-center">
                <a href="#">View All <i className="fas fa-chevron-right"></i></a>
              </div>
            </div>
          </li>
          <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown"
              className="nav-link notification-toggle nav-link-lg"><i data-feather="bell"></i>
            </a>
            <div className="dropdown-menu dropdown-list dropdown-menu-right pullDown">
              <div className="dropdown-header">
                Notifications
                <div className="float-right">
                  <a href="#">Mark All As Read</a>
                </div>
              </div>
              <div className="dropdown-list-content dropdown-list-icons">
                <a href="#" className="dropdown-item dropdown-item-unread"> <span
                    className="dropdown-item-icon l-bg-orange text-white"> <i className="far fa-envelope"></i>
                  </span> <span className="dropdown-item-desc"> You got new mail, please check. <span className="time">2 Min
                      Ago</span>
                  </span>
                </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-icon l-bg-purple text-white"> <i
                      className="fas fa-bell"></i>
                  </span> <span className="dropdown-item-desc"> Meeting with <b>John Deo</b> and <b>Sarah Smith </b> at
                    10:30 am <span className="time">10 Hours
                      Ago</span>
                  </span>
                </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-icon l-bg-green text-white"> <i
                      className="far fa-check-circle"></i>
                  </span> <span className="dropdown-item-desc"> Sidebar Bug is fixed by Kevin <span className="time">12
                      Hours
                      Ago</span>
                  </span>
                </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-icon bg-danger text-white"> <i
                      className="fas fa-exclamation-triangle"></i>
                  </span> <span className="dropdown-item-desc"> Low disk space error!!!. <span className="time">17 Hours
                      Ago</span>
                  </span>
                </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-icon bg-info text-white"> <i className="fas
												fa-bell"></i>
                  </span> <span className="dropdown-item-desc"> Welcome to Gati
                    template! <span className="time">Yesterday</span>
                  </span>
                </a>
              </div>
              <div className="dropdown-footer text-center">
                <a href="#">View All <i className="fas fa-chevron-right"></i></a>
              </div>
            </div>
          </li>
          <li className="dropdown"><a href="#" data-toggle="dropdown"
              className="nav-link dropdown-toggle nav-link-lg nav-link-user"> <img alt="image" src={window.location.origin +'/assets/img/user.png'}
                className="user-img-radious-style"/> <span className="d-sm-none d-lg-inline-block"></span></a>
            <div className="dropdown-menu dropdown-menu-right pullDown">
              <div className="dropdown-title">Hello {cookies.name}</div>
              <a href="profile.html" className="dropdown-item has-icon"> <i className="far
										fa-user"></i> Profile
              </a> <a href="timeline.html" className="dropdown-item has-icon"> <i className="fas fa-bolt"></i>
                Activities
              </a> <a href="#" className="dropdown-item has-icon"> <i className="fas fa-cog"></i>
                Settings
              </a>
              <div className="dropdown-divider"></div>
              <Link to="/Logout" className="dropdown-item has-icon text-danger"> <i className="fas fa-sign-out-alt"></i>
                Logout
              </Link>
            </div>
          </li>
        </ul>
      </nav>
         <Sidenav/>
         </div>

</div>
</div>
)
};

const mapStateToProps = state => {
  console.log('auth '+state.auth.token);
  return {
      token: state.auth.token !== null,
      isAuthenticated: state.auth.isAuthentening !== false
  };
};
export default connect( mapStateToProps )(Header);
