import { LOGIN_ROUTE, TASKS_ROUTE } from './utils/consts';
import Login from './components/Login';
import Tasks from './components/Tasks';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];

export const privateRoutes = [
  {
    path: TASKS_ROUTE,
    Component: Tasks,
  },
];
