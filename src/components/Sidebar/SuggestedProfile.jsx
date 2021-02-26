import { useState } from 'react';
import { Link } from 'react-router-dom';

const SuggestedProfile = ({ userDocId, username, profileId, userId }) => {
  const [followed, setFollowed] = useState(false);

  const handleFollowUser = async () => {
    setFollowed(true);
  };
  return !followed ? (
    <div className="flex flex-row items-center align-items justify-between">
      <div className="flex items-center justify-between">
        <img
          src={`/images/avatars/${username}.jpg`}
          alt={`Follow ${username}`}
          className="rounded-full w-8 flex mr-3"
        />
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
      </div>
      <div className="flex">
        <button
          type="button"
          className="text-sm font-bold text-blue-500"
          onClick={handleFollowUser}
        >
          Follow
        </button>
      </div>
    </div>
  ) : null;
};

export default SuggestedProfile;
