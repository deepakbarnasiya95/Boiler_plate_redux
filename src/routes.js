import Home from "./views/Home";
import Dashboard from "./views/Dashboard";

const routes = [
	{
	    path: '/',
	    exact: true,
	    component: Home
  	},
  	{
	    path: '/dashboard',
	    exact: true,
	    component: Dashboard
  	}
]

export default routes;