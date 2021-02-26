import useUser from '../../hooks/useUser';
import Suggestions from './Suggestions';
import User from './User';

const Sidebar = () => {
  const { user: { docId, userId, following, username, fullName } = {} } = useUser();

  return (
    <div className="pb-4">
      <User username={username} fullName={fullName} />
      <Suggestions userId={userId} />
    </div>
  );
};

export default Sidebar;
