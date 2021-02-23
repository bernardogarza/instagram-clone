import { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import loginIphoneImage from '../assets/images/iphone-with-profile.jpg';
import loginLogo from '../assets/images/logo.png';
import * as ROUTES from '../constants/routes';
import FirebaseContext from '../context/firebase';

const Login = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [emailAdress, setEmailAdress] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const isInvalid = password === '' || emailAdress === '';

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(emailAdress, password);
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setEmailAdress('');
      setPassword('');
      setError(error.message);
    }
  };

  useEffect(() => {
    document.title = 'Login | Instagram Clone';
  }, []);

  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="flex w-3/5">
        <img src={loginIphoneImage} alt="iPhone with Instagram app" />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border mb-4">
          <h1 className="flex justify-center w-full">
            <img src={loginLogo} alt="Instagram" className="mt-2 w-6/12 mb-4" />
          </h1>
          {error && (
            <p className="mb-4 text-xs text-red-500">
              <b>{error}</b>
            </p>
          )}
          <form onSubmit={handleLogin} method="POST">
            <input
              aria-label="Enter your email adress"
              className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              type="text"
              placeholder="Email adress"
              value={emailAdress}
              onChange={({ target }) => setEmailAdress(target.value)}
            />
            <input
              aria-label="Enter your password"
              className="text-sm w-full mr-3 py-5 px-4 h-2 border rounded mb-2"
              type="password"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`${
                isInvalid ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500'
              } text-white w-full rounded h-8 font-bold`}
            >
              Log In
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
          <p className="text-sm">
            Don't have an account?{' '}
            <Link to={ROUTES.SIGN_UP} className="font-bold text-blue-700">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
