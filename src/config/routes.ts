import IRoute from '../interfaces/route';
import { Home, Profile, Notifications, NotFound } from '../pages';
import LogIn from '../pages/Auth/LogIn';
import SignUp from '../pages/Auth/SignUp';

const routes: IRoute[] = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    protected: false,
  },
  {
    path: '/profile',
    component: Profile,
    name: 'Profile',
    protected: true,
  },
  {
    path: '/notifications',
    component: Notifications,
    name: 'Notifications',
    protected: true,
  },
  {
    path: '/signup',
    component: SignUp,
    name: 'Sign Up',
    protected: false,
  },
  {
    path: '/login',
    component: LogIn,
    name: 'Login',
    protected: false,
  },
  {
    path: '*',
    component: NotFound,
    name: '404 Not Found',
    protected: false,
  },
];

export default routes;
