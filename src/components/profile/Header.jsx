import { useEffect, useState } from 'react';
import useUser from '../../hooks/useUser';

const Header = ({ username, photosCount, followerCount, setFollowerCount, profile }) => {
  const { user } = useUser();
  const [isFollowingProfile, setIsFollowingProfile] = useState(false);
  const activeBtnFollow = user.username && user.usename !== username;

  return (
    <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
      <div className="container flex justify-center">
        <img
          src={`/images/avatars/${username}.jpg`}
          alt={username}
          className="rounded-full h-40 w-40 flex"
        />
      </div>
      <div className="flex items-center justify-center flex-col col-span 2">
        <div className="container flex items-center">
          <p className="text-2xl mr-4">{username}</p>
          {activeBtnFollow && (
            <button
              className="bg-blue-500 font-bold text-sm rounded text-white w-20 h-8"
              type="button"
              onClick={() => console.log('button')}
            >
              {isFollowingProfile ? 'Unfollow' : 'Follow'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
