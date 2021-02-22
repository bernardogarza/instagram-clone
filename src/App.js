import { lazy, Suspense } from 'react';

/*
**EXPERIMENTAL**
> Suspense: it's a component that waits for code to load, it's an easy way to add a 'loading' component.
********************************************************************************************************
> lazy: it's a function that lets you render a dynamic import as a regular component. It has to be rendered
        inside a Suspense component
*/

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Profile = lazy(() => import('./pages/Profile'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <p>Our content</p>
    </Suspense>
  );
}

export default App;
