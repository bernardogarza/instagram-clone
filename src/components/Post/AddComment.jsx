import { useContext, useState } from 'react';
import FirebaseContext from '../../context/firebase';
import UserContext from '../../context/user';

const AddComment = ({ docId, comments, setComments, commentInput }) => {
  const [comment, setComment] = useState('');

  const { firebase, FieldValue } = useContext(FirebaseContext);

  const {
    user: { displayName },
  } = useContext(UserContext);

  const handleSubmitComment = (event) => {
    event.preventDefault();

    setComments([{ displayName, comment }, ...comments]);
    setComment('');

    return firebase
      .firestore()
      .collection('photos')
      .doc(docId)
      .update({
        comments: FieldValue.arrayUnion({ displayName, comment }),
      });
  };

  return (
    <div className="border-t border-gray">
      <form
        className="flex w-full justify-between border-gray pl-0 pr-5"
        onSubmit={(e) => (comment.length >= 3 ? handleSubmitComment(e) : e.preventDefault())}
        method="POST"
      >
        <input
          aria-label="Add a comment"
          autoComplete="off"
          className="text-sm text-gray w-full mr-3 py-5 px-4"
          type="text"
          name="add-comment"
          placeholder="Add a comment..."
          value={comment}
          onChange={({ target }) => setComment(target.value)}
          ref={commentInput}
        />
        <button
          type="button"
          disabled={comment.length < 3}
          className={`text-sm font-bold text-blue-500 ${!comment && 'opacity-25 cursor-default'}`}
          onClick={handleSubmitComment}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default AddComment;
