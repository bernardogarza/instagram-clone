import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import instagramLogo from '../assets/images/logo.png';
import * as ROUTES from '../constants/routes';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  console.log(username);

  return (
    <div className="container flex mx-auto max-w-xs items-center h-screen">
      <div className="flex flex-col">
        <div className="flex flex-col items-center bg-white p-4 border mb-4">
          <h1 className="flex justify-center w-full">
            <img src={instagramLogo} alt="Instagram" className="mt-2 w-6/12 mb-4" />
          </h1>
          <form method="post">
            <input
              aria-label="Enter your username"
              className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
              type="text"
              placeholder="Username"
              onChange={({ target }) =>
                setUsername(
                  target.value
                    .toLowerCase()
                    .replace(/[^\w\s]/gi, '')
                    .trim(),
                )
              }
              value={username}
            />
            <input
              aria-label="Enter your full name"
              className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
              type="text"
              placeholder="Full Name"
              onChange={({ target }) => setFullName(target.value.replace(/[^\w\s]/gi, ''))}
              value={fullName}
            />
            <input
              aria-label="Enter your email"
              className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
              type="text"
              placeholder="Email"
              onChange={({ target }) => setEmailAddress(target.value.toLowerCase())}
              value={emailAddress}
            />
            <input
              aria-label="Enter your password"
              className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
              type="password"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <button type="submit" className={`bg-blue-500 text-white w-full rounded h-8 font-bold`}>
              Sign Up
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
          <p className="text-sm">
            Have an account?{' '}
            <Link to={ROUTES.LOGIN} className="font-bold text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
