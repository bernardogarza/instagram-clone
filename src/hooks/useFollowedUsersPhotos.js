import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';
import { getUserByUserId, getUserFollowedPhotos } from '../services/firebase';

const useFollowedUsersPhotos = () => {
  const [photos, setPhotos] = useState(null);

  const {
    user: { uid: userId = '' },
  } = useContext(UserContext);

  useEffect(() => {
    const getTimelinePhotos = async () => {
      const followingUserIds = await getUserByUserId(userId);

      if (followingUserIds && followingUserIds[0].following.length > 0) {
        const followedUserPhotos = await getUserFollowedPhotos(
          userId,
          followingUserIds[0].following,
        );

        followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
        setPhotos(followedUserPhotos);
      }
    };

    getTimelinePhotos();
  }, [userId]);

  return { photos };
};

export default useFollowedUsersPhotos;
