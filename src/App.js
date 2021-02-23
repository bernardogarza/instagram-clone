import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

/*
**EXPERIMENTAL**
> Suspense: it's a component that waits for code to load, it's an easy way to add a 'loading' component.
********************************************************************************************************
> lazy: it's a function that lets you render a dynamic import as a regular component. It has to be rendered
        inside a Suspense component
*/

import * as ROUTES from './constants/routes';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Profile = lazy(() => import('./pages/Profile'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route path={ROUTES.PROFILE} component={Profile} />
          <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
          <Route path={ROUTES.NOT_FOUND} component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
