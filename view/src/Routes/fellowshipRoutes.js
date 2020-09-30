import FellowShipExtenstion from './../views/fellowship/fellowshipExtension'
import FellowshipBillJrf from './../views/fellowship/fellowshipBillJrf'
import LeaveMaster from './../views/fellowship/LeaveMaster'
import FellowEdit from './../views/fellowship/fellowEdit'
import Dashboard from './../core/Home'


const fellowshipRoutes = [
    
    { path: '/', exact: true, name: 'Login' },
    { path: '/home', name: 'Dashboard', component: Dashboard, exact: true },
    { path: '/fellowship/fellowshipExtension', name: 'FellowShipExtenstion', component: FellowShipExtenstion, exact: true },
    { path: '/fellowship/LeaveMaster', name: 'LeaveMaster', component: LeaveMaster, exact: true },
    { path: '/fellowship/fellow/:id', name: 'fellowEdit', component: FellowEdit, exact: true },
    { path: '/fellowship/fellowshipBill/jrf', name: 'FellowshipBillJrf', component: FellowshipBillJrf, exact: true },

];
export default fellowshipRoutes