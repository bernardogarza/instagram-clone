import { Link } from 'react-router-dom';
import loginIphoneImage from '../assets/images/iphone-with-profile.jpg';
import loginLogo from '../assets/images/logo.png';
import * as ROUTES from '../constants/routes';

const Login = () => {
  return (
    <div className="container flex mx-auto max-w-screen-md items-center h-screen">
      <div className="login-image flex w-3/5">
        <img src={loginIphoneImage} alt="iPhone with Instagram app" />
      </div>
      <div className="login-section flex flex-col w-2/5">
        <div className="login-info">
          <img src={loginLogo} alt="Instagram" />
          <input type="email" name="login-email" id="login-email" placeholder="Email adress" />
          <input type="password" name="login-password" id="login-password" placeholder="Password" />
          <button>Log In</button>
        </div>
        <div className="signInLink">
          <p>
            Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
