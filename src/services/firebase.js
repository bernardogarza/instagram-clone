import { firebase, FieldValue } from '../lib/firebase';

export const doesUsernameExists = async (username) => {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();

  return result.docs.map((user) => user.data().length > 0);
};

export const getUserByUserId = async (userId) => {
  const result = await firebase.firestore().collection('users').where('userId', '==', userId).get();
  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));
  return user;
};

export const getUserFollowedPhotos = async (userId, followingUserIds) => {
  const result = await firebase
    .firestore()
    .collection('photos')
    .where('userId', 'in', followingUserIds)
    .get();

  const userFollowedPhotos = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  const photosWithUserDetails = await Promise.all(
    userFollowedPhotos.map(async (photo) => {
      let userLikedPhoto = false;
      if (photo.likes.includes(userId)) {
        userLikedPhoto = true;
      }
      const user = await getUserByUserId(photo.userId);
      const username = user[0].username;
      return { username, ...photo, userLikedPhoto };
    }),
  );
  return photosWithUserDetails;
};

export const getSuggestedProfiles = async (userId) => {
  const result = await firebase.firestore().collection('users').limit(10).get();
  const [{ following }] = await getUserByUserId(userId);

  return result.docs
    .map((user) => ({ ...user.data(), docId: user.id }))
    .filter((profile) => profile.userId !== userId && !following.includes(profile.userId));
};

export const updateUserFollowing = async (docId, profileId, isFollowingProfile) => {
  return firebase
    .firestore()
    .collection('users')
    .doc(docId)
    .update({
      following: isFollowingProfile
        ? FieldValue.arrayRemove(profileId)
        : FieldValue.arrayUnion(profileId),
    });
};

export const updateFollowedUserFollowers = async (docId, followingUserId, isFollowingProfile) => {
  return firebase
    .firestore()
    .collection('users')
    .doc(docId)
    .update({
      following: isFollowingProfile
        ? FieldValue.arrayRemove(followingUserId)
        : FieldValue.arrayUnion(followingUserId),
    });
};

export const getUserByUsername = async (username) => {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();

  const user = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return user.length > 0 ? user : false;
};

export const getUserIdByUsername = async (username) => {
  const result = await firebase
    .firestore()
    .collection('users')
    .where('username', '==', username)
    .get();

  const [{ userId = null }] = result.docs.map((item) => ({
    ...item.data(),
  }));

  return userId;
};

export const getUserPhotosByUsername = async (username) => {
  const userId = await getUserIdByUsername(username);
  const result = await firebase
    .firestore()
    .collection('photos')
    .where('userId', '==', userId)
    .get();

  const photos = result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));

  return photos;
};
