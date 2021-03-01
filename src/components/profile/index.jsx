import { useEffect, useReducer } from 'react';
import { getUserByUsername, getUserPhotosByUsername } from '../../services/firebase';
import Header from './Header';
import Photos from './Photos';

const reducer = (state, newState) => ({ ...state, ...newState });
const initialState = {
  profile: {},
  photosCollection: [],
  followerCount: 0,
};
const UserProfile = ({ username }) => {
  const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  useEffect(() => {
    const getProfileInfoAndPhotos = async () => {
      const [{ ...user }] = await getUserByUsername(username);
      const photos = await getUserPhotosByUsername(username);

      dispatch({ profie: user, photosCollection: photos, followerCount: user.followers.length });
    };

    getProfileInfoAndPhotos();
  }, [username]);
  return (
    <>
      <Header
        photosCount={photosCollection ? photosCollection.length : 0}
        profile={profile}
        followerCount={followerCount}
        setFollowerCount={dispatch}
        username={username}
      />
      <Photos photos={photosCollection} />
    </>
  );
};

export default UserProfile;
