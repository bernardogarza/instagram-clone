import { useEffect, useState } from 'react';
import Header from './Header';
import Photos from './Photos';

const UserProfile = ({ username }) => {
  return (
    <>
      <Header />
      <Photos />
    </>
  );
};

export default UserProfile;
