import { Link } from 'react-router-dom';

const Header = ({ username }) => {
  return (
    <div className="flex border-b h-4 p-4 py-8">
      <div className="flex items-center">
        <Link to={`p/${username}`} className="font-bold flex items-center">
          <img
            src={`images/avatars/${username}.jpg`}
            alt={`${username} Profile`}
            className="rounded-full h-8 w-8 flex mr-3"
          />
          <p className="flex items-center">{username}</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
