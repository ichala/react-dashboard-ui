import Accounts from '../Components/Users/User/Accounts';
import Billing from '../Components/Users/User/Billing';
import Overview from '../Components/Users/User/Overview';
import Preferences from '../Components/Users/User/Preferences';
import Home from '../Pages/Home/Home';
import User from '../Pages/Users/User';
import Users from '../Pages/Users/Users';

const routesConfig = [

  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/users',
    element: <Users />,
  },
  {
    path: '/users/:id',
    element: <User />,
    children: [{
      path: '/users/:id/overview',
      element: <Overview />,
    }, {
      path: '/users/:id/billing',
      element: <Billing />,
    },
    {
      path: '/users/:id/accounts',
      element: <Accounts />,
    },
    {
      path: '/users/:id/preferences',
      element: <Preferences />,
    }],
  },

];

export default routesConfig;
