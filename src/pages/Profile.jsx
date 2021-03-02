import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import UserProfile from '../components/Profile';
import Header from '../components/Header';
import * as ROUTES from '../constants/routes';
import { getUserByUsername } from '../services/firebase';

const Profile = () => {
  const { username } = useParams();
  const [userExist, setUserExist] = useState(undefined);
  const history = useHistory();

  useEffect(() => {
    const checkUserExistsToLoadProfile = async () => {
      const doesUserExist = await getUserByUsername(username);
      if (!doesUserExist) {
        history.push(ROUTES.NOT_FOUND);
      } else {
        setUserExist(true);
      }
    };
    checkUserExistsToLoadProfile();
  }, [username, history]);

  return userExist ? (
    <div className="bg-gray">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <UserProfile username={username} />
      </div>
    </div>
  ) : null;
};

export default Profile;
