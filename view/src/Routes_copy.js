import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards'
import fellowShipExtenstion from '././views/fellowship/fellowshipExtension'
import FellowshipBillJrf from '././views/fellowship/fellowshipBillJrf'
import LeaveMaster from '././views/fellowship/LeaveMaster'
import fellowEdit from '././views/fellowship/fellowEdit'

import Home from '././core/Home'
import Login from '././core/Login'
import Header from '././core/Header'
import Layout from '././core/Layout'
import FileNotFound from '././core/FileNotFound'
//import { getIsLoggedIn } from '././helpers/index.js'

/*const requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    if (getIsLoggedIn()) {
      next();
    }
    next.redirect('/');
  } else {
    next();
  }
}; */
const Routes=()=>{
    return(
        <div>

<BrowserRouter>

<Switch>
<Route path="/fellowship/fellowshipExtension" exact component={fellowShipExtenstion} />
<Route path="/fellowship/LeaveMaster" exact component={LeaveMaster} />
<Route path="/fellowship/fellow/:id" exact component={fellowEdit} />
<Route path="/fellowship/fellowshipBill/jrf" exact component={FellowshipBillJrf} />

</Switch>
</BrowserRouter>
</div>
);
};
export default Routes;
