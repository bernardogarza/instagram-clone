import useUser from '../../hooks/useUser';

const Sidebar = () => {
  const { user: { docId, userId, following, username, fullName } = {} } = useUser();
  return (
    <div>
      <p>Sidebar</p>
    </div>
  );
};

export default Sidebar;
