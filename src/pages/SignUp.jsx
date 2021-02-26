import { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import * as ROUTES from '../constants/routes';
import FirebaseContext from '../context/firebase';
import { doesUsernameExists } from '../services/firebase';

import instagramLogo from '../assets/images/logo.png';

const SignUp = () => {
  const history = useHistory();

  const { firebase } = useContext(FirebaseContext);

  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const isInvalid = username === '' || fullName === '' || emailAddress === '' || password === '';

  const handleSignUp = async (e) => {
    e.preventDefault();

    const usernameExists = await doesUsernameExists(username);

    if (!usernameExists.length) {
      try {
        const createdUserResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);

        await createdUserResult.user.updateProfile({
          displayName: username,
        });

        await firebase
          .firestore()
          .collection('users')
          .add({
            userId: createdUserResult.user.uid,
            username: username.toLowerCase(),
            fullName,
            emailAddress: emailAddress.toLowerCase(),
            following: ['V7gyFEgHl3gMnpfavLhwLvKFtLK2', '2'],
            followers: [],
            dateCreated: Date.now(),
          });
        history.push(ROUTES.DASHBOARD);
      } catch (error) {
        setFullName('');
        setError(error.message);
      }
    } else {
      setEmailAddress('');
      setPassword('');
      setUsername('');
      setFullName('');
      setError('That username is already taken.');
    }
  };

  useEffect(() => {
    document.title = 'Sign Up | Instagram Clone';
  }, []);

  return (
    <div className="container flex mx-auto max-w-xs items-center h-screen">
      <div className="flex flex-col">
        <div className="flex flex-col items-center bg-white p-4 border mb-4">
          <h1 className="flex justify-center w-full">
            <img src={instagramLogo} alt="Instagram" className="mt-2 w-6/12 mb-4" />
          </h1>
          {error && <p className="mb-4 text-xs text-red-500 text-center">{error}</p>}
          <form onSubmit={handleSignUp} method="post">
            <input
              aria-label="Enter your username"
              className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
              type="text"
              placeholder="Username"
              value={username}
              onChange={({ target }) =>
                setUsername(
                  target.value
                    .toLowerCase()
                    .replace(/[^\w\s]/gi, '')
                    .trim(),
                )
              }
            />
            <input
              aria-label="Enter your full name"
              className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={({ target }) => setFullName(target.value.replace(/[^\w\s]/gi, ''))}
            />
            <input
              aria-label="Enter your email"
              className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
              type="text"
              placeholder="Email"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value.toLowerCase())}
            />
            <input
              aria-label="Enter your password"
              className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
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
