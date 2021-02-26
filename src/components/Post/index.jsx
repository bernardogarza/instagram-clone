import { useRef } from 'react';
import Actions from './Actions';
import AddComment from './AddComponent';
import Comments from './Comments';
import Footer from './Footer';
import Header from './Header';
import Image from './Image';

const Post = ({ content }) => {
  const commentInput = useRef(null);

  const handleFocus = () => commentInput.current.focus();

  return (
    <div className="rounded col-span-4 border bg-white mb-16">
      <Image src={content.imageSrc} caption={content.caption} />
      <Actions
        docId={content.docId}
        totalLikes={content.likes.length}
        likedPhoto={content.userLikedPhotod}
        handleFocus={handleFocus}
      />
      <Footer username={content.username} caption={content.caption} />
    </div>
  );
};

export default Post;
