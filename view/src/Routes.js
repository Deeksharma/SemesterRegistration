/* here we add all routes module wise */
import fellowRoutes from './Routes/fellowshipRoutes'
const routes = [];

/* fellowship routes */
for(let i=0;i<fellowRoutes.length;i++){
    routes.push(fellowRoutes[i])
}

export default routes;