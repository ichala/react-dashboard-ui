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
      path: 'overview',
      element: <Overview />,
    }, {
      path: 'billing',
      element: <Billing />,
    },
    {
      path: 'accounts',
      element: <Accounts />,
    },
    {
      path: 'preferences',
      element: <Preferences />,
    }, {
      path: '*',
      element: <Overview />,
    }],
  },

];

export default routesConfig;
