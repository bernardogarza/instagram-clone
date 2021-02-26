import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddComment from './AddComment';

const Comments = ({ docId, comments: allComments, posted, commentInput }) => {
  const [comments, Setcomments] = useState(allComments);
  return (
    <div>
      <p>Comments</p>
    </div>
  );
};

export default Comments;
